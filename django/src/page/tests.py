import json
from unittest import TestCase

from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from src.page.models import Skills, Socials, Project


class SkillsAPITests(APITestCase):

    def setUp(self) -> None:
        self.client = APIClient()
        self.list_url = reverse('skill-list')
        self.detail_url = reverse('skill-detail', args=[2])
        Skills.objects.create(title='Python', progress=100)

    def test_create_skill(self):
        data = {
            "title": "Java",
            "progress": 90,
        }
        response = self.client.post(self.list_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Skills.objects.count(), 2)
        self.assertEqual(Skills.objects.all()[1].title, "Java")

    def test_list_skills(self):
        response = self.client.get(self.list_url)
        self.assertIs(type(json.loads(response.content)), list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_skill(self):
        response = self.client.get(self.list_url, args=[1])
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Skills.objects.first().title, "Python")

    def test_delete_skill(self):
        self.test_create_skill()
        res = self.client.delete(self.detail_url)
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)
        self.assertTrue(Skills.objects.count(), 1)
        self.assertRaises(Exception, Skills.objects.get(title="Java"))


class SkillsModelTest(TestCase):

    @classmethod
    def setUpClass(cls) -> None:
        small_gif = (
            b'\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\x00\x00\x00\x21\xf9\x04'
            b'\x01\x0a\x00\x01\x00\x2c\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02'
            b'\x02\x4c\x01\x00\x3b'
        )
        cls.skill = Skills.objects.create(title="Test", progress=90, image=SimpleUploadedFile('small.gif',
                                                                                              small_gif,
                                                                                              content_type='image/gif'))

    def test_title_validations(self):
        skill = Skills.objects.get(id=self.skill.id)

        # Title Label
        field_label = skill._meta.get_field("title").verbose_name
        self.assertEqual(field_label, "title")

        # Max Length of title
        max_length = skill._meta.get_field("title").max_length
        self.assertEqual(max_length, 80)

        # Progress Check
        field_label = Skills._meta.get_field("progress").verbose_name
        self.assertEqual(field_label, "progress")
        self.assertTrue(type(skill.progress), int)

        # image field is not callable if null
        self.assertRaises(TypeError, skill.image)

        # image field check
        self.assertEqual(skill._meta.get_field("image").verbose_name, "image")
        self.assertEqual(type(skill.image.name), str)


def create_socials(title, url):
    return Socials.objects.create(title=title, url=url)


def create_skills(title, progress, image=None):
    return Skills.objects.create(title=title, progress=progress, image=image)


def create_project(title, summary, url):
    return Project.objects.create(title=title, summary=summary, build_url=url)


class ProjectsTests(TestCase):
    def setUp(self) -> None:
        self.client = APIClient()
        self.root = reverse("project-list")
        self.skill = create_skills("test", 90)
        self.project = create_project("testProject", "random text for summary", "https://www.github.com")
        self.detail = reverse('project-detail', args=[2])

    def test_projects_inherit_skills(self):
        skill1 = create_skills("test1", 20)
        skill2 = create_skills("test2", 30)

        self.project.technologies.add(skill1.id)
        self.project.technologies.add(skill2.id)
        self.project.save()
        self.assertIn(skill1, self.project.technologies.all())
        self.assertEqual(skill1.title, self.project.technologies.all()[0].title)
        self.assertNotIn(self.skill, self.project.technologies.all())

    def test_model_validations(self):
        self.assertIsNotNone(self.project.title)
        self.assertIsNotNone(self.project.build_url)
        self.assertLess(len(self.project.title), self.project._meta.get_field("title").max_length)
        self.assertLess(len(self.project.build_url), self.project._meta.get_field("build_url").max_length)

    def test_create_project(self):
        data = {
            "title": "testProject1",
            "summary": "testSummary",
            "build_url": "https://www.url.com",
        }
        response = self.client.post(self.root, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Project.objects.all()[1].title, "testProject1")

    def test_list_projects(self):
        response = self.client.get(self.root)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_project(self):
        response = self.client.get(self.root, args=[1])
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Project.objects.first().title, "testProject")

    def test_delete_project(self):
        self.test_create_project()
        res = self.client.delete(self.detail)
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)
        self.assertRaises(Exception, Project.objects.filter(title="testProject1"))

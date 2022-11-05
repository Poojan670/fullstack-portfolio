from django.db import models
from django.utils.translation import gettext as _
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.postgres.fields import ArrayField


class DateTimeModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Socials(DateTimeModel):
    title = models.CharField(max_length=50, help_text="Social media Title shown in the page")
    url = models.URLField(help_text="URL for the social media images")

    def __str__(self):
        return f"Social : {self.title}"


class PageInfo(DateTimeModel):
    name = models.CharField(max_length=100, unique=True,
                            help_text="Name should be of max 100 characters, includes first and last name")
    role = models.CharField(max_length=30, help_text="Job role of the user")
    image = models.ImageField(upload_to='images', help_text="Header Image of the user", blank=True)
    profile_pic = models.ImageField(upload_to='images', help_text="Profile picture of the user", blank=True)
    background_info = models.TextField(help_text="Background information of the user")
    phone_no = models.CharField(max_length=15, unique=True, help_text="Phone number of the user, "
                                                                      "should be max 15 characters")
    email = models.EmailField(max_length=50, unique=True, help_text="Email of the user, can be of max 50 characters")
    address = models.CharField(max_length=255, blank=True, help_text="Address of the user")
    social = models.ManyToManyField(Socials, related_name='social_socials')

    class Meta:
        verbose_name = _('PageInfo')
        verbose_name_plural = _('PageInfos')

    def __str__(self):
        return self.name


class Experience(DateTimeModel):
    job_title = models.CharField(max_length=100,
                                 help_text="Title of the job experienced, has max length of 100 characters")
    company_image = models.ImageField(upload_to='images', blank=True, help_text="Company's Image of the respective job")
    company_info = models.TextField(help_text="Text information of the company")
    date_started = models.DateField()
    date_ended = models.DateField()
    is_working = models.BooleanField(default=False)
    technologies = models.ManyToManyField('Skills', related_name='skills')
    points = ArrayField(models.CharField(max_length=255))

    def __str__(self):
        return self.job_title


class Skills(DateTimeModel):
    title = models.CharField(max_length=80, help_text="Title of the skill")
    progress = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], default=0,
                                           help_text="Skill Progress, can be from 0 to 100")
    image = models.ImageField(upload_to='images', help_text="Skills Image", blank=True)

    class Meta:
        verbose_name = _('Skill')
        verbose_name_plural = _('Skills')

    def __str__(self):
        return self.title


class Project(DateTimeModel):
    title = models.CharField(max_length=255, help_text="Project Title can have upto 255 characters")
    image = models.ImageField(upload_to='images', blank=True, help_text="Image of the project shown in case study")
    summary = models.TextField(help_text="Project Summary")
    technologies = models.ManyToManyField(Skills, related_name="project_tech")
    build_url = models.URLField(max_length=255, blank=True, help_text="Github/Live demo url of the project")

    def __str__(self):
        return self.title

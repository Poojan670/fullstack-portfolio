from django.urls import path
from rest_framework import routers
from .views import (ExperienceViewSet, PageInfoViewSet,
                    SkillsViewSet, ProjectViewSet, SocialViewSet)

router = routers.DefaultRouter(trailing_slash=False)
router.register('social', SocialViewSet, basename="social")
router.register('page-info', PageInfoViewSet, basename="page")
router.register('experience', ExperienceViewSet, basename="experience")
router.register('skills', SkillsViewSet, basename="skill")
router.register('projects', ProjectViewSet, basename="project")

urlpatterns = [

              ] + router.urls

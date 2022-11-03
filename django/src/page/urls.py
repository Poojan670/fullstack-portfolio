from django.urls import path
from rest_framework import routers
from .views import (ExperienceViewSet, PageInfoViewSet,
                    SkillsViewSet, ProjectViewSet, SocialViewSet)

router = routers.DefaultRouter(trailing_slash=False)
router.register('social', SocialViewSet)
router.register('page-info', PageInfoViewSet)
router.register('experience', ExperienceViewSet)
router.register('skills', SkillsViewSet)
router.register('projects', ProjectViewSet)

urlpatterns = [

              ] + router.urls

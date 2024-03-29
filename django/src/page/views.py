from rest_framework import viewsets

from .models import (PageInfo, Skills,
                     Experience, Project, Socials)
from .serializers import (SocialsSerializer, SkillsSerializer, PageInfoSerializer,
                          ProjectSerializer, ExperienceSerializer, GetPageInfoListSerializer, GetExperienceSerializer)


class SocialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Socials.objects.all()
    serializer_class = SocialsSerializer


class PageInfoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PageInfo.objects.all().prefetch_related('social')
    serializer_class = PageInfoSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return GetPageInfoListSerializer
        else:
            return self.serializer_class


class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return GetExperienceSerializer
        else:
            return self.serializer_class


class SkillsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


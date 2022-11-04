from rest_framework import serializers

from .models import (PageInfo, Skills,
                     Experience, Project, Socials)


class SocialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socials
        fields = '__all__'


class PageInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageInfo
        fields = ['name', 'role', 'image', 'background_info',
                  'phone_no', 'email', 'address', 'social', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class GetPageInfoListSerializer(serializers.ModelSerializer):
    social = SocialsSerializer(many=True, read_only=True)

    class Meta:
        model = PageInfo
        fields = ['name', 'role', 'image', 'background_info',
                  'phone_no', 'email', 'address', 'social']


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class GetExperienceSerializer(serializers.ModelSerializer):
    technologies = SkillsSerializer(read_only=True, many=True)

    class Meta:
        model = Experience
        fields = ['job_title', 'company_image', 'company_info',
                  'date_started', 'date_ended',
                  'is_working', 'technologies', 'points']


class ProjectSerializer(serializers.ModelSerializer):
    technologies = SkillsSerializer(read_only=True, many=True)

    class Meta:
        model = Project
        fields = '__all__'


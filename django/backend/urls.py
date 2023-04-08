"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework.authtoken import views

schema_view = get_schema_view(
    openapi.Info(
        title="Poojan's Portfolio Application",
        default_version='v1',
        description="Test",
        terms_of_service="",
        contact=openapi.Contact(email="info@poojanpradhan.com.np"),
    ),
    public=True,
    permission_classes=[permissions.IsAdminUser, ],
)

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('doc', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
                  path('api/v1/', include('src.v1.urls')),
                  path('api-token-auth', views.obtain_auth_token)
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

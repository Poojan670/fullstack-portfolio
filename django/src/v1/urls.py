from django.urls import path, include

urlpatterns = [
    path('portfolio-app/', include('src.page.urls'))
]

from django.urls import path, include

urlpatterns = [
    path('post-app/', include('src.page.urls'))
]

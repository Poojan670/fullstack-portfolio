from django.contrib import admin
from .models import (PageInfo, Skills,
                     Experience, Project, Socials)


admin.site.register(Socials)
admin.site.register(PageInfo)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(Skills)

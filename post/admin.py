from django.contrib import admin
from .models import post

class postAdmin(admin.ModelAdmin):
	list_display = ('title', 'text', 'date_created')


admin.site.register(post, postAdmin)
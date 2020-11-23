from django.urls import path
from . import views 

urlpatterns = [
	path('', views.apiOverview, name='apiOverview'),
	path('posts-list/', views.postList, name='postList'),
	path('post-detail/<str:pk>/', views.postDetail, name='postDetail'),
	path('post-create/', views.postCreate, name='postCreate'),

	path('post-update/<str:pk>/', views.postUpdate, name='postUpdate'),
	path('post-delete/<str:pk>/', views.postDelete, name='postDelete')
]
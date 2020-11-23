from django.shortcuts import render
from .serializers import postSerializer
from .models import post

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List': '/posts-list/',
		'Detail view': '/post-detail/<str:pk>/',
		'Create': '/post-create/',
		'Update': '/post-update/',
		'Delete': '/post-delete/'
	}

	return Response(api_urls)

@api_view(['GET'])
def postList(request):
	posts = post.objects.all().order_by('-date_created')
	serializer = postSerializer(posts, many=True)

	return Response(serializer.data)

@api_view(['GET'])
def postDetail(request, pk):
	posts = post.objects.get(id=pk)
	serializer = postSerializer(posts, many=False)

	return Response(serializer.data)

@api_view(['POST'])
def postCreate(request):
	serializer = postSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def postUpdate(request, pk):
	item = post.objects.get(id=pk)
	serializer = postSerializer(instance=item, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def postDelete(request, pk):
	item = post.objects.get(id=pk)
	item.delete()

	return Response("POST DELETED!")
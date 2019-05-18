from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from instafish.models import Post, Profile
from instafish.serializers import PostSerializer, ProfileSerializer


# /post/
class PostView(APIView):

    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


# /post/id
class PostDetailView(APIView):

    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)


# /profile/
class ProfileView(APIView):

    def get(self, request):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)


# /profile/id
class ProfileDetailView(APIView):

    def get_object(self, pk):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request):
        profile = Profile.objects.all()
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

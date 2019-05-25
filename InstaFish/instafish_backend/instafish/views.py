from django.http import Http404
from rest_framework import status, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView
from instafish.models import Post, Profile, Comment, PostLike, Event, UserEvent
from instafish.serializers import PostSerializer, ProfileSerializer, UserSerializerWithToken, UserSerializer, \
    CommentSerializer, LikeSerializer, EventSerializer, UserEventSerializer


@api_view(['GET'])
def current_user(request):
    # Determine the current user by their token, and return their data

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    # Create a new user. It's called 'UserList' because normally we'd have a get
    # method here too, for retrieving a list of all User objects.
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

    def get(self, request, pk):
        profile = self.get_object(pk)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)


# /post/
class PostView(APIView, PageNumberPagination):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = {permissions.IsAuthenticated, }
    # pagination_class = PageNumberPagination

    def get(self, request):
        posts = Post.objects.all().order_by('-pk')
        results = self.paginate_queryset(posts, request, view=self)
        serializer = PostSerializer(results, many=True)
        return self.get_paginated_response(serializer.data)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


# /post/id/comments
class CommentView(APIView, PageNumberPagination):
    def get(self, request, pk):
        comments = Comment.objects.filter(post=pk).order_by('created_at')
        results = self.paginate_queryset(comments, request, view=self)
        serializer = CommentSerializer(results, many=True)
        return self.get_paginated_response(serializer.data)


# /post/id/likes
class PostLikeView(APIView, PageNumberPagination):
    def get(self, request, pk):
        likes = PostLike.objects.filter(post=pk, isLiked=True).order_by('post')
        results = self.paginate_queryset(likes, request, view=self)
        serializer = LikeSerializer(results, many=True)
        return self.get_paginated_response(serializer.data)


# /event/
class EventView(APIView, PageNumberPagination):
    permission_classes = {permissions.IsAuthenticated, }

    def get(self, request):
        events = Event.objects.all().order_by('-pk')
        results = self.paginate_queryset(events, request, view=self)
        serializer = EventSerializer(results, many=True)
        return self.get_paginated_response(serializer.data)

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# /event/id/
class EventDetailView(APIView):

    def get_object(self, pk):
        try:
            return Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        event = self.get_object(pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)


# /event/id/users/
class EventUserView(APIView, PageNumberPagination):
    def get(self, request, pk):
        users = UserEvent.objects.filter(event=pk).order_by('event')
        results = self.paginate_queryset(users, request, view=self)
        serializer = UserEventSerializer(results, many=True)
        return self.get_paginated_response(serializer.data)

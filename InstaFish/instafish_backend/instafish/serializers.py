from rest_framework import serializers
from instafish.models import Post, Profile


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    first_name = serializers.CharField(source='user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.last_name', read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

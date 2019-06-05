from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from rest_framework_jwt.serializers import User
from rest_framework_jwt.settings import api_settings

from instafish.models import Post, Profile, Comment, PostLike, Event, UserEvent
from django.contrib.auth import password_validation


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'id')


class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)
    email = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def validate(self, data):
        user = User(**data)

        # get the password from the data
        password = data.get('password')
        errors = dict()

        # validate the password and catch the exception
        try:
            password_validation.validate_password(password=password, user=User)
        # the exception raised here is different than serializers.ValidationError
        except ValidationError as e:
            errors['password'] = list(e.messages)
        if errors:
            raise serializers.ValidationError(errors)

        return super(UserSerializerWithToken, self).validate(data)

    class Meta:
        model = User
        fields = ('token', 'username', 'id', 'password', 'email', 'first_name', 'last_name')


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    first_name = serializers.CharField(source='user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.last_name', read_only=True)

    # followed_by = ProfileFollowSerializer()

    class Meta:
        model = Profile
        fields = 'id', 'username', 'first_name', 'last_name', 'sex', 'birthdate', 'country', 'city', 'avatar', 'user', \
                 'specialization', 'organization', 'communities', 'fishing_rod', 'fishing_reel', 'achievement', \
                 'follows', 'followed_by', 'facebook', 'instagram', 'youtube', 'website', 'description'


class ProfileFollowersSerializer(serializers.ModelSerializer):
    # username = serializers.CharField(source='user.username', read_only=True)
    # first_name = serializers.CharField(source='user.first_name', read_only=True)
    # last_name = serializers.CharField(source='user.last_name', read_only=True)
    # communities = serializers.RelatedField(many=True, read_only=True)
    # followed_by = ProfileFollowSerializer()

    class Meta:
        model = Profile
        fields = 'follows', 'followed_by'


class PostSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.user.last_name', read_only=True)
    avatar = serializers.ImageField(source='user.avatar', read_only=True)

    def to_representation(self, instance):
        representation = super(PostSerializer, self).to_representation(instance)
        representation['created_at'] = instance.created_at.strftime("%Y-%m-%d %H:%M:%S")
        return representation

    class Meta:
        model = Post
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.user.last_name', read_only=True)
    avatar = serializers.ImageField(source='user.avatar', read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'

    def to_representation(self, instance):
        representation = super(CommentSerializer, self).to_representation(instance)
        representation['created_at'] = instance.created_at.strftime("%Y-%m-%d %H:%M:%S")
        return representation


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostLike
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    creator_first_name = serializers.CharField(source='creator.user.first_name', read_only=True)
    creator_last_name = serializers.CharField(source='creator.user.last_name', read_only=True)
    creator_avatar = serializers.ImageField(source='creator.avatar', read_only=True)

    class Meta:
        model = Event
        fields = 'id', 'name', 'date', 'description', 'localization',\
                 'creator', 'creator_first_name', 'creator_last_name', 'creator_avatar'

    def to_representation(self, instance):
        representation = super(EventSerializer, self).to_representation(instance)
        representation['date'] = instance.date.strftime("%Y-%m-%d %H:%M:%S")
        return representation


class UserEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEvent
        fields = '__all__'

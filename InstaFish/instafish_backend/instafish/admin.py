from django.contrib import admin

# Register your models here.
from instafish.models import Profile,  \
    Event, UserEvent, Post, PostLike, Comment

admin.site.register(Profile)
admin.site.register(Event)
admin.site.register(UserEvent)
admin.site.register(Post)
admin.site.register(PostLike)
admin.site.register(Comment)

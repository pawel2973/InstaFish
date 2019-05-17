from django.contrib import admin

# Register your models here.
from instafish.models import Profile, Specialization, Organization, Communities, FishingRod, FishingReel, Achievement, \
    Event, UserEvent, Post, PostLike, Comment

admin.site.register(Specialization)
admin.site.register(Organization)
admin.site.register(Communities)
admin.site.register(FishingRod)
admin.site.register(FishingReel)
admin.site.register(Achievement)
admin.site.register(Profile)
admin.site.register(Event)
admin.site.register(UserEvent)
admin.site.register(Post)
admin.site.register(PostLike)
admin.site.register(Comment)

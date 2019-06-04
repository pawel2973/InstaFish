from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from instafish.validators import validate_date_not_in_future, validate_file_size
from django.utils.datetime_safe import datetime

# tuple of sex choices as constant
SEX_CHOICES = (
    ('Male', 'Mężczyzna'),
    ('Female', 'Kobieta')
)


# class Specialization(models.Model):
#     name = models.CharField(max_length=255)
#
#     def __str__(self):
#         return self.name
#
#
# class Organization(models.Model):
#     name = models.CharField(max_length=255)
#
#     def __str__(self):
#         return self.name


# class Communities(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     facebook = models.CharField(max_length=200, blank=True)
#     instagram = models.CharField(max_length=200, blank=True)
#     youtube = models.CharField(max_length=200, blank=True)
#     website = models.CharField(max_length=200, blank=True)
#
#     @receiver(post_save, sender=User)
#     def create_user_communities(sender, instance, created, **kwargs):
#         if created:
#             Communities.objects.create(user=instance)
#
#     @receiver(post_save, sender=User)
#     def save_user_communities(sender, instance, **kwargs):
#         instance.communities.save()
#
#     def __str__(self):
#         return self.user.__str__() + ' communities'


# class FishingRod(models.Model):
#     name = models.CharField(max_length=255)
#
#     def __str__(self):
#         return self.name
#
#
# class FishingReel(models.Model):
#     name = models.CharField(max_length=255)
#
#     def __str__(self):
#         return self.name
#
#
# class Achievement(models.Model):
#     name = models.CharField(max_length=255)
#
#     def __str__(self):
#         return self.name


def upload_to(instance, filename):
    return 'avatars/%s/%s' % (instance.user.username, filename)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sex = models.CharField(max_length=20, choices=SEX_CHOICES, blank=True, null=True)
    birthdate = models.DateField(validators=[validate_date_not_in_future], blank=True, null=True)
    country = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    specialization = models.CharField(max_length=200, blank=True, default='brak')
    organization = models.CharField(max_length=200, blank=True, default='brak')
    avatar = models.ImageField(upload_to=upload_to, default='fish.jpg', validators=[validate_file_size])
    communities = models.BooleanField(default=True)
    facebook = models.CharField(max_length=200, blank=True)
    instagram = models.CharField(max_length=200, blank=True)
    youtube = models.CharField(max_length=200, blank=True)
    website = models.CharField(max_length=200, blank=True)
    fishing_rod = models.CharField(max_length=200, blank=True, default='brak')
    fishing_reel = models.CharField(max_length=200, blank=True, default='brak')
    achievement = models.TextField(blank=True, default='brak')
    follows = models.ManyToManyField('Profile', related_name='followed_by', blank=True)
    description = models.CharField(max_length=1000, blank=True, default='brak')

    # define signals so our Profile model will be automatically created/updated when we create/update User instances.
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()

    def __str__(self):
        return self.user.__str__()


class Event(models.Model):
    creator = models.ForeignKey('Profile', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    date = models.DateTimeField()
    description = models.TextField()
    localization = models.CharField(max_length=255)

    def __str__(self):
        return self.name


STATUS_CHOICES = (
    ('yes', 'Wezmę udział'),
    ('no', 'Nie wezmę udziału'),
    ('idk', 'Niezdecydowany')
)


class UserEvent(models.Model):
    user = models.ForeignKey('Profile', on_delete=models.CASCADE)
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    status = models.CharField(max_length=100, choices=STATUS_CHOICES)

    def __str__(self):
        return str(self.user) + ' Status: ' + self.get_status_display() + ' w: ' + self.event.__str__()

    class Meta:
        unique_together = ('user', 'event')


class Post(models.Model):
    user = models.ForeignKey('Profile', on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=datetime.utcnow, editable=False)
    title = models.CharField(max_length=64)
    fish_name = models.CharField(max_length=200, blank=True, null=True)
    fish_weight = models.CharField(max_length=200, blank=True, null=True)
    fish_length = models.CharField(max_length=200, blank=True, null=True)
    fishing_country = models.CharField(max_length=200, blank=True, null=True)
    fishing_city = models.CharField(max_length=200, blank=True, null=True)
    fishing_date = models.DateField()
    fish_photo = models.ImageField(upload_to='posts/', validators=[validate_file_size])
    fishing_reel = models.CharField(max_length=200, blank=True, null=True)
    fishing_leader = models.CharField(max_length=200, blank=True, null=True)
    fishing_hook = models.CharField(max_length=200, blank=True, null=True)
    fishing_rod = models.CharField(max_length=200, blank=True, null=True)
    fishing_bait = models.CharField(max_length=200, blank=True, null=True)
    fishing_line = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField()

    def __str__(self):
        return self.title + ' ' + str(self.id)


class PostLike(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    isLiked = models.BooleanField()

    def __str__(self):
        return self.user.__str__() + " liked " + self.post.__str__()

    class Meta:
        unique_together = ('user', 'post')


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(default=datetime.utcnow, editable=False)

from django.utils.datetime_safe import date
from django.core.exceptions import ValidationError


def validate_date_not_in_future(data):
    if data > date.today():
        raise ValidationError('You were born in the future?')


def validate_file_size(value):
    file_size = value.size
    if file_size > 1048576:
        raise ValidationError("The maximum file size that can be uploaded is 1MB")

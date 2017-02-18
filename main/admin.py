from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

from .forms import RegisterForm
from .models import User

class UserAdmin(UserAdmin):
    form = RegisterForm

    list_display = [
        'email',
        'is_admin',
    ]

    list_filter = ('is_admin',)

    fieldsets = (
                (None, {'fields': ('email', 'password')}),
                # ('Personal info', {
                #  'fields': (
                #      'avatar',
                #      'date_of_birth',
                #      'firstname',
                #      'lastname',
                #      'middlename',
                #  )}),
                ('Permissions', {'fields': ('is_admin',)}),
                ('Important dates', {'fields': ('last_login',)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email',
                'password',
                'password_again',
            )}
         ),
    )

    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

# Регистрация нашей модели
admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
from django.forms import ModelForm
from django.utils.translation import ugettext_lazy as _
from braces.views import FormValidMessageMixin
from custom_user.models import CustomUser

class CustomUserForm(FormValidMessageMixin, ModelForm):
    form_valid_message = _(u"Account updated!")
    success_list_url = "custom_user_update"
    class Meta:
        model = CustomUser
        exclude = [
            'password',
            'username',
            'email',
            'is_staff',
            'is_active',
            'date_joined',
            'last_login',
            'groups',
            'is_superuser',
            'user_permissions'
        ]
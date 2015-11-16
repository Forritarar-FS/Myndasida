from django import forms
from accounts.models import User

class RegistrationForm(forms.modelForm):

    email = forms.EmailField(widget=forms.widget.TextInput,label="Email")
    password1 = forms.CharField(widget=forms.widget.PasswordInput,
                                label="Password")
    password2 = forms.CharField(widget=forms.widget.PasswordInput,
                                label="Password (aftur)")
    class Meta:
        model = User
        fields = ['email', 'password1', 'password2']

    def clean(self):
#Verifiar að value'in i password dálkunum sé það sama
        cleaned_data = super(RegistrationForm, self).clean()
        if 'password1' in self.cleaned_data and 'password2' in self.cleaned_data:
            if self.cleaned_data['password1'] != self.cleaned_data['password2']:
                raise forms.ValidationError("Passwordin passa ekki saman. Vinsamlegast skráðu þau inn aftur.")
        return self.cleaned_data

    def save(self, commit=True):
        user = super(RegistrationForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user

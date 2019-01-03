from django import forms
from nasagram.models import NasaComment

class NasaCommentForm(forms.ModelForm):
    class Meta:
        model = NasaComment
        fields = ['comments', 'rating', 'favorite', 'date', 'url']
        widgets = {
            'url': forms.HiddenInput,
            'date': forms.HiddenInput
        }
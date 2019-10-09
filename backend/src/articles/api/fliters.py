import django_filters.rest_framework
from articles.models import Comment


class CommentFilter(django_filters.FilterSet):
    class Meta:
        model = Comment
        fields = ['article']

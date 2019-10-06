from django.contrib import admin

# 使資料庫表單可在後臺處理

from .models import Article

admin.site.register(Article)

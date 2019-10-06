from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # rest-auth設定 /login/為登入API
    path('rest-auth/', include('rest_auth.urls')),

    # api-auth api驗證
    path('api-auth/', include('rest_framework.urls')),

    # restful api的路徑(urls設置於api目錄)
    path('api/', include('articles.api.urls')),

    # 系統管理路徑
    path('admin/', admin.site.urls),

    # rest-auth設定 為註冊API
    path('rest-auth/registration/', include('rest_auth.registration.urls'))
]

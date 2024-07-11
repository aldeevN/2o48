from django.contrib import admin
from apps.game_app.models import *

class GamePlayedAdmin(admin.ModelAdmin):
    list_display = ("user", "score")
    list_display_links = ("user",)

class FeedbackAdmin(admin.ModelAdmin):
    list_display = ("user" ,"feedback",)
    list_display_links = ("user",)
admin.site.register(Feedback, FeedbackAdmin)
admin.site.register(GamePlayed, GamePlayedAdmin)
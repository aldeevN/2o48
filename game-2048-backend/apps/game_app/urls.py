from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path("game_score/", view=views.LeaderBoardView.as_view()),
    path("create_feedback/", view=views.FeedbackView.as_view()),
]
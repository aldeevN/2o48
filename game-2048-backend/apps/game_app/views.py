from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from apps.game_app.models import GamePlayed
from django.db.models import Max
from rest_framework.views import Response
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from apps.game_app.permission import GamePermission
from apps.game_app.serializers import FeedbackSerializer, LeaderBoardSerializer
from apps.game_app.services import BestScoreUserCreator, FeedbackCreator
from apps.main.models import CustomUser

User = CustomUser


class LeaderBoardView(GenericAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = LeaderBoardSerializer
    queryset = GamePlayed.objects.all()

    def get(self, request):
        users_score = (
            GamePlayed.objects.values("user__username", "user__profile_pic")
            .annotate(Max("score")).order_by("-score__max")[:6]
        )

        result = [
            {
                "username": use["user__username"],
                "score": use["score__max"],
                "profile_picture": use["user__profile_pic"],
            }
            for use in users_score
        ]

        return Response(data=result)

    def post(self, request):
        sz = LeaderBoardSerializer(data=request.data)
        sz.is_valid(raise_exception=True)

        creator = BestScoreUserCreator()
        creator.create_best_score(sz.data, request.user)
        return Response(status=status.HTTP_200_OK)


class FeedbackView(GenericAPIView):
    permission_classes = (GamePermission,)
    serializer_class = FeedbackSerializer

    def post(self, request):
        sz = FeedbackSerializer(data=request.data)
        sz.is_valid(raise_exception=True)

        creator = FeedbackCreator()
        creator.create_feedback(sz.data, request.user)
        return Response(status=status.HTTP_200_OK)
    


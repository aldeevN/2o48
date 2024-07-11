from rest_framework import serializers


class FeedbackSerializer(serializers.Serializer):
    feedback = serializers.CharField()

class LeaderBoardSerializer(serializers.Serializer):
    score = serializers.IntegerField()


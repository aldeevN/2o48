from apps.game_app.models import Feedback, GamePlayed

from apps.main.models import CustomUser


class FeedbackCreator:
    def create_feedback(self, message: dict, user: CustomUser):
        Feedback.objects.create(user=user, feedback=message["feedback"])


class BestScoreUserCreator:
    def create_best_score(self, message: dict, user: CustomUser):
        game_played = GamePlayed.objects.filter(user=user).first()
        if game_played is None:
            GamePlayed.objects.create(user=user, score=message["score"])
        elif message["score"] > game_played.score:
            game_played.score = message["score"]
            game_played.save()



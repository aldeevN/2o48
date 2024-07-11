from rest_framework.permissions import BasePermission


from .models import GamePlayed



class GamePermission(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated

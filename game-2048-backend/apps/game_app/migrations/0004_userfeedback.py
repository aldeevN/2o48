# Generated by Django 4.2.9 on 2024-06-15 19:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("game_app", "0003_alter_gameplayed_options_alter_gameplayed_score_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Userfeedback",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("feedback", models.TextField(verbose_name="Отзыв")),
            ],
            options={
                "verbose_name": "Отзыв",
                "verbose_name_plural": "Отзывы",
            },
        ),
    ]

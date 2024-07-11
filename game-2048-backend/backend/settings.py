import os
from datetime import timedelta
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv(
    "DJANGO_SECRET_KEY",
    default="django-insecure-e)a)ob*fi^52i=2_7if28+q9pz_*8uicg)k*1zak3h)=cy=syg",
)

JWT_PRIVATE_KEY = os.getenv("JWT_PRIVATE_KEY")
JWT_PUBLIC_KEY = os.getenv("JWT_PUBLIC_KEY")

DEBUG = os.getenv("DEBUG") in ["true", "True", "1", True, 1]
ALLOWED_HOSTS = os.getenv("DJANGO_ALLOWED_HOSTS", "").split(",")

EMAIL_CONFIRMATION_TIMEOUT = int(
    os.getenv("EMAIL_CONFIRMATION_TIMEOUT", 60 * 60 * 24 * 7)
)

FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000/")
FRONTEND_EMAIL_VERIFY_ADDRESS = os.getenv(
    "FRONTEND_EMAIL_VERIFY_ADDRESS", "registration/email/verify/?token={token}"
)

CSRF_TRUSTED_ORIGINS = [
    "http://adminka.space",
    "https://adminka.space",
]

INSTALLED_APPS = [
    # Jazzmin Admin
    "jazzmin",
    # Django
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # 3-rd party
    "drf_spectacular",
    "rest_framework",
    "corsheaders",
    "phonenumber_field",
    # Local Apps
    "apps.main",
    "apps.game_app",
]

REDIS_SOCKET = os.getenv("REDIS_SOCKET")

LOCALE_PATHS = [ os.path.join(BASE_DIR, "locale"), ]

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": REDIS_SOCKET,
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

AUTH_USER_MODEL = "main.CustomUser"
CORS_ALLOW_ALL_ORIGINS = True
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    # Whitenoise
    # 'whitenoise.middleware.WhiteNoiseMiddleware',
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django_structlog.middlewares.request.RequestMiddleware",
    "django.middleware.locale.LocaleMiddleware",
]

CORS_ALLOW_ALL_ORIGINS = True

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            os.path.join(BASE_DIR, "templates/"),
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": os.environ.get(
            "POSTGRES_ENGINE", "django.db.backends.postgresql_psycopg2"
        ),
        "NAME": os.environ.get("POSTGRES_DB"),
        "USER": os.environ.get("POSTGRES_USER"),
        "PASSWORD": os.environ.get("POSTGRES_PASSWORD"),
        "HOST": os.environ.get("POSTGRES_HOST", "db"),
        "PORT": os.environ.get("POSTGRES_PORT", "5432"),
    }
}

REDIS_SOCKET = os.getenv("REDIS_SOCKET")

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": REDIS_SOCKET,
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = "ru-RU"

LANGUAGES = [
    ("ru", "Русский"),
]

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_ROOT = Path.joinpath(BASE_DIR, "static")
STATIC_URL = "/static/"


MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


AUTHENTICATION_BACKENDS = ["django.contrib.auth.backends.AllowAllUsersModelBackend"]

PAGE_SIZE = 50

# SIMPLE_JWT
SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=365),
    "ALGORITHM": "RS256",
    "SIGNING_KEY": JWT_PRIVATE_KEY,
    "VERIFYING_KEY": JWT_PUBLIC_KEY,
    "BLACKLIST_AFTER_ROTATION": False,
    "ROTATE_REFRESH_TOKENS": True,
}

# SPECTACULAR (API SCHEME)
SPECTACULAR_SETTINGS = {
    "TITLE": "Example API",
    "DESCRIPTION": "Api for Example application",
    "VERSION": "1.0.0",
    "SERVE_INCLUDE_SCHEMA": False,
}

REST_FRAMEWORK = {
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_FILTER_BACKENDS": ("django_filters.rest_framework.DjangoFilterBackend",),
    "PAGE_SIZE": 50,
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]
import logging
import structlog
import sys


USE_LOCAL_LOGGING_PROCESSORS = os.getenv("USE_LOCAL_LOGGING_PROCESSORS") in [
    1,
    "1",
    "True",
    "true",
]

logging.basicConfig(
    format="%(message)s",
    stream=sys.stdout,
    level=logging.INFO,
)

exception_processor = (
    structlog.processors.format_exc_info
    if USE_LOCAL_LOGGING_PROCESSORS
    else structlog.processors.dict_tracebacks
)
log_renderer = (
    structlog.dev.ConsoleRenderer()
    if USE_LOCAL_LOGGING_PROCESSORS
    else structlog.processors.JSONRenderer()
)

processors = [
    structlog.contextvars.merge_contextvars,
    structlog.stdlib.filter_by_level,
    structlog.processors.TimeStamper(fmt="iso"),
    structlog.stdlib.add_logger_name,
    structlog.stdlib.add_log_level,
    structlog.stdlib.PositionalArgumentsFormatter(),
    structlog.processors.StackInfoRenderer(),
    exception_processor,
    structlog.processors.UnicodeDecoder(),
    structlog.processors.CallsiteParameterAdder(
        {
            structlog.processors.CallsiteParameter.FILENAME,
            structlog.processors.CallsiteParameter.FUNC_NAME,
            structlog.processors.CallsiteParameter.LINENO,
            structlog.processors.CallsiteParameter.THREAD,
            structlog.processors.CallsiteParameter.THREAD_NAME,
            structlog.processors.CallsiteParameter.PROCESS,
            structlog.processors.CallsiteParameter.PROCESS_NAME,
        }
    ),
    log_renderer,
    structlog.stdlib.ProcessorFormatter.wrap_for_formatter,
]

structlog.configure(
    processors=processors,
    logger_factory=structlog.stdlib.LoggerFactory(),
    cache_logger_on_first_use=True,
)


# SMTP
EMAIL_HOST = os.getenv("EMAIL_HOST", default="")
EMAIL_PORT = os.getenv("EMAIL_PORT", default="")
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", default="")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD", default="")
EMAIL_USE_SSL = os.getenv("EMAIL_USE_SSL", default="")
DEFAULT_FROM_EMAIL = os.getenv("DEFAULT_FROM_EMAIL", default="")


# WEB_PAY_ENVS

WEB_PAY_PAYMENT_URL = os.getenv("WEB_PAY_PAYMENT_URL", "")
WEB_PAY_IS_TEST = int(os.getenv("WEB_PAY_IS_TEST", 0))
WEB_PAY_STORE_ID = os.getenv("WEB_PAY_STORE_ID")
WEB_PAY_SECRET_KEY = os.getenv("WEB_PAY_SECRET_KEY", "")
WEB_PAY_RETURN_URL = os.getenv("WEB_PAY_RETURN_URL", "")
WEB_PAY_NOTIFY_URL = os.getenv("WEB_PAY_NOTIFY_URL", "")

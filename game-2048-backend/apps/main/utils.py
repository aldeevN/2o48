import os
from uuid import uuid4


def path_and_rename(path):
    def wrapper(instance, filename):
        ext = filename.split(".")[-1]
        if instance.username:
            filename = "{}.{}".format(instance.username, ext)
        else:
            filename = "{}.{}".format(uuid4().hex, ext)
        return os.path.join(path, filename)

    return wrapper

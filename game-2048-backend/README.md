# Набор полезный инструкций для проекта

## Локальный запуск

Для запуска проекта на рабочей станции должен быть установлен docker и docker-compose  
Представленный команды работают в linux и wsl  
1. Создаем .env файлы
```bash
cp docker/local/django/.env.example docker/local/django/.env
cp docker/local/postgres/.env.example docker/local/postgres/.env
```

2. Запускаем проект
```bash
docker-compose up --build
```

## Генерация JWT RSA256 ключей

1. Генерируем ключи и сохраняем в файлы
```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
# Don't add passphrase
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
```

2. Выводим ключи в консоль
```bash
cat jwtRS256.key
cat jwtRS256.key.pub
```

3. Вписываем в .env файл в формате, представленном в .env.example

## Добавление новой зависимости (пакета) в проект

1. Активировать виртуальное окружение
```bash
poetry shell
```

2. Добавить пакет
```bash
poetry add some-package
```

3. Обновить requirements.txt
```bash
poetry export -f requirements.txt --output requirements.txt
```

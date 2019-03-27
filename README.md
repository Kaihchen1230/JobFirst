# csc47300Project

## setting up DB
- install mysql version 8
- log in as root user
```mysql -u root -p```
- type in your password for root user
- create another user with username & password as your own choice
```CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';```
- create database
```CREATE DATABASE job_first;```
- grant all privilege
```GRANT ALL PRIVILEGES ON job_first.* TO 'username'@'localhost' IDENTIFIED BY 'password';```
- last step is important for mysql version 8
```ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';```

## configuration
- need to add another folder named 'config' in the 'server' folder
- then create a file named 'config.json'

- need to create a file named '.env' in the project folder. it will contain the sensitive data. ex: secret key to create session
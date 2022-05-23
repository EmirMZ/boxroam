CREATE USER "app_admin" WITH PASSWORD 'password';

CREATE USER "app_user" WITH PASSWORD 'password';
COMMIT;
COMMIT;
CREATE DATABASE test_database WITH OWNER app_admin;
COMMIT;
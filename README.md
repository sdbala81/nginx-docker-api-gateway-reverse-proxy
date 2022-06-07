# Sample application using some backend services and react application

after you've cloned the application

cd to .docker folder

run docker compose up --build -d

after the containers are up and running

curl http://localhost/users
curl http://localhost/admissions
curl http://localhost/faculites

If you get a 200 OK message from the above then all the services are up and runnning

Time to browse the application

browse to http://localhost , you should see the admin portal

browse to http://localhost/students , you dont see anything instead you get an error

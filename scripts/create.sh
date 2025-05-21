sudo docker run -d -p 27017:27017 --name mongo -e MONGO_INITDB_ROOT_USERNAME=mongo -e MONGO_INITDB_ROOT_PASSWORD=mongo -e MONGO_INITDB_DATABASE=reactblogdemo mongo:latest

# Start Docker
start:
	@echo Starting docker
	docker-compose up -d

# Stop Services
stop:
	@echo Stoping docker services
	docker-compose stop

# Stop and Remove containers, network, images and volumes
remove:
	@echo Removing Docker Container, Network, Images and Volumes
	docker-compose down

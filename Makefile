S_INSTALL=/home/dev/nodejs/saratoga/

clean:
	docker-compose -f $(S_INSTALL)/app/docker-compose.yaml down --remove-orphans
	docker-compose -f $(S_INSTALL)/nginx/docker-compose.yaml down --remove-orphans

build:
	docker-compose -f $(S_INSTALL)/app/docker-compose.yaml up -d --build
	docker-compose -f $(S_INSTALL)/nginx/docker-compose.yaml up -d --build

run:
	docker-compose -f $(S_INSTALL)/app/docker-compose.yaml up -d --no-build
	docker-compose -f $(S_INSTALL)/nginx/docker-compose.yaml up -d --no-build

status:
	docker ps

prune:
	docker rmi $(docker images -a -q)

logger:
	docker logs app_provider1_1

# analyzelogs
test1:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"search": "$(ARGS)"}' http://localhost:8090/analyzelogs

# findlogs (3 args)
test2:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"f1": "$(ARG1)", "f2": "$(ARG2)", "f3": "$(ARG3)"}' http://localhost:8090/findlogs

# findlogs (2 args)
test3:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"f1": "$(ARG1)", "f2": "$(ARG2)"}' http://localhost:8090/findlogs

# copylogs async (2 args)
test4:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"f1": "$(ARG1)", "f2": "$(ARG2)"}' http://localhost:8090/copylogasync

# copylogs async (3 args)
test5:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"f1": "$(ARG1)", "f2": "$(ARG2)", "f3": "$(ARG3)"}' http://localhost:8090/copylogasync

# copylogs sync (3 args)
test6:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"f1": "$(ARG1)", "f2": "$(ARG2)", "f3": "$(ARG3)"}' http://localhost:8090/copylogsync

# copylogs semi sync (3 args)
test7:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"f1": "$(ARG1)", "f2": "$(ARG2)", "f3": "$(ARG3)"}' http://localhost:8090/copylogssync

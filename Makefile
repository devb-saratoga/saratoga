S_INSTALL=/home/devbnjhp/nodejs/saratoga

clean:
	docker-compose -f $(S_INSTALL)/docker-compose.yaml down --remove-orphans

build:
	docker-compose -f $(S_INSTALL)/docker-compose.yaml up -d --build

run:
	docker-compose -f $(S_INSTALL)/docker-compose.yaml up -d --no-build

status:
	docker ps

prune:
	docker rmi $(docker images -a -q)

test1:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"search": "$(ARGS)"}' http://localhost:8090/analyzelogs

test2:
	curl -v --insecure --header "Content-Type: application/json" --request POST --data '{"filter1": "$(ARG1)", "filter2": "$(ARG2)"}' http://localhost:8090/findlogs

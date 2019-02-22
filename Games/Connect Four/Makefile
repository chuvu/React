.PHONY: install run test help
.DEFAULT_GOAL := help

help:
	@grep -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install:
	npm install

run:
	node_modules/.bin/react-native run-ios

test:
	node_modules/.bin/mocha --require test/setup.js --compilers js:babel-core/register 'test/**/*.js'

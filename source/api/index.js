import body from 'spirit-body'
import http from 'http'
import route from 'spirit-router'
import spirit from 'spirit'

const jsonBody = body({
	json: true,
})

const app = route.define([
	route.wrap(route.post('*', ['body'], body => `the body is ${body}`), [
		jsonBody,
	]),
])

http.createServer(spirit.node.adapter(app)).listen(8081)

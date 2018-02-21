import http from 'http'
import route from 'spirit-router'
import spirit from 'spirit'

import orderTicket from './routes/order-ticket'
import stations from './routes/stations'
import transaction from './routes/transaction'
// import './daemon'

const app = route.define([...orderTicket, ...stations, ...transaction])

http
	.createServer(spirit.node.adapter(app))
	.listen(8081, () => 'listening')
	.setTimeout(300000)

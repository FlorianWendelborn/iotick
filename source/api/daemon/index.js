import { stations, iota_provider } from '../../../config'
import IOTA from 'iota.lib.js'
import _ from 'lodash'
import address from '../utilities/address'

var iota = new IOTA({
	provider: iota_provider,
})

async function sendTickets() {
	var seeds = _.flatMap(stations.map(s => s.tickets.map(t => t.seed)))

	console.log(seeds)

	var st = await Promise.all(seeds.map(s => address({ seed: s })))
	console.log(st)
	var addresses = st.map(r => r.address)
	console.log(addresses)

	iota.api.findTransactionObjects({ addresses: addresses }, (error, data) => {
		console.log(error)
		console.log(data)
	})
}

sendTickets()
setInterval(sendTickets, 100000)

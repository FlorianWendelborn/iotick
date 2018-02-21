import { stations, iota_provider } from '../../../config'
import IOTA from 'iota.lib.js'

var iota = new IOTA({
	provider: iota_provider,
})

function sendTickets() {
	iota.api.findTransactionObjects({ addresses: [stations.map()] }, callback)
}

setInterval(sendTickets, 10000)

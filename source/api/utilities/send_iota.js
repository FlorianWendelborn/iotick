import IOTA from 'iota.lib.js'
import { iota_provider } from '../../../config'

var iota = new IOTA({
	provider: iota_provider,
})

export function sendTransaction(seed, address, value, message, tag, callback) {
	console.log('sending transfer')
	iota.api.sendTransfer(
		seed,
		2,
		14,
		[
			{
				address: address,
				value: value,
				message: iota.utils.toTrytes(message),
			},
		],
		{},
		callback
	)
}

export function getTransaction(hash, callback) {
	console.log('getting transfer details', hash)
	iota.api.getTransactionsObjects([hash], callback)
}

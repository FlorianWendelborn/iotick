import route from 'spirit-router'
import qr from 'qr-image'
import body from 'spirit-body'
import IOTA from 'iota.lib.js'
import { seed, iota_provider } from '../../../config'

const jsonBody = body({ json: true })

var iota = new IOTA({
	provider: iota_provider,
})

function sendTransaction(seed, address, value, message, tag, callback) {
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

export default [
	route.wrap(
		route.post('/api/v1/order-ticket', ['body'], async data => {
			var t = JSON.parse(data.data)
			const result = await new Promise((resolve, reject) => {
				sendTransaction(seed, t.address, 0, t.message, t.tag, (error, res) => {
					if (error) {
						console.log(error)
						return reject(error)
					}
					console.log('processed transfer')
					resolve(res)
				})
			})

			return result
		}),
		[jsonBody]
	),
]

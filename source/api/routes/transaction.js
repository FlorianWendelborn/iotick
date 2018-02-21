import route from 'spirit-router'
import qr from 'qr-image'
import body from 'spirit-body'
import IOTA from 'iota.lib.js'
import { iota_provider } from '../../../config'
import { getTransaction } from '../utilities/send_iota'

const jsonBody = body({ json: true })
var iota = new IOTA({
	provider: iota_provider,
})

export default [
	route.wrap(
		route.post('/api/v1/transaction', ['body'], async data => {
			var hash = data.data
			console.log(hash)
			const result = await new Promise((resolve, reject) => {
				getTransaction(hash, (error, res) => {
					if (error) {
						console.log(error)
						return reject(error)
					}
					var t = res.length && res[0]

					t.decoded = iota.utils.extractJson(res)
					console.log('received transaction details', t)
					resolve(t)
				})
			})

			return result
		}),
		[jsonBody]
	),
]

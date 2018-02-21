import route from 'spirit-router'
import qr from 'qr-image'
import body from 'spirit-body'
import IOTA from 'iota.lib.js'
import { seed } from '../../../config'
import { sendTransaction } from '../utilities/send_iota'

const jsonBody = body({ json: true })

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

			return result[0].hash
		}),
		[jsonBody]
	),
]

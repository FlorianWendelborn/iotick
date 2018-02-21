import route from 'spirit-router'
import qr from 'qr-image'
import body from 'spirit-body'
import IOTA from 'iota.lib.js'
import { seed } from '../../../config'
import { getTransaction } from '../utilities/send_iota'

const jsonBody = body({ json: true })

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
					console.log('received transaction details', res)
					resolve(res)
				})
			})

			return result.length && result[0]
		}),
		[jsonBody]
	),
]

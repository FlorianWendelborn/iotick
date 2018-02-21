import route from 'spirit-router'
import qr from 'qr-image'

export default [
	route.get('/api/v1/order-ticket/wallet', () => {
		console.log('kek')
		const response = {
			status: 200,
			body: JSON.stringify({
				address: '',
				qr: qr.imageSync('https://dodekeract.com', { type: 'svg' }),
			}),
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		}
		console.log(response)
		return response
	}),
]

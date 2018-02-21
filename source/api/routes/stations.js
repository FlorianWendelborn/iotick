import qr from 'qr-image'
import route from 'spirit-router'

// internal
import address from '../utilities/address'
import config from '../../../config.json'
import price from '../utilities/price'

export default [
	route.get('/api/v1/stations', async () => ({
		status: 200,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(
			await Promise.all(
				config.stations.map(async ({ image, name, tickets }) => ({
					image,
					name,
					tickets: await Promise.all(
						tickets.map(async ({ duration, seed, value }) => ({
							amount: price(value),
							iota: value,
							duration,
							qr: qr.imageSync(
								JSON.stringify(
									await address({
										amount: price(value),
										payload: {
											valid: [Date.now(), Date.now() + duration * 1000],
										},
										seed,
									})
								),
								{ type: 'svg' }
							),
						}))
					),
				}))
			)
		),
	})),
]

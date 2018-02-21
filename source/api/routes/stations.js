import route from 'spirit-router'

// internal
import config from '../../../config.json'
import price from '../utilities/price'

export default [
	route.get('/api/v1/stations', () => ({
		status: 200,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(
			config.stations.map(({ seed, duration, value }) => ({
				duration,
				value: price(value),
			}))
		),
	})),
]

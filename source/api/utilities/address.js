import IOTA from 'iota.lib.js'

const iota = new IOTA({
	provider: 'https://iotick.smartfl.at/proxy',
})

const seed = iota.utils.toTrytes(
	'SWLPALVVAKWLVXCMXVCMQLIRHZMMMNWFDWSYHTFGWAQXVMEDERGMKTCRWZBYZFCEPFVHMVFHKSSPLZIDD'
)

const addresses = new Map()

export default async ({ amount, payload, seed }) => {
	console.log(seed)
	const address = addresses.has(seed)
		? addresses.get(seed)
		: await new Promise((resolve, reject) => {
				iota.api.getNewAddress(seed, (error, data) => {
					if (error) return reject(error)
					resolve(data)
				})
			})

	addresses.set(seed, address)

	return {
		address,
		amount,
		message: JSON.stringify(payload),
		tag: 'IOTICK9IS9THE9BEST9APP99999',
	}
}

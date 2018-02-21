import superagent from 'superagent'

let price = Number.POSITIVE_INFINITY

const getPrice = async () => {
	const { body: [{ price_eur }] } = await superagent.get(
		'https://api.coinmarketcap.com/v1/ticker/iota/?convert=EUR'
	)
	price = price_eur
	console.log(`fetched IOTA price: ${price}€`)
}
getPrice()

export default value => price * value

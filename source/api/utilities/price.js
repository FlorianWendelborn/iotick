import superagent from 'superagent'

const getPrice = async iota => {
	const { body: [{ price_eur }] } = await superagent.get(
		'https://api.coinmarketcap.com/v1/ticker/iota/?convert=EUR'
	)
	return price_eur
}

export default getPrice

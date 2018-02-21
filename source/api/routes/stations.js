import route from 'spirit-router'

// internal
import config from '../../../config.json'

export default [
	route.get('/api/v1/stations', () => ({
		status: 200,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(config.stations),
	})),
]

const a = {
	address:
		'DBPECSH9YLSSTQDGERUHJBBJTKVUDBMTJLG9WPHBINGHIFOSJMDJLARTVOXXWEFQJLLBINOHCZGYFSMUEXWPPMTOFW',
	amount: '',
	message: '',
	tag: 'ANDROID9WALLET9DONATION9999',
}

export function sendTransaction(seed, address, value, message, tag, callback) {
	console.log('sending transfer')
	iota.api.sendTransfer(
		seed,
		2,
		14,
		[
			{
				address: address,
				value: value,
				message: iota.utils.toTrytes(message),
			},
		],
		{},
		callback
	)
}

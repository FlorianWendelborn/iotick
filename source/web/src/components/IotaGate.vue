<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import IOTA from 'iota.lib.js'
import { seed } from '../../../../config'

export default {
	name: 'IOTA',
	data() {
		return {
			msg: { tessts: 'xx' },
		}
	},
	created() {
		var iota = new IOTA({
			provider: '/proxy',
		})

		function sendTransfer() {
			iota.api.sendTransfer(
				seed,
				2,
				14,
				[
					{
						address: ('', () => {}),
						value: 0,
						message: iota.utils.toTrytes('I am buying ticket XYZ'),
						tag: iota.utils.toTrytes('some tag'),
					},
				],
				{},
				function(error, success) {
					if (error) {
						console.error(error)
					} else {
						console.log(success)
					}
				}
			)
		}

		iota.api.getNodeInfo(function(error, success) {
			if (error) {
				console.error(error)
			} else {
				// sendTransfer();
				iota.api.getAccountData(seed, {}, test => {
					console.log(test)
				})
			}
		})
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>

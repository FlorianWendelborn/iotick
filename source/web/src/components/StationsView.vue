<template>
	<div class="stations-view__container">
		<div v-for="(station, index) in stations" :key="index">
			<h2 class="stations-view__heading--second" v-text="station.name" />
			<div class="container">
				<div class="columns">
					<div v-for="(ticket, ticketIndex) in station.tickets" :key="ticketIndex" class="column col-4">
						<h3 class="stations-view__heading--third">{{ showTime(ticket.duration) }}</h3>
						<h4 class="stations-view__heading--fourth">
							{{ ticket.iota }}<img src="https://cgi.cryptoreport.com/images/coins/miota.svg" style="height: 36px;margin-left: 6px; filter: invert(100%); transform: translate(0, 6.5px)">
						</h4>
						<h4 class="stations-view__heading--fourth">
							{{ ticket.amount.toFixed(2) }}€
						</h4>
						<div v-html="ticket.qr" style="max-width: 300px; margin:auto;"/>
					</div>
				</div>
			</div>
			<hr />
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'StationsView',
	data() {
		return {
			stations: null,
		}
	},
	created() {
		axios.get('/api/v1/stations').then(response => {
			this.stations = response.data
		})
	},
	methods: {
		showTime(time) {
			const weirdDict = {
				86400: '1 Day',
				604800: '1 Week',
				2628000: '1 Month',
			}
			return weirdDict[time] || '...'
		},
		ticketRepresentation(ticket) {
			return `${this.showTime(ticket.duration)}`
		},
	},
}
</script>

<style lang="scss" scoped>
.stations-view__container {
	text-align: center;
	font-size: 24px;
}

.stations-view__heading--second {
	font-size: 10vw;
}

.stations-view__heading--third {
	font-size: 5vw;
}

.stations-view__heading--fourth {
	font-size: 3vw;
}
</style>

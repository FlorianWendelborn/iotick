<template>
	<div>
		<div v-for="(station, index) in stations" :key="index">
			<h2 v-text="station.name" />
			<div v-for="(ticket, ticketIndex) in station.tickets" :key="ticketIndex">
				<h3 v-text="showTime(ticket.duration)"></h3>
				<div v-html="ticket.qr" style="max-width: 300px; margin:auto;"/>
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
	},
}
</script>

<style>

</style>

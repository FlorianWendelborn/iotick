<template>
  <div id="app">
		<div class="navbar">
			<div class="container">
				<div class="columns menu-links">
					<router-link class="column col-4" :to="'/'">
						Home
					</router-link>
					<router-link class="column col-4" :to="'/stations'">
						Stations
					</router-link>
					<router-link class="column col-4" :to="'/about-us'">
						About us
					</router-link>
				</div>
			</div>
		</div>
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style style="scss" scoped>
.menu-links a {
	height: 50px;
	text-align: center;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
}

.menu-links a:active {
	text-decoration: none;
}

.menu-links a:hover {
	text-decoration: none;
}

.menu-links a:visited {
	text-decoration: none;
}

.navbar {
	background: linear-gradient(to right, #292e49, #536976);
	height: 50px;
	width: 100vw;
}
</style>

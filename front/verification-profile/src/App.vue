<template>
	<div id="app">
		<c-profile v-if="!IS_EMPTY_PROFILES"/>
		<div v-else class="warning">
			Профайлы закончились, перезапустите docker и обновите страницу.
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import cProfile from '@/components/profile/c-profile'

export default {
  name: 'App',
  components: {
	  cProfile
  },
  computed: mapGetters('profile', ['IS_EMPTY_PROFILES']),
}
</script>

<style lang="scss">
@import '@/assets/scss/main';
#app {
	width: 100vw;
	height: 100vh;
	display: flex;
	background-color: #000;
}
.warning {
	color: #fff;
	margin: auto;
}
</style>

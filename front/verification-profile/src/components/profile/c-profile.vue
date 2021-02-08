<template>
	<div class="profile" v-if="IS_FETCHING">

		<c-personal :user="GET_PARAMETER_PROFILE('user')" />
		<c-request :locale="GET_PARAMETER_PROFILE('created_at')" />
		<c-comparison
			:photo="GET_PARAMETER_PROFILE('photo_prev')"
			:selfie="GET_PARAMETER_PROFILE('selfie_prev')"
		/>
		
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import cPersonal from '@/components/profile/inner-profile/c-personal'
import cRequest from '@/components/profile/inner-profile/c-request'
import cComparison from '@/components/profile/inner-profile/c-comparison'

export default {
	name: 'cProfile',
	components: {
		cPersonal,
		cRequest,
		cComparison,
	},
	computed: mapGetters('profile', ['IS_FETCHING', 'GET_PARAMETER_PROFILE']),
	methods: {
		...mapActions('profile', ['FETCH_PROFILE'])
	},
	created() {
		this.FETCH_PROFILE();
	}
}
</script>

<style lang="scss">
	.profile {
		flex: 0 1 38rem;
		height: 100%;
		max-height: 82.3rem;
		padding: 1rem;
		margin: auto;
		background-color: #dde;
		position: relative;

		display: flex;
		flex-direction: column;

		
		@media screen and (max-width: 823px) and (orientation: landscape) {
			flex: 0 1 100%;
		}
 	}
</style>
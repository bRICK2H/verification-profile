<template>
	<div class="personal-container">
		<div class="personal-box">
			<div class="user-row user-row--avatar">
				<img class="user-avatar" :src="user.avatar" alt="avatar">
			</div>
			<div class="user-row user-row--user-info">
				<div class="user-cell">
					<span class="user-name">
						{{ user.name }}
					</span>
					<span class="user-years">
						({{ user.years }})
					</span>
				</div>
				<span class="user-location-text user-row__user-location-text">
					{{ user.city }}
				</span>
				<span class="user-notify"></span>
			</div>
		</div>
		<div class="ban-box">
			<div class="ban-row ban-box__ban-row">
				<c-button
					:icons="{ type: [['fas', 'portrait'], ['fas', 'ban']], size: 'xs', color: '#fff' }"
					color-btn="#E48800"
					@click="GENERAL_REQUEST('ban-acc')"
				/>
				<c-button
					:icons="{ type: [['fas', 'mobile-alt'], ['fas', 'ban']], size: 'xs', color: '#fff' }"
					color-btn="#EC6459"
					@click="GENERAL_REQUEST('ban-dev')"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import cButton from '@/components/button/c-button'

export default {
	name: 'cPersonal',
	components: {
		cButton
	},
	props: {
		user: {
			type: Object,
			default: () => ({})
		}
	},
	methods: mapActions('profile', ['GENERAL_REQUEST'])
}
</script>

<style lang="scss">
.personal-container {
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
}
.personal-box {
	display: flex;
	align-items: center;
}
.ban-box {
	align-self: flex-end;
}
.user-row {

	&--avatar {
		flex: 0 0 5rem;
		margin-right: .5rem;
	}
	&--user-info {
		display: flex;
		flex-direction: column;
	}
	&__user-location-text {
		margin-bottom: .3rem;
	}
}
.ban-row {
	display: flex;
}
.user-avatar {
	width: 100%;
}
.user-name {
	font-size: 1.3rem;
	font-weight: 600;
	color: #667fa0;
}
.user-years {
	font-size: 1.3rem;
	color: #aaa;
}
.user-location-text {
	font-size: 1.1rem;
	color: #797979;
}
.user-notify {
	display: block;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	background: #5cc75c;
}
</style>
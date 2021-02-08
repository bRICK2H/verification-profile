<template>
	<div class="request-container">
		<font-awesome-icon :icon="['far', 'clock']" color="#E48800" size="1x" />
		<span class="request-name">Заявка,</span>
		<span class="request-locale">
			{{ locale | filterLocale}}
		</span>
	</div>
</template>

<script>
export default {
	name: 'cRequest',
	props: {
		locale: {
			type: String,
			required: true
		}
	},
	filters: {
		filterLocale(val) {
			const locale = new Date(val),
				{ day, month, year } = {
					day: locale.getDate(),
					month: locale.getMonth() + 1,
					year: String(locale.getFullYear()).split('').splice(2).join(''),
				},
				{ hour, minute } = {
					hour: locale.getHours(),
					minute: locale.getMinutes(),
				}

			return `${day}.${month}.${year} ${hour}:${minute}`;
		}
	},
}
</script>

<style lang="scss">
	.request-container {
		margin: 2rem auto 0;
		display: flex;
		align-items: center;

		@media screen and (max-width: 320px) {
			margin: 1rem auto;
		}
	}
	.request-name, .request-locale {
		font-size: 1.4rem;
		font-weight: 600;
		color: #E48800;

		@media screen and (max-width: 320px) {
			font-size: 1.2rem;
		}
		@media screen and (max-width: 823px) and (orientation: landscape) {
			font-size: 1.2rem;
		}
	}
	.request-name {
		margin: 0 1rem;
	}
</style>
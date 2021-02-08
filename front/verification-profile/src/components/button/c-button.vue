<template>
	<button class="button"
		:style="{
			backgroundColor: colorBtn,
			padding: icons.type.length < 2 ? '8px 0' : '5px 2px'
		}"
		v-on="$listeners"
	>
		<font-awesome-icon class="button__icon"
			v-for="(icon, i) of icons.type"
			:key="i"
			:icon="icon"
			:size="icons.size"
			:color="icons.color"
		/>
	</button>
</template>

<script>
export default {
	name: 'cButton',
	props: {
		icons: {
			type: Object,
			default: () => ({}),
		},
		colorIcon: {
			type: String,
			default: '#fff'
		},
		colorBtn: {
			type: String,
			default: '#000'
		}
	}
}
</script>

<style lang="scss">
	.button {
		width: 3.5rem;
		display: flex;
		border: none;
		outline: none;
		border-radius: .3rem;
		
		&__icon {
			margin: auto;
		}
	}
</style>
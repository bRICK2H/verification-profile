<template>
	<div class="comparison-container"
		:class="GET_CLASS_ENLARGE"
		@keydown.esc="closeEnlargePhotos"
		
	>
		<div class="btn-box comparison-container__btn-box">
			<div class="btn-row btn-row--left btn-box__btn-row">
				<c-button
					:icons="{ type: [['fas', 'user-shield']], size: 'xs', color: '#fff' }"
					color-btn="#6DBB4A"
					@click="GENERAL_REQUEST('verification')"
				/>
				<c-button
					:icons="{ type: [['far', 'window-close']], size: 'xs', color: '#fff' }"
					color-btn="#E48800"
					@click="GENERAL_REQUEST('cancel-verification')"
				/>
			</div>
			<div class="btn-row btn-box__btn-row">
				<c-button v-if="!IS_ENLARGE"
					:icons="{ type: [['far', 'eye']], size: 'xs', color: '#fff' }"
					color-btn="#41CAC0"
					@click="TOGGLE_ENLARGE_PHOTOS"
				/>
				<c-button v-else
					:icons="{ type: [['fas', 'times']], size: 'lg', color: '#fff' }"
					color-btn="transparent"
					@click="TOGGLE_ENLARGE_PHOTOS"
				/>
			</div>
		</div>

		<div class="photo-box">
			<div class="photo-row photo-box__photo-row">
				<h3 class="photo-row__title">Фото профиля</h3>
				<div class="photo-cell photo-row__photo-cell">
					<img class="photo-cell__img" :src="photo" alt="photo">
				</div>
			</div>
			<div class="photo-row photo-box__photo-row">
				<h3 class="photo-row__title">Селфи</h3>
				<div class="photo-cell photo-row__photo-cell">
					<img class="photo-cell__img" :src="selfie" alt="selfie">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import cButton from '@/components/button/c-button'

export default {
	name: 'cComparison',
	components: {
		cButton
	},
	props: {
		photo: {
			type: String,
			requred: true
		},
		selfie: {
			type: String,
			requred: true
		}
	},
	computed: mapGetters('profile', ['GET_CLASS_ENLARGE', 'IS_ENLARGE']),
	methods: {
		...mapActions('profile', ['TOGGLE_ENLARGE_PHOTOS', 'GENERAL_REQUEST']),
		closeEnlargePhotos() {
			if (this.IS_ENLARGE) this.TOGGLE_ENLARGE_PHOTOS();
		}
	}
}
</script>

<style lang="scss">
.comparison-container {
	margin: auto;

	@media screen and (max-width: 823px) and (orientation: landscape) {
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		position: relative;
	}

	&--enlarge {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;			
		position: absolute;
		top: 0;
		left: 0;
		animation: enlarge-container .3s forwards;

		@keyframes enlarge-container {
			100% { background-color: rgba(0,0,0, .9); }
		}

		.btn-row--left {
			display: none;
		}
		.btn-row {
			opacity: 0;
			position: absolute;
			animation: enlarge-btn .2s forwards;

			@keyframes enlarge-btn {
				0% { top: 30%; right: 20%; }
				100% { top: 0; right: 0; opacity: 1 }
			}

			@media screen and (max-width: 823px) and (orientation: landscape) {
				@keyframes enlarge-btn {
					0% { top: 40vh; right: 0; }
					100% { top: -3rem; right: 0; opacity: 1 }
				}
			}
		}
		.photo-box {
			border: none;

			@media screen and (max-width: 823px) and (orientation: landscape) {
				justify-content: center;
			}
		}
		.photo-row {
			&__title {
				font-size: 1.8rem;
				color: #fff;
			}
		}
		.photo-cell {
			animation: enlarge-cell .3s forwards;

			@keyframes enlarge-cell {
				100% { max-width: calc(50vh - (9rem / 2)); max-height: 100%; }
			}

			@media screen and (max-width: 823px) and (orientation: landscape) {
				@keyframes enlarge-cell {
					100% { max-width: calc(100vh - (9rem / 2)); max-height: 100%; }
				}
			}
		}
	}

	&__btn-box {
		margin: 0 0 1rem 0;

		@media screen and (max-width: 823px) and (orientation: landscape) {
			margin: 0 0 0 1rem;
		}
	}
}

.btn-box {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	@media screen and (max-width: 823px) and (orientation: landscape) {
		position: absolute;
		top: 3.2rem;
		right: 0;
		flex-direction: column-reverse;
	}

	&__btn-row {
		display: flex;

		@media screen and (max-width: 823px) and (orientation: landscape) {
			flex-direction: column;
		}
	}
}
.btn-row {
	&--left {
		@media screen and (max-width: 823px) and (orientation: landscape) {
			margin: 1rem 0 0;
		}
	}
}
.photo-box {
	border: .1rem solid #fff;
	border-radius: .3rem;

	@media screen and (max-width: 823px) and (orientation: landscape) {
		display: flex;
	}
	
	&__photo-row {
		padding: 1rem;

		&:nth-child(1) {
			padding: 1rem 1rem 0;

			@media screen and (max-width: 823px) and (orientation: landscape) {
				padding: 1rem 0 1rem 1rem;
			}
		}
	}
}
.photo-row {
	@media screen and (max-width: 823px) and (orientation: landscape) {
		display: flex;
		flex-direction: column;
	}

	&__title {
		font-size: 1.2rem;
		text-align: center;
		margin-bottom: 1rem;
		color: #797979;
	}
}
.photo-cell {
	max-width: 18.6rem;
	max-height: 27rem;
	margin: auto;

	&__img {
		width: 100%;
		height: 100%;
	}
}
</style>
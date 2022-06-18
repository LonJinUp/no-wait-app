<template>
	<view class="choose-wrapper bg">
		<login-header></login-header>
		<view class="shop-name">店舖: 吃茶三千</view>
		<view class="number-list">
			<view class="title">座位管理</view>
			<view class="items flex-bt" @click="choose(item.id)" v-for="item in list" :key="item.id" :class="[item.id == active ? 'active' : '']">
				<view class="left">{{item.label}}</view>
				<view class="right">{{item.num}}</view>
			</view>
			<view class="btn" @click="sure">確認</view>
			<view class="logout">退出</view>
		</view>
		<view class="alert flex-center" v-if="alert">
			<view class="content">
				<view class="title">请输入whatsapp</view>
				<input type="text" :value="whatsapp" placeholder="whatsapp" />
				<view class="btn-box flex-bt">
					<view class="item" @click="goto">確認</view>
					<view class="item" @click="sure">取消</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{label: 'A 組(座位)', num: '1-2', id: 1},
					{label: 'B 組(座位)', num: '3-4', id: 2},
					{label: 'C 組(座位)', num: '5-8', id: 3}
				],
				alert: false,
				active: '1',
				whatsapp: '',
			}
		},
		methods: {
			choose(id) {
				this.active = id
			},
			sure() {
				this.alert = !this.alert
			},
			goto() {
				this.$navGoto('/pages/choose/success')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.choose-wrapper{
		.alert{
			position: fixed;
			top: 0;
			left: 0;
			background: rgba(0,0,0,0.4);
			width: 100%;
			height: 100%;
			.content{
				width: 600rpx;
				// height: 400rpx;
				background: #FFFFFF;
				border-radius: 20rpx;
				box-sizing: border-box;
				padding-top: 30rpx;
				padding-bottom: 0px;
				.title{
					width: 100%;
					text-align: center;
					font-size: 38rpx;
					font-weight: bold;
				}
				input{
					width: 90%;
					margin: 0 auto;
					height: 70rpx;
					display: block;
					border: 2px solid #C0C0C0;
					border-radius: 10rpx;
					padding:0 10rpx;
					box-sizing: border-box;
					margin-top: 30rpx;
				}
				.btn-box{
					width: 100%;
					height: 100rpx;
					border-top: 1px solid #C0C0C0;
					margin-top: 30rpx;
					.item{
						width: 50%;
						line-height: 100rpx;
						text-align: center;
						&:nth-child(1){
							color: #0CA311;
							border-right: 1px solid #C0C0C0;
						}
						&:nth-child(2){
							color: #994861;
						}
					}
				}
			}
		}
		width: 100%;
		height: 100%;
		.shop-name{
			width: 622rpx;
			height: 134rpx;
			background: rgba(237, 237, 237, 0.43);
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx 24rpx 24rpx 24rpx;
			margin: 0 auto;
			text-align: center;
			font-size: 44rpx;
			font-weight: 400;
			color: #49779A;
			line-height: 134rpx;
		}
		.number-list{
			width: 622rpx;
			padding: 18rpx 42rpx;
			background: rgba(237, 237, 237, 0.43);
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx 24rpx 24rpx 24rpx;
			margin: 0 auto;
			box-sizing: border-box;
			margin-top: 16rpx;
			.title{
				font-size: 44rpx;
				font-weight: 400;
				color: #49779A;
				margin-bottom: 10rpx;
			}
			.items{
				width: 100%;
				height: 222rpx;
				box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 24rpx 24rpx 24rpx 24rpx;
				opacity: 1;
				border: 6rpx solid #537797;
				margin-bottom: 16rpx;
				box-sizing: border-box;
				padding: 0 60rpx;
				font-size: 36rpx;
				font-weight: 400;
				color: #49779A;
				&.active{
					border-color: #0CA311;
				}
			}
		}
		.btn{
			width: 100%;
			height: 102rpx;
			background: #0CA311;
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx;
			text-align: center;
			line-height: 102rpx;
			font-size: 36rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
		.logout{
			width: 100%;
			height: 102rpx;
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx;
			border: 4rpx solid #994861;
			margin-top: 20rpx;
			line-height: 102rpx;
			text-align: center;
			font-size: 36rpx;
			font-weight: 400;
			color: #9A4962;
			margin-bottom: 20rpx;
		}
	}
</style>

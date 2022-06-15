<template>
	<view class="choose-wrapper bg">
		<login-header></login-header>
		<view class="shop-name">店舖: 吃茶三千</view>
		<view class="number-list">
			<view class="title">座位管理</view>
			<view class="items flex-bt">
				<view class="left">A 組(座位)</view>
				<view class="right">1-2</view>
			</view>
			<view class="items flex-bt">
				<view class="left">B 組(座位)</view>
				<view class="right">3-4</view>
			</view>
			<view class="items flex-bt">
				<view class="left">C 組(座位)</view>
				<view class="right">5-8</view>
			</view>
			<view class="btn">確認</view>
			<view class="logout">退出</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.choose-wrapper{
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

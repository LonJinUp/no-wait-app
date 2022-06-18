<template>
	<view class="choose-wrapper bg">
		<login-header></login-header>
		<view class="number-list">
			<view class="success">
				<view class="icon flex-center">
					<image src="/static/images/success.png" mode=""></image>
				</view>
				<view class="name">已完成指示</view>
			</view>
			<view class="btn" @click="$navGoto('/pages/choose/index')">返回首頁</view>
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
			padding-bottom: 30rpx;
			.title{
				font-size: 44rpx;
				font-weight: 400;
				color: #49779A;
				margin-bottom: 10rpx;
			}
			.success{
				width: 100%;
				box-sizing: border-box;
				padding: 48rpx;
				border-radius: 10rpx;
				margin-bottom: 30rpx;
				.icon{
					width: 102rpx;
					height: 102rpx;
					background: #49779A;
					border-radius: 50%;
					margin: 0 auto;
					image{
						width: 80rpx;
						height: 80rpx;
					}
				}
				.name{
					font-size: 80rpx;
					font-weight: 400;
					color: #49779A;
					text-align: center;
					margin-top: 18rpx;
					width: 100%;
				}
			}
		}
		.btn{
			width: 100%;
			height: 102rpx;
			background: #49779A;
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx;
			text-align: center;
			line-height: 102rpx;
			font-size: 36rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
		.logout{
			width: 622rpx;
			margin: 0 auto;
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

<template>
	<view class="login-header-wrapper">
		<view class="flex-bt top">
			<view class="left">
				<image src="/static/images/logo-2.png" mode="widthFix"></image>
			</view>
			<view class="right flex-end">
				<view class="logo"></view>
				<view class="user">
					<view>你好! Jacky Lau</view>
					<view>會員積分:112</view>
				</view>
			</view>
		</view>
		<view class="ad-box flex-bt">
			<view class="left flex-start">已取得排隊票排隊編號<text>0</text></view>
			<view class="right flex-center">
				設定
				<image class="icon" src="/static/images/setting.png" mode=""></image>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.login-header-wrapper{
		box-sizing: border-box;
		padding: 30rpx;
		.top{
			.left{
				width: 280rpx;
				height: 90rpx;
				image{
					width: 100%;
					display: block;
				}
			}
			.right{
				flex: 1;
				color: rgb(73, 119, 154);
				.logo{
					width: 100rpx;
					height: 100rpx;
					background: #fff;
					border-radius: 50%;
					overflow: hidden;
					margin-right: 10rpx;
					image{
						width: 100%;
						height: 100%;
						display: block;
					}
				}
			}
		}
		.ad-box{
			margin-top: 20rpx;
			.left{
				height: 40rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #EB6503;
				text{
					width: 40rpx;
					height: 40rpx;
					background: #EB6503;
					opacity: 1;
					border-radius: 50%;
					display: block;
					overflow: hidden;
					margin-left: 10rpx;
					color: #FFFFFF;
					text-align: center;
					line-height: 40rpx;
				}
			}
			.right{
				width: 190rpx;
				height: 52rpx;
				box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 24rpx 24rpx 24rpx 24rpx;
				opacity: 1;
				border: 6rpx solid #537797;
				font-size: 28rpx;
				font-weight: 600;
				color: #49779A;
				text-align: center;
				line-height: 54rpx;
				.icon{
					width: 40rpx;
					height: 40rpx;
					margin-left: 6rpx;
				}
			}
		}
	}
</style>

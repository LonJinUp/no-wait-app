<template>
	<view class="info-box-wrapper">
		<view class="info" @click="$navGoto('/pages/choose/index')">
			<view class="top flex-bt">
				<view class="left">
					<view class="icon-box">
						<image v-if="info.icon" :src="info.icon" mode=""></image>
					</view>
					<view class="tips">{{info.title}}</view>
				</view>
				<view class="right">
					<image :src="info.qrcode" mode=""></image>
				</view>
			</view>
			<view class="bottom">{{info.tips}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'InfoBox',
		props: ['info']
	}
</script>

<style lang="scss" scoped>
	.info-box-wrapper{
		.info{
			width: 612rpx;
			background: rgba(237, 237, 237, 0.43);
			border-radius: 24rpx;
			box-shadow: 0rpx 2rpx 6rpx rgba(0, 0, 0, 0.16);
			margin: 0 auto;
			overflow: hidden;
			padding: 30rpx 30rpx;
			margin-bottom: 32rpx;
			.top{
				flex: 1;
				margin-right: 18rpx;
				.left{
					flex: 1;
					.tips{
						color: rgb(73, 119, 154);
						font-family: PingFang HK;
						font-size: 44rpx;
						font-weight: 400;
						line-height: 66rpx;
						text-align: center;
					}
					.icon-box{
						background: rgb(73, 119, 154);
						width: 100rpx;
						height: 100rpx;
						margin: 0 auto;
						border-radius: 50%;
		
					}
				}
				.right{
					width: 288rpx;
					height: 288rpx;
					image{
						width: 288rpx;
						height: 288rpx;
					}
				}
			}
			.bottom{
				color: rgb(73, 119, 154);
				font-family: PingFang HK;
				font-size: 28rpx;
				text-align: center;
				width: 100%;
				font-weight: 400;
				line-height: 28rpx;
				text-align: center;
				margin-top: 18rpx;
			}
		}
	}
</style>

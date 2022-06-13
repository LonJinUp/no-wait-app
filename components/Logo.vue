<template>
	<view class="logo-wrapper flex-bt">
		<view class="left">
			<image src="/static/images/logo.png" mode="widthFix"></image>
		</view>
		<view class="right">
			<image src="/static/images/logo-1.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.logo-wrapper{
		width: 686rpx;
		margin: 30rpx auto;
		margin-top: 0px;
		padding-top: 30rpx;
		.left{
			width: 294rpx;
			image{
				width: 100%;
				display: block;
			}
		}
		.right{
			width: 294rpx;
			image{
				width: 100%;
				display: block;
			}
		}
	}
</style>

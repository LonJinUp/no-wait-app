
/**
 * 提示方法
 * @param {String} title 提示文字
 * @param {String}  icon icon图片
 * @param {Number}  duration 提示时间 
 */
export function toast(title, icon = 'none', duration){
	uni.showToast({
	    title,
		icon,
	    duration: 1500
	})
}
/**
 * 页面跳转
 * @param {String} url  转跳路径
 * @param {String} type 转跳方式
**/
export function navGoto(url, type = 'navigateTo') {
	type == 'navigateTo' &&  uni.navigateTo({url})
	type == 'redirectTo' &&  uni.redirectTo({url})
	type == 'reLaunch' &&  uni.reLaunch({url})
	type == 'switchTab' &&  uni.switchTab({url})
	type == 'navigateBack' &&  uni.navigateBack({delta:url})
}

/**
 * 金额转化 分转元
 * @param {Number | String} amount  金额
**/
export function amountConversion(amount) {
	return (Number(amount) / 100).toFixed(2)
}

/**
 * 便利数组 通过 item 中的key 赋值对应的value
 * @param {Array} array 数组
 * @param {Object} data value所在的对象
 * @param {String} value 把找到的值赋值到哪里去 默认value
 * @param {Object} exitData value所在的对象（如果在 data 中没有找到，会在 exitData 中继续寻找）
 * @param {String} empty 如果没找到 || 值为null 时候显示值 默认 ‘--’
**/
export function formatConfig(array,data,exitData,value,empty) {
    !value && (value='value')
    !empty && (empty='--')
    array && array.length && array.map((item)=>{
      item.clickFun && Object.prototype.toString.call(item.clickFun) === '[object Object]' && item.clickFun.key && (item.clickFun.value = data[item.clickFun.key])
      if(Array.isArray(item.key)){
          item.key.forEach((child,childIndex)=>{
            Array.isArray(item.value) && !exitData &&  data[child] && (item.value.push(data[child]))
            Array.isArray(item.value) && exitData && exitData[child] && (item.value.push(exitData[child]))
            !Array.isArray(item.value) && !exitData && (item.value = !childIndex ? ( data[child] ?  data[child] : empty) : item.value + item.andString + ( data[child] ?  data[child] : empty))
            !Array.isArray(item.value) && exitData && (item.value = !childIndex ? ( exitData[child] ?  exitData[child] : empty) : item.value + item.andString + ( exitData[child] ?  exitData[child] : empty))
          })
          Array.isArray(item.value) && item.format && (item.value = item.value.map((child)=>{return item.format(child)}))
      }else{
          !exitData && (item[value] = data[item.key])
          exitData && (item[value] = data[item.key] || exitData[item.key])
          item.original = item[value]
          item[value] && item.format && (item[value] = item.format(item[value]))
          value=="value" && !item[value] && (item[value] = empty)
      }
      return item
    })
    return array
}

/**
 * 脱敏
 * @param {String} value 要脱敏的值
 * @param {Number} num 前面要保留几位
**/
export function encryption(value,num) {
	if (!value) { return }
	value && (value = String(value))
	let temp = (value.length - num - 4 )
	let str = ''
	for(let i=1; i<= temp; i++){
		str += '*'
	}
	return value ? value.slice(0,num) + str + value.slice(-4) : ''
}

/**
 * 获取url中参数 
 * @param {String} url url
 * @param {String} name key
**/
export function getUrlCode(url, name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
	var r = url.split('?')[1].match(reg)
	if (r != null) return unescape(r[2])
	return null;
}
/**
 * 保存图片到本地
 * @param {String} filePath 图片路径
 **/
export function saveImage(_this,filePath) {
	if(!filePath) return false;
	uni.saveImageToPhotosAlbum({
		 filePath,
		 success:res=>{
			_this.$toast('图片保存成功', 'success') 
		 },
		 fail:err=>{
		 	if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
			  uni.showModal({
				title: '提示',
				content: '需要您授权保存相册',
				showCancel: false,
				success:modalSuccess=>{
				  uni.openSetting({
					success(settingdata) {
					  if (settingdata.authSetting['scope.writePhotosAlbum']) {
						uni.showModal({
						  title: '提示',
						  content: '获取权限成功,再次点击图片即可保存',
						  showCancel: false,
						})
					  } else {
						uni.showModal({
						  title: '提示',
						  content: '获取权限失败，将无法保存到相册哦~',
						  showCancel: false,
						})
					  }
					},
					fail(failData) {
					  console.log("failData",failData)
					},
				  })
				}
			  })
			}							 
		 },
	})
}

/**
 * 根据 value 找到 字典中对应的 key(label、name)
 * @param {Array} MinixArray 枚举字典
 * @param {Number || string} val value值
 **/
export function getEnumSelectByValue(MinixArray, val) {
	if (val === undefined || val === null) {
		return ''
	}
	let name = ''
	MinixArray.forEach((item, index) => {
		if (item.value === val || item.VALUE === val || item.id === val) {
			name = item.name || item.NAME || item.label || item.LABEL;
		}
	});
	return name
}

/**
 * 主要用于多条数据验证 配合 checkFormRules.js 使用
 * @param {String} val 提示语 
*/
export function checkFormToast(val) {
	let message = []
	for(let val of arguments) {
		val && message.push(val)
	}
	if(message.length){
		toast(message[0])
		return false
	}else{
		return true
	}
}

/**
 * @param {String} phoneNumber 拨打电话号码
 */
export function callPhone(phoneNumber) {
	uni.makePhoneCall({
		phoneNumber,
	})
}

/**
 * @param {String} val
 */
export function formatDate(val) {
  return `${val.slice(0, 4)}-${val.slice(4, 6)}-${val.slice(6)}`
}

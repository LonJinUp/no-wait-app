
import {toast} from './utils'
import {BASE_URL, APPID} from '@/config/index'
const baseRequest = async (url, method, data, loading = true) =>{
	return new Promise((reslove, reject) => {
		if(loading){
			uni.showLoading({
			    title: 'loading'
			})
		}
		uni.request({
			url: BASE_URL + url,
			method: method || 'GET',
			header: header,
			timeout: 10000,
			data: data || {},
			success: (successData) => {
				const res = successData.data
				 uni.hideLoading()
				if(successData.statusCode == 200){
					reslove(res)
				}else{
					toast('网络连接失败，请稍后重试')
					reject(res)
				}
			},
			fail: (msg) => {
				 uni.hideLoading()
				toast('网络连接失败，请稍后重试')
				reject(msg)
			}
		})
	})
}

const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	request[method] = (api, data, loading) => baseRequest(api, method, data, loading)
})

export default request
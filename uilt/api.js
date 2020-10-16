const BASE_URL = "http://localhost:8082"
export const myRequest = (options) => {
	// 异步处理的封装通过Promise去处理
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (res.data.status !== 0) {
					return uni.showToast({
						// 显示消息提示框。
						title: '获取数据失败'
					});
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					// 显示消息提示框。
					title: '请求接口失败'
				});
				reject(err)
			}
		})
	})
}

// myRequest({
//     url:'/api/getlunbo',
//     method:"POST",
//     data:{
        
//     },
// })

// const BASEA_URL = "http://localhost:3000"
// export const mtRequest = (options) => {
// 	// 异步处理的封装通过Promise去处理
// 	return new Promise((resolve, reject) => {
// 		uni.request({
// 			url: BASEA_URL + options.url,
// 			method: options.method || 'GET',
// 			data: options.data || {},
// 			success: (res) => {
// 				// if (res.data.status !== 0) {
// 				// 	return uni.showToast({
// 				// 		// 显示消息提示框。
// 				// 		title: '获取数据失败'
// 				// 	});
// 				// }
// 				resolve(res)
// 			},
// 			fail: (err) => {
// 				uni.showToast({
// 					// 显示消息提示框。
// 					title: '请求接口失败'
// 				});
// 				reject(err)
// 			}
// 		})
// 	})
// }

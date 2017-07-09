/**
 * @fileOverview 微信小程序的入口文件
 */

var config = require('./config');

App({
	/**
	 * 小程序初始化时执行，我们初始化客户端的登录地址，以支持所有的会话操作
	 */
	onLaunch() {
		// 引入 BaaS SDK
		require('./utils/sdk-v1.0.5.js')

		// 从 BaaS 后台获取 ClientID
		let clientId = '8abe3eed103a8d831690'
        wx.BaaS._config.DEBUG =true
        console.log(wx)
		var ret = wx.BaaS.init(clientId)
        console.log(ret)
        // 微信用户登录小程序
        wx.BaaS.login().then((res) => {
            console.log(res)
            // 登录成功
        }, (err) => {
            console.log(err)
            // 系统级错误
        })
        wx.request({
            url: 'https://1351598279.appservice.open.weixin.qq.com',
            success:function(res){
                console.log(res)
            },
            fail:function(res){
                console.log(res)
            }
        })
        // wx.login({
        //     success: function (res) {
        //         if (res.code) {
        //             //发起网络请求
        //             wx.request({
        //                 url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + config.appid+'&secret='+config.appsecrect+'&js_code='+res.code+'&grant_type=authorization_code',
        //                 data: {
        //                     code: res.code
        //                 }
        //             })
        //         } else {
        //             console.log('获取用户登录态失败！' + res.errMsg)
        //         }
        //     }
        // });
	}
});
Page({
	data: {
		poster: 'http://pic.pimg.tw/pam86591/1408719752-3322564110_n.jpg',
		name: 'Sugar',
		author: 'Maroon 5'
	},
	onShow:function(){
		let tableID  = 157;
		let objects = { tableID };
		wx.BaaS.getRecordList(objects).then( (res) => {
		  // success
		  console.log(res);
		}, (err) => {
		  // err
		})
	},
	audioPlay: function() {
		this.setData({
			action: {
				method: 'play'
			}
		});
	},
	audioPause: function() {
		this.setData({
			action: {
				method: 'pause'
			}
		});
	},
	audioPlaybackRateSpeedUp: function() {
		this.setData({
			action: {
				method: 'setPlaybackRate',
				data: 2 //加快速度
			}
		});
	},
	audioPlaybackRateSlowDown: function() {
		this.setData({
			action: {
				method: 'setPlaybackRate',
				data: 0.5 //小于零放慢速度
			}
		});
	},
	audio14: function() {
		this.setData({
			action: {
				method: 'setCurrentTime',
				data: 14
			}
		});
	},
	audioStart: function() {
		this.setData({
			action: {
				method: 'setCurrentTime',
				data: 0
			}
		});
	}
})

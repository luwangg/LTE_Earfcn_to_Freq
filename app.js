//app.js
App({
  /*
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
  */
  /*
  app.json
  ,
  "tabBar": {
    "list": [ {
      "pagePath": "pages/dBmW/dBmW",
      "text": "常用换算"
    },{
      "pagePath": "pages/logs/logs",
      "text": "logs"
    }]
  }
  */
})
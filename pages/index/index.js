//index.js
//获取应用实例
var app = getApp()
var flag = true
var color
var focus
var inputContent = {}  

Page({
  data: {
    motto: 'Hello World',
    userInfo: {} ,
    color: "window",
    focus: false,
    //inputValue: '',
    inputContent: {}

  },
  bindChange: function(e) {
    inputContent[e.currentTarget.id] = e.detail.value
  },
  click:function() {
    console.log("点击了文字");
    if(flag){
      color = "window-red";
      flag = false;
    }else{
      color = "window";
      flag=true;
    }
    this.setData({
      color
    });
  },
  //事件处理函数
    bindViewTap: function() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
    onLoad: function () {
      console.log('onLoad')
      var that = this
      //调用应用实例的方法获取全局数据
      app.getUserInfo(function(userInfo){
        //更新数据
        that.setData({
          userInfo:userInfo
        })
      })
    } ,
    bindButtonTap: function() {
        this.setData({
          focus: true
        })
    },
    bindKeyInput: function(e) {
    this.setData({
        inputValue: e.detail.value
      })
      },
    bindReplaceInput: function(e) {
      var value = e.detail.value
      var pos = e.detail.cursor
      if(pos != -1){
        //光标在中间
          var left = e.detail.value.slice(0,pos)
        //计算光标的位置
          pos = left.replace(/11/g,'2').length
      }
      //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
      return {
          value: value.replace(/11/g,'2'),
          cursor: pos
      }
      //或者直接返回字符串,光标在最后边
      //return value.replace(/11/g,'2'),
    },
    bindHideKeyboard: function(e) {
      if (e.detail.value === '123') {

    //收起键盘

    wx.hideKeyboard()
      }
    }
    
})

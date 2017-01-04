// pages/movie/movie.js
var API_URL = "https://api.douban.com/v2/movie/subject/";
Page({
  data:{
    movie:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: API_URL+options.id,
      data: {},
      // 设置请求的 header
      header:{
        "Content-Type":"json"
      },
      success: function(res){
        // success
        that.setData({
          movie:res.data
        })

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
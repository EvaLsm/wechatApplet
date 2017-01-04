var API_URL = "https://api.douban.com/v2/movie/top250";
Page({
  data:{
    movies:[]
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.showToast({
      title:"加载中...",
      icon:"loading",
      duration:10000
    });
    wx.request({
      url: API_URL,
      data: {},
       // header: {}, // 设置请求的 header
      header:{
        "Content-Type":"json"
      },
      success: function(res){
        wx.hideToast();
        var data = res.data;        
        that.setData({
          title:data.title,
          movies:data.subjects
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })


  },
 
})
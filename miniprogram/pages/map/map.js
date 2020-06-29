// pages/map/map.js
Component({
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      this.setData({
        jingdu:this.data.markers[0].longitude,
        weidu:this.data.markers[0].latitude,
        images:this.data.markers[0].images
      })
    },
    moved: function () { },
    detached: function () { },
  },
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    jingdu:118.995084,
    weidu:24.953015,
    markers:[{
      id:0,
      latitude:24.962077,
      longitude:118.981967,
      title:"美术馆",
      images:['https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg']
    },{
      id:1,
      latitude:24.965663,
      longitude:118.990531,
      title:"林场",
      images:["https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg",],
    },{
      id:2,
      latitude:24.963611,
      longitude:119.004765,
      title:"填海地",
      images:['https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'],
    },{
      id:3,
      latitude:24.956958,
      longitude:119.006438,
      title:"后海沙滩",
      images:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'],
    },{
      id:4,
      latitude:24.958339,
      longitude:119.030643,
      title:"风车岛",
      images:['https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'],
    },{
      id:5,
      latitude:24.944551,
      longitude:119.004115,
      title:"南华寺",
    }],
    images:['https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'],
  },
  methods:{
    tabsChange:function(event){
      this.setData({
        jingdu:this.data.markers[event.detail.name].longitude,
        weidu:this.data.markers[event.detail.name].latitude,
        images:this.data.markers[event.detail.name].images
      })
    },
    markertap:function(e){
      console.log(e.detail)  
    },
    imageClick:function(){
      wx.previewImage({
        urls:this.data.images
      });
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
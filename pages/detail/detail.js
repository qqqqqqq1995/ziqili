// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1,
      // 是否显示左上角胶囊按钮 1 显示 0 不显示
      title: '教程搜索啊啊啊啊啊啊啊' // 导航栏 中间的标题
    },
    // 教程信息
    tutorial: {
      title: "房屋刷新",
      videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      materialPackage: [
        {
          title: "工具包",
          materialList: [
            {
              "key": "滚筒",
              "value": "1把"
            },
            {
              "key": "滚筒",
              "value": "1把"
            },
            {
              "key": "滚筒",
              "value": "1把"
            },
            {
              "key": "滚筒",
              "value": "1把"
            },
          ]
        },
        {
          title: "材料包",
          materialList: [
            {
              "key": "滚筒",
              "value": "1把"
            },
            {
              "key": "滚筒",
              "value": "1把"
            },
            {
              "key": "滚筒",
              "value": "1把"
            },
            {
              "key": "滚筒",
              "value": "1把"
            },
          ]
        },
      ]
    }

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
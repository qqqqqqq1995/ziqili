// pages/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1,
      // 是否显示左上角胶囊按钮 1 显示 0 不显示
      title: '教程搜索' // 导航栏 中间的标题
    },
    // 搜索历史数据
    searchHistoryData: [
      "测试啊",
      "测试啊",
      "测试啊",
      "测试啊",
      "测试啊",
    ],
    // 搜索框获取焦点
    searchFocus: false,
    // 搜索返回数据
    resultData: [
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
      {
        coverPictureUrl: "https://hbimg.huabanimg.com/2cde37cfa62476b0153a13e1e6f46cc1273abe3b363e-inUTvh_fw658",
        title: "墙面刷新",
        desc: "自己动手丰衣足食呀",
        watch: 100,
      },
    ],
    // 当前页数
    page: 1,
    // 每页返回数据数
    size: 20,
    // 搜索状态 0搜索页，其他结果
    searchStatus: 0,
    // 搜索框里的数据
    searchData: "",
  },
  // 点击搜索按钮方法
  searchConfirm: function(e){
    this.search();
  },
  // 搜索方法
  search: function(value){
    this.setData({
      searchStatus: 1,
      searchFocus: false,
    });
  },
  // 搜索框获取焦点方法
  bindfocus: function(e){
    this.setData({
      searchStatus: 0,
      searchFocus: true,
    });
  },
  // 搜索框失去焦点方法
  bindblur: function(e){
    this.setData({
      searchFocus: false,
    });
  },
  // 取消搜索
  cancelSearch: function(){
    this.setData({
      searchStatus: 1,
      searchFocus: false,
    });
  },
  // 搜索输入
  searchInput: function(e){
    this.setData({
      searchData: e.detail.value,
    });
  },
  // 清空搜索框
  clearSearch: function(){
    this.setData({
      searchData: "",
    });
  },
  searchFocus: function (){
    if(this.data.searchFocus){
      return;
    }
    this.setData({
      searchFocus: true,
    });
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
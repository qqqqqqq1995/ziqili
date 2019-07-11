const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 卡片数据
    cardData: [],
    // 当前页数
    page: 1,
    // 每页返回数据数
    size: 20,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  // 滑动到底部加载
  onReachBottom: function (){
    this.getData();
  },
  getData: function (){
    var imgs = [
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1409185525,4059560780&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=777075993,2126273204&fm=11&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3825727093,2830650732&fm=11&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2379065095,654347953&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2749679283,2472217536&fm=11&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=677128138,409184861&fm=11&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1884091074,3049103326&fm=26&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2069544162,3090555174&fm=11&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3328655038,3143543956&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3953624046,2332872335&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=717009955,687560133&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4243037288,2388509769&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2644451528,4180971732&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2658655215,924706045&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=400545645,1325440240&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2357555025,1781222560&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1604156508,3282489713&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=380663325,2271064034&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=174537541,3462862985&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1752649241,364583051&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2890516059,4166188770&fm=27&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2435144503,200941795&fm=11&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=877833827,2847590581&fm=26&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4053642431,248486335&fm=27&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2914607659,905736210&fm=11&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1629456501,1514429218&fm=26&gp=0.jpg',
    ];

    let { page, size, cardData} = this.data;
    var tmpArr = [];
    for (let i = 1; i <= size; i++) {
      var index = parseInt(Math.random() * 100) % imgs.length;
      const id = (page - 1) * size + i;
      tmpArr.push({
        id,
        coverUrl: imgs[index],
        title: "哈".repeat(index) + id
      })
    }
    cardData = cardData.concat(tmpArr)
    this.setData({
      cardData,
      page: page + 1
    })
    // console.log(this.data);
  },
  // 跳转到搜索页
  goSearch: function (){
    wx.navigateTo({
      url: '/pages/search/search',
    });
  },
  cardItemTap: function (e){
    const id = e.detail.card_id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },


})
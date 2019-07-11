
// 瀑布流列数
const _colunms = 2;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataList: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        const rawData = {};
        const orderArr = [];
        newVal.forEach(item => {
          orderArr.push(item.id);
          rawData[item.id] = item;
        })
        this.setData({
          rawData,
          orderArr
          // renderList/
        }, this._getRenderList.bind(this, true))
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 分组数据
    renderList: [],
    rawData: {},
    orderArr: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取分组数据
    _getRenderList: function (shouleRecomputeHeight = false){
      const { orderArr, rawData} = this.data;
      // initial render Arr
      const renderList = []
      const arrLength = _colunms;
      for (let i = 0; i < arrLength; i++) {
        renderList[i] = []
      }
      const heightArr = Array(arrLength).fill(0)
      let renderIndex;
      orderArr.forEach( item => {
        renderIndex = heightArr.indexOf(Math.min.apply(null, heightArr))
        const height = rawData[item]['_height'] || 1;
        renderList[renderIndex].push(item)
        console.log(heightArr, height, item, renderIndex)
        heightArr[renderIndex] += height
      })
      if (shouleRecomputeHeight){
        console.log("_getRenderList111")
        this.setData({
          renderList
        }, () => {
          orderArr.forEach(item => {
            const height = rawData[item]['_height']
            console.log(height)
            if (!height) {
              wx.createSelectorQuery().in(this).select('#card-' + item).boundingClientRect(function (rect) {
                // 节点的高度
                rawData[item]['_height'] = rect.height
                console.log(rect)
              }).exec()
            }
          })
          this.setData({
            rawData
          }, this._getRenderList )
        })
      } else {
        console.log("_getRenderList222")
        this.setData({
          renderList
        })
      }
      
    },
    cardItemTap: function (e){
      const card_id = e.currentTarget.dataset.cardId
      this.triggerEvent('cardItemTap', { card_id })
    },
    onload: function(e){
      const card_id = e.currentTarget.dataset.cardId
      wx.createSelectorQuery().in(this).select('#card-' + card_id).boundingClientRect(function (rect) {
        // 节点的高度
        console.log(rect)
      }).exec()
    }
  }
})

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataList: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        if (newVal.length === 0){
          return
        }
        this.setData({
          cacheData: newVal
        })
        this._setData()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 分组数据
    renderList: [[], []],
    // 数据源
    rawData: {},
    // 缓存数据
    cacheData: [],
    // 高度数组
    heightArr: [0, 0]
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
    // 图片加载完成方法
    _coverOnload: function(e){
      const { rawData } = this.data
      const id = e.currentTarget.dataset.id
      //设置元素为显示
      rawData[id]['show'] = true
      this.setData({
        rawData
      })
      this._setNextCard(id)
    },
    // 获取卡片宽度
    _getCardWidht: function (id){
      return new Promise((resolve, reject) => {
        wx.createSelectorQuery().in(this).select('#card-' + id).boundingClientRect(function (rect) {
          // 节点的高度
          // console.log(rect)
          resolve({ height: rect.height })
        }).exec()
      })
    },
    // 设置下一张卡片
    _setNextCard: function (id){
      const { heightArr, rawData } = this.data
      // 添加上一张卡片宽度到data
      const heightPromise = this._getCardWidht(id)
      heightPromise.then(res => {
        // 获取到上一张卡片的宽度
        const height = res.height
        heightArr[rawData[id]._renderIndex] += height
        this._setData()
      })
      

    },
    // 放入一个数据
    _setData: function (){
      const { heightArr, renderList, cacheData, rawData } = this.data
      if(cacheData.length === 0){
        this.triggerEvent('changeReachBottom')
        return
      }
      // 获取render数据索引
      const renderIndex = heightArr.indexOf(Math.min.apply(null, heightArr))
      // 获取到新数据先放进去一个
      const data = cacheData.shift()
      renderList[renderIndex].push(data.id)
      data._show = false
      data._renderIndex = renderIndex
      rawData[data.id] = data
      this.setData({
        renderList,
        rawData
      })
    }
  }
})

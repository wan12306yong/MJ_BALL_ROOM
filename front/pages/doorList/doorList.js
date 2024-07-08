// index.js
// 获取应用实例
const app = getApp()
var http = require('../../utils/http');
var util1 = require('../../utils/util.js');

Page({
  data: {
    appName: app.globalData.appName,
    statusBarHeight: '',
    titleBarHeight: '',
    isMap: false,
    bannershowlist:[],//banner数组
    MainStorelist:[],//列表数组
    cityName: '选择城市',
    name: '', //搜索关键词
    lat: '', 
    lon: '', 
    markers: [],
    store: '', //地图上方展示的门店详情
    storeId:'',
    // isLogin:app.globalData.isLogin,
    userId: '', //管理员代下单用户id
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    let that = this;
    // this.setData({
    //     pageNo: 1,
    //     canLoadMore:true,
    //     MainList:[]
    // })
    this.getMainListdata('refresh');
    wx.stopPullDownRefresh();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    let that = this;
    return {
      title: that.appName,
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 分享失败
      },
    }
  },
  onLoad(options) {
    this.data.userId = options.userId ? parseInt(options.userId) : ''
    var that = this;
    if(options.storeId){
      that.setData({
        storeId: options.storeId
      });
    }
    this.setData({
      statusBarHeight: wx.getStorageSync('statusBarHeight'),
      titleBarHeight: wx.getStorageSync('titleBarHeight'),
      // cityName: wx.getStorageSync('cityName') ? wx.getStorageSync('cityName') : ''
    })
    that.getLocation();
    that.getBannerdata();
    // that.getMainListdata('refresh');
    // 实例化API核心类
    // qqmapsdk = new QQMapWX({
    //   key: 'FQGBZ-OY4CQ-XM35H-BWLYV-2U2V2-SRBZ6'
    // });
  },
  goStore(e){
    var storeId = e.currentTarget.dataset.storeid
    console.log('门店选择页面的id='+storeId)
    if(storeId){
      // 设置参数
      wx.setStorageSync('global_store_id',storeId);
    }
    wx.switchTab({
      url: '/pages/index/index'
    });
  },
  goLocation(){
    var that = this;
    wx.navigateTo({
      url: '../location/location',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        pageDataList: function(data) {
          //console.log('页面B触发事件时传递的数据1：',data)
          that.setData({
            cityName: data
          });
          // wx.setStorageSync('cityName', data)
          that.getLocation();
          // that.getBannerdata();
          that.getMainListdata();
        },
      }
    })

  },

  //点击地图
  goMapSeach(){
    this.setData({
      isMap: true
    })
    this.setData({name:''})
    this.getMainListdata()
  },
  goListSeach(){
    this.setData({
      isMap: false
    })
    this.setData({name:''})
    this.getMainListdata()
  },
  //充值
  goRecharge(e){
    var that = this;
    var storeId = e.currentTarget.dataset.storeid
    if(app.globalData.isLogin){
      wx.navigateTo({
        url: '../recharge/recharge?storeId='+storeId,
      })
    }else{
      that.gotologin();
    }
  },
  goTencentMap(e){
    var store = e.currentTarget.dataset.info
    this.goMap(store)
  },
  // 打开地图
  goMap(store) {
    let that = this
    wx.openLocation({
      latitude: store.lat,
      longitude: store.lon,
      name: store.storeName,
      address: store.address,
      scale: 28
    })
  },
  goDoorDetail(){
    wx.navigateTo({
      url: '../doorDetail/doorDetail',
    })
  },
  //到登录界面
  gotologin(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  //获取列表数据
  getMainListdata:function(e){
    var that = this;
    let message = "";
    if (e == "refresh") { //刷新，page变为1
      message = "正在加载"
      that.setData({pageNo:1})
    }
    //if (app.globalData.isLogin) 
    {
      http.request(
        "/member/index/getStoreList",
        "1",
        "post", {
          "pageNo": 1,
          "pageSize": 20,
          "cityName": that.data.cityName,
          "lat": that.data.lat,
          "lon": that.data.lon,
          "name": that.data.name
        },
        app.globalData.userDatatoken.accessToken,
        message,
        function success(info) {
          if (info.code == 0) {
            // let list = info.data.list
            let   list=
            [
                {
                  "storeId" : 12,
                  "storeName" : "棋牌室模板A",
                  "cityNname" : "成都",
                  "content" : null,
                  "headImg" : "https:\/\/images.scyanzu.com\/7c0a2f81a629e1c1e8324890d0e8a31ba00075f5e59316671ab6e859446546ec.png",
                  "storeEnvImg" : "https:\/\/images.scyanzu.com\/b4bccfc6701fcd58be44ae93c3b5664fe64ffd80c2ab511d473172445a9c8a3e.png",
                  "bannerImg" : "https:\/\/images.scyanzu.com\/b4bccfc6701fcd58be44ae93c3b5664fe64ffd80c2ab511d473172445a9c8a3e.png",
                  "notice" : "15675555180",
                  "lat" : 30.757349,
                  "lon" : 104.865837,
                  "address" : "成都市锦江区人民南路一段",
                  "qrCode" : null,
                  "btnImg" : "https:\/\/images.scyanzu.com\/16bc66daaa9c537ec0f5dd3ddaac4fde368e151c1dac496e867fd8742b83beb7.png",
                  "tgImg" : "https:\/\/images.scyanzu.com\/ba7fc61df503ef9d49d16a5fad8280d11553145306a8277c4f25e644f5e90200.png",
                  "openImg" : "https:\/\/images.scyanzu.com\/cd1d29157414e8a3ea368f93ecd1dadeab006b7171b6b4388857915f3bfb48d1.png",
                  "wifiImg" : "https:\/\/images.scyanzu.com\/36f20e97768e981ef01d89b9a9014a02ad24578116eae65584220d53c1439f35.png",
                  "kfImg" : "https:\/\/images.scyanzu.com\/fdef2ea3aaf4e8c8ba37670ea0c193def4a73e9cafb5d8a46f61ea299100c173.png",
                  "czImg" : "https:\/\/images.scyanzu.com\/7c6a14ee3a85621119be53f8c8babfd5bba8c114c5f2f52f799ecfc2e880d19d.png",
                  "qhImg" : "https:\/\/images.scyanzu.com\/71aee9adc07b007f09d6ee8e82534a46c5c9dd69faefb5026619b9a3aec3e3fa.png",
                  "clearOpen" : 1,
                  "clearTime" : 10,
                  "showTxPrice" : 1,
                  "txStartHour" : 22,
                  "txHour" : 9,
                  "delayLight" : 1,
                  "workPrice" : 1,
                  "orderDoorOpen" : 1,
                  "status" : 0,
                  "wifiInfo" : "CMCC 密码8个8",
                  "label" : null,
                  "kefuPhone" : "15675555180",
                  "orderWebhook" : null,
                  "gameWebhook" : null,
                  "douyinPoiId" : null,
                  "roomNum" : 1,
                  "totalMoney" : 0.00,
                  "totalWithdrawal" : 0.00,
                  "creator" : "250",
                  "createTime" : "2024-04-04 22:27:39",
                  "updater" : "450",
                  "updateTime" : "2024-04-09 09:15:39",
                  "deleted" : 0,
                  "tenantId" : 150
                },
                {
                  "storeId" : 13,
                  "storeName" : "台球模板",
                  "cityName" : "成都",
                  "content" : null,
                  "headImg" : "https:\/\/images.scyanzu.com\/a6c6657cd2ec8df8f9acb35baa5c215e4ed03c6accd10d18e95fefb1b51879df.png",
                  "storeEnvImg" : "https:\/\/images.scyanzu.com\/4c5a2994b028f9d6704630981acb189e658b40654f42eec204482101abfc266c.png",
                  "bannerImg" : "https:\/\/images.scyanzu.com\/713111631d5f2053c9d8936d8542633e5ff98126deffae1bf917bc545755d7b7.png",
                  "notice" : "15675555180",
                  "lat" : 30.657349,
                  "lon" : 104.065837,
                  "address" : "四川省成都市人民南路一段86号",
                  "qrCode" : null,
                  "btnImg" : "https:\/\/images.scyanzu.com\/02abf4cab9d662c3f19458cab370a22183d1752f43c1e81e6fb6eed4d8a48ea0.png",
                  "tgImg" : "https:\/\/images.scyanzu.com\/fb0ec0c3dcfbe274f6b06e894ff847337d483fce7b2688a7721b760575aa2b06.png",
                  "openImg" : "https:\/\/images.scyanzu.com\/81777341ea0dd1973a32d34f7ea0cd4feecd95aabe6ce094f9da4b050a88ba67.png",
                  "wifiImg" : "https:\/\/images.scyanzu.com\/a6c21614aa4fa52095dd75e390da11c356ce72399c46f220122d9d147bdf51e7.png",
                  "kfImg" : "https:\/\/images.scyanzu.com\/0f4dfebc836612039666d95e0f881c5ffcd1b3b246c70397e593b68a7c012db5.png",
                  "czImg" : "https:\/\/images.scyanzu.com\/95a6e5caa94f4ac83a7c385edfeb65cde566a1da04bdd7c2b08793caac873743.png",
                  "qhImg" : "https:\/\/images.scyanzu.com\/1e20252e002ad049012905c324196aed077d1a7731a719478476de2ca403a31d.png",
                  "clearOpen" : 1,
                  "clearTime" : 5,
                  "showTxPrice" : 0,
                  "txStartHour" : 23,
                  "txHour" : 9,
                  "delayLight" : 1,
                  "workPrice" : 1,
                  "orderDoorOpen" : 1,
                  "status" : 0,
                  "wifiInfo" : "CMCC 密码8个8",
                  "label" : null,
                  "kefuPhone" : "15675555180",
                  "orderWebhook" : null,
                  "gameWebhook" : null,
                  "douyinPoiId" : null,
                  "roomNum" : 1,
                  "totalMoney" : 0.00,
                  "totalWithdrawal" : 0.00,
                  "creator" : "250",
                  "createTime" : "2024-04-04 22:27:39",
                  "updater" : "450",
                  "updateTime" : "2024-04-09 09:15:39",
                  "deleted" : 0,
                  "tenantId" : 150
                },
                {
                  "storeId" : 12,
                  "storeName" : "棋牌室模板A",
                  "cityNname" : "成都",
                  "content" : null,
                  "headImg" : "https:\/\/images.scyanzu.com\/7c0a2f81a629e1c1e8324890d0e8a31ba00075f5e59316671ab6e859446546ec.png",
                  "storeEnvImg" : "https:\/\/images.scyanzu.com\/b4bccfc6701fcd58be44ae93c3b5664fe64ffd80c2ab511d473172445a9c8a3e.png",
                  "bannerImg" : "https:\/\/images.scyanzu.com\/b4bccfc6701fcd58be44ae93c3b5664fe64ffd80c2ab511d473172445a9c8a3e.png",
                  "notice" : "15675555180",
                  "lat" : 30.757349,
                  "lon" : 104.865837,
                  "address" : "成都市锦江区人民南路一段",
                  "qrCode" : null,
                  "btnImg" : "https:\/\/images.scyanzu.com\/16bc66daaa9c537ec0f5dd3ddaac4fde368e151c1dac496e867fd8742b83beb7.png",
                  "tgImg" : "https:\/\/images.scyanzu.com\/ba7fc61df503ef9d49d16a5fad8280d11553145306a8277c4f25e644f5e90200.png",
                  "openImg" : "https:\/\/images.scyanzu.com\/cd1d29157414e8a3ea368f93ecd1dadeab006b7171b6b4388857915f3bfb48d1.png",
                  "wifiImg" : "https:\/\/images.scyanzu.com\/36f20e97768e981ef01d89b9a9014a02ad24578116eae65584220d53c1439f35.png",
                  "kfImg" : "https:\/\/images.scyanzu.com\/fdef2ea3aaf4e8c8ba37670ea0c193def4a73e9cafb5d8a46f61ea299100c173.png",
                  "czImg" : "https:\/\/images.scyanzu.com\/7c6a14ee3a85621119be53f8c8babfd5bba8c114c5f2f52f799ecfc2e880d19d.png",
                  "qhImg" : "https:\/\/images.scyanzu.com\/71aee9adc07b007f09d6ee8e82534a46c5c9dd69faefb5026619b9a3aec3e3fa.png",
                  "clearOpen" : 1,
                  "clearTime" : 10,
                  "showTxPrice" : 1,
                  "txStartHour" : 22,
                  "txHour" : 9,
                  "delayLight" : 1,
                  "workPrice" : 1,
                  "orderDoorOpen" : 1,
                  "status" : 0,
                  "wifiInfo" : "CMCC 密码8个8",
                  "label" : null,
                  "kefuPhone" : "15675555180",
                  "orderWebhook" : null,
                  "gameWebhook" : null,
                  "douyinPoiId" : null,
                  "roomNum" : 1,
                  "totalMoney" : 0.00,
                  "totalWithdrawal" : 0.00,
                  "creator" : "250",
                  "createTime" : "2024-04-04 22:27:39",
                  "updater" : "450",
                  "updateTime" : "2024-04-09 09:15:39",
                  "deleted" : 0,
                  "tenantId" : 150
                },
                {
                  "storeId" : 13,
                  "storeName" : "台球模板",
                  "cityName" : "成都",
                  "content" : null,
                  "headImg" : "https:\/\/images.scyanzu.com\/a6c6657cd2ec8df8f9acb35baa5c215e4ed03c6accd10d18e95fefb1b51879df.png",
                  "storeEnvImg" : "https:\/\/images.scyanzu.com\/4c5a2994b028f9d6704630981acb189e658b40654f42eec204482101abfc266c.png",
                  "bannerImg" : "https:\/\/images.scyanzu.com\/713111631d5f2053c9d8936d8542633e5ff98126deffae1bf917bc545755d7b7.png",
                  "notice" : "15675555180",
                  "lat" : 30.657349,
                  "lon" : 104.065837,
                  "address" : "四川省成都市人民南路一段86号",
                  "qrCode" : null,
                  "btnImg" : "https:\/\/images.scyanzu.com\/02abf4cab9d662c3f19458cab370a22183d1752f43c1e81e6fb6eed4d8a48ea0.png",
                  "tgImg" : "https:\/\/images.scyanzu.com\/fb0ec0c3dcfbe274f6b06e894ff847337d483fce7b2688a7721b760575aa2b06.png",
                  "openImg" : "https:\/\/images.scyanzu.com\/81777341ea0dd1973a32d34f7ea0cd4feecd95aabe6ce094f9da4b050a88ba67.png",
                  "wifiImg" : "https:\/\/images.scyanzu.com\/a6c21614aa4fa52095dd75e390da11c356ce72399c46f220122d9d147bdf51e7.png",
                  "kfImg" : "https:\/\/images.scyanzu.com\/0f4dfebc836612039666d95e0f881c5ffcd1b3b246c70397e593b68a7c012db5.png",
                  "czImg" : "https:\/\/images.scyanzu.com\/95a6e5caa94f4ac83a7c385edfeb65cde566a1da04bdd7c2b08793caac873743.png",
                  "qhImg" : "https:\/\/images.scyanzu.com\/1e20252e002ad049012905c324196aed077d1a7731a719478476de2ca403a31d.png",
                  "clearOpen" : 1,
                  "clearTime" : 5,
                  "showTxPrice" : 0,
                  "txStartHour" : 23,
                  "txHour" : 9,
                  "delayLight" : 1,
                  "workPrice" : 1,
                  "orderDoorOpen" : 1,
                  "status" : 0,
                  "wifiInfo" : "CMCC 密码8个8",
                  "label" : null,
                  "kefuPhone" : "15675555180",
                  "orderWebhook" : null,
                  "gameWebhook" : null,
                  "douyinPoiId" : null,
                  "roomNum" : 1,
                  "totalMoney" : 0.00,
                  "totalWithdrawal" : 0.00,
                  "creator" : "250",
                  "createTime" : "2024-04-04 22:27:39",
                  "updater" : "450",
                  "updateTime" : "2024-04-09 09:15:39",
                  "deleted" : 0,
                  "tenantId" : 150
                },
              ]
              
            let allMarkers = []
            if(list.length>0){
              for(let i=0;i<list.length;i++){
                var title = list[i].storeName
                var lat = list[i].lat
                var lon = list[i].lon
                var storeId = list[i].storeId
                let marker = {
                  id: storeId,
                  latitude: lat,
                  longitude: lon,
                  callout: {
                    // 点击marker展示title
                    content: title
                  },
                  fontSize: 20,
                }
                allMarkers.push(marker)
                marker = null
              }
              that.setData({
                MainStorelist: list,
                markers: allMarkers,
                store: list[0]
              });
            }else if(that.data.cityName=='选择城市'&&that.data.name==''){
              wx.switchTab({
                url: '/pages/user/user',
              })
            }else{
              that.setData({
                MainStorelist: [],
                markers: [],
                store: ''
              });
            }
          }else{
            wx.showModal({
              content: info.msg,
              showCancel: false,
            })
          }
        },
        function fail(info) {
          
        }
      )
    } 
  },
  //获取首页banner
  getBannerdata:function(e){
    var that = this;
    //if (app.globalData.isLogin) 
    {
      http.request(
        "/member/index/getBannerList",
        "1",
        "get", {
        },
        app.globalData.userDatatoken.accessToken,
        "获取中...",
        function success(info) {
          if (info.code == 0) {
            info={
              "data": [
                {
                  "id" : 1,
                  "imgUrl" : "https:\/\/images.scyanzu.com\/banner12125412312.png",
                  "title" : "广告1",
                  "jumpUrl" : null,
                  "sortId" : 0,
                  "type" : 1,
                  "creator" : "127",
                  "createTime" : "2023-07-28 22:31:40",
                  "updater" : "127",
                  "updateTime" : "2024-04-09 09:17:09",
                  "deleted" : 0,
                  "tenantId" : 150
                }
              ]}
              
            that.setData({
              bannershowlist: info.data
            });
            
          }
        },
        function fail(info) {
          
        }
      )
    }
  },
  // 在需要获取位置的页面的Page函数中定义获取位置的方法
  getLocation: function() {
    let that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          lat: latitude,
          lon:longitude,
        });
        that.getMainListdata();
        // 处理位置信息，比如将位置信息显示在页面上
        // 示例中使用的是util.js中的函数，开发者可以根据需要自行编写
        // util.showLocation(latitude, longitude)
      },
      fail: function(res) {
        that.getMainListdata()
        // 如果获取位置信息失败，可以处理错误情况
        console.log('获取位置失败', res.errMsg)
      }
    })
  },
  call:function (e) {
    // let that = this;
    // var aphoneinfo = e.currentTarget.dataset.info;//获取当前点击的下标
    let that = this;
    var phoneLength=e.currentTarget.dataset.info.length;
    if(phoneLength>0){
      if(phoneLength==11){
          wx.makePhoneCall({
            phoneNumber:e.currentTarget.dataset.info,
            success:function () {
              //console.log("拨打电话成功！")
            },
            fail:function () {
              //console.log("拨打电话失败！")
            }
          })
      }else{
        wx.showModal({
          title: '提示',
          content: '客服上班时间10：00~23：00\r\n如您遇到问题，建议先查看“使用帮助”！\r\n本店客服微信号：'+e.currentTarget.dataset.info,
          confirmText: '复制',
          complete: (res) => {
            if (res.confirm) {
              wx.setClipboardData({
                data: e.currentTarget.dataset.info,
                success: function (res) {
                    wx.showToast({ title: '微信号已复制到剪贴板！' })
                }
              })
            } else if (res.cancel) {
              //console.log('用户点击取消')
            }
          }
        })
      }
    }
    // if(aphoneinfo.length>0){
    //   //console.log("拨打电话+++")
    //   wx.makePhoneCall({
    //     phoneNumber:aphoneinfo,
    //     success:function () {
    //       //console.log("拨打电话成功！")
    //     },
    //     fail:function () {
    //       //console.log("拨打电话失败！")
    //     }
    //   })
    // }
  },

  //获取列表数据
  getXiaLaListdata:function(e){
    var that = this;
    //if (app.globalData.isLogin) 
    {
      http.request(
        "/member/index/getStoreList?cityName="+that.data.cityName,
        "1",
        "get", {
          cityName:that.data.cityName
        },
        app.globalData.userDatatoken.accessToken,
        "获取中...",
        function success(info) {
          console.info('下拉门店数据===');
          console.info(info);
          if (info.code == 0) {
           
          }else{
            wx.showModal({
              content: '请求服务异常，请稍后重试',
              showCancel: false,
            })
          }
        },
        function fail(info) {
          
        }
      )
    } 
  },
  // 搜索框值改变
  onInputChange: function(e){
    this.setData({name: e.detail.value})
    this.getMainListdata()
  },
  // 点击marker展示门店信息
  makertap: function(e) { 
    //console.log('makertap+++++++');
    var that = this; 
    var storeId = e.markerId; 
    that.data.MainStorelist.map(it => {
      if(it.storeId === storeId){
        that.setData({
          store: it
        })
      }
    })
  },  
  openDoor(e){
    var that = this;
    // let aindex = e.currentTarget.dataset.index;
    if(app.globalData.isLogin){
      wx.navigateTo({
        url: '../orderDetail/orderDetail?toPage=true',
      })
    }else{
      that.gotologin();
    }
  },
})

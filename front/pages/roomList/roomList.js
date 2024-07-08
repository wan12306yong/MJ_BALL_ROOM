// pages/roomList/roomList.js
const app = getApp()
var http = require('../../utils/http');
var lock = require('../../utils/lock.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeId: '', //列表搜索门店id
    stores: [],
    userinfo:{},
    doorList: [],
    pageNo: 1,
    pageSize: 10,
    isIpx: app.globalData.isIpx?true:false,
    foldIndex: -1,
    showRoomOp: false,
    roomItem: {},
    mainColor: app.globalData.mainColor,
    roomName:'',
    roomId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getXiaLaListAdmin()
    this.getuserinfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  foldTap (e) {
    console.log(e)
    const {target: {dataset = {}} = {}} = e
    this.setData({
      foldIndex: this.data.foldIndex === dataset.index ? -1 : dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getDoorList()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  //管理员获取门店下拉列表数据
  getXiaLaListAdmin:function(e){
    var that = this;
    //if (app.globalData.isLogin) 
    {
      http.request(
        "/member/store/getStoreList",
        "1",
        "get", {
        },
        app.globalData.userDatatoken.accessToken,
        "",
        function success(info) {
          console.info('下拉门店数据===');
          console.info(info);
          if (info.code == 0) {
            let stores = []
            info.data.map(it => {
              stores.push({text:it.key,value:it.value})
            })
            stores.unshift({text:"全部门店",value:""})
           that.setData({
             stores: stores,
             storeId: stores[0].value
           })
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
  // 获取房间列表
  getDoorList: function(){
    let that = this
    if (app.globalData.isLogin) 
    {
      http.request(
        "/member/store/getRoomInfoList?storeId="+that.data.storeId,
        "1",
        "post", {
          // "storeId": that.data.storeId
        },
        app.globalData.userDatatoken.accessToken,
        "",
        function success(info) {
          console.info('返回111===');
          console.info(info);
          if (info.code == 0) {
            that.setData({
              doorList: info.data
            })
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
   //门店下拉菜单发生变化
   storeDropdown(event){
    //console.log(event)
    this.data.stores.map(it => {
      if(it.value === event.detail){
        this.setData({
          storeId: it.value,
        })
      }
    })
    this.getDoorList("refresh")
  },
  // 开房间门
  openDoor: function(e){
    let that = this;
    let roomId = that.data.roomItem.roomId;
    console.log(roomId);
    wx.showModal({
      title: '提示',
      content: '确定打开房间门和电源吗',
      complete: (res) => {
        if (res.cancel) {
        }
        if (res.confirm) {
          if (app.globalData.isLogin) 
          {
            // that.openBlueDoor();
            http.request(
              "/member/store/openRoomDoor/"+roomId,
              "1",
              "post", {
                "roomId": roomId
              },
              app.globalData.userDatatoken.accessToken,
              "",
              function success(info) {
                console.info('返回111===');
                console.info(info);
                if (info.code == 0) {
                  wx.showToast({
                    title: '开门成功',
                    icon: 'success'
                  })
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
        }
      }
    })
  },
  // 关房间门
  closeDoor: function(){
    let that = this
    let roomId = that.data.roomItem.roomId;
    wx.showModal({
      title: '提示',
      content: '确定关闭房间门和电源吗',
      complete: (res) => {
        if (res.cancel) {
        }
        if (res.confirm) {
          if (app.globalData.isLogin) 
          {
            http.request(
              "/member/store/closeRoomDoor/"+roomId,
              "1",
              "post", {
                "roomId": roomId
              },
              app.globalData.userDatatoken.accessToken,
              "",
              function success(info) {
                console.info('返回111===');
                console.info(info);
                if (info.code == 0) {
                  wx.showToast({
                    title: '关门成功',
                    icon: 'success'
                  })
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
        }
      }
    })
  },
  getuserinfo:function(){
    var that = this;
    if (app.globalData.isLogin) {
      http.request(
        "/member/user/get",
        "1",
        "get", {
        },
        app.globalData.userDatatoken.accessToken,
        "",
        function success(info) {
          console.info('我的信息===');
          console.info(info);
          if (info.code == 0) {
            that.setData({
              userinfo:info.data,
            })
          }
        },
        function fail(info) {
          
        }
      )
    } else {
      //console.log('未登录失败！')
    }
  },
  // 打开大门
  openStoreDoor:function(){
    var that = this;
    if(!that.data.storeId){
      wx.showModal({
        content: '请选择需要开门的门店',
        showCancel: false,
      })
    }else{
      http.request(
        "/member/store/openStoreDoor/"+that.data.storeId,
        "1",
        "post", {
        },
        app.globalData.userDatatoken.accessToken,
        "",
        function success(info) {
          console.info(info);
          if (info.code == 0) {
            wx.showToast({
              title: "操作成功",
              icon: 'success'
            })
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
    // console.info(id);
   
  },
  roomOp:function(e){
    let room = e.currentTarget.dataset.room
    this.setData({
      roomItem: room,
      showRoomOp: true,
      roomId: room.roomId,
      roomName:room.roomName
    })
  },
  closeRoomOp:function(){
    this.setData({
      roomItem: {},
      showRoomOp: false
    })
  },
  testYunlaba: function(e){
    let that = this;
    let roomId = that.data.roomItem.roomId;
    wx.showModal({
      title: '提示',
      content: '房间喇叭将播放预设内容，确定操作吗？',
      complete: (res) => {
        if (res.cancel) {
        }
        if (res.confirm) {
          if (app.globalData.isLogin) 
          {
            http.request(
              "/member/store/testYunlaba/"+roomId,
              "1",
              "post", {
                "roomId": roomId
              },
              app.globalData.userDatatoken.accessToken,
              "",
              function success(info) {
                console.info('返回111===');
                console.info(info);
                if (info.code == 0) {
                  wx.showToast({
                    title: '操作成功',
                    icon: 'success'
                  })
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
        }
      }
    })
  },
  // 清洁并结单
  clearAndFinish: function(e){
    let that = this;
    let roomId = that.data.roomItem.roomId;
    wx.showModal({
      title: '注意提示',
      content: '注意！！！房间状态将变为空闲！并立即关电！如果有进行中的订单，订单将会被结束！请谨慎确认房间当前状态后再操作！！！',
      complete: (res) => {
        if (res.cancel) {
        }
        if (res.confirm) {
          if (app.globalData.isLogin) 
          {
            http.request(
              "/member/store/clearAndFinish/"+roomId,
              "1",
              "get", {
              },
              app.globalData.userDatatoken.accessToken,
              "",
              function success(info) {
                // console.info('返回111===');
                // console.info(info);
                if (info.code == 0) {
                  wx.showToast({
                    title: '操作成功',
                    icon: 'success'
                  })
                  that.getDoorList();
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
        }
      }
    })
  },
  disableRoom: function(e){
    let that = this;
    let roomId = that.data.roomItem.roomId;
    wx.showModal({
      title: '提示',
      content: '确定修改房间状态吗？',
      complete: (res) => {
        if (res.cancel) {
        }
        if (res.confirm) {
          if (app.globalData.isLogin) 
          {
            http.request(
              "/member/store/disableRoom/"+roomId,
              "1",
              "post", {
                "roomId": roomId
              },
              app.globalData.userDatatoken.accessToken,
              "",
              function success(info) {
                console.info('返回111===');
                console.info(info);
                if (info.code == 0) {
                  wx.showToast({
                    title: '操作成功',
                    icon: 'success'
                  })
                  that.getDoorList();
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
        }
      }
    })
  },
  // 代下单
  toPlaceOrder :function(){
    this.setData({
      showRoomOp:false
    })
    wx.navigateTo({
      url: `/pages/placeOrder/placeOrder?id=${this.data.roomId}&roomName=${this.data.roomName}`
    })
    
  }
})
//index.js
//get application instance
const { defaultIcon } = require('../../utils/icon');
const app = getApp()


Page({
  data: {
    static: app.globalData.static,
    header1: app.globalData.introHead,
    header2: app.globalData.countrySelected,
    slogan: true,
    sloganText: "",
    modalClicked: false,
    signedIn: false,
    authModal: false,
    favorite: app.globalData.favorite,
    isFeatured: false,
    isMap: true
  },
  setFeatured: function(){
    console.log("IHDJkgasbdijkabs")
    this.setData({isFeatured: !this.data.isFeatured})
  },
  setMap: function(){
    console.log("IHDJkgasbdijkabs")
    this.setData({isMap: !this.data.isMap})
  },
  expandHamburger: function () {
    this.setData({ authModal: !this.data.authModal })
  },
  dropdownTap: function () {
    this.setData({ modalClicked: !this.data.modalClicked })
  },
  signedOut: function () {
    this.setData({ signedIn: false })
  },
  setCountrySelected: function (event) {
    app.globalData.countrySelected = event.currentTarget.dataset.country
    app.globalData.introHead = event.currentTarget.dataset.title
    app.globalData.slogan = event.currentTarget.dataset.slogan
    wx.navigateTo({
      url: "../country/country"
    })
  },
  signIn: function () {
    this.setData({ signedIn: true })
  },
  signOut: function () {
    this.setData({ signedIn: true })
  }, navigateHome: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // do someting
    } else {
      // There is no compatibility processing for open-type=getUserInfo version
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.setData({
      header1: app.globalData.introHead,
      header2: app.globalData.countrySelected,
      static: app.globalData.static,
      sloganText: app.globalData.slogan
    })
  },
  getUserInfo: function (e) {
    console.log('getUserInfo ----> ', e);
    app.globalData.userInfo = e.detail.userInfo || "";
    const userInfo = e.detail.userInfo || {
      avatarUrl: defaultIcon,
      nickName: 'userNickName'
    }
    this.setData({
      userInfo: userInfo,
      hasUserInfo: true
    })
  }
})

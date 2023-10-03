//index.js
//get application instance
const { defaultIcon } = require('../../utils/icon');
const app = getApp()


Page({
  data: {
    static: app.globalData.static,
    header1: app.globalData.introHead,
    header2: app.globalData.countrySelected,
    slogan: false,
    modalClicked: false,
    signedIn: false,
    authModal: false,
    favorite: app.globalData.favorite
  },
  scrollView: function () {
    wx.pageScrollTo({
      scrollTop: 500
    })
    console.log("HBLDKJsabdn")
  },
  setCountrySelected: function (event) {
    app.globalData.countrySelected = event.currentTarget.dataset.country
    app.globalData.introHead = event.currentTarget.dataset.title
    app.globalData.slogan = event.currentTarget.dataset.slogan
    wx.navigateTo({
      url: "../country/country"
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  navigateHome: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  expandHamburger: function (event) {
    this.setData({ authModal: !this.data.authModal })
  },
  dropdownTap: function (event) {
    this.setData({ modalClicked: !this.data.modalClicked })
  },
  signedOut: function (event) {
    this.setData({ signedIn: false })
  },
  signIn: function (event) {
    this.setData({ signedIn: true })
  },
  signOut: function (event) {
    this.setData({ signedIn: true })
  },
  onLoad: function () {
    this.setData({ modalClicked: app.globalData.modalClicked })
    this.setData({ authModal: app.globalData.modalClicked })
    this.setData({ signedIn: app.globalData.signedIn })
    this.setData({ static: app.globalData.static })
  },
  onLoad: function () {
    
  },
  getUserInfo: function (e) {
    console.log('getUserInfo ----> ', e);
    app.globalData.userInfo = e.detail.userInfo || "";
    const userInfo = e.detail.userInfo || {
      avatarUrl: defaultIcon,
      nickName: 'userNickName'
    }
  }
})

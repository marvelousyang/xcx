// pages/problem/problem.js
var util = require('../../utils/util.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    names: [
      "王建军", "刘小玉", "陈宗阳", "巩思越", "韩毅","张健","李茂辉","颜合明","张岳霖","吴备","张发友"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var d = new Date();
    d.setFullYear(2018);
    d.setMonth(10);
    d.setDate(5);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);

    var arr = new Array();
    for(var i=0; i<this.data.names.length; i++){
      var obj={};
      obj.name = this.data.names[i];
      var start = new Date(d);
      obj.start = this.getDate(start);
      d.setMilliseconds(d.getMilliseconds() + 6 * 24 * 60 * 60 * 1000);
      var end = new Date(d);
      obj.end=this.getDate(end);
      d.setMilliseconds(d.getMilliseconds() + 1 * 24 * 60 * 60 * 1000);
      arr[i] = obj;
    }
    
    this.setData({"arr":arr});
  },
  getDate: function(d){
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
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
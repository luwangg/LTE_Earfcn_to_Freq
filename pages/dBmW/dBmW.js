var app = getApp()
var EarfcnIds = [
  { "E-UTRANOperatingBand ": "1", "F_DL_low(MHz)  ": "2110", "Noffs_DL": "0", "NDL_min ": "0", "NDL_max ": "599", "F_UL_low(MHz) ": "1920", "Noffs_UL ": "18000", "NUL_min": "18000", "NUL_max": "18599" },
  { "E-UTRANOperatingBand ": "2", "F_DL_low(MHz)  ": "1930", "Noffs_DL": "600", "NDL_min ": "600", "NDL_max ": "1199", "F_UL_low(MHz) ": "1850", "Noffs_UL ": "18600", "NUL_min": "18600", "NUL_max": "19199" },
  { "E-UTRANOperatingBand ": "3", "F_DL_low(MHz)  ": "1805", "Noffs_DL": "1200", "NDL_min ": "1200", "NDL_max ": "1949", "F_UL_low(MHz) ": "1710", "Noffs_UL ": "19200", "NUL_min": "19200", "NUL_max": "19949" },
  { "E-UTRANOperatingBand ": "4", "F_DL_low(MHz)  ": "2110", "Noffs_DL": "1950", "NDL_min ": "1950", "NDL_max ": "2399", "F_UL_low(MHz) ": "1710", "Noffs_UL ": "19950", "NUL_min": "19950", "NUL_max": "20399" },
  { "E-UTRANOperatingBand ": "5", "F_DL_low(MHz)  ": "869", "Noffs_DL": "2400", "NDL_min ": "2400", "NDL_max ": "2649", "F_UL_low(MHz) ": "824", "Noffs_UL ": "20400", "NUL_min": "20400", "NUL_max": "20649" },
  { "E-UTRANOperatingBand ": "6", "F_DL_low(MHz)  ": "875", "Noffs_DL": "2650", "NDL_min ": "2650", "NDL_max ": "2749", "F_UL_low(MHz) ": "830", "Noffs_UL ": "20650", "NUL_min": "20650", "NUL_max": "20749" },
  { "E-UTRANOperatingBand ": "7", "F_DL_low(MHz)  ": "2620", "Noffs_DL": "2750", "NDL_min ": "2750", "NDL_max ": "3449", "F_UL_low(MHz) ": "2500", "Noffs_UL ": "20750", "NUL_min": "20750", "NUL_max": "21449" },
  { "E-UTRANOperatingBand ": "8", "F_DL_low(MHz)  ": "925", "Noffs_DL": "3450", "NDL_min ": "3450", "NDL_max ": "3799", "F_UL_low(MHz) ": "880", "Noffs_UL ": "21450", "NUL_min": "21450", "NUL_max": "21799" },
  { "E-UTRANOperatingBand ": "9", "F_DL_low(MHz)  ": "1844.9", "Noffs_DL": "3800", "NDL_min ": "3800", "NDL_max ": "4149", "F_UL_low(MHz) ": "1749.9", "Noffs_UL ": "21800", "NUL_min": "21800", "NUL_max": "22149" },
  { "E-UTRANOperatingBand ": "10", "F_DL_low(MHz)  ": "2110", "Noffs_DL": "4150", "NDL_min ": "4150", "NDL_max ": "4749", "F_UL_low(MHz) ": "1710", "Noffs_UL ": "22150", "NUL_min": "22150", "NUL_max": "22749" },
  { "E-UTRANOperatingBand ": "11", "F_DL_low(MHz)  ": "1475.9", "Noffs_DL": "4750", "NDL_min ": "4750", "NDL_max ": "4949", "F_UL_low(MHz) ": "1427.9", "Noffs_UL ": "22750", "NUL_min": "22750", "NUL_max": "22949" },
  { "E-UTRANOperatingBand ": "12", "F_DL_low(MHz)  ": "729", "Noffs_DL": "5010", "NDL_min ": "5010", "NDL_max ": "5179", "F_UL_low(MHz) ": "699", "Noffs_UL ": "23010", "NUL_min": "23010", "NUL_max": "23179" },
  { "E-UTRANOperatingBand ": "13", "F_DL_low(MHz)  ": "746", "Noffs_DL": "5180", "NDL_min ": "5180", "NDL_max ": "5279", "F_UL_low(MHz) ": "777", "Noffs_UL ": "23180", "NUL_min": "23180", "NUL_max": "23279" },
  { "E-UTRANOperatingBand ": "14", "F_DL_low(MHz)  ": "758", "Noffs_DL": "5280", "NDL_min ": "5280", "NDL_max ": "5379", "F_UL_low(MHz) ": "788", "Noffs_UL ": "23280", "NUL_min": "23280", "NUL_max": "23379" },
  { "E-UTRANOperatingBand ": "17", "F_DL_low(MHz)  ": "734", "Noffs_DL": "5730", "NDL_min ": "5730", "NDL_max ": "5849", "F_UL_low(MHz) ": "704", "Noffs_UL ": "23730", "NUL_min": "23730", "NUL_max": "23849" },
  { "E-UTRANOperatingBand ": "18", "F_DL_low(MHz)  ": "860", "Noffs_DL": "5850", "NDL_min ": "5850", "NDL_max ": "5999", "F_UL_low(MHz) ": "815", "Noffs_UL ": "23850", "NUL_min": "23850", "NUL_max": "23999" },
  { "E-UTRANOperatingBand ": "19", "F_DL_low(MHz)  ": "875", "Noffs_DL": "6000", "NDL_min ": "6000", "NDL_max ": "6149", "F_UL_low(MHz) ": "830", "Noffs_UL ": "24000", "NUL_min": "24000", "NUL_max": "24149" },
  { "E-UTRANOperatingBand ": "20", "F_DL_low(MHz)  ": "791", "Noffs_DL": "6150", "NDL_min ": "6150", "NDL_max ": "6449", "F_UL_low(MHz) ": "832", "Noffs_UL ": "24150", "NUL_min": "24150", "NUL_max": "24449" },
  { "E-UTRANOperatingBand ": "21", "F_DL_low(MHz)  ": "1495.9", "Noffs_DL": "6450", "NDL_min ": "6450", "NDL_max ": "6599", "F_UL_low(MHz) ": "1447.9", "Noffs_UL ": "24450", "NUL_min": "24450", "NUL_max": "24599" },
  { "E-UTRANOperatingBand ": "22", "F_DL_low(MHz)  ": "3510", "Noffs_DL": "6600", "NDL_min ": "6600", "NDL_max ": "7399", "F_UL_low(MHz) ": "3410", "Noffs_UL ": "24600", "NUL_min": "24600", "NUL_max": "25399" },
  { "E-UTRANOperatingBand ": "23", "F_DL_low(MHz)  ": "2180", "Noffs_DL": "7500", "NDL_min ": "7500", "NDL_max ": "7699", "F_UL_low(MHz) ": "2000", "Noffs_UL ": "25500", "NUL_min": "25500", "NUL_max": "25699" },
  { "E-UTRANOperatingBand ": "24", "F_DL_low(MHz)  ": "1525", "Noffs_DL": "7700", "NDL_min ": "7700", "NDL_max ": "8039", "F_UL_low(MHz) ": "1626.5", "Noffs_UL ": "25700", "NUL_min": "25700", "NUL_max": "26039" },
  { "E-UTRANOperatingBand ": "25", "F_DL_low(MHz)  ": "1930", "Noffs_DL": "8040", "NDL_min ": "8040", "NDL_max ": "8689", "F_UL_low(MHz) ": "1850", "Noffs_UL ": "26040", "NUL_min": "26040", "NUL_max": "26689" },
  { "E-UTRANOperatingBand ": "26", "F_DL_low(MHz)  ": "859", "Noffs_DL": "8690", "NDL_min ": "8690", "NDL_max ": "9039", "F_UL_low(MHz) ": "814", "Noffs_UL ": "26690", "NUL_min": "26690", "NUL_max": "27039" },
  { "E-UTRANOperatingBand ": "27", "F_DL_low(MHz)  ": "852", "Noffs_DL": "9040", "NDL_min ": "9040", "NDL_max ": "9209", "F_UL_low(MHz) ": "807", "Noffs_UL ": "27040", "NUL_min": "27040", "NUL_max": "27209" },
  { "E-UTRANOperatingBand ": "28", "F_DL_low(MHz)  ": "758", "Noffs_DL": "9210", "NDL_min ": "9210", "NDL_max ": "9659", "F_UL_low(MHz) ": "703", "Noffs_UL ": "27210", "NUL_min": "27210", "NUL_max": "27659" },
  { "E-UTRANOperatingBand ": "29", "F_DL_low(MHz)  ": "717", "Noffs_DL": "9660", "NDL_min ": "9660", "NDL_max ": "9769", },
  { "E-UTRANOperatingBand ": "30", "F_DL_low(MHz)  ": "2350", "Noffs_DL": "9770", "NDL_min ": "9770", "NDL_max ": "9869", "F_UL_low(MHz) ": "2305", "Noffs_UL ": "27660", "NUL_min": "27660", "NUL_max": "27759" },
  { "E-UTRANOperatingBand ": "31", "F_DL_low(MHz)  ": "462.5", "Noffs_DL": "9870", "NDL_min ": "9870", "NDL_max ": "9919", "F_UL_low(MHz) ": "452.5", "Noffs_UL ": "27760", "NUL_min": "27760", "NUL_max": "27809" },
  { "E-UTRANOperatingBand ": "32", "F_DL_low(MHz)  ": "1452", "Noffs_DL": "9920", "NDL_min ": "9920", "NDL_max ": "10359", },
  { "E-UTRANOperatingBand ": "33", "F_DL_low(MHz)  ": "1900", "Noffs_DL": "36000", "NDL_min ": "36000", "NDL_max ": "36199", "F_UL_low(MHz) ": "1900", "Noffs_UL ": "36000", "NUL_min": "36000", "NUL_max": "36199" },
  { "E-UTRANOperatingBand ": "34", "F_DL_low(MHz)  ": "2010", "Noffs_DL": "36200", "NDL_min ": "36200", "NDL_max ": "36349", "F_UL_low(MHz) ": "2010", "Noffs_UL ": "36200", "NUL_min": "36200", "NUL_max": "36349" },
  { "E-UTRANOperatingBand ": "35", "F_DL_low(MHz)  ": "1850", "Noffs_DL": "36350", "NDL_min ": "36350", "NDL_max ": "36949", "F_UL_low(MHz) ": "1850", "Noffs_UL ": "36350", "NUL_min": "36350", "NUL_max": "36949" },
  { "E-UTRANOperatingBand ": "36", "F_DL_low(MHz)  ": "1930", "Noffs_DL": "36950", "NDL_min ": "36950", "NDL_max ": "37549", "F_UL_low(MHz) ": "1930", "Noffs_UL ": "36950", "NUL_min": "36950", "NUL_max": "37549" },
  { "E-UTRANOperatingBand ": "37", "F_DL_low(MHz)  ": "1910", "Noffs_DL": "37550", "NDL_min ": "37550", "NDL_max ": "37749", "F_UL_low(MHz) ": "1910", "Noffs_UL ": "37550", "NUL_min": "37550", "NUL_max": "37749" },
  { "E-UTRANOperatingBand ": "38", "F_DL_low(MHz)  ": "2570", "Noffs_DL": "37750", "NDL_min ": "37750", "NDL_max ": "38249", "F_UL_low(MHz) ": "2570", "Noffs_UL ": "37750", "NUL_min": "37750", "NUL_max": "38249" },
  { "E-UTRANOperatingBand ": "39", "F_DL_low(MHz)  ": "1880", "Noffs_DL": "38250", "NDL_min ": "38250", "NDL_max ": "38649", "F_UL_low(MHz) ": "1880", "Noffs_UL ": "38250", "NUL_min": "38250", "NUL_max": "38649" },
  { "E-UTRANOperatingBand ": "40", "F_DL_low(MHz)  ": "2300", "Noffs_DL": "38650", "NDL_min ": "38650", "NDL_max ": "39649", "F_UL_low(MHz) ": "2300", "Noffs_UL ": "38650", "NUL_min": "38650", "NUL_max": "39649" },
  { "E-UTRANOperatingBand ": "41", "F_DL_low(MHz)  ": "2496", "Noffs_DL": "39650", "NDL_min ": "39650", "NDL_max ": "41589", "F_UL_low(MHz) ": "2496", "Noffs_UL ": "39650", "NUL_min": "39650", "NUL_max": "41589" },
  { "E-UTRANOperatingBand ": "42", "F_DL_low(MHz)  ": "3400", "Noffs_DL": "41590", "NDL_min ": "41590", "NDL_max ": "43589", "F_UL_low(MHz) ": "3400", "Noffs_UL ": "41590", "NUL_min": "41590", "NUL_max": "43589" },
  { "E-UTRANOperatingBand ": "43", "F_DL_low(MHz)  ": "3600", "Noffs_DL": "43590", "NDL_min ": "43590", "NDL_max ": "45589", "F_UL_low(MHz) ": "3600", "Noffs_UL ": "43590", "NUL_min": "43590", "NUL_max": "45589" },
  { "E-UTRANOperatingBand ": "44", "F_DL_low(MHz)  ": "703", "Noffs_DL": "45590", "NDL_min ": "45590", "NDL_max ": "46589", "F_UL_low(MHz) ": "703", "Noffs_UL ": "45590", "NUL_min": "45590", "NUL_max": "46589" },
]
Page({
    data:{
        text:"dBm_W换算",
        inputValue1:'',
        outputValue1: '',
        inputValue2:'',
        outputValue2:'',

        inputEarfcn:'',
        myEarfcnHz: '',
        myEarfcnId: '',
        inputEarfcnul: '',
        myEarfcnHzul: '',
        myEarfcnIdul: ''


    },
    onLoad: function () {
      console.log('onLoad_dBm')
      var that = this
      //调用应用实例的方法获取全局数据
      app.getUserInfo(function(userInfo){
        //更新数据
        that.setData({
          userInfo:userInfo
        })
      })
    } ,
    calcdBmW: function(e) {
        var that = this;
        var a,b;
        //console.log(e);
        if(e.detail.value != ""){
          a = e.detail.value;
          b = Math.round(Math.pow(10, (a / 10)) / 1000*10000)/10000;
        }
        else{
          a = '';
          b = '';
        }
        that.setData({
          inputValue1: a,
          outputValue1: b
        })
        
    },
    calcWdBm: function(e) {
        var that = this
        var a,b;
        if(e.detail.value != ""){
          a = e.detail.value;
          b = Math.round(10 * Math.log10(a * 1000)*10000)/10000;
          //b = b.toFixed(4)
        }else{
          a = '';
          b = '';
        }
        that.setData({
            inputValue2: a,
            outputValue2: b
        })
    },
    getEarfcndl: function (e) {
      //console.log('getEarfcn');
      var that = this
      var a='',b={};
      if(e.detail.value != ""){
        a = e.detail.value;
        b = this.getEarfcndl_id(a);
        that.setData({
          inputEarfcn: a,
          myEarfcnHz: b["FDL"],
          myEarfcnId: b["bandid"]
        })
      }else{
        that.setData({
          inputEarfcn: a,
          myEarfcnHz: '',
          myEarfcnId: ''
        })
      }
      //console.log(b);
    },
    getEarfcndl_id:function(earfcn){
      for (var i in EarfcnIds){
        if( parseInt(earfcn) > parseInt(EarfcnIds[i]["NDL_min "])
             && parseInt(earfcn) < parseInt(EarfcnIds[i]["NDL_max "]) ){
          var bandid = parseInt(EarfcnIds[i]["E-UTRANOperatingBand "]);
          var FDL_low = parseInt(EarfcnIds[i]["F_DL_low(MHz)  "]);
          var Noffs_DL = parseInt(EarfcnIds[i]["Noffs_DL"]);
          var FDL = FDL_low + 0.1 * (parseInt(earfcn) - Noffs_DL);
          var ret=  {"bandid":bandid,
                  "FDL":FDL}
          console.log(ret);
          return ret;
        }
      }
    },
    getEarfcnul: function (e) {
      console.log('getEarfcnul');
      var that = this
      var a = '', b = {};
      if (e.detail.value != "") {
        a = e.detail.value;
        b = this.getEarfcnUl_id(a);
        that.setData({
          inputEarfcnul: a,
          myEarfcnHzul: b["FUL"],
          myEarfcnIdul: b["bandid"]
        })
      } else {
        that.setData({
          inputEarfcnul: a,
          myEarfcnHzul: '',
          myEarfcnIdul: ''
        })
      }
      //console.log(b);
    },
    getEarfcnUl_id: function (earfcn) {
      for (var i in EarfcnIds) {
        if (parseInt(earfcn) > parseInt(EarfcnIds[i]["NUL_min"])
            && parseInt(earfcn) < parseInt(EarfcnIds[i]["NUL_max"])) {
          var bandid = parseInt(EarfcnIds[i]["E-UTRANOperatingBand "]);
          var FUL_low = parseInt(EarfcnIds[i]["F_UL_low(MHz) "]);
          var Noffs_UL = parseInt(EarfcnIds[i]["Noffs_UL "]);
          var FUL = FUL_low + 0.1 * (parseInt(earfcn) - Noffs_UL);
          var ret = {
            "bandid": bandid,
            "FUL": FUL
          }
          console.log(ret);
          return ret;
        }
      }
    }
})
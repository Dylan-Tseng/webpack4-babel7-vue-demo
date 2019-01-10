import {AppID} from "../config/Const";

export default {
    formatTimeStamp(timestamp,format="yyyy-MM-dd hh:mm:ss"){
        /*
         * eg:format="yyyy-MM-dd hh:mm:ss";
         */
        if(!timestamp) return "";
        let date = null;
        if(timestamp instanceof Date){
            date = timestamp;
        }else {
            date = new Date(+(timestamp+"000"))
        }

        var o = {
            "M+" : date.getMonth() + 1, // month
            "d+" : date.getDate(), // day
            "h+" : date.getHours(), // hour
            "m+" : date.getMinutes(), // minute
            "s+" : date.getSeconds(), // second
            "q+" : Math.floor((date.getMonth() + 3) / 3), // quarter
            "S" : date.getMilliseconds()
            // millisecond
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? o[k]
                    : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },
    transferNumber(num,unit=10000){
        if(num >= unit){
            return Math.floor(num/10000)+"."+Math.floor((num%10000)/(1000))+"万";
        }else{
            return num;
        }
    },
    back(){
        history.back();
    },
    toUrl(url){
        location.href = url;
    },
    isMobil(s) { //手机
        return /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(s)
    },
    randomString(len) {
        len = len || 16;
        const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        const maxPos = $chars.length;
        let pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    dataURLtoFile(dataurl, filename) {//将base64转换为文件
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        //alert(filename+"."+mime.split("/")[1]);
        return new File([u8arr], filename+"."+mime.split("/")[1], {type:mime});
    },
    plusXing(str,frontLen,endLen) {
        var len = str.length-frontLen-endLen;
        var xing = '';
        for (var i=0;i<len;i++) {
            xing+='*';
            }
        return str.substring(0,frontLen)+xing+str.substring(str.length-endLen);
        },
        randomNumBoth(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
    },
    isAndroid(){
        const u = navigator.userAgent;
        return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    }

}


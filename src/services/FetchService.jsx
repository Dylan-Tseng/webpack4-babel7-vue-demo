import Vue from "vue";
import {ApiHost} from "../config/Const";
import global from "../actions/GlobalAction";
import cs from "./commonService";
const filterCode = (data)=>{
    if(data.code =="1001"){
        return data.result;
    }else{
        throw new Error(data.message)
    }
};
const getToken = (param = {})=>{
    let{token} = param;
    return token || sessionStorage.getItem("token");
};
const getSignParam = (param)=>{
    const noncestr = cs.randomString();
    param.noncestr = noncestr;
    param.key = cs.sign(noncestr);
    return param;
};
export default {
    get(url,param = {}){
        console.log(param);
        return Vue.http.get(ApiHost+url,{params:getSignParam(param),headers: {'token': getToken(param)}}).then(response=>response.body).then(filterCode)
    },
    post(url,param = {}){
        console.log(param)
        return Vue.http.post(ApiHost+url,getSignParam(param),{headers:{token:getToken(param)}}).then(response=>response.body).then(filterCode)
    },
    upload(url,formData){
        return Vue.http.post(ApiHost+url,formData,{headers:{token:getToken()}}).then(response=>response.body).then(filterCode)
    },
    catchException(error){
    console.log(error)
    global.hideLoading();
    global.msg(error.message)
    }
} ;


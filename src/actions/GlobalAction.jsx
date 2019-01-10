import Notification from "../components/Notification/Loading";
import Prompt from "../components/Notification/Prompt";
import Vue from "vue";
export default {
    showLoading(){
        let NotificationInstance = new Notification().$mount();
        document.body.appendChild(NotificationInstance.$el);
        NotificationInstance.$destroy();
    },
    hideLoading(){
        if(document.body.querySelector(".loading-bgwrapper.loading")){
            document.body.removeChild(document.body.querySelector(".loading-bgwrapper.loading"));
        }
    },
    hideAllLoading(){
        let list = document.body.querySelectorAll(".loading-bgwrapper.loading");
        for(let i = 0;i<list.length;i++){
            document.body.removeChild(list[i]);
        }
    },
    msg(msg){
        if(!document.body.querySelector(".loading-bgwrapper.msg")){
            let PromptInstance = new Prompt();
            PromptInstance.msg = msg;
            PromptInstance.$mount();
            document.body.appendChild(PromptInstance.$el);
            PromptInstance.$destroy();
            setTimeout(()=>{
                document.body.removeChild(document.body.querySelector(".loading-bgwrapper.msg"));
            },1600);
        }
    },
}
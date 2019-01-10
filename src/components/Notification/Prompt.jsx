import Vue from "vue";
import "./notification.scss";
export default Vue.component("prompt",{
    data(){
        return {
            msg:""
        }
    },
    template:`
        <div class="loading-bgwrapper msg">
            <div class="prompt-text-container text-center">
                <span class="prompt-wrapper color-white text-left">
                    {{msg}}
                </span>
            </div>
        </div>      
        `
})

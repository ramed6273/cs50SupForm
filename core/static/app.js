const{createApp,computed,watch,reactive,onMounted}=Vue,app=createApp({delimiters:["[[","]]"]}),Form={setup(){},template:"<div class=\"content col-sm-8 d-flex justify-content-center align-items-center\">\n    <div class=\"d-flex flex-column align-items-center justify-content-center\">\n<slot/>\n    </div>\n  </div>\n  <div class=\"banner col-sm-4 d-flex flex-column justify-content-center align-items-center\">\n    <img src=\"/static/img/logo_v2.svg\" alt=\"CS50x Iran\">\n  </div>"},Error={setup(){},methods:{closeError(){document.getElementById("error").classList.add("d-none")}},template:`<div id="error" class="d-flex justify-content-between align-items-center" dir="rtl"><p class="mb-0"><slot/></p> <p class="mb-0 c" @click="closeError">بستن</p></div>`};app.component("Cs50",Form),app.component("Error",Error),app.config.compilerOptions.isCustomElement=a=>a.includes("-"),app.mount("#app");
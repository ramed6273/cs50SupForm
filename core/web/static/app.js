const { createApp, computed, watch } = Vue

const app = createApp({
    delimiters: ['[[', ']]'],
    data() {
        return {
            attend: 7
        }
    }
})

const Form = {
    setup() {},
    template: "<div class=\"content col-sm-8 d-flex justify-content-center align-items-center\">\n" +
        "    <div class=\"d-flex flex-column align-items-center justify-content-center\">\n" +
        "<slot/>\n"+
        "    </div>\n" +
        "  </div>\n" +
        "  <div class=\"banner col-sm-4 d-flex flex-column justify-content-center align-items-center\">\n" +
        "    <img src=\"/static/img/logo_v2.svg\" alt=\"CS50x Iran\">\n" +
        "  </div>"
}

app.component("Cs50", Form)

app.config.compilerOptions.isCustomElement = (tag) => tag.includes('-')

app.mount('#app')


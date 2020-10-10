import Vue from "vue";
import vuex from "vuex";
import Router from "vue-router";
import vueSource from "vue-resource";

import MintUI, { Header, Tabbar, TabItem, Swipe, SwipeItem, Cell, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'

import "./css/mui.min.css";
import "./css/icons-extra.css";
import "./css/global.css";
import App from "./app.vue"

import router from "./router.js"

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);

Vue.use(vuex)
Vue.use(Router)
Vue.use(MintUI)
Vue.use(vueSource)

Vue.filter("formatDate", function(dataInfo, pattern) {
    let da = new Date(dataInfo);
    let yy = da.getFullYear();
    let mm = da.getMonth() + 1;
    let dd = da.getDate();
    if (pattern.toLowerCase() === "yyyy-mm-dd") {

        return `${yy}-${mm}-${dd}`;
    } else {
        let hh = da.getHours();
        let min = da.getMinutes();
        let ss = da.getSeconds();
        return `${yy}-${mm}-${dd} ${hh}:${min}:${ss}`;
    }

});

let vuexStore = new vuex.Store({
    state: {
        name: "jack"
    },
    mutations: {
        changename: function(state) {
            state.name = "rose"
        }
    },
    getters: {
        getname: function(state) {
            return state.name
        }
    }
})

let app = new Vue({
    el: "#app",
    render: c => c(App),
    router,
    store: vuexStore
})
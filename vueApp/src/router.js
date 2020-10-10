import Router from "vue-router";

import home from "./components/home.vue";
import vip from "./components/vip.vue";
import car from "./components/car.vue";
import search from "./components/search.vue";
import news from "./components/news.vue";
import newsCon from "./components/newsCon.vue";
import imgShow from "./components/imgShow.vue";
import goods from "./components/goods.vue";

let routes = [{
        path: "/",
        redirect: '/home'
    }, {
        path: "/home",
        component: home
    },
    {
        path: "/vip",
        component: vip
    },
    {
        path: "/car",
        component: car
    },
    {
        path: "/search",
        component: search
    },
    {
        path: "/home/news",
        component: news
    },
    {
        path: "/home/news/newsCon/:id",
        component: newsCon
    },
    {
        path: "/home/imgs",
        component: imgShow
    },
    {
        path: "/home/goods",
        component: goods
    }
]

let router = new Router({
    routes
})

export default router
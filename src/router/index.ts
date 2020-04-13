import Vue from "vue";
import VueRouter from "vue-router";
import GearCalcPage from "../views/GearCalcPage.vue";
import Search from "../views/Search.vue";
import ScorePage from "../views/Scores.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Search
  },
  {
    path: "/calc",
    name: "calc",
    component: GearCalcPage
  },
  {
    path: "/scores",
    name: "scores",
    component: ScorePage
  }
];

const router = new VueRouter({
  routes
});

export default router;

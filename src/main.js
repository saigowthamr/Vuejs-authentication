import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import routes from "./router";

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: "history",
  routes
});



router.beforeEach((to, from, next) => {
  var token = localStorage.getItem("token");
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (token && !requiresAuth) {
    next({ path: "/home" });
  } else if (!token && requiresAuth) {
    next({ path: "/signin" });
  } else {
    next();
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

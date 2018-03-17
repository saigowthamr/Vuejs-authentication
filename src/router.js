import Sai from "./Signin.vue";
import Signup from "./Signup.vue";
import Hello from "./Hello.vue";
import Signout from "./signout.vue";
import Welcome from "./Welcome.vue";

const routes = [
  { path: "/", component: Welcome },
  { path: "/signin", component: Sai },
  { path: "/signup", component: Signup },
  { path: "/signout", component: Signout, meta: { requiresAuth: true } },

  { path: "/home", component: Hello, meta: { requiresAuth: true } }
];

export default routes;

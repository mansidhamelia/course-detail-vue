import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/CourseDetail.vue";
import CourseInfo from "../components/CourseInfo";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/info",
  //   name: "info",
  //   component: CourseInfo,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

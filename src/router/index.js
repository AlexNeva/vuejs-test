import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/storage-systems",
    name: "storage-systems",
    component: () => import("@/views/StorageSystems.vue"),
  },
  {
    path: "/shelving-systems",
    name: "shelving-systems",
    component: () => import("@/views/ShelvingSystems.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import EnchantmentPage from "@/views/EnchantmentPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/enchant", component: EnchantmentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

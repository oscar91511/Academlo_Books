import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../home/page/HomePage.vue";
import AuthorLayout from "../authors/layout/AuthorLayout.vue";
import AuthorListPage from "../authors/pages/AuthorListPage.vue";
import AuthorPage from "../authors/pages/AuthorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/authors",
      name: "authors",
      component: AuthorLayout,
      redirect: { name: "authors-list" },
      children: [
        {
          path: "/authors/list",
          name: "authors-list",
          component: AuthorListPage,
        },
        {
            path: "/authors/detail/:id",
            name: "authors-detail",
            component: AuthorPage,
        }
      ],
    },
  ],
});

export default router;

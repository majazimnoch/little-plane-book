import { createRouter, createWebHistory } from "vue-router";
import AboutPlanes from "@/components/AboutPlanes.vue";
import AircraftsTypes from "@/components/AircraftsTypes.vue";
import PlanesYouTravelWith from "@/components/PlanesYouTravelWith.vue";

const routes = [
  {
    path: "/",
    name: "AboutPlanes",
    component: AboutPlanes,
  },
  {
    path: "/aircrafts-types",
    name: "AircraftsTypes",
    component: AircraftsTypes,
  },
  {
    path: "/planes-you-travel-with",
    name: "PlanesYouTravelWith",
    component: PlanesYouTravelWith,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { type RouteConfigEntry, index, route } from "@react-router/dev/routes";

const appRoutes: RouteConfigEntry[] = [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx")
];

export default appRoutes;

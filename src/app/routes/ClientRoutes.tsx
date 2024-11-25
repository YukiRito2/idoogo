import { Routes, Route } from "react-router-dom";
import { indexRoutes } from "../constants/index.routes";
import { ShopLayout } from "../layout/ShopLayout";
import HomeStore from "../pages/Store/HomeStore";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path={indexRoutes.HOME_STORE} element={<ShopLayout />}>
        <Route index element={<HomeStore />} />
      </Route>
    </Routes>
  );
};

export default ClientRoutes;

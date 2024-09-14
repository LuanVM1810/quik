import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllSpace from "./pages/AllSpace";
import RootLayout from "./layouts/RootLayout";
import RoomDetail from "./components/RoomList/RoomDetail";
import SpaceLayout from "./layouts/SpaceLayout";
import SingIn from "./components/SingIn/SingIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="sign-in" element={<SingIn />} />
      <Route path="allspace" element={<SpaceLayout />}>
        <Route index element={<AllSpace />} />
        <Route path=":roomId" element={<RoomDetail />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

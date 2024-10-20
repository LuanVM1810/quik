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
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/SignUp/ForgotPassword";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import SignUpCompany from "./components/SignUp/SignUpCompany";
import Profile from "./components/Profile/Profile";
import AboutUs from "./components/AboutUs/AboutUs";
import AdminLayout from "./layouts/AdminLayout";
import UserList from "./components/Admin/UserList";
import BusinessList from "./components/Admin/BusinessList";
import TransactionList from "./components/Admin/TransactionList";
import Revenue from "./components/Admin/Revenue";
import NotFoundPage from "./pages/error/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="about-us" element={<AboutUs />} />
      <Route index element={<HomePage />} />
      <Route path="signin" element={<SingIn />} />
      <Route path="signup-company" element={<SignUpCompany />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="order-history" element={<OrderHistoryPage />} />
      <Route path="allspace" element={<SpaceLayout />}>
        <Route index element={<AllSpace />} />
        <Route path=":roomId" element={<RoomDetail />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      {/* Admin Route */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<UserList />} />
        <Route path="business" element={<BusinessList />} />
        <Route path="transaction" element={<TransactionList />} />
        <Route path="revenue" element={<Revenue />} />
      </Route>
      {/* 404 Page */}
      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

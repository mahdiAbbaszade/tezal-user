import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Menu } from "./components/menuApp/Menu";
import { InfoShop } from "./pages/infoShop/InfoShop";
import { Shops } from "./pages/shops/Shops";
import Modal from "react-modal";
import { ShopingCard } from "./pages/shopingCard/ShopingCard";
import { RequestLoan } from "./pages/requestLoan/RequestLoan";
import { Category } from "./pages/category/Category";
import { CheckPhone } from "./pages/login/Checkphone";
import { History } from "./pages/history/History";
import { SideBar } from "./components/siebar/SideBar";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import VerifyCode from "./pages/login/VerifyCode";
import { useRecoilValue } from "recoil";
import { loginInfoState } from "./atom/atom";
import { Auth } from "./contexts/Auth";
import axiso from "axios";
import { UserProfiel } from "./pages/profile/UserProfiel";
import { Logo } from "./components/Logo";
Modal.setAppElement("#modal");
function App() {
  const { token } = useRecoilValue(loginInfoState);

  axiso.defaults.headers.common["x-access-token"] = token;
  return (
    <Router>
      <SideBar />
      {/* <section className="landscape ">
        <Logo />
        <p className="text-center text-[#1e272e] pt-4">
          لطفا گوشی خود را به صورت عمودی برگردانید
        </p>
      </section> */}
      {/* <Menu /> */}
      <div className="container_route">
        <Auth>
          <Routes>
            {/* login */}
            <Route path="/user">
              <Route index element={<CheckPhone />} />
              <Route path="login" element={<Login />} />
              <Route
                path="verify"
                element={<VerifyCode />}
              />
              <Route path="shops">
                <Route
                  index
                  element={
                    <Menu>
                      <Shops />
                    </Menu>
                  }
                />
                <Route path=":id" element={<InfoShop />} />

                <Route
                  path="pay"
                  element={<ShopingCard />}
                />
              </Route>

              <Route
                path="category"
                element={
                  <Menu>
                    <Category />
                  </Menu>
                }
              />
              <Route
                path="history"
                element={
                  <Menu>
                    <History />
                  </Menu>
                }
              />

              <Route
                path="requestloan"
                element={<RequestLoan />}
              />

              {/* <Route
            path="profile"
            element={<Profile />}
          /> */}
              <Route
                path="profile"
                element={<UserProfiel />}
              />
            </Route>
          </Routes>
        </Auth>
      </div>
    </Router>
  );
}

export default App;

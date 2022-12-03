import { useContext } from "react";
import { BsCircle } from "react-icons/bs";
// import { FaPlus } from "react-icons/fa";
import "./Menu.css";
import { NavLink, useLocation } from "react-router-dom";
import { focusInputContext } from "../../contexts/FocusInput";
import Report from "./../../assests/img/report.svg";
import SettingIocn from "./../../assests/img/icon-setting.svg";
import QrCode from "./../../assests/img/qr-code.svg";
interface props {
  children?: React.ReactNode;
}
export const Menu = ({ children }: props) => {
  const { focus } = useContext(focusInputContext);
  const location = useLocation();
  let pathname = location.pathname;

  return (
    <div>
      {children}
      <div
        className={`menuHome fixed w-full bottom-8 z-40 justify-center items-center ${
          focus ? "hidden md:flex" : "flex"
        }`}
      >
        <ul className="w-10/12 menu__container_ px-6 py-[1rem] shadow-menu bg-[#0096f5] rounded-2xl flex items-center justify-between">
          <li className={`li_icon_menu -mt-14`}>
            <NavLink to="/user/shops">
              <div className="border-2 border-[#fefefe] w-14 h-14 rounded-2xl shadow-qr bg-[#f2f2f2] flex justify-center items-center">
                <img alt="aksmenu" src={QrCode} className="h-8 w-8" />
              </div>
            </NavLink>
          </li>

          <li
            className={`li_icon_menu setting_icon_menu ${
              pathname === "/user/category" &&
              "activeMenuItem"
            }`}
          >
            <NavLink to="/user/category">
              <img alt="aksmenu" src={SettingIocn} />
              <p>دسته‌بندی</p>
            </NavLink>
          </li>
          <li
            className={`li_icon_menu ${
              pathname === "/user/shops" && "activeMenuItem"
            }`}
          >
            <NavLink to="/user/shops">
              <BsCircle size={29} />
              <p className="pt-2">فروشگاه</p>
            </NavLink>
          </li>
          <li
            className={`li_icon_menu ${
              pathname === "/user/history" &&
              "activeMenuItem"
            }`}
          >
            <NavLink to="/user/history">
              <img alt="aksmenu" src={Report} />
              <p>سابقه</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

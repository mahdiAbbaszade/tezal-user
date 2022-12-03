import { useState } from "react";

import "./Sidebar.css";
import { Item } from "./Item";
import Logo from "./../../assests/img/logoTezal.svg.svg";
import { toggleSidebar } from "../../atom/atom";
import { setRecoil } from "recoil-nexus";
import { useRecoilValue } from "recoil";
import TremsIocn from "./../../assests/img/trems.svg";
import ProblomIocn from "./../../assests/img/problom.svg";
import ContentUsIocn from "./../../assests/img/contentUs.svg";
import OutIocn from "./../../assests/img/out.svg";
import { Out } from "./Out";

export const SideBar = () => {
  const openSidebar = useRecoilValue( toggleSidebar );
  const [isOpen, setIsOpen] = useState( false );
  return (
    <>
      <div>
        <div className="navContainer p-0">
          <div
            className="mainNav z-50"
            //@ts-ignore
            style={
              openSidebar
                ? { transform: "translateY(0%)",position:"absolute",right:"0%",top:"0%" }
                : null
            }
          >
            <div className="flex justify-center items-center mt-8">
              <img
                src={Logo}
                alt="logo"
                className="object-contain h-20"
              />
            </div>
            {/* items menu */}
            <div className="pr-5 flex flex-col gap-5 mt-16">
              <Item
                name="قوانین و مقررات"
                icon={
                  <img alt="row" src={TremsIocn} className="w-6" />
                }
              />
              <Item
                name="گزارش مشکل"
                icon={
                  <img alt="row2" src={ProblomIocn} className=" w-6" />
                }
              />
              <Item
                name="تماس با ما"
                icon={
                  <img
                  alt="row3"
                    src={ContentUsIocn}
                    className="-mr-2 w-8"
                  />
                }
              />
              <Item
                onClick={() => {
                  setRecoil( toggleSidebar, !openSidebar );
                  setIsOpen( !isOpen );
                }}
                name="خروج"
                icon={
                  <img
                  alt="ro4"
                    src={OutIocn}
                    className="-mr-2 w-8"
                  />
                }
              />
            </div>
          </div>
        </div>

        <div
          onClick={() =>
            setRecoil( toggleSidebar, !openSidebar )
          }
          className={`overlay ${openSidebar ? "open" : ""}`}
        />
      </div>
      <Out isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

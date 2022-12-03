import React from "react";
import { BiUser } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { useRecoilState } from "recoil";
import { toggleSidebar } from "../atom/atom";
import { Filterinput } from "./Filter&input/Filter&input";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
interface props {
  isShowSearch: boolean;
  profile?: boolean;
  children?: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: any) => void;
  onClickFilter?: () => void;
}
export const Header = ({
  isShowSearch,
  profile,
  children,
  className,
  onChange,
  value,
  onClickFilter,
}: props) => {
  const [openSidebar, setOpenSidebar] =
    useRecoilState(toggleSidebar);

  const navigate = useNavigate();

  return (
    <header
      className={` ${
        className
          ? className
          : "sticky top-0 left-0 right-0 h-fit "
      } `}
    >
      <div className="flex justify-between items-center px-4 w-full bg-[#0096f5] h-20 ">
        <div
          onClick={() => setOpenSidebar(!openSidebar)}
          className="bg-white rounded-full shadow-style-header p-2 cursor-pointer overflow-hidden "
        >
          <CgMenuRight
            size={25}
            className=""
            color="#0096f5"
          />
        </div>
        {profile ? (
          <div
            onClick={() => navigate(-1)}
            className="bg-white rounded-full shadow-style-header p-1 cursor-pointer overflow-hidden "
          >
            <RiArrowLeftSLine
              size={36}
              className=""
              color="#0096f5"
            />
          </div>
        ) : (
          <Link to="/user/profile">
            <div className="bg-white rounded-full  shadow-style-header p-2 cursor-pointer relative">
              <BiUser
                size={25}
                className=""
                color="#0096f5"
              />

              <div className="notification text-sm bg-[#ea2027]">
                ۱+
              </div>
            </div>
          </Link>
        )}
      </div>
      {children}
      {isShowSearch && (
        <div className="px-6 py-6 filterIcon_input_header">
          <Filterinput
            onClickFilter={onClickFilter}
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </header>
  );
};

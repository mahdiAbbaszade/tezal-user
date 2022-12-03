import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Header } from "../../components/Header";
import { UserInfoProfile } from "./UserInfoProfile";
import SearchIcon from "./../../assests/img/Icon-search.svg";
import "./UserProfile.css";
import { CardMessageProfile } from "./CardMessageProfile";
import { useQuery } from "react-query";
import { getMyNotificationsApi } from "../../utils/API";

export const UserProfiel = () => {
  const [notification, setNotification] = useState([]);
  const getMyNotifications = useQuery(
    ["getMyNotificationsApi"],
    () => getMyNotificationsApi(),
    {
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 1,
      onSuccess: (data) => {
        setNotification(data.data.notifications);
      },
    }
  );
  return (
    <div>
      <div className="sticky container__profile_user bg-[#f2f2f2] left-0  top-0 w-full ">
        <Header
          className="h-[43vh] bg-[#0096f5]"
          profile
          isShowSearch={false}
        >
          <div className=" flex justify-center items-center">
            <div className="user_image bg-[#fefefe] h-28 w-32 flex justify-center items-center rounded-[23%] ">
              <BiUser size={100} color="#0096f5" />
            </div>
          </div>
          <UserInfoProfile />
          {/* search */}
          <div className="relative flex-1 mx-4 mt-4">
            <input
              placeholder="جستجو کنید..."
              className=" w-full 
            bg-transparent
           h-10 outline-none 
             border-2
          border-[#0096f5] 
          rounded-xl pr-3 pl-9 
          text-[#1e272e]
          yekanBold placeholder:text-[#808e9b]
          placeholder:text-sm
          
          active:border-[#0096f5] z-50"
            />
            <img
              src={SearchIcon}
              className="absolute block left-2 bg-transparent  top-3 text-[#808e9b] "
            />
          </div>
        </Header>
      </div>
      <div className="mx-4  container_notfication_user overflow-auto">
        {/* card */}

        {getMyNotifications.isSuccess ? (
          notification.length === 0 ? (
            <p className="text-center text-sm mt-10 text-[#1e272e]">
              شما هیچ پیامی ندارید
            </p>
          ) : (
            notification.map((item: any, index) => {
              return (
                <CardMessageProfile
                  Body={item.body}
                  Tilte={item.title}
                  CreatedAt={item.createdAt}
                  key={index}
                />
              );
            })
          )
        ) : null}
      </div>
    </div>
  );
};

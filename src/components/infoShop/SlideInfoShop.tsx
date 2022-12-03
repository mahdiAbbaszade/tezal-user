import { useState } from "react";
import Slider from "react-slick";
//@ts-ignore
import persianJs from "persianjs";
import Home1 from "./../../assests/img/home1.jpg";
import Home2 from "./../../assests/img/home2.jpg";
import Home3 from "./../../assests/img/home3.jpg";
import Home4 from "./../../assests/img/home4.jpg";
import Home5 from "./../../assests/img/home5.jpg";
import { CardOnSlider } from "./CardOnSlider";
import "./SliderInfoShop.css";
import { MdOutlineClose } from "react-icons/md";
interface props {
  handleToggleModal: () => void;
  toggleAddressInfoshop: () => void;
}
export const SlideInfoShop = ({
  handleToggleModal,
  toggleAddressInfoshop,
}: props) => {
  const handleAfterChange = (index: any) => {
    console.log("after change", index);
    setState(index);
  };
  const [state, setState] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    arrows: false,
    appendDots: (dots: any) => (
      <button
        disabled={fullScreen ? false : true}
        className=" !appearance-none !w-full button_on_slide"
        onClick={() => setFullScreen(!fullScreen)}
      >
        <MdOutlineClose
          color="#fff"
          size={29}
          className="!absolute bottom-[54.5vh] left-1 "
        />
        <ul
          className={`${
            fullScreen
              ? "!absolute bottom-[55vh] mx-auto w-full flex items-center justify-center"
              : "flex items-center w-[95%] mx-auto w-"
          }`}
        >
          <div
            className={`${
              fullScreen && "hidden"
            } flex-auto `}
          >
            {dots}
          </div>

          <div className="flex-1">
            <p className="yekanBold text-sm text-white">
              تصویر{" "}
              <span>
                {persianJs(5).englishNumber().toString()}
              </span>{" "}
              از{" "}
              <span>
                {persianJs(state + 1)
                  .englishNumber()
                  .toString()}
              </span>
            </p>
          </div>
        </ul>
        {!fullScreen && (
          <CardOnSlider
            handleToggleModal={handleToggleModal}
            toggleAddressInfoshop={toggleAddressInfoshop}
          />
        )}
      </button>
    ),
  };

  return (
    <div
      className={`${
        fullScreen &&
        "fixed z-50 h-[100vh] bg-black   top-0 left-0  w-full flex flex-col justify-center"
      }`}
    >
      <Slider {...settings} className="slider__info_shop ">
        <div>
          <img
            src={Home1}
            alt=""
            className="z-50"
            onClick={() => setFullScreen(true)}
          />
        </div>
        <div>
          <img
            src={Home2}
            alt=""
            className="z-50"
            onClick={() => setFullScreen(true)}
          />
        </div>
        <div>
          <img
            src={Home3}
            alt=""
            className="z-50"
            onClick={() => setFullScreen(true)}
          />
        </div>
        <div>
          <img
            src={Home4}
            alt=""
            className="z-50"
            onClick={() => setFullScreen(true)}
          />
        </div>
        <div>
          <img
            src={Home5}
            alt=""
            className="z-50"
            onClick={() => setFullScreen(true)}
          />
        </div>
      </Slider>
    </div>
  );
};

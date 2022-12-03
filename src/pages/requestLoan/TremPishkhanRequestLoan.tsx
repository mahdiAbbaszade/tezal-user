import React from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

interface props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TremPishkhanRequestLoan = ({ isOpen , setIsOpen}: props) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="dialog">
      <Modal
        closeTimeoutMS={500}
        className="modalListTimeOpenShop"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          content: {
            position: "absolute",
            top: "35%",
            left: "0px",
            right: "0px",
            bottom: "0px",
            border: "hidden",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            outline: "none",
            padding: "20px",
          },
        }}
        isOpen={isOpen}
      >
        <div className="flex justify-end">
          <IoMdClose
            onClick={() => setIsOpen(!isOpen)}
            size={25}
            className="text-[#1e272e] justify-self-end  "
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="ExtraBold text-[#1e272e] text-lg">
            {" "}
            مراحل درخواست وام از فروشگاه:
          </p>
          <div className="space-y-3 text-[#808e9b] text-sm">
            <p>
              اصل کارت ملی و شناسنامه، گواهی شغلی و یک شماره همراه به نام خود
              فرد متقاضی و همچنین مدارک ضامن (اصل کارت ملی و شناسنامه، گواهی
              شغلی و یک شماره همراه به نام خود ضامن) مراجعه گردد. نتیجه اعتبار
              سنجی طی ۱ الی ۷ روز کاری با یک پیامک ارسال می‌شود.
            </p>
            <p>
              ابتدا برای اعتبار سنجی به دفتر پیشخوان دولت معرفی شده همراه با
              مدارک پس از دریافت نتیجه اعتبارسنجی به تناسب مبلغی که در آن درج
              شده می‌توانید مبلغ وام را اصلاح کنید.
            </p>
            <p>
              تذکر: مبلغ اصلاحی نباید از مبلغ کالا بیشتر باشد. سفته‌های دیجیتال
              ثبت و مبلغ پیش پرداخت واریز می‌گردد. یک پیامک با عنوان ثبت سفته‌ها
              به شخص وام گیرنده ارسال میشود بعد از دریافت پیامک متقاضی از پنل
              کاربری خود یک درخواست وام به همان مبلغ ذکر شده ثبت می کند و طی ۱
              الی ۲ روز کاری وام واریز شود.
            </p>
          </div>
        </div>
      </Modal>
    </CSSTransition>
  );
};

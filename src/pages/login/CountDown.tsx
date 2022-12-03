import { useState, useEffect } from "react";
import ResultGetCodeAgain from "./ResultGetCodeAgain";
import { useGetCodeSms } from '../../customHook/useGetCodeSms';
import { useModal } from '../../customHook/useModal';

const CountDown = (props: any) => {
  const [error, setError] = useState("");
  const { initialMinute = 1, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(9);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const { getCode } = useGetCodeSms({ setError });
  const { isOpen, handleToggleModal } = useModal();
  const clickDetCode = async () => {
    await handleToggleModal();
    getCode.refetch();
  };
  return (
    <>
      <div>
        {minutes === 0 && seconds === 0 ? (
          <p
            onClick={clickDetCode}
            className="text-blue-500 text-xs regular text-left cursor-pointer hover:underline hover:underline-offset-2"
          >
            کد را دریافت نکرده‌اید؟
          </p>
        ) : (
          <h6 className="text-left text-xs yekanBold text-gray-500">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds} تا ارسال مجدد کد
          </h6>
        )}
      </div>
      <ResultGetCodeAgain
        getCode={getCode}
        isOpen={isOpen}
        close={handleToggleModal}
        error={error}
      />
    </>
  );
};

export default CountDown;

import React, { useContext, useEffect } from "react";
import { ProccessSteps } from "./ProccessSteps";
import { StepsTwo } from "./StepsTwo";
import { StepsThree } from "./StepsThree";
import { useRecoilState } from "recoil";
import { StepsOne } from "./StepsOne";
import {
  loanInfoRequestKey,
  stepsRequestLoan,
} from "../../atom/atom";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { loanGetByIdApi } from "../../utils/API";
import StepsFour from "./StepsFour";
import { focusInputContext } from "../../contexts/FocusInput";

export const RequestLoan = () => {
  const { focus } = useContext(focusInputContext);

  const [steps, setSteps] = useRecoilState(
    stepsRequestLoan
  );

  return (
    <div className="bg-[#fefefe] h-screen">
      <ProccessSteps />
      <div
        className={`${focus ? "h-[117vh]" : "h-[83vh]"}`}
      >
        {steps === 1 ? (
          <StepsOne />
        ) : steps === 2 ? (
          <StepsTwo />
        ) : steps === 3 ? (
          <StepsThree />
        ) : steps === 4 ? (
          <StepsFour />
        ) : null}
      </div>
    </div>
  );
};

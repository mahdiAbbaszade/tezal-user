import React from "react";
import { FaUserPlus, FaWpforms, FaUserCheck } from "react-icons/fa";
import { BsReceiptCutoff } from "react-icons/bs";
import "./ProcessSteps.css";
import { useRecoilValue } from "recoil";
import { stepsRequestLoan } from "../../atom/atom";
export const ProccessSteps = () => {
  const steps = useRecoilValue(stepsRequestLoan);
  return (
    <div className="container_processSteps grid h-[10vh]">
      <section className="step-indicator">
        {/* step1 */}
        <div
          className={`step step1 ${
            steps === 1 || steps === 2 || steps === 3 || steps === 4
              ? "active"
              : ""
          }`}
        >
          <div className="step-icon">
            <FaUserPlus size={18} color="#fff" />
          </div>
        </div>
        {/* line */}
        <div
          className={`indicator-line ${
            steps === 1 || steps === 2 || steps === 3 || steps === 4
              ? "active"
              : ""
          }`}
        ></div>
        {/* step2 */}
        <div
          className={`step step2 ${
            steps === 2 || steps === 3 || steps === 4 ? "active" : ""
          }`}
        >
          <div className="step-icon ">
            <FaWpforms size={18} />
          </div>
        </div>
        {/* line */}
        <div
          className={`indicator-line ${
            steps === 2 || steps === 3 || steps === 4 ? "active" : ""
          } `}
        ></div>
        {/* step3 */}
        <div
          className={`step step3 ${steps === 3 || steps === 4 ? "active" : ""}`}
        >
          <div className="step-icon ">
            <FaUserCheck size={18} />
          </div>
        </div>
        {/* line */}
        <div
          className={`indicator-line ${
            steps === 3 || steps === 4 ? "active" : ""
          } `}
        ></div>
        {/* step4 */}
        <div className={`step step4 ${steps === 4 ? "active" : ""}`}>
          <div className="step-icon ">
            <BsReceiptCutoff size={18} />
          </div>
        </div>
      </section>
    </div>
  );
};

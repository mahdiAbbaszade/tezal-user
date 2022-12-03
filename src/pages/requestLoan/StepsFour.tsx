import React from "react";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import {
  loanInfoRequestKey,
  loginInfoState,
} from "../../atom/atom";
import { CreditRequestApi } from "../../utils/API";
import { removeNonNumeric } from "../../utils/helper";

const StepsFour = () => {
  const { userId } = useRecoilValue(loginInfoState);
  const info = useRecoilValue(loanInfoRequestKey);

  const amountRequestLoan = ~~removeNonNumeric(
    info.infoLoan.money
  );
  const data = {
    CreditRequest: {
      ProductOrUtilitiyName: info.formData.name,
      ProductCount: info.formData.count
        ? parseInt(info.formData.count)
        : 1,
      ProductOrUtilitiyPrice: amountRequestLoan,
      RequestLOANAmount: amountRequestLoan,
      BusinessId: info.infoLoan.loanInfo.BusinessId,
      userId: userId,
      validationMethod: info.validationMethod,
    },
    LoanTypeId: info.infoLoan.loanInfo._id,
  };


  const CreditRequest = useMutation(()=> CreditRequestApi({data}))

  return (
    <div>
      <button onClick={() => CreditRequest.mutate()}>
        درخواست
      </button>
    </div>
  );
};

export default StepsFour;

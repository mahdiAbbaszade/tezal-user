//@ts-ignore
import persianJs from "persianjs";
import { addCommas } from "../../utils/helper";
export const optionJobs = [
  {
    label: "کارمند ادارات دولتی",
    value: 1,
  },
  {
    label: "کارمند ادارات و شرکت های خصوصی",
    value: 2,
  },
  {
    label: "بازاری",
    value: 3,
  },
  {
    label: "رانندگان وسایط نقلیه سنگین",
    value: 4,
  },
  {
    label: "رانندگان تاکسی",
    value: 5,
  },
  {
    label: "کارگران ساختمانی",
    value: 6,
  },
  {
    label: "بازنشستگان تامین اجتماعی",
    value: 7,
  },
  {
    label: "بازنشستگان سایر ادارات",
    value: 8,
  },

  {
    label: "سایر موارد",
    value: 9,
  },
];

export const evidenceOption = [
  {
    label: "آخرین فیش حقوقی را دارم",
    value: 1,
  },
  {
    label:
      "آخرین فیش حقوقی (یا گواهی شغلی) + سوابق بیمه را دارم",
    value: 2,
  },
  {
    label: "پروانه کسب را دارم",
    value: 3,
  },
  {
    label: "کارت هوشمند را دارم",
    value: 4,
  },
  {
    label: "کارت تاکسیرانی را دارم",
    value: 5,
  },
  {
    label: "گواهی مهارت فنی حرفه ای+ سوابق بیمه را دارم",
    value: 6,
  },
  {
    label: "آخرین فیش حقوقی را دارم",
    value: 7,
  },
  {
    label: "آخرین فیش حقوقی را دارم",
    value: 8,
  },
  {
    label:
      "اجارنامه معتبر+ گردش 3 ماهه حساب فعال بانکی را دارم",
    value: 9,
  },
];

interface propsPrepaymentAmount {
  valueInput: number;
  loan: any;
}
export const prepaymentAmount = ({
  loan,
  valueInput,
}: propsPrepaymentAmount) => {
  if (isNaN(valueInput))
    return persianJs.englishNumber("0").toString();
  let totalBorkersPresent = 0;
  for (let i = 0; i < loan.BrokerPercents.length; i++) {
    totalBorkersPresent += loan.BrokerPercents[i].Percent;
  }
  let precent =
    totalBorkersPresent +
    (loan.DiscountFromBusinessToSEB -
      loan.DiscountFromSEBToCustomers);

  let AmountToPay = Math.round(
    valueInput * (precent / 100)
  );
  if (
    loan.PrePayPercentage > 0 &&
    loan.PrePayPercentage !== undefined &&
    loan.PrePayPercentage !== null
  ) {
    const x = Math.round(
      valueInput * (loan.PrePayPercentage / 100)
    );
    const PrePayPercentage = Math.round(AmountToPay + x);
    return addCommas(PrePayPercentage);
  } else {
    return addCommas(AmountToPay);
  }
};

export const InstallmentMonths = ({
  loan,
  valueInput,
}: propsPrepaymentAmount) => {
  var x = (2 / 100) * valueInput;
  let result = Math.round(
    (x + valueInput) / (loan.Duration - 1)
  );
  if (isNaN(result)) {
    result = 0;
  }

  return addCommas(result);
};

interface propsPrecentAmount {
  loan: any;
}

export const precentAmount = ({
  loan,
}: propsPrecentAmount) => {
  let totalBorkersPresent = 0;
  if (loan) {
    for (let i = 0; i < loan.BrokerPercents.length; i++) {
      totalBorkersPresent += loan.BrokerPercents[i].Percent;
    }
  }
  let LoanPercentForUser =
    totalBorkersPresent -
    loan.DiscountFromSEBToCustomers +
    loan.LoanPercentage;

  return addCommas(LoanPercentForUser);
};

interface propsfirstInstallment {
  loan: any;
  valueInput: number;
}
export const firstInstallmentActive = ({
  valueInput,
  loan,
}: propsfirstInstallment) => {
  if (isNaN(valueInput)) return "0";
  let installment =
    loan &&
    Math.round(
      (loan.FirstInstalment.Amount / 100) * valueInput
    );

  return addCommas(installment);
};

export const firstInstallmentInActive = ({
  loan,
  valueInput,
}: propsfirstInstallment) => {
  if (isNaN(valueInput))
    return persianJs.englishNumber(0).toString();
  let installment =
    loan &&
    Math.round(
      (loan.FirstInstalment.Amount * valueInput) /
        valueInput
    );
  return addCommas(installment);
};

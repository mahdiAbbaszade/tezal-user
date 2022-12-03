import { CardOrder } from "./CardOrder";
import { digitsEnToFa } from "@persian-tools/persian-tools";

interface props{
  infoPay:{
    Title: string,
  };
  amount:string
}
export const Orders = ({infoPay,amount}:props) => {

  return (
    <div className="px-4">
      <p className="pb-2 yekanBold text-sm">سفارش‌ها</p>
      <div className="">
        <CardOrder
          address={infoPay.Title}
          count={digitsEnToFa(1)}
          money={!amount ? digitsEnToFa("0") : digitsEnToFa(amount)}
          off=""
        />
      </div>
    </div>
  );
};

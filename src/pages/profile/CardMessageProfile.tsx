import { digitsEnToFa } from "@persian-tools/persian-tools";
import moment from "jalali-moment";
import React from "react";

interface props {
  Tilte: string;
  Body: string;
  CreatedAt: string;
}
export const CardMessageProfile = ({
  Body,
  CreatedAt,
  Tilte,
}: props) => {
  return (
    <div className="flex flex-col py-3 gap-4 rounded-xl bg-[#fefefe] shadow my-3 px-6 ">
      <div className="flex items-center justify-between">
        <p className="ExtraBold text-md text-[#0096f5]">
          {Tilte}
        </p>
        <div className="flex gap-5 text-sm text-[#808e9b]">
          <p>
            {digitsEnToFa(
              moment(CreatedAt).format("HH:mm")
            )}
          </p>
          <p>
            {digitsEnToFa(
              moment(CreatedAt).format("jYYYY/jMM/jDD")
            )}
          </p>
        </div>
      </div>
      <p className="text-sm text-[#1e272e]">{Body}</p>
    </div>
  );
};

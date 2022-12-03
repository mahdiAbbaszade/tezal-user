import SearchIcon from "./../../assests/img/Icon-search.svg";
import FilterIcon from "./../../assests/img/filter.svg";

interface props {
  value?: string;
  onChange?: (e:any) => void;
  onClickFilter?:()=>void,

}
export const Filterinput = ({ onChange, value,onClickFilter }: props) => {
  return (
    <div className="flex gap-3  justify-center items-center">
      <div className="relative flex-1 ">
        <input
          value={value}
          onChange={onChange}
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
      <div onClick={onClickFilter} className="rounded-xl z-50 cursor-pointer w-10 h-10 flex justify-center items-center bg-[#0096f5] ">
        <img src={FilterIcon} className="h-6 w-7" />
      </div>
    </div>
  );
};

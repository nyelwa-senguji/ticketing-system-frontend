import Label from "../../elements/Label/label";
import { BiPlus, BiCaretDown, BiSearch } from "react-icons/bi";
import Input from "../../elements/Input/input";

export default function SearchPanel() {
  return (
    <>
      <div className="flex flex-col w-full px-48 pt-20 pb-10">
        <div className="flex flex-row justify-between pb-1">
          <Label
            htmlFor=""
            value="Your Support Requests"
            class="text-gray-500 text-2xl"
          />
          <div className="flex flex-row text-blue-700 py-2">
            <BiPlus />
            <Label
              htmlFor=""
              value="MAKE SUPPORT REQUEST"
              class="text-sm pl-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row px-5 py-4 bg-white ">
          <div className="flex flex-row text-gray-500 align-middle">
            <Label htmlFor="" value="Status" class="" />
            <span className="pt-1 pr-3">
              <BiCaretDown size={14} />
            </span>
            <span className="border-l border-gray-400 pr-3"></span>
            <span className="pt-1 pr-3">
              <BiSearch size={18} />
            </span>
            <Input
              type="text"
              name="search_value"
              id="search_value"
              placeholder="Search by ID or Topic"
              class="block w-full  bg-white border border-none rounded-md text-base text-slate-500  focus:outline-none "
            />
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react"
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react/components/Menu"
import CalendarSvg from "../assets/CalendarSvg"

type Props = {
  name: string
}

const DropDown = (props: Props) => {
  const [isCalendar, setIsCalendar] = useState(false)

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <div
          onMouseEnter={() => setIsCalendar(!isCalendar)}
          onMouseLeave={() => setIsCalendar(!isCalendar)}
          className="flex flex-row justify-center items-center cursor-pointer">
          <CalendarSvg className={isCalendar ? "fill-blue" : ""} />
          <h1 className="text-[0.875rem] ml-[0.5rem] text-center text-blue font-Regular  select-none">
            {props.name}
          </h1>
        </div>
      </MenuHandler>
      <MenuList className="w-[12.75rem] h-[15.125rem] rounded-[0.25rem] border border-solid border-[#EAF0FA] shadow-[#E9EDF3] shadow-sm p-0">
        <MenuItem
          className={
            props.name === "3 дня"
              ? "w-[12.625rem] h-[2.5rem] rounded-none focus:bg-[rgba(0,_44,_251,_0.13)] text-[0.875rem] text-blue hover:text-black font-Regular pl-[1.3125rem]"
              : "w-[12.625rem] h-[2.5rem] rounded-none focus:bg-[rgba(0,_44,_251,_0.13)] text-[0.875rem] text-lightBlack hover:text-black font-Regular pl-[1.3125rem]"
          }>
          3 дня
        </MenuItem>
        <MenuItem
          className={
            props.name === "Неделя"
              ? "w-[12.625rem] h-[2.5rem] rounded-none focus:bg-[rgba(0,_44,_251,_0.13)] text-[0.875rem] text-blue hover:text-black font-Regular pl-[1.3125rem]"
              : "w-[12.625rem] h-[2.5rem] rounded-none focus:bg-[rgba(0,_44,_251,_0.13)] text-[0.875rem] text-lightBlack hover:text-black font-Regular pl-[1.3125rem]"
          }>
          Неделя
        </MenuItem>
        <MenuItem
          className={
            props.name === "Месяц"
              ? "w-[12.625rem] h-[2.5rem] rounded-none focus:bg-[rgba(0,_44,_251,_0.13)] text-[0.875rem] text-blue hover:text-black font-Regular pl-[1.3125rem]"
              : "w-[12.625rem] h-[2.5rem] rounded-none focus:bg-[rgba(0,_44,_251,_0.13)] text-[0.875rem] text-lightBlack hover:text-black font-Regular pl-[1.3125rem]"
          }>
          Месяц
        </MenuItem>
        <MenuItem
          className={
            props.name === "Год"
              ? "w-[12.625rem] h-[2.5rem] rounded-none focus:bg-[rgba(0,_44,_251,_0.13)] text-[0.875rem] text-blue hover:text-black font-Regular pl-[1.3125rem]"
              : "w-[12.625rem] h-[2.5rem] rounded-none focus:bg-[rgba(0,_44,_251,_0.13)] text-[0.875rem] text-lightBlack hover:text-black font-Regular pl-[1.3125rem]"
          }>
          Год
        </MenuItem>
        <MenuItem>Hello</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default DropDown

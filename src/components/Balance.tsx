import { useState } from "react"
import Plus from "./assets/sidebar/Plus"

type Props = {
  balance?: number
}

const Balance = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
      className="w-[9.0625rem] h-[2.5rem] rounded-[3rem] mr-[3rem] bg-white flex justify-center items-center cursor-pointer">
      <div className="w-[5.4375rem] h-[1.3125rem] text-[0.875rem] mr-[0.625rem] font-Medium text-lightBlack flex ">
        Баланс:
        <p className="text-black font-Medium text-[0.875rem]">
          {props.balance} ₽
        </p>
      </div>
      <Plus
        className={
          isHovered
            ? "fill-[#0024CB] active:fill-[#274BC8] active:scale-95"
            : "fill-blue "
        }
      />
    </div>
  )
}

export default Balance

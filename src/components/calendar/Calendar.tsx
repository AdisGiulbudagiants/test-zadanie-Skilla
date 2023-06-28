import { IconButton, Carousel } from "@material-tailwind/react"
import { useState } from "react"
import Arrow from "../assets/Arrow"
import DropDown from "./DropDown"

const Calendar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)

  return (
    <Carousel
      className="w-[7.1875rem] h-[1.5rem] flex items-center"
      navigation={({ length }) => (length = 0)}
      prevArrow={({ handlePrev }) => (
        <IconButton
          onClick={handlePrev}
          className="!absolute w-[16px] h-[24px] shadow-none hover:shadow-none"
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(!isHovered)}>
          <Arrow className={isHovered ? "fill-blue" : ""} />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          onClick={handleNext}
          className="!absolute w-[16px] h-[24px] right-0 rotate-[180deg] shadow-none hover:shadow-none"
          onMouseEnter={() => setIsHovered2(!isHovered2)}
          onMouseLeave={() => setIsHovered2(!isHovered2)}>
          <Arrow className={isHovered2 ? "fill-blue" : ""} />
        </IconButton>
      )}>
      <DropDown name="3 дня" />
      <DropDown name="Неделя" />
      <DropDown name="Месяц" />
      <DropDown name="Год" />
    </Carousel>
  )
}

export default Calendar

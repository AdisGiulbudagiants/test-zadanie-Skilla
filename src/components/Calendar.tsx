import { IconButton, Carousel } from "@material-tailwind/react"
import { useState } from "react"
import Arrow from "./assets/Arrow"
import CalendarSvg from "./assets/CalendarSvg"
import styles from "./Calendar.module.css"

type Props = {}

const Calendar = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isCalendar, setIsCalendar] = useState(false)

  const leftHandleHover = () => setIsHovered(!isHovered)
  const RightHandleHover2 = () => setIsHovered2(!isHovered2)
  const CalendarHandleHover = () => setIsCalendar(!isCalendar)

  return (
    <Carousel
      className={styles.carousel}
      navigation={({ length }) => (length = 0)}
      prevArrow={({ handlePrev }) => (
        <IconButton
          onClick={handlePrev}
          className="!absolute w-[16px] h-[24px] bg-0 shadow-none hover:shadow-none"
          onMouseEnter={leftHandleHover}
          onMouseLeave={leftHandleHover}>
          <Arrow className={isHovered ? "fill-blue" : ""} />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          onClick={handleNext}
          className="!absolute w-[16px] h-[24px] bg-0 right-0 rotate-[180deg] shadow-none hover:shadow-none"
          onMouseEnter={RightHandleHover2}
          onMouseLeave={RightHandleHover2}>
          <Arrow className={isHovered2 ? "fill-blue" : ""} />
        </IconButton>
      )}>
      <div
        onMouseEnter={CalendarHandleHover}
        onMouseLeave={CalendarHandleHover}
        className={styles.carouselDiv}>
        <CalendarSvg className={isCalendar ? "fill-blue" : ""} />
        <h1 className={styles.carouselText}>3 дня</h1>
      </div>
      <div
        onMouseEnter={CalendarHandleHover}
        onMouseLeave={CalendarHandleHover}
        className={styles.carouselDiv}>
        <CalendarSvg className={isCalendar ? "fill-blue" : ""} />
        <h1 className={styles.carouselText}>Неделя</h1>
      </div>
      <div
        onMouseEnter={CalendarHandleHover}
        onMouseLeave={CalendarHandleHover}
        className={styles.carouselDiv}>
        <CalendarSvg className={isCalendar ? "fill-blue" : ""} />
        <h1 className={styles.carouselText}>Месяц</h1>
      </div>
      <div
        onMouseEnter={CalendarHandleHover}
        onMouseLeave={CalendarHandleHover}
        className={styles.carouselDiv}>
        <CalendarSvg className={isCalendar ? "fill-blue" : ""} />
        <h1 className={styles.carouselText}>Год</h1>
      </div>
    </Carousel>
  )
}

export default Calendar

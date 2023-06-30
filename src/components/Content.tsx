import Calendar from "./calendar/Calendar"
import styles from "./Content.module.css"

type Props = {}

const Content = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.balanceAndDates}>
        <Calendar />
        <div></div>
      </div>
    </div>
  )
}

export default Content

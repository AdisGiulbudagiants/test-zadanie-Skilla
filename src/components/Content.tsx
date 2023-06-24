import Calendar from "./Calendar"
import styles from "./Content.module.css"

type Props = {}

const Content = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.balanceAndDates}>
        <Calendar />
      </div>
    </div>
  )
}

export default Content

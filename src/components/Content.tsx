import Balance from "./Balance"
import Calendar from "./calendar/Calendar"
import styles from "./Content.module.css"

type Props = {}

const Content = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.balanceAndDates}>
        <Balance balance={272} />
        <Calendar />
      </div>
    </div>
  )
}

export default Content

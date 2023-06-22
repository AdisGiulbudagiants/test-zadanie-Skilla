import { NavLink } from "react-router-dom"
import styles from "./Section.module.css"

type Props = {
  name: string
  img?: any
  to: string
  active: boolean
  setActive: (active: boolean) => void
}

const Section = (props: Props) => {
  function hidden() {
    if (!props.active) {
      props.setActive(true)
    }
  }

  return (
    <NavLink
      onClick={hidden}
      className={` ${props.active ? styles.main : styles.notMain}`}
      to={props.to}>
      <div className={styles.svg}>{props.img}</div>
      <h1 className={styles.text}>{props.name}</h1>
      <div className={`${props.active ? styles.pointBox : styles.hidden}`}>
        <div className={styles.point} />
      </div>
    </NavLink>
  )
}

export default Section

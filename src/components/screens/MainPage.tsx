import Navbar from "../Navbar"
import styles from "./MainPage.module.css"
import Mainlayout from "../layouts//MainLayout"

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Mainlayout />
      <Navbar />
    </div>
  )
}

export default MainPage

import Navbar from "../Navbar"
import styles from "./MainPage.module.css"
import Mainlayout from "../layouts//MainLayout"
import Content from "../Content"

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Mainlayout />
      <div>
        <Navbar />
        <Content />
      </div>
    </div>
  )
}

export default MainPage

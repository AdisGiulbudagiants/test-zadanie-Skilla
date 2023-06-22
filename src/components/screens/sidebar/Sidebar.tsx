import { useState, useEffect } from "react"
import Logo from "../../assets/Logo"
import Section from "./Section"
import SectionPhone from "../../assets/SectionPhone"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  const [activeNavLink, setActiveNavLink] = useState("")

  const getInitialActiveSection = (currentPath: string): string => {
    if (currentPath === "/1") {
      return "/1"
    }
    return "/"
  }

  useEffect(() => {
    const currentPath = window.location.pathname
    const initialActiveSection = getInitialActiveSection(currentPath) // Здесь вам нужно определить, какой NavLink должен быть активным при загрузке страницы
    setActiveNavLink(initialActiveSection)
  }, [])

  const handleNavLinkClick = (sectionName: any) => {
    setActiveNavLink(sectionName)
  }
  return (
    <div className={styles.main}>
      <div className="mb-[2rem]">
        <Logo />
      </div>
      <Section
        active={activeNavLink === "/1"}
        setActive={() => handleNavLinkClick("/1")}
        to="/1"
        img={<SectionPhone />}
        name={"Итоги"}
      />
      <Section
        active={activeNavLink === "/2"}
        setActive={() => handleNavLinkClick("/2")}
        to="/2"
        img={<SectionPhone />}
        name={"Заказы"}
      />
      <Section
        active={activeNavLink === "/3"}
        setActive={() => handleNavLinkClick("/3")}
        to="/3"
        img={<SectionPhone />}
        name={"Сообщения"}
      />
      <Section
        active={activeNavLink === "/"}
        setActive={() => handleNavLinkClick("/")}
        to="/"
        img={<SectionPhone />}
        name={"Звонки"}
      />
      <Section
        active={activeNavLink === "/5"}
        setActive={() => handleNavLinkClick("/5")}
        to="/5"
        img={<SectionPhone />}
        name={"Контрагенты"}
      />
      <Section
        active={activeNavLink === "/6"}
        setActive={() => handleNavLinkClick("/6")}
        to="/6"
        img={<SectionPhone />}
        name={"Документы"}
      />
      <Section
        active={activeNavLink === "/7"}
        setActive={() => handleNavLinkClick("/7")}
        to="/7"
        img={<SectionPhone />}
        name={"Исполнители"}
      />
      <Section
        active={activeNavLink === "/8"}
        setActive={() => handleNavLinkClick("/8")}
        to="/8"
        img={<SectionPhone />}
        name={"Отчеты"}
      />
      <Section
        active={activeNavLink === "/9"}
        setActive={() => handleNavLinkClick("/9")}
        to="/9"
        img={<SectionPhone />}
        name={"База знаний"}
      />
      <Section
        active={activeNavLink === "/10"}
        setActive={() => handleNavLinkClick("/10")}
        to="/10"
        img={<SectionPhone />}
        name={"Настройки"}
      />
    </div>
  )
}

export default Sidebar

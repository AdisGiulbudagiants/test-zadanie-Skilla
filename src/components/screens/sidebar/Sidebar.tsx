import { useState, useEffect } from "react"
import Logo from "../../assets/sidebar/Logo"
import Section from "./Section"
import SectionPhone from "../../assets/sidebar/SectionPhone"
import Baza from "../../assets/sidebar/Baza"
import ContrAgents from "../../assets/sidebar/ContrAgents"
import Docs from "../../assets/sidebar/Docs"
import Ispolniteli from "../../assets/sidebar/Ispolniteli"
import Itogi from "../../assets/sidebar/Itogi"
import Message from "../../assets/sidebar/Message"
import Orders from "../../assets/sidebar/Orders"
import Otcheti from "../../assets/sidebar/Otcheti"
import Settings from "../../assets/sidebar/Settings"
import Plus from "../../assets/sidebar/Plus"
import Exclamation from "../../assets/sidebar/Exclamation"
import Button from "../../Button"

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
    const initialActiveSection = getInitialActiveSection(currentPath)
    setActiveNavLink(initialActiveSection)
  }, [])

  const handleNavLinkClick = (sectionName: any) => {
    setActiveNavLink(sectionName)
  }
  return (
    <>
      <div className="w-[100%] h-[100%]  bg-darkBlue">
        <div className="mb-[2rem]">
          <Logo />
        </div>
        <Section
          active={activeNavLink === "/1"}
          setActive={() => handleNavLinkClick("/1")}
          to="/1"
          img={<Itogi />}
          name={"Итоги"}
        />
        <Section
          active={activeNavLink === "/2"}
          setActive={() => handleNavLinkClick("/2")}
          to="/2"
          img={<Orders />}
          name={"Заказы"}
        />
        <Section
          active={activeNavLink === "/3"}
          setActive={() => handleNavLinkClick("/3")}
          to="/3"
          img={<Message />}
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
          img={<ContrAgents />}
          name={"Контрагенты"}
        />
        <Section
          active={activeNavLink === "/6"}
          setActive={() => handleNavLinkClick("/6")}
          to="/6"
          img={<Docs />}
          name={"Документы"}
        />
        <Section
          active={activeNavLink === "/7"}
          setActive={() => handleNavLinkClick("/7")}
          to="/7"
          img={<Ispolniteli />}
          name={"Исполнители"}
        />
        <Section
          active={activeNavLink === "/8"}
          setActive={() => handleNavLinkClick("/8")}
          to="/8"
          img={<Otcheti />}
          name={"Отчеты"}
        />
        <Section
          active={activeNavLink === "/9"}
          setActive={() => handleNavLinkClick("/9")}
          to="/9"
          img={<Baza />}
          name={"База знаний"}
        />
        <Section
          active={activeNavLink === "/10"}
          setActive={() => handleNavLinkClick("/10")}
          to="/10"
          img={<Settings />}
          name={"Настройки"}
        />
        {/**Функционала на кнопках здесь нет*/}
        <div className="mt-[4rem]">
          <div className="flex justify-center">
            <Button
              img={<Plus className="opacity-[0.56]" />}
              text={"Добавить заказ"}
            />
          </div>
          <div className="mt-[2rem] flex justify-center">
            <Button img={<Exclamation />} text={"Оплата"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

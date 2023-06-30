// import axios from "axios"

// const url = "https://api.skilla.ru/mango/getList"
// const token = "testtoken"

// axios
//   .post(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

const Navbar = () => {
  function getDay(dayOfTheWeek: number, day: number): string {
    const daysOfWeek = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ]

    return `${daysOfWeek[dayOfTheWeek - 1] || ""}, ${day}`
  }

  function getMonth(month: number): string {
    const months = [
      "янв",
      "фев",
      "марта",
      "апр",
      "май",
      "июня",
      "июля",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ]

    return months[month] || ""
  }

  return (
    <div className="w-[105rem] h-[4rem] bg-white flex justify-center">
      <div className="w-[90rem] h-[100%]  flex items-center">
        <p className="text-lightGrey w-[7.5rem] h-[1.375rem] leading-[1.3875rem] text-[0.9375rem] font-Regular">
          {getDay(new Date().getDay(), new Date().getDate())}{" "}
          {getMonth(new Date().getMonth())}
        </p>
        <div className="w-[37.125rem] h-[2.125rem] ml-[3.5rem] flex items-center justify-between">
          {/**Блок с одним прогресс-баром */}
          <div className="w-[10.125rem]">
            <div className="text-[0.875rem] font-Regular flex justify-between mb-[0.4375rem]">
              Новые звонки{"   "}
              <p className="text-[0.875rem] text-green font-Regular">{`${20} из ${30} шт`}</p>
            </div>
            <div className="h-[0.375rem] rounded-full w-[9.75rem] bg-[#DEE6F5] ">
              <div
                className="h-[0.375rem] bg-green rounded-full "
                style={{ width: "50%" }}
              />
            </div>
          </div>
          {/**Второй блокс с прогрессбаром */}
          <div className="w-[10.25rem]">
            <div className="text-[0.875rem] font-Regular flex justify-between mb-[0.4375rem]">
              Качество разговоров
              <p className="text-[0.875rem] text-yellow font-Regular">{`${40} %`}</p>
            </div>
            <div className="h-[0.375rem] rounded-full w-[9.75rem] bg-[#DEE6F5] ">
              <div
                className="h-[0.375rem] bg-yellow rounded-full "
                style={{ width: "40%" }}
              />
            </div>
          </div>
          {/**Третий блок с прогрессбаром */}
          <div className="w-[10.125rem]">
            <div className="text-[0.875rem] font-Regular flex justify-evenly mb-[0.4375rem]">
              Конверсия в заказ
              <p className="text-[0.875rem] text-red font-Regular">{`${67} %`}</p>
            </div>
            <div className="h-[0.375rem] rounded-full w-[9.75rem] bg-[#DEE6F5] ">
              <div
                className="h-[0.375rem] bg-red rounded-full "
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

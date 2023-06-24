type Props = {
  text: string
  img?: any
}

const Button = (props: Props) => {
  return (
    <div className="flex justify-center w-[12.5rem] h-[3.25rem] pr-[1.25rem] bg-blue rounded-[0.25rem] hover:bg-[#0024CB] hover:cursor-pointer active:scale-95 active:bg-[#274BC8] relative">
      <div className=" flex justify-center items-center">
        <p className="text-center font-Medium text-white text-[1rem] leading-[148%] select-none">
          {props.text}
        </p>
      </div>
      <div className=" absolute right-[1.25rem] mt-[0.875rem]">{props.img}</div>
    </div>
  )
}

export default Button

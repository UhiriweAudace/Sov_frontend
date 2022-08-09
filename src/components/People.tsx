import { RiScales2Line, RiUserStarLine } from 'react-icons/ri';
import { TbUserExclamation } from 'react-icons/tb';
import { GiBodyHeight } from 'react-icons/gi';
import { BsPatchExclamation } from 'react-icons/bs';
import { FC } from "react";
import { User } from "../shared";

interface IProps {
  user: User
}

const People: FC<IProps> = ({ user: { height, mass, gender, name } }) => {
  return (
    <div className=" p-5 rounded-md flex flex-col gap-2 items-center scale:100 hover:scale-125 duration-300 hover:cursor-pointer shadow-xl bg-white">
      {gender !== "n/a" ? <RiUserStarLine size={40} /> : <TbUserExclamation size={40} />}
      <h4 className='w-52 overflow-hidden whitespace-nowrap overflow-ellipsis text-center font-bold'>{name}</h4>
      <div className="bg-gray-100 flex justify-between items-center px-3 py-2 gap-5 rounded-t-md w-full" title={`Height: ${height} cm`}>
        <div className='flex justify-between items-center gap-1'>
          {height !== "unknown" ? <GiBodyHeight size={15} /> : <BsPatchExclamation size={15} />}
          <span className='text-sm'>{height !== "unknown" && height} Cm</span>
        </div>
        <div className='flex justify-between items-center gap-1' title={`Mass: ${mass} kg`}>
          {mass !== "unknown" ? <RiScales2Line size={15} /> : <BsPatchExclamation size={15} />}
          <span className='text-sm'>{mass !== "unknown" && mass} Kg</span>
        </div>
      </div>
    </div>
  )
}

export default People;

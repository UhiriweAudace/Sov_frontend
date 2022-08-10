import { FC } from "react";
import { BsPatchExclamation } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { RiScales2Line, RiUserStarLine } from "react-icons/ri";
import { TbUserExclamation } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { User } from "../shared";

interface IProps {
	user: User;
	showMoreDetails?: boolean;
}

const People: FC<IProps> = ({
	user: { height, mass, gender, name },
	showMoreDetails,
}) => {
	let navigate = useNavigate();
	const onClickHandler = () => navigate(`/details/${name}`);
	const iconSize = showMoreDetails ? 60 : 40;

	return (
		<div
			onClick={onClickHandler}
			className=" flex scale-100 flex-col items-center gap-2 rounded-md bg-white p-5 shadow-xl duration-200 hover:scale-105 hover:cursor-pointer"
		>
			{gender !== "n/a" ? (
				<RiUserStarLine size={iconSize} />
			) : (
				<TbUserExclamation size={iconSize} />
			)}
			<h4 className="w-52 overflow-hidden overflow-ellipsis whitespace-nowrap text-center font-bold">
				{name}
			</h4>
			{showMoreDetails && (
				<h5 className="w-52 overflow-hidden overflow-ellipsis whitespace-nowrap text-center font-bold italic">
					Gender: {gender === "n/a" ? "Unknown" : gender}
				</h5>
			)}
			<div
				className="flex w-full items-center justify-between gap-5 rounded-t-md bg-gray-100 px-3 py-2"
				title={`Height: ${height} cm`}
			>
				<div className="flex items-center justify-between gap-1">
					{height !== "unknown" ? (
						<GiBodyHeight size={15} />
					) : (
						<BsPatchExclamation size={15} />
					)}
					{showMoreDetails && <span>Body height: </span>}
					<span className="text-sm">{height !== "unknown" && height} Cm</span>
				</div>
				<div
					className="flex items-center justify-between gap-1"
					title={`Mass: ${mass} kg`}
				>
					{mass !== "unknown" ? (
						<RiScales2Line size={15} />
					) : (
						<BsPatchExclamation size={15} />
					)}
					{showMoreDetails && <span>Body weight: </span>}
					<span className="text-sm">{mass !== "unknown" && mass} Kg</span>
				</div>
			</div>
		</div>
	);
};

export default People;

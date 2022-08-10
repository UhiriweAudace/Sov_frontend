import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import { useAppContext } from "../context";

interface IProps {
  totalPageNumber: number;
  fetchPerson: Function;
}

const PAGE_LIMIT = 5;

const Pagination: FC<IProps> = ({ fetchPerson, totalPageNumber }) => {
  const { currentPage: page } = useAppContext()
  const [currentPage, setCurrentPage] = useState(page === 0 ? 1 : page);

  const goToNextPage = () => {
    if (totalPageNumber < currentPage + 1) return;
    fetchPerson(currentPage + 1);
    setCurrentPage((page) => page + 1);
  }

  const goToPreviousPage = () => {
    if (currentPage - 1 === 0) return;
    fetchPerson(currentPage - 1);
    setCurrentPage((page) => page - 1);
  }

  const getPageNumber = () => {
    let start = Math.floor((currentPage - 1) / PAGE_LIMIT) * PAGE_LIMIT;
    return Array.from({ length: PAGE_LIMIT }, (_, k) => start + k + 1);
  };

  useEffect(() => {
    if(page) setCurrentPage(page)
  }, [page])
  
  return (
    <div className="flex gap-5 items-center">
      <RiArrowLeftCircleLine size={30} onClick={goToPreviousPage} className="hover:cursor-pointer" />
      {getPageNumber().map((k) => k <= totalPageNumber && (
        <span className={clsx({
          'text-md select-none flex p-2 w-8 h-8 items-center justify-center': true,
          'font-bold bg-slate-100 rounded-full duration-100': currentPage === k,
          'font-light': currentPage !== k,
        })}>{k}</span>
      ))}
      <RiArrowRightCircleLine size={30} onClick={goToNextPage} />
    </div>
  )
}

export default Pagination;

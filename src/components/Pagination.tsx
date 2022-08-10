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
  const { currentPage: page, isLoading } = useAppContext()
  const [currentPage, setCurrentPage] = useState(page === 0 ? 1 : page);

  const goToNextPage = () => {
    if (isLoading) return;
    if (totalPageNumber < currentPage + 1) return;
    fetchPerson(currentPage + 1);
    setCurrentPage((page) => page + 1);
  }

  const goToPreviousPage = () => {
    if (isLoading) return;
    if (currentPage - 1 === 0) return;
    fetchPerson(currentPage - 1);
    setCurrentPage((page) => page - 1);
  }

  const getPageNumber = () => {
    let start = Math.floor((currentPage - 1) / PAGE_LIMIT) * PAGE_LIMIT;
    return Array.from({ length: PAGE_LIMIT }, (_, k) => start + k + 1);
  };

  useEffect(() => {
    if (page) setCurrentPage(page)
  }, [page])

  return (
    <div className="flex gap-5 items-center">
      <RiArrowLeftCircleLine
        size={30}
        onClick={goToPreviousPage}
        className={clsx({
          'hover:cursor-pointer': true,
          'text-slate-900': !isLoading,
          'text-slate-300': isLoading
        })}
      />
      {getPageNumber().map((k) => k <= totalPageNumber && (
        <button className={clsx({
          'font-light': currentPage !== k,
          'hover:bg-slate-100 hover:rounded-full cursor-pointer': true,
          'text-md select-none flex p-2 w-8 h-8 items-center justify-center': true,
          'font-bold bg-slate-200 rounded-full duration-100': currentPage === k,
        })} onClick={() => currentPage !== k && fetchPerson(k)}>{k}</button>
      ))}
      <RiArrowRightCircleLine
        size={30}
        onClick={goToNextPage}
        className={clsx({ 'text-slate-900': !isLoading, 'text-slate-300': isLoading })}
      />
    </div>
  )
}

export default Pagination;

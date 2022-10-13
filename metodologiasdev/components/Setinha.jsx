import React from 'react'
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Setinha = () => {
  return (
    <div className="flex justify-center py-12">
    <Link href="/">
      <a>
        <div className=" rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp className=" animate-bounce text-[#FA4753]" size={50} />
        </div>
      </a>
    </Link>
  </div>
  )
}

export default Setinha
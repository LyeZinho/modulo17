import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import NavLogo from "../public/image/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#E9EBED");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image

              src={NavLogo}
              alt="/"
              width="75"
              height="75"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase font-bold hover:border-b pt-2.5">
              <Link href="/">Início</Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b pt-2.5">
              <Link href="/lojavirtualpage">Loja Virtual</Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b pt-2.5">
              <Link href="/#NossoCheckout">Nosso Checkout</Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b pt-2.5">
              <Link href="/Lojas">Lojas</Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b pt-2.5">
              <Link href="/#Dropshipping">Dropshipping</Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b pt-2.5">
              <Link href="/ajuda">Ajuda</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a
                href="/login"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-grey-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#69AB3D] group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-[#AED36C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Entrar
                </span>
              </a>
            </li>
            <li className="ml-10 text-sm  uppercase hover:border-b">
              <a
                href="/register"
                className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-black inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#69AB3D] group-hover:h-full opacity-90"></span>
                <span className="relative font-bold group-hover:text-white">Criar Conta</span>
              </a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="sm:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image src={NavLogo} width="75" height="75" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-bold">
                Vamos evoluir sua carreira!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-bold">
                  Início
                </li>
              </Link>
              <Link href="/lojavirtualpage">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-bold">
                  Loja Virtual
                </li>
              </Link>
              <Link href="/#Dropshipping">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-bold">
                  DropShipping
                </li>
              </Link>
              <Link href="/#NossoCheckout">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-bold">
                  Nosso Checkout
                </li>
              </Link>
              <Link href="/Lojas">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-bold">
                  Lojas
                </li>
              </Link>
              <Link href="/ajuda">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-bold">
                  Ajuda
                </li>
              </Link>

              <li className="ml-10 text-sm uppercase hover:border-b">
                <a
                  href="/login"
                  className="font-bold relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden  text-grey-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#69AB3D] group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-[#AED36C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Entrar
                  </span>
                </a>
              </li>
              <br />
              <li className="ml-10 text-sm uppercase hover:border-b">
                <a
                  href="/register"
                  className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-black inline-block"
                >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#69AB3D] group-hover:h-full opacity-90"></span>
                  <span className="font-bold relative group-hover:text-white">
                    Criar Conta
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
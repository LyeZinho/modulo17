import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import NavLogo from "../public/image/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#FA4753");
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
      <div className="flex justify-between items-center w-full h-full px-2< 2xl:px-16">
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
            <li className="ml-5 text-sm uppercase font-bold hover:border-b  pt-2.5">
              <Link href="/">Início</Link>
            </li>
            <li className="ml-5 text-sm uppercase font-bold hover:border-b  pt-2.5">
              <Link href="/#engenhariadesoftware">Engenharia de Software</Link>
            </li>
            <li className="ml-5 text-sm uppercase font-bold hover:border-b  pt-2.5">
              <Link href="/#perfis">Perfis</Link>
            </li>
            <li className="ml-5 text-sm uppercase font-bold hover:border-b  pt-2.5">
              <Link href="/#ciclodevida">SDLC</Link>
            </li>
            <li className="ml-10 text-sm uppercase font-bold hover:border-b  pt-2.5">
              <Link href="/#caracteristicasSoftware">Natureza dos Softwares</Link>
            </li>
            <li className="ml-10 text-sm uppercase font-bold hover:border-b  pt-2.5">
              <Link href="/#importanciametodologia">Importância das metodologias</Link>
            </li>
            <li className="ml-10 text-sm uppercase font-bold hover:border-b  pt-2.5">
              <Link href="/#scrum">SCRUM</Link>
            </li>
            <li className="ml-10 text-sm uppercase font-bold hover:border-b  pt-2.5">
              <Link href="/#agile">Agile</Link>
            </li>
            <li className="ml-10 text-sm uppercase font-bold hover:border-b px-2.5  pt-2.5">
              <Link href="/#Case">Ferramentas Case</Link>
            </li>
            <li className="ml-10 text-sm uppercase font-bold hover:border-b px-2.5  pt-2.5">
              <Link href="/creditos">Créditos</Link>
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
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FA4753] p-10 ease-in duration-500"
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
                className="rounded-full shadow-lg shadow-red-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-red-700 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-bold">
                Aprendar a desenvolver software de forma eficiente e eficaz.
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  Início
                </li>
              </Link>
                <Link href="/#engenhariadesoftware">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  Engenharia de Software
                </li>
              </Link>
              <Link href="/#perfis">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  Perfis
                </li>
              </Link>
              <Link href="/#ciclodevida">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  SDLC
                </li>
              </Link>
              <Link href="/#caracteristicasSoftware">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  Natureza dos Softwares
                </li>
              </Link>
              <Link href="/#importanciametodologia">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  Importância das metodologias
                </li>
              </Link>
              <Link href="/#scrum">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  SCRUM
                </li>
              </Link>
              <Link href="/#agile">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  Agile
                </li>
              </Link>
              <Link href="/#Case">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-sm font-bold"
                >
                  Ferramentas Case
                </li>
              </Link>
              <Link href="/creditos">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  Créditos
                </li>
              </Link> 

              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

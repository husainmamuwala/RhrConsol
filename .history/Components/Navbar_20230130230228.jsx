import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Enquiry",
      link: "/enquiry",
    },
    {
        name:"Career",
        link:'/career',
    }
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full top-0 px-5 bg-[#1C2C5E]">
      <div className="lg:flex justify-between items-center flex">
        <div>
          <a href="/">
            <svg
              width="181"
              height="60"
              viewBox="0 0 181 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="24.4445"
                width="14.4444"
                height="35.5556"
                fill="#5FC4B3"
              />
              <rect x="18.8889" width="14.4444" height="60" fill="#12445B" />
              <rect
                x="37.7778"
                y="15.5555"
                width="14.4444"
                height="44.4444"
                fill="#5FC4B3"
              />
              <rect
                x="56.6667"
                y="32.2222"
                width="14.4444"
                height="27.7778"
                fill="#12445B"
              />
              <path
                d="M100.419 10.3H95.1872V25H91.9592V10.3H86.7272V7.648H100.419V10.3ZM105.93 25H102.69V7.648H105.93V25ZM115.455 16.372C116.047 16.372 116.563 16.3 117.003 16.156C117.443 16.004 117.807 15.792 118.095 15.52C118.391 15.24 118.611 14.904 118.755 14.512C118.899 14.112 118.971 13.668 118.971 13.18C118.971 12.716 118.899 12.296 118.755 11.92C118.611 11.544 118.395 11.224 118.107 10.96C117.819 10.696 117.455 10.496 117.015 10.36C116.575 10.216 116.055 10.144 115.455 10.144H113.043V16.372H115.455ZM115.455 7.648C116.615 7.648 117.619 7.784 118.467 8.056C119.315 8.328 120.015 8.708 120.567 9.196C121.119 9.684 121.527 10.268 121.791 10.948C122.063 11.628 122.199 12.372 122.199 13.18C122.199 14.02 122.059 14.792 121.779 15.496C121.499 16.192 121.079 16.792 120.519 17.296C119.959 17.8 119.255 18.192 118.407 18.472C117.567 18.752 116.583 18.892 115.455 18.892H113.043V25H109.815V7.648H115.455ZM130.314 16.372C130.906 16.372 131.422 16.3 131.862 16.156C132.302 16.004 132.666 15.792 132.954 15.52C133.25 15.24 133.47 14.904 133.614 14.512C133.758 14.112 133.83 13.668 133.83 13.18C133.83 12.716 133.758 12.296 133.614 11.92C133.47 11.544 133.254 11.224 132.966 10.96C132.678 10.696 132.314 10.496 131.874 10.36C131.434 10.216 130.914 10.144 130.314 10.144H127.902V16.372H130.314ZM130.314 7.648C131.474 7.648 132.478 7.784 133.326 8.056C134.174 8.328 134.874 8.708 135.426 9.196C135.978 9.684 136.386 10.268 136.65 10.948C136.922 11.628 137.058 12.372 137.058 13.18C137.058 14.02 136.918 14.792 136.638 15.496C136.358 16.192 135.938 16.792 135.378 17.296C134.818 17.8 134.114 18.192 133.266 18.472C132.426 18.752 131.442 18.892 130.314 18.892H127.902V25H124.674V7.648H130.314ZM142.774 25H139.534V7.648H142.774V25ZM161.287 7.648V25H159.631C159.375 25 159.159 24.96 158.983 24.88C158.815 24.792 158.651 24.648 158.491 24.448L149.431 12.88C149.479 13.408 149.503 13.896 149.503 14.344V25H146.659V7.648H148.351C148.487 7.648 148.603 7.656 148.699 7.672C148.803 7.68 148.891 7.704 148.963 7.744C149.043 7.776 149.119 7.828 149.191 7.9C149.263 7.964 149.343 8.052 149.431 8.164L158.527 19.78C158.503 19.5 158.483 19.224 158.467 18.952C158.451 18.68 158.443 18.428 158.443 18.196V7.648H161.287ZM179.455 16.3V23.32C178.575 23.968 177.635 24.444 176.635 24.748C175.643 25.044 174.579 25.192 173.443 25.192C172.027 25.192 170.743 24.972 169.591 24.532C168.447 24.092 167.467 23.48 166.651 22.696C165.843 21.912 165.219 20.976 164.779 19.888C164.339 18.8 164.119 17.612 164.119 16.324C164.119 15.02 164.331 13.824 164.755 12.736C165.179 11.648 165.779 10.712 166.555 9.928C167.339 9.144 168.287 8.536 169.399 8.104C170.511 7.672 171.759 7.456 173.143 7.456C173.847 7.456 174.503 7.512 175.111 7.624C175.727 7.736 176.295 7.892 176.815 8.092C177.343 8.284 177.823 8.52 178.255 8.8C178.687 9.08 179.083 9.388 179.443 9.724L178.519 11.188C178.375 11.42 178.187 11.564 177.955 11.62C177.723 11.668 177.471 11.608 177.199 11.44C176.935 11.288 176.671 11.136 176.407 10.984C176.143 10.832 175.847 10.7 175.519 10.588C175.199 10.476 174.835 10.384 174.427 10.312C174.027 10.24 173.563 10.204 173.035 10.204C172.179 10.204 171.403 10.348 170.707 10.636C170.019 10.924 169.431 11.336 168.943 11.872C168.455 12.408 168.079 13.052 167.815 13.804C167.551 14.556 167.419 15.396 167.419 16.324C167.419 17.316 167.559 18.204 167.839 18.988C168.127 19.764 168.527 20.424 169.039 20.968C169.559 21.504 170.183 21.916 170.911 22.204C171.639 22.484 172.451 22.624 173.347 22.624C173.987 22.624 174.559 22.556 175.063 22.42C175.567 22.284 176.059 22.1 176.539 21.868V18.724H174.355C174.147 18.724 173.983 18.668 173.863 18.556C173.751 18.436 173.695 18.292 173.695 18.124V16.3H179.455ZM97.3845 45.372C97.9765 45.372 98.4925 45.3 98.9325 45.156C99.3725 45.004 99.7365 44.792 100.025 44.52C100.321 44.24 100.541 43.904 100.685 43.512C100.829 43.112 100.901 42.668 100.901 42.18C100.901 41.716 100.829 41.296 100.685 40.92C100.541 40.544 100.325 40.224 100.037 39.96C99.7485 39.696 99.3845 39.496 98.9445 39.36C98.5045 39.216 97.9845 39.144 97.3845 39.144H94.9725V45.372H97.3845ZM97.3845 36.648C98.5445 36.648 99.5485 36.784 100.397 37.056C101.245 37.328 101.945 37.708 102.497 38.196C103.049 38.684 103.457 39.268 103.721 39.948C103.993 40.628 104.129 41.372 104.129 42.18C104.129 43.02 103.989 43.792 103.709 44.496C103.429 45.192 103.009 45.792 102.449 46.296C101.889 46.8 101.185 47.192 100.337 47.472C99.4965 47.752 98.5125 47.892 97.3845 47.892H94.9725V54H91.7445V36.648H97.3845ZM123.152 45.324C123.152 46.596 122.94 47.776 122.516 48.864C122.1 49.944 121.508 50.88 120.74 51.672C119.972 52.464 119.048 53.084 117.968 53.532C116.888 53.972 115.688 54.192 114.368 54.192C113.056 54.192 111.86 53.972 110.78 53.532C109.7 53.084 108.772 52.464 107.996 51.672C107.228 50.88 106.632 49.944 106.208 48.864C105.784 47.776 105.572 46.596 105.572 45.324C105.572 44.052 105.784 42.876 106.208 41.796C106.632 40.708 107.228 39.768 107.996 38.976C108.772 38.184 109.7 37.568 110.78 37.128C111.86 36.68 113.056 36.456 114.368 36.456C115.248 36.456 116.076 36.56 116.852 36.768C117.628 36.968 118.34 37.256 118.988 37.632C119.636 38 120.216 38.452 120.728 38.988C121.248 39.516 121.688 40.108 122.048 40.764C122.408 41.42 122.68 42.132 122.864 42.9C123.056 43.668 123.152 44.476 123.152 45.324ZM119.852 45.324C119.852 44.372 119.724 43.52 119.468 42.768C119.212 42.008 118.848 41.364 118.376 40.836C117.904 40.308 117.328 39.904 116.648 39.624C115.976 39.344 115.216 39.204 114.368 39.204C113.52 39.204 112.756 39.344 112.076 39.624C111.404 39.904 110.828 40.308 110.348 40.836C109.876 41.364 109.512 42.008 109.256 42.768C109 43.52 108.872 44.372 108.872 45.324C108.872 46.276 109 47.132 109.256 47.892C109.512 48.644 109.876 49.284 110.348 49.812C110.828 50.332 111.404 50.732 112.076 51.012C112.756 51.292 113.52 51.432 114.368 51.432C115.216 51.432 115.976 51.292 116.648 51.012C117.328 50.732 117.904 50.332 118.376 49.812C118.848 49.284 119.212 48.644 119.468 47.892C119.724 47.132 119.852 46.276 119.852 45.324ZM129.227 54H125.987V36.648H129.227V54ZM147.74 36.648V54H146.084C145.828 54 145.612 53.96 145.436 53.88C145.268 53.792 145.104 53.648 144.944 53.448L135.884 41.88C135.932 42.408 135.956 42.896 135.956 43.344V54H133.112V36.648H134.804C134.94 36.648 135.056 36.656 135.152 36.672C135.256 36.68 135.344 36.704 135.416 36.744C135.496 36.776 135.572 36.828 135.644 36.9C135.716 36.964 135.796 37.052 135.884 37.164L144.98 48.78C144.956 48.5 144.936 48.224 144.92 47.952C144.904 47.68 144.896 47.428 144.896 47.196V36.648H147.74ZM163.724 39.3H158.492V54H155.264V39.3H150.032V36.648H163.724V39.3ZM175.188 39.804C175.092 39.972 174.988 40.096 174.876 40.176C174.772 40.248 174.64 40.284 174.48 40.284C174.312 40.284 174.128 40.224 173.928 40.104C173.736 39.976 173.504 39.836 173.232 39.684C172.96 39.532 172.64 39.396 172.272 39.276C171.912 39.148 171.484 39.084 170.988 39.084C170.54 39.084 170.148 39.14 169.812 39.252C169.476 39.356 169.192 39.504 168.96 39.696C168.736 39.888 168.568 40.12 168.456 40.392C168.344 40.656 168.288 40.948 168.288 41.268C168.288 41.676 168.4 42.016 168.624 42.288C168.856 42.56 169.16 42.792 169.536 42.984C169.912 43.176 170.34 43.348 170.82 43.5C171.3 43.652 171.792 43.816 172.296 43.992C172.8 44.16 173.292 44.36 173.772 44.592C174.252 44.816 174.68 45.104 175.056 45.456C175.432 45.8 175.732 46.224 175.956 46.728C176.188 47.232 176.304 47.844 176.304 48.564C176.304 49.348 176.168 50.084 175.896 50.772C175.632 51.452 175.24 52.048 174.72 52.56C174.208 53.064 173.58 53.464 172.836 53.76C172.092 54.048 171.24 54.192 170.28 54.192C169.728 54.192 169.184 54.136 168.648 54.024C168.112 53.92 167.596 53.768 167.1 53.568C166.612 53.368 166.152 53.128 165.72 52.848C165.288 52.568 164.904 52.256 164.568 51.912L165.516 50.364C165.596 50.252 165.7 50.16 165.828 50.088C165.956 50.008 166.092 49.968 166.236 49.968C166.436 49.968 166.652 50.052 166.884 50.22C167.116 50.38 167.392 50.56 167.712 50.76C168.032 50.96 168.404 51.144 168.828 51.312C169.26 51.472 169.776 51.552 170.376 51.552C171.296 51.552 172.008 51.336 172.512 50.904C173.016 50.464 173.268 49.836 173.268 49.02C173.268 48.564 173.152 48.192 172.92 47.904C172.696 47.616 172.396 47.376 172.02 47.184C171.644 46.984 171.216 46.816 170.736 46.68C170.256 46.544 169.768 46.396 169.272 46.236C168.776 46.076 168.288 45.884 167.808 45.66C167.328 45.436 166.9 45.144 166.524 44.784C166.148 44.424 165.844 43.976 165.612 43.44C165.388 42.896 165.276 42.228 165.276 41.436C165.276 40.804 165.4 40.188 165.648 39.588C165.904 38.988 166.272 38.456 166.752 37.992C167.232 37.528 167.824 37.156 168.528 36.876C169.232 36.596 170.04 36.456 170.952 36.456C171.976 36.456 172.92 36.616 173.784 36.936C174.648 37.256 175.384 37.704 175.992 38.28L175.188 39.804Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer lg:hidden justify-end"
        >
          {!open ? <Bars3Icon className="h-10 w-10 text-[#FFCA05]" /> : <XMarkIcon className="h-10 w-10 text-[#FFCA05]" />}
        </div>
        <div className="">
          <ul
            className={`lg:flex lg:flex-row lg:items-center font-Montserrat lg:pb-0 lg:text-white 
            absolute lg:static bg-[#1C2C5E]/30 lg:bg-transparent lg:z-auto w-full left-0  lg:pl-0 pl-9 lg:w-auto
            transition-all duration-500 ease-in top-16
            ${open ? "flex-col" : "hidden"}`}
          >
            {Links.map((link) => (
              <li onClick={() => setOpen(false)} key={link.link} className="
              md:ml-8 text-xl md:text-lg my-7 hover:text-[#FFCA05] transition-all hover:top-1 pl-2">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
            <button className="bg-[#FFCA05] rounded-xl px-5 py-[0.4rem] text-[#1C2C5E] font-Montserrat md:text-lg ml-10">
                Contact Us
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

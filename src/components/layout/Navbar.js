'use client'
import { FaAngleDown } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { GrCubes } from "react-icons/gr";
import { CiCloudOn } from "react-icons/ci";
import { TbDeviceMobileCode } from "react-icons/tb";
import { LuSquareCode } from "react-icons/lu";
import { CiPen } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const menuItems = [
    { label: 'Hire engineers', href: '/hire-engineers' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Careers', href: '/careers' },
    { label: 'About us', href: '/about' },
    { label: 'Blog', href: '/blog' }
  ]
  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto md:px-28 p-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex gap-2 text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          <Image width={32} height={32} className="w-[32px] h-[32px]" src="https://techype.in/Logo.svg" />
          Techype
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 gap-1 hover:text-blue-600 transition-colors font-medium flex items-center"
            >
              Services
              <span className="text-xs">
                <FaAngleDown />
              </span>
            </button>
            {isDropdownOpen && (
              <div className="grid grid-cols-2 absolute top-full mt-2 bg-white shadow-lg rounded-md py-5 w-[50vw] z-50">

                <Link
                  href='/'
                  className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <BsStars />Generative AI Solutions
                </Link>
                <Link
                  href='/'
                  className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <GrCubes />MVP Development
                </Link>
                <Link
                  href='/'
                  className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <CiCloudOn />Saas Development
                </Link>
                <Link
                  href='/'
                  className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <TbDeviceMobileCode />Mobile Application Development
                </Link>
                <Link
                  href='/'
                  className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <LuSquareCode />End-to-End Software Development
                </Link>
                <Link
                  href='/'
                  className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <CiPen />UI/UX Design
                </Link>
                <Link
                  href='/'
                  className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <BsPeople />Hybrid Teams/Engineers
                </Link>

              </div>
            )}
          </div>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Mobile Menu Items */}
          <div className="flex flex-col space-y-4 mt-10">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 gap-1 hover:text-blue-600 transition-colors font-medium flex items-center"
              >
                Services
                <span className="text-xs">
                  <FaAngleDown />
                </span>
              </button>
              {isDropdownOpen && (
                <div className="md:grid grid-cols-2 absolute top-full mt-2 bg-white shadow-lg rounded-md py-5 md:w-[50vw] z-50">

                  <Link
                    href='/'
                    className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <BsStars />Generative AI Solutions
                  </Link>
                  <Link
                    href='/'
                    className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <GrCubes />MVP Development
                  </Link>
                  <Link
                    href='/'
                    className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <CiCloudOn />Saas Development
                  </Link>
                  <Link
                    href='/'
                    className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <TbDeviceMobileCode />Mobile Application Development
                  </Link>
                  <Link
                    href='/'
                    className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <LuSquareCode />End-to-End Software Development
                  </Link>
                  <Link
                    href='/'
                    className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <CiPen />UI/UX Design
                  </Link>
                  <Link
                    href='/'
                    className="flex items-center gap-1 font-medium px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <BsPeople />Hybrid Teams/Engineers
                  </Link>

                </div>
              )}
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

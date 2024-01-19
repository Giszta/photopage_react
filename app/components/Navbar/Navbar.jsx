"use client";
import React, { useState } from "react";
import LinksWeb from "./LinksWeb";
import LinksMobile from "./MobileMenu/LinksMobile";
import MobileMenuX from "./MobileMenu/MobileMenuX";
import MobileMenuBar from "./MobileMenu/MobileMenuBar";
import Image from "next/image";
import logo from "../../IMG/logo.webp";

export default function Navbar() {
	const [isClicked, setisClicked] = useState(false);

	const toggleNavbar = () => {
		setisClicked(!isClicked);
	};

	return (
		<nav className="bg-black opacity-75">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<a href="/" className="text-white">
								<Image src={logo} alt="" />
							</a>
						</div>
					</div>
					<LinksWeb />
					<div className="md:hidden flex items-center">
						<button
							className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							onClick={toggleNavbar}
						>
							{isClicked ? <MobileMenuX /> : <MobileMenuBar />}
						</button>
					</div>
				</div>
			</div>
			{isClicked && <LinksMobile />}
		</nav>
	);
}

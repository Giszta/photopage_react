"use client";
import React, { useEffect, useState } from "react";
import LinksMobileItem from "./LinksMobileItem";

export default function LinksMobile(isOpen) {
	const [isHidden, setIsHidden] = useState(!isOpen.isOpen);

	useEffect(() => {
		if (!isOpen.isOpen) {
			const timeoutId = setTimeout(() => {
				setIsHidden(true);
			}, 1500);

			return () => clearTimeout(timeoutId);
		} else {
			setIsHidden(false);
		}
	}, [isOpen.isOpen]);
	return (
		<div className={` ${isOpen.isOpen || !isHidden ? "block" : "hidden"}`}>
			<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end ">
				<LinksMobileItem
					hrefLink={"/"}
					text={"Strona Główna"}
					delay={"animation-delay-none"}
					fade={
						isOpen.isOpen
							? "animate-fade-left"
							: "animate-fade-right animate-reverse"
					}
				/>

				<LinksMobileItem
					hrefLink={"/Albums"}
					text={"Galeria Zdjęć"}
					delay={"animation-delay-300"}
					fade={
						isOpen.isOpen
							? "animate-fade-left"
							: "animate-fade-right animate-reverse"
					}
				/>

				<LinksMobileItem
					hrefLink={"/AboutMe"}
					text={"O Mnie"}
					delay={"animation-delay-600"}
					fade={
						isOpen.isOpen
							? "animate-fade-left"
							: "animate-fade-right animate-reverse"
					}
				/>
			</div>
		</div>
	);
}

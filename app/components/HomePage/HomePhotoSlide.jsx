import Image from "next/image";
import React from "react";
import PhotoSlice from "../../IMG/home slide/001.jpg";

export default function HomePhotoSlide() {
	return (
		<div className="photo-slide block absolute overflow-hidden -z-50 inset-0">
			<Image
				className="h-screen w-screen object-cover animate-fade animate-duration-1000 animate-ease-in"
				src={PhotoSlice}
				alt="Home page slide"
				priority
			/>
			;
		</div>
	);
}

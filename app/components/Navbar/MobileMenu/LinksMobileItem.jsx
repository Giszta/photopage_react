"use client";
import React from "react";

export default function LinksMobileItem({ hrefLink, text, delay, fade }) {
	return (
		<a
			href={hrefLink}
			className={`text-white  bg-black  w-32 rounded-lg overflow-hidden text-center  ${fade} ${delay}`}
		>
			{text}
		</a>
	);
}

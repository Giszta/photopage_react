import React from "react";

export default function LinksMobile() {
	return (
		<div className="md:hidden">
			<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<a
					href="/"
					className="text-white block hover:bg-white hover:text-black rounded-lg"
				>
					Home
				</a>
				<a
					href="/Albums"
					className="text-white block hover:bg-white hover:text-black rounded-lg"
				>
					Albums
				</a>
				<a
					href="/AboutMe"
					className="text-white block hover:bg-white hover:text-black rounded-lg"
				>
					About Me
				</a>
			</div>
		</div>
	);
}

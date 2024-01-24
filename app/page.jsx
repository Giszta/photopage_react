import HomePhotoSlide from "./components/HomePage/HomePhotoSlide";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HomePhotoSlide />
			<h2>Home Page</h2>
		</main>
	);
}

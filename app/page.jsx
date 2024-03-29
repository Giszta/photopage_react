import Footer from "./components/Footer/Footer";
import HomePhotoSlide from "./components/HomePage/HomePhotoSlide";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HomePhotoSlide />
			<Footer />
		</main>
	);
}

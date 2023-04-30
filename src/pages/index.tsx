import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// components
import Navigation from "@/components/navigation/navigation";
import Intro from "@/components/intro/intro";
import About from "@/components/about/about";

export default function Home() {
	return (
		<div className="">
			<Navigation />
			<Intro />
			<About />
		</div>
	);
}

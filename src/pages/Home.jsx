import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Skills } from "../components/Skills";

export const Home = () => { 
	return ( 
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 

		<Navbar />

		<main>
			<HeroSection />
			<About />
			<Skills />
		</main>


		</div>
	);
}
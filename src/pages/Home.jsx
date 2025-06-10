import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Skills } from "../components/Skills";

export const Home = () => { 
	return ( 
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 

		{ /* Theme Toggle */}
		<ThemeToggle />

		{ /* Navbar */ }
		<Navbar />

		<main>
			<HeroSection />
			<About />
			<Skills />
		</main>

		{ /* Footer */ }

		</div>
	);
}
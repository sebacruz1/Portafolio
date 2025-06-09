import { useEffect, useState } from "react";
import { cn } from "../lib/utils";


const navItems = [
	{name: "Inicio", href: "#hero"},
	{name: "Sobre Mí", href: "#about"},
	{name: "Habilidades", href: "#skills"},
	{name: "Proyectos", href: "#projects"},
	{name: "Contacto", href: "#contacto"},

]


export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.screenY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return ( 
		<nav className={cn("fixed w-full z-40 transition-all duration-300", 
			isScrolled ? "py-3 bg-background/80 backdrop-blur.md shadow-xs" : "py-5"
			)}
		> 

			<div className="container flex items-center justify-between">
				<a className="text-xl font-bold text-primary flex items-center" href="#hero">
					<span className="relative z-10">
						<span className="text-glow text-foreground"> Seba Cruz</span> Portafolio
					</span>
				</a>
				
	{/* pc */}
				<div className="hidden md:flex space-x-8">
					{navItems.map((item, key) => (
						<a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
							{item.name}
						</a>
						))}
				</div>



{/* celular */}
				<div className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flexc-col items-center justify-center",
									"transition-all duration-300 md:hidden",
									isMenuOpen 
									? "opacity-100 pointer-events-auto" 
									: "opacity-0 pointer-events-none"
									)}
				>
				<div className="hidden md:flex space-x-8">
					{navItems.map((item, key) => (
						<a key={key} 
							href={item.href} 
							className="text-foreground/80 hover:text-primary transition-colors duration-300"
						>
							{item.name}
						</a>
						))}
				</div>


			</div>
		</nav>

	); 
};
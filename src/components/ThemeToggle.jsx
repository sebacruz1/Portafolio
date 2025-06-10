
import { Moon, Sun } from "lucide-react"; 
import { useState, useEffect} from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {

	const [isDarkMode, setIsDarkmode] = useState(false);
	

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme")
		if (storedTheme === "dark") {
			document.documentElement.classList.add("dark");
			setIsDarkmode(true);
		} else {
			document.documentElement.classList.remove("dark");
			setIsDarkmode(false);
		}
	}, [])

	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark")
			localStorage.setItem("theme", "light")
			setIsDarkmode(false)
		} else {
			document.documentElement.classList.add("dark")
			localStorage.setItem("theme", "dark")
			setIsDarkmode(true);
		}
	};


	return ( 
		<button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-1 right-2 z-50 p-2 rounded-full transition-colors duration-300",
			"focus:outline-hidden"
			)}
		>  
			{" "}
			{isDarkMode ? (
				<Sun className="h-6 w-6 text-yellow-300" /> 
				) : (
					<Moon className="h-6 w-6 text-blue-900" />
				)} 
		</button>
	);
};
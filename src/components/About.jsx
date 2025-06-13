import { CheckSquare, Code, GitBranch, Download } from "lucide-react"

export const About = () => {
	return <section id="about" className="py-24 px-4 relative"> 
		{" "}
		<div className="container mx-auto max-w-5xl"> 
			<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
				Sobre <span className="text-primary ">Mí</span>
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div className="space-y-6">
					<h3 className="text-2xl font-semibold">
						Seba Cruz ! 
					</h3>
				
					<p className="text-muted-foreground"> 
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</p>
					<p className="text-muted-foreground"> 
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</p>

					<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
						<a href="#contacto" className="boton-especial">
						  
						 Contactame 
						 
						</a>
						<a 
							href="/assets/CV.pdf"
							download="Cruz-Sebastian-CV.pdf"
							className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transitio-colors duration-300
							flex p-1"
							>
							<Download />
							CV
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6">

					<div className="gradient-border p-6 card-hover">
						<div className="flex items-start gap-4">
							<div className="p-3 rounded-full bg-primary/10">
								<Code className=" h-6 w-6 text-primary"/>
							</div>
							
							<div className="text-left">	
								<div className="font-semibold text-lg"> Desarrollo Web</div>
								<p className="text-muted-foreground">
									Me llamo gothencilio y me gusta bailar 
								</p>
							</div>
						</div>
					</div>

					<div className="gradient-border p-6 card-hover">
						<div className="flex items-start gap-4">
							<div className="p-3 rounded-full bg-primary/10">
								<GitBranch  className=" h-6 w-6 text-primary"/>
							</div>
								<div className="text-left">	
								<div className="font-semibold text-lg"> DevOps y CI/CD  </div>
								<p className="text-muted-foreground">
									Me llamo gothencilio y me gusta bailar 
								</p>
							</div>
						</div>
					</div>

					<div className="gradient-border p-6 card-hover">
						<div className="flex items-start gap-4">
							<div className="p-3 rounded-full bg-primary/10">
								<CheckSquare className=" h-6 w-6 text-primary"/>
							</div>
								<div className="text-left">	
								<div className="font-semibold text-lg"> Manejo de proyectos  </div>
								<p className="text-muted-foreground">
									Me llamo gothencilio y me gusta bailar 
								</p>
							</div>
						</div>
					</div>

				</div>	
			</div>
		</div>
	</section>
}
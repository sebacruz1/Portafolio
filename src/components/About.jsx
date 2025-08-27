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
						Sebastián Cruz
					</h3>
				
					<p className="text-muted-foreground"> 
    Soy Sebastián Cruz, estudiante de Ingeniería Civil Informática. Me mueve crear distintos tipos de software y convertir ideas en soluciones útiles: scripts automatizados, bots, pequeñas APIs y prototipos web. Todavía no he elegido una especialidad, y lo asumo como una ventaja: exploro áreas como backend, datos, cloud y automatización mientras fortalezco fundamentos (modelado, estructuras de datos, patrones, testing y control de versiones).

        Cómo trabajo: empiezo simple, itero rápido y mido resultados. Priorizo claridad de código, comunicación directa y buenas prácticas.
        Ahora mismo: construyo proyectos pequeños de fin a fin para aprender por hacer y para entender mejor en qué quiero profundizar.
    Qué busco: oportunidades de colaboración/prácticas donde pueda aportar, recibir feedback y seguir creciendo.

    Si quieres ver mis proyectos o proponer una idea, conversemos.

					</p>
					<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
						<a href="#contacto" className="boton-especial">
						  
						 Contactáme 
						 
						</a>
{/*						<a 
							href="/assets/CV.pdf"
							download="Cruz-Sebastian-CV.pdf"
							className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transitio-colors 
							duration-300 flex p-1 justify-center"
							>
							<Download />
							CV
						</a>
*/}					</div>
				</div>

				<div className="grid grid-cols-1 gap-6">

					<div className="gradient-border p-6 card-hover">
						<div className="flex items-start gap-4">
							<div className="p-3 rounded-full bg-primary/10">
								<Code className=" h-6 w-6 text-primary"/>
							</div>
							
							<div className="text-left">	
								<div className="font-semibold text-lg"> Desarrollo Web </div>
								<p className="text-muted-foreground">
									Experiencia en desarrollo de páginas web utilizando distintos frameworks.
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
								<div className="font-semibold text-lg">Automatización </div>
								<p className="text-muted-foreground">
                                    Scripts y CLIs para eliminar tareas repetitivas, integraciones con webhooks/cron y pequeños bots que ahorran tiempo y errores.
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
								<div className="font-semibold text-lg">Aprendiendo: Docker y CI/CD </div>
								<p className="text-muted-foreground">
                                    Contenerización para entornos reproducibles y pipelines (GitHub Actions) para test + build + deploy automáticos.
								</p>
							</div>
						</div>
					</div>

				</div>	
			</div>
		</div>
	</section>
}

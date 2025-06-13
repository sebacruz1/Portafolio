
const skills = [
	{name: "HTML/CSS", level:80, category: "frontend"},
	{name: "React", level:70, category: "frontend"},
	{name: "TailwindCSS", level:70, category: "frontend"},


	{name: "Node.Js", level:75, category: "backend"},
	{name: "Express", level:75, category: "backend"},
	{name: "MySql", level:80, category: "backend"},

	{name: "Python", level:80, category: "lenguaje"},
	{name: "Javascript", level:70, category: "lenguaje"},
	{name: "Java", level:80, category: "lenguaje"},
	{name: "C", level:70, category: "lenguaje"},

	{name: "Git", level:90, category: "herramientas"},
	{name: "Linux", level:90, category: "herramientas"},




]


export const Skills = () => {
	return <section id="skills" 
		className="py-24 px-4 relative bg-secondary/30">
		<div className="container mx-auto max-w-5xl">
		<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
			Mis <span className="text-primary"> Habilidades </span>
		</h2> 

		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{skills.map((skills, key) => (
				<div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

                	<div className="text-left mb-4">
                		<h3 className="font-semibold text-lg text-center">{skills.name}</h3>
                	</div>
                	<div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"> 
                		<div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                			style={{width: skills.level + "%"}}                		
                		/>
                	</div>
					<div className="text-right mt-1">
                		<span className="text-sm text-muted-foreground">{skills.level}% </span>
                	</div>
                </div>
			))}
		</div>




		</div> 
		</section>

};
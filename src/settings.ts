export const profile = {
	fullName: 'William Haese-Hill',
	title: 'Research Software Engineer',
	institute: 'University of Glasgow',
	author_name: 'William Haese-Hill', // Author name to be highlighted in the papers section
	research_areas: [
		{ 
			title: 'Genome annotation & comparative genomics',
			description: 'I am interested in how we generate, assess and improve genome annotations, particularly in complex eukaryotic systems such as parasites. My work focuses on using comparative genomics, orthology, and transcriptomic evidence to evaluate annotation quality, benchmark automated approaches against curated standards, and highlight systematic patterns of misannotation that can be fed back into future assemblies and pipelines.',
			field: 'biology'
		},
		{ 
			title: 'Bioinformatics pipelines & FAIR research software',
			description: 'A core strand of my work is developing and maintaining bioinformatics pipelines and software that turn biological data into reproducible, shareable analyses. This includes systems for genome annotation as well as workflows that standardise quality control, analysis and post-processing for data types such as bulk and single-cell RNA-seq. I emphasise FAIR research software principles in this work: modular design, semantic versioning, containerisation, automated testing and documentation, so that workflows can be installed and reused rather than remaining one-off scripts tied to a single project.',
			field: 'engineering'
		},
		{
			title: 'Interactive visualisation & web-based analysis tools',
			description: 'My work also includes contributing to web-based tools that sit on top of complex genomic or clinical datasets and make them usable for researchers with limited coding experience. This involves helping to design and implement browser-based interfaces, guided workflows and integrated analyses that allow users to explore data, generate figures and interrogate results without managing infrastructure or writing scripts. A recurring focus is on ensuring that these tools remain transparent and reproducible, so that analyses can be revisited, compared and incorporated into wider research workflows.',
			field: 'computer-science'
		}
	],
	interests: [
		{ title: 'Bioinformatics', description: ''},
		{ title: 'Full stack development', description: ''},
		{ title: 'Sustainable computing', description: ''},
		{ title: 'Automated workflows', description: ''},
		{ title: 'Digital Humanities', description: ''},
		{ title: 'Academic writing', description: ''},
		{ title: 'Pipelines', description: ''},
	]
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: 'https://www.linkedin.com/in/will-haese-hill-066a7426/',
	x: '',
	github: 'https://github.com/haessar',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=2F8FlA8AAAAJ',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0002-1393-0966',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	papersPerPage: 4,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'William Haese-Hill',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}

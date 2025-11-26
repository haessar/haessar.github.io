export const experiences = [
	{
		company: 'University of Glasgow',
		time: 'Sep. 2024 - Present',
		title: 'Research Software Engineer',
		location: 'Glasgow, UK',
		description: '',
	},
	{
		company: 'University of Glasgow',
		time: 'Jun. 2021 - Aug. 2024',
		title: 'Programmer / Data Analyst',
		location: 'Glasgow, UK',
		description: '',
	},
	{
		company: 'Several companies in industry',
		time: 'Mar. 2017 - May. 2021',
		title: 'Python Developer / Data Analyst',
		location: 'Around the UK',
		description: '',
	},
	{
		company: 'BAST Inc, Ltd',
		time: 'Sep. 2014 - Feb. 2017',
		title: 'Mathematical Modeller',
		location: 'Loughborough, UK',
		description: '',
	}
];

export const education = [
	{
		school: 'Loughborough University',
		time: '2011 - 2015',
		degree: 'PhD in Mathematical Physics',
		location: 'Loughborough, UK',
		description: '',
	},
	{
		school: 'University of Leeds',
		time: '2007 - 2011',
		degree: 'MMath, BSc in Mathematics',
		location: 'Leeds, UK',
		description: '',
	},
];

export const skills = [
	{ title: 'Python', description: 'Django, numpy, pandas',},
	{ title: 'TypeScript', description: 'React',},
	{ title: 'R', description: 'Shiny, Seurat, tidyverse'},
	{ title: 'Linux', description: 'Bash, nginx' },
	{ title: 'Databases', description: 'SQL, NoSQL'},
	{ title: 'Version control', description: 'git'},
];

export const publications = [
	{
		title: 'Annotation and visualization of parasite, fungi and arthropod genomes with Companion',
		authors: 'William Haese-Hill, Kathryn Crouch, Thomas D Otto',
		journal: 'Nucleic Acids Research',
		time: '2024-05-16',
		link: 'https://doi.org/10.1093/nar/gkae378',
		abstract: 'As sequencing genomes has become increasingly popular, the need for annotation of the resulting assemblies is growing. Structural and functional annotation is still challenging as it includes finding the correct gene sequences, annotating other elements such as RNA and being able to submit those data to databases to share it with the community. Compared to *de novo* assembly where contiguous chromosomes are a sign of high quality, it is difficult to visualize and assess the quality of annotation. We developed the Companion web server to allow non-experts to annotate their genome using a reference-based method, enabling them to assess the output before submitting to public databases. In this update paper, we describe how we have included novel methods for gene finding and made the Companion server more efficient for annotation of genomes of up to 1 Gb in size. The reference set was increased to include genomes of interest for human and animal health from the fungi and arthropod kingdoms. We show that Companion outperforms existing comparable tools where closely related references are available.',
	},
	{
		title: 'RNAcare: integrating clinical data with transcriptomic evidence using rheumatoid arthritis as a case study',
		authors: 'Mingcan Tang, William Haese-Hill, Fraser Morton, Carl Goodyear, Duncan Porter, Stefan Siebert, Thomas D Otto',
		journal: 'BMC Medical Genomics',
		time: '2025-05-21',
		link: 'https://doi.org/10.1186/s12920-025-02162-z',
		abstract: 'Gene expression analysis is a crucial tool for uncovering the biological mechanisms that underlie differences between patient subgroups, offering insights that can inform clinical decisions. However, despite its potential, gene expression analysis remains challenging for clinicians due to the specialised skills required to access, integrate, and analyse large datasets. Existing tools primarily focus on RNA-Seq data analysis, providing user-friendly interfaces but often falling short in several critical areas: they typically do not integrate clinical data, lack support for patient-specific analyses, and offer limited flexibility in exploring relationships between gene expression and clinical outcomes in disease cohorts. Users, including clinicians with a general knowledge of transcriptomics, however, who may have limited programming experience, are increasingly seeking tools that go beyond traditional analysis. To overcome these issues, computational tools must incorporate advanced techniques, such as machine learning, to better understand how gene expression correlates with patient symptoms of interest.',
	},
	{
		title: 'paraCell: a novel software tool for the interactive analysis and visualization of standard and dual host–parasite single-cell RNA-seq data',
		authors: 'Edward Agboraw, William Haese-Hill, Franziska Hentzschel, Emma Briggs, Dana Aghabi, Anna Heawood, Clare R Harding, Brian Shiels, Kathryn Crouch, Domenico Somma, Thomas D Otto',
		journal: 'Nucleic Acids Research',
		time: '2025-02-28',
		link: 'https://doi.org/10.1093/nar/gkaf091',
		abstract: 'Advances in sequencing technology have led to a dramatic increase in the number of single-cell transcriptomic datasets. In the field of parasitology, these datasets typically describe the gene expression patterns of a given parasite species at the single-cell level under experimental conditions, in specific hosts or tissues, or at different life cycle stages. However, while this wealth of available data represents a significant resource, analysing these datasets often requires expert computational skills, preventing a considerable proportion of the parasitology community from meaningfully integrating existing single-cell data into their work. Here, we present paraCell, a novel software tool that allows the user to visualize and analyse pre-loaded single-cell data without requiring any programming ability. The source code is free to allow remote installation. On our web server, we demonstrated how to visualize and re-analyse published *Plasmodium* and *Trypanosoma* datasets. We have also generated *Toxoplasma*–mouse and *Theileria*–cow scRNA-seq datasets to highlight the functionality of paraCell for pathogen–host interaction. The analysis of the data highlights the impact of the host interferon-γ response and gene expression profiles associated with disease susceptibility by these intracellular parasites, respectively.',
	},
	{
		title: 'peaks2utr: a robust Python tool for the annotation of 3′ UTRs',
		authors: 'William Haese-Hill, Kathryn Crouch, Thomas D Otto',
		journal: 'Bioinformatics',
		time: '2023-03-02',
		link: 'https://doi.org/10.1093/bioinformatics/btad112',
		abstract: 'Annotation of nonmodel organisms is an open problem, especially the detection of untranslated regions (UTRs). Correct annotation of UTRs is crucial in transcriptomic analysis to accurately capture the expression of each gene yet is mostly overlooked in annotation pipelines. Here we present peaks2utr, an easy-to-use Python command line tool that uses the UTR enrichment of single-cell technologies, such as 10× Chromium, to accurately annotate 3′ UTRs for a given canonical annotation.',
	},
	{
		title: 'On the Spectra of Real and Complex Lamé Operators',
		authors: 'William Haese-Hill, Martin A Hallnäs, Alexander P Veselov',
		journal: 'Symmetry, Integrability and Geometry: Methods and Applications (SIGMA)',
		time: '2017-07-01',
		link: 'https://doi.org/10.3842/SIGMA.2017.049',
		abstract: 'We study Lamé operators of the form L=−d2dx2+m(m+1)ω2℘(ωx+z0), with m∈N and ω a half-period of ℘(z). For rectangular period lattices, we can choose ω and z0 such that the potential is real, periodic and regular. It is known after Ince that the spectrum of the corresponding Lamé operator has a band structure with not more than m gaps. In the first part of the paper, we prove that the opened gaps are precisely the first m ones. In the second part, we study the Lamé spectrum for a generic period lattice when the potential is complex-valued. We concentrate on the m=1 case, when the spectrum consists of two regular analytic arcs, one of which extends to infinity, and briefly discuss the m=2 case, paying particular attention to the rhombic lattices.',
	},
	{
		title: 'Complex Exceptional Orthogonal Polynomials and Quasi-invariance',
		authors: 'William Haese-Hill, Martin A Hallnäs, Alexander P Veselov',
		journal: 'Letters in Mathematical Physics',
		time: '2016-03-14',
		link: 'https://doi.org/10.1007/s11005-016-0828-8',
		abstract: ' Consider the Wronskians of the classical Hermite polynomials Hλ,l(x):=Wr(Hl(x), Hk1 (x), . . . , Hkn (x)), l ∈Z≥0\{k1,..., kn}, where ki = λi + n − i, i = 1,..., n and λ = (λ1,...,λn) is a partition. Gomez-Ullate et al. showed that for a special class of partitions the corresponding polynomials are orthogonal and dense among all polynomials with respect to a certain inner product, but in contrast to the usual case have some degrees missing (so-called exceptional orthogonal polynomials). We generalise their results to all partitions by considering complex contours of integration and non-positive Hermitian products. The corresponding polynomials are orthogonal and dense in a finite-codimensional subspace of C[x] satisfying certain quasi-invariance conditions. A Laurent version of exceptional orthogonal polynomials, related to monodromy-free trigonometric Schrödinger operators, is also presented.',
	},
];

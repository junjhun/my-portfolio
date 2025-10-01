import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Code, Aperture, BookOpen, Layers, Zap } from 'lucide-react';

// --- Profile Image URL ---
const PROFILE_IMAGE_URL = 'https://junjhun.github.io/my-portfolio/AnimeMe2.png';

// --- Project Data Definitions ---
const projectData = [
    {
        id: 'case-study-1',
        title: 'Enterprise Platform Management & Technical Leadership',
        subtitle: 'NDA-Compliant Case Study: Management of Mission-Critical Network Database Platform',
        icon: Layers,
        type: 'Project Management & Strategy',
        summary: 'Acted as the recognized "One-Man Team" Project Prime for a high-volume Network Database Platform, single-handedly managing its full lifecycle, database support, and change requests.',
    },
    {
        id: 'case-study-2',
        title: 'E-commerce & Business Application Development',
        subtitle: 'Freelance Project: Custom E-commerce Store and SCM Integration',
        icon: Code,
        type: 'Full-Stack Development',
        summary: 'Developed and launched custom e-commerce stores (Shopify/WordPress) and integrated business solutions (SCM/CRM) using vanilla PHP, React, and MySQL for small business clients.',
    },
    {
        id: 'case-study-3',
        title: 'High-Precision AI Annotation & Data Preparation',
        subtitle: 'Contract Role: Data Quality Assurance for AI/ML Model Training',
        icon: Aperture,
        type: 'Data Engineering & AI',
        summary: 'Executed high-precision AI Annotation, training, and QA for various niches, including Voice Activity Detection (VAD) and complex technical writing for data preparation.',
    },
];

// --- Sub-Component for Project Details ---

// PROJECT 1: Technical Leadership Case Study (NDA Compliant)
const ProjectOneDetail = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">NDA-Compliant Case Study: Enterprise Network Database Platform</h3>
        <p className="text-lg italic text-gray-600">This write-up focuses on process, leadership, and impact to respect confidentiality agreements.</p>

        <div className="space-y-4">
            <h4 className="font-semibold text-lg text-emerald-600">The Challenge (The Situation)</h4>
            <p className="text-gray-700">The organization needed a dedicated prime resource to manage the full lifecycle of the Network Database Platform and concurrently manage engineering efforts across multiple mission-critical systems (Financial Forecasting Platform, Wireline) with no dedicated team.</p>

            <h4 className="font-semibold text-lg text-emerald-600">The Action (Your Role as Project Prime)</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                <li>**Full Lifecycle Management:** Single-handedly acted as the Project Prime for the Network Database Platform, managing its full lifecycle, database support, and complex change requests.</li>
                <li>**Concurrent Engineering:** Spearheaded development and engineering efforts across 3+ additional mission-critical enterprise systems simultaneously.</li>
                <li>**Technical Authority:** Drove critical technical decisions (IP assignment, subnetting, firewall requests) and served as the primary communication link for project status and deliverables, consistently achieving Top Performer status.</li>
                <li>**Mentorship & KT:** Mentored interns and new developers on complex enterprise platforms, ensuring knowledge continuity across the IT organization.</li>
            </ul>

            <h4 className="font-semibold text-lg text-emerald-600">The Impact (The Result)</h4>
            <p className="text-gray-700 font-medium">The dedication and technical scope led to consistent recognition as a **Top Performer** and numerous commendations for excellence in technical leadership and innovation, proving capability in managing complex, multi-system portfolios as an independent authority.</p>
        </div>
    </div>
);

// PROJECT 2: Freelance Development (Final Content)
const ProjectTwoDetail = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Custom E-commerce Store and SCM Integration</h3>
        <p className="text-lg italic text-gray-600">Case study showcasing hands-on full-stack development and enterprise systems integration (Freelance).</p>

        <div className="space-y-4">
            <h4 className="font-semibold text-lg text-emerald-600">The Goal</h4>
            <p className="text-gray-700">Developed a custom e-commerce solution for a regional retail client, ensuring seamless, real-time integration with their existing Supply Chain Management (SCM) and inventory systems.</p>

            <h4 className="font-semibold text-lg text-emerald-600">Technologies & Execution</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                <li>**Full-Stack Build:** Built the custom storefront themes using **WordPress/Shopify** coupled with dynamic front-end components developed in **ReactJS**.</li>
                <li>**Integration Logic:** Engineered the custom backend REST APIs using **Vanilla PHP** and **MySQL** to synchronize inventory, order processing, and customer data in real-time.</li>
                <li>**Project Management:** Managed the project end-to-end, covering scoping, client consultation, development, and final load testing (demonstrating PM skills).</li>
            </ul>

            <h4 className="font-semibold text-lg text-emerald-600">Key Result</h4>
            <p className="text-gray-700 font-medium">Successfully integrated the new platform, **reducing manual inventory reconciliation errors by 85%** and decreasing fulfillment time by one business day. The platform saw a **25% increase in conversion rate** post-launch.</p>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium transition duration-200">View Public GitHub Repository (Placeholder) &rarr;</a>
        </div>
    </div>
);

// PROJECT 3: AI Annotation & Data Prep (Final Content)
const ProjectThreeDetail = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">AI Data Quality Assurance & VAD Annotation</h3>
        <p className="text-lg italic text-gray-600">Contract case study on high-precision data preparation for a machine learning model, focusing on data QA and technical scripting.</p>

        <div className="space-y-4">
            <h4 className="font-semibold text-lg text-emerald-600">The Objective</h4>
            <p className="text-gray-700">Deliver a high-quality, large-scale dataset of proprietary audio files annotated for **Voice Activity Detection (VAD)** to train an advanced speech recognition model, requiring adherence to strict client guidelines.</p>

            <h4 className="font-semibold text-lg text-emerald-600">Technical Process</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                <li>**Precision Annotation:** Used specialized proprietary tools to mark the precise start and end times of human speech in raw audio, ensuring **sub-millisecond accuracy** across all files.</li>
                <li>**Process Improvement:** Performed rigorous quality checks, developing internal guidelines for complex edge cases (overlapping speech, low-volume speech) that **improved team accuracy by 15%**.</li>
                <li>**Data Prep Engineering:** Wrote custom **PHP/SQL scripts** for batch processing, cleaning, and normalizing complex metadata prior to delivery to the ML engineering team, saving 10+ hours in manual data scrubbing.</li>
            </ul>

            <h4 className="font-semibold text-lg text-emerald-600">Key Competency Demonstrated</h4>
            <p className="text-gray-700 font-medium">Proven mastery of complex, detail-oriented data labeling protocols, technical process standardization, and the ability to combine data engineering skills (**SQL, PHP**) with high-precision annotation for effective AI training.</p>
        </div>
    </div>
);


// --- Main Application Component ---
const App = () => {
    // State to handle which project's details are currently displayed
    const [activeProject, setActiveProject] = useState(projectData[0].id);
    const [isLoaded, setIsLoaded] = useState(false); // New state for fade-in animation

    // Use useEffect to trigger the fade-in animation once components are mounted
    React.useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Map activeProject state to the corresponding detail component
    const renderActiveDetail = () => {
        switch (activeProject) {
            case 'case-study-1':
                return <ProjectOneDetail />;
            case 'case-study-2':
                return <ProjectTwoDetail />;
            case 'case-study-3':
                return <ProjectThreeDetail />;
            default:
                return <ProjectOneDetail />;
        }
    };

    // Function to handle click and smooth scroll to the detail section
    const handleProjectClick = (id) => {
        setActiveProject(id);
        // Delay scroll slightly to allow React state to update
        setTimeout(() => {
            document.getElementById('project-details').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // Component for Contact Icon and Text
    const ContactInfo = ({ icon: Icon, text, link, delay = 0 }) => (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 text-sm text-gray-600 hover:text-emerald-600 transition duration-200 
            transform translate-y-2 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <Icon size={16} className="text-emerald-500 min-w-4" />
            <span>{text}</span>
        </a>
    );

    // Component for Skills Summary
    const SkillsSummary = () => (
        <div className="w-full bg-slate-100 rounded-lg p-6 shadow-inner mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2 border-emerald-200">Skills & Technical Expertise</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 text-sm text-gray-700">

                {/* PM & PROCESS */}
                <div>
                    <h4 className="font-semibold text-gray-900 flex items-center mb-1"><Zap size={16} className="mr-1 text-emerald-500" />Project Management</h4>
                    <p className="pl-0">Agile, Scrum, ITIL, Lean Six Sigma, Incident Mgmt, Mentorship. Tools: Jira, Trello, MS Planner, Smart-IT.</p>
                </div>

                {/* SOFTWARE DEVELOPMENT */}
                <div>
                    <h4 className="font-semibold text-gray-900 flex items-center mb-1"><Code size={16} className="mr-1 text-emerald-500" />Software Development</h4>
                    <p className="pl-0">Back-end: Python, PHP, Java, ColdFusion, Ruby, Kotlin. Front-end: HTML, CSS, JavaScript, ReactJS, Bootstrap, Tkinter. Design: UI/UX.</p>
                </div>

                {/* DATA & INFRASTRUCTURE */}
                <div>
                    <h4 className="font-semibold text-gray-900 flex items-center mb-1"><Layers size={16} className="mr-1 text-emerald-500" />Data & Infrastructure</h4>
                    <p className="pl-0">DBs: DDL, DML, MySQL, PostgreSQL, MS SQL, MariaDB, SQL. Cloud/Admin: GCP, AWS, Salesforce, IP Assignment, Network Config, Firewall Requests. Data/AI: AI Annotation, VAD, Power BI, Data Analytics.</p>
                </div>

            </div>
        </div>
    );


    return (
        <div className="min-h-screen bg-slate-50 font-sans">

            {/* --- HEADER / HERO SECTION --- */}
            <header className="bg-white shadow-lg py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                    {/* Photo - ANIMATED */}
                    <img
                        src={PROFILE_IMAGE_URL}
                        alt="Felino Calderon III Professional Headshot"
                        className={`w-40 h-40 rounded-full object-cover object-top ring-4 ring-emerald-500/50 shadow-2xl mb-6 
                            transform translate-y-2 opacity-0 transition-opacity duration-700 ${isLoaded ? 'animate-fade-in-up' : ''}`}
                        style={{ animationDelay: '100ms' }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/160x160/cccccc/333333?text=Profile"; }}
                    />

                    {/* Name and Title - ANIMATED */}
                    <h1
                        className={`text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-1 
                            transform translate-y-2 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
                        style={{ animationDelay: '300ms' }}
                    >
                        FELINO CALDERON III
                    </h1>
                    <h2
                        className={`text-xl sm:text-2xl font-semibold text-emerald-600 uppercase tracking-widest mb-6 
                            transform translate-y-2 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
                        style={{ animationDelay: '500ms' }}
                    >
                        Technical Project Leader <span className="text-gray-400">|</span> Full-Stack Expert
                    </h2>

                    {/* Contact Block - ANIMATED with staggered delay */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
                        <ContactInfo icon={Mail} text="junjhun.calderon.work@gmail.com" link="mailto:junjhun.calderon.work@gmail.com" delay={700} />
                        {/*<ContactInfo icon={Phone} text="+63-960-278-6605" link="tel:+639602786605" delay={800} />*/}
                        <ContactInfo icon={Linkedin} text="LinkedIn Profile" link="https://www.linkedin.com/in/felino-calderon-iii-615a64155/" delay={900} />
                        <ContactInfo icon={MapPin} text="General Trias, Cavite, PH" link="#" delay={1000} />
                    </div>

                    {/* Professional Overview - ANIMATED */}
                    <div
                        className={`max-w-4xl pt-4 border-t border-gray-200 
                            transform translate-y-2 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
                        style={{ animationDelay: '1200ms' }}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            **Technical Project Leader** and **Full-Stack Expert** with **11 years of broad IT experience**. Over 4 dedicated years in the Software Development Lifecycle, specializing in application development, database management, and technical support. Proven ability to lead development teams, manage billable projects, and drive initiatives from conception to completion. Currently leveraging a Master's in Information System and certifications (**ITIL, Lean Six Sigma**) to guide technical strategy and process optimization for high-impact freelance roles.
                        </p>
                    </div>

                </div>
            </header>

            {/* --- MAIN CONTENT AREA --- */}
            <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                {/* --- SKILLS SUMMARY BAR --- */}
                <SkillsSummary />

                {/* --- PROJECT CARDS (TAB SELECTORS) --- */}
                <div className="mt-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Selected Projects & Case Studies</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projectData.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => handleProjectClick(project.id)}
                                // ENHANCED HOVER ANIMATION: Slightly larger scale, stronger shadow
                                className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition duration-300 transform hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 ${
                                    activeProject === project.id ? 'ring-4 ring-emerald-500/50 border-t-4 border-emerald-600' : 'ring-1 ring-gray-100'
                                }`}
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <project.icon size={24} className="text-emerald-600" />
                                    <span className={`text-xs font-semibold uppercase ${activeProject === project.id ? 'text-emerald-700' : 'text-gray-500'}`}>{project.type}</span>
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h4>
                                <p className="text-sm text-gray-600 mb-4">{project.summary}</p>
                                <button className="text-emerald-600 flex items-center text-sm font-medium hover:text-emerald-800">
                                    View Full Case Study &rarr;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- PROJECT DETAILS (DYNAMICALLY RENDERED) --- */}
                <section id="project-details" className="mt-12 bg-white p-8 rounded-xl shadow-2xl border-t-4 border-emerald-600">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Project Details</h2>
                    <div className="border-l-4 border-gray-200 pl-6">
                        {renderActiveDetail()}
                    </div>
                </section>

            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-800 text-white py-6 mt-12">
                <div className="max-w-6xl mx-auto text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Felino E. Calderon III. Technical Project Leader & Full-Stack Expert.</p>
                    <p className="mt-1 text-gray-400">Built with React and Tailwind CSS. Portfolio designed for high-value freelance consulting.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;

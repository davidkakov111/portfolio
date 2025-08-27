export const projects = [
    {
        title: "ChainPortal",
        description: "A multi-chain NFT and token management platform that simplifies minting across blockchains with real-time transparency and a seamless user experience. Built with Angular, NestJS, PostgreSQL and Dockerized for scalability, it automates deployment via CI/CD, ensuring efficiency and security in Web3 asset creation.",
        descriptionHtml: `
            <p>
                <strong>ChainPortal</strong> is a multi-chain NFT & token management platform built with
                <strong>Angular</strong> (frontend), <strong>Nest.js</strong> on <strong>Node.js</strong> (backend), and
                <strong>PostgreSQL</strong>. It streamlines minting across blockchains with a simple, guided UX designed for both
                beginners and power users. Currently supports <strong>Ethereum</strong> and <strong>Solana</strong>, with additional chains and bridging on the roadmap.
            </p>

            <h4>What Users Can Do</h4>
            <ul>
                <li><strong>Mint NFTs or Tokens</strong> via a clear, step-by-step flow (details → chain selection → review & mint).</li>
                <li><strong>Track progress in real time</strong> with WebSocket updates (payment validation, IPFS upload, mint confirmation).</li>
                <li><strong>View transaction history</strong> for transparency and record-keeping.</li>
                <li><strong>Authenticate with a wallet</strong> (decentralized sign-in, no passwords).</li>
            </ul>

            <h4>Architecture & DevOps</h4>
            <ul>
                <li><strong>Backend Dockerized</strong> with a persistent volume for PostgreSQL to ensure data integrity and scalability.</li>
                <li><strong>CI/CD pipeline</strong> auto-deploys to a VPS on push to the designated branch for fast, reliable releases.</li>
                <li>Efficient Web3 integrations optimized for <strong>high-volume</strong> transactions.</li>
            </ul>

            <h4>Security & Transparency</h4>
            <ul>
                <li>End-to-end status visibility via <strong>WebSocket</strong> events with human-readable explanations.</li>
                <li>Clear feedback at every step to build trust for a financial-grade experience.</li>
            </ul>

            <h4>Monetization</h4>
            <p>
                The platform is fully automated and generates revenue through <strong>minting fees</strong>, enabling scalable,
                low-touch operations with strong upside as adoption grows.
            </p>

            <h4>My Role & Impact</h4>
            <ul>
                <li>Full-stack implementation (Angular, Nest.js/Node.js, PostgreSQL) and Web3 integrations.</li>
                <li>Designed the real-time system for status updates and a guided, frictionless minting UX.</li>
                <li>Set up Dockerized environments and production CI/CD for consistent, zero-downtime deployments.</li>
            </ul>
        `,
        image: "/chainportal.jpeg",
        tags: ["Node.js", "Angular", "PostgreSQL", "Web3"],
        techStack: ['Angular', 'Nest.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'WebSockets', 'Ethereum', 'Solana', 'IPFS'],
        link: "https://chainportal.app",
        code: "",
        learnMore: "https://chainportal.app/learn",
        isGame: false,
    },
    {
        title: "Solana Mystery Box shop",
        description: "In the ever-evolving landscape of cryptocurrencies, one project stands out as a game-changer in how we approach online payments The Solana Mystery Box Shop, has ushered in a new era in crypto transactions by harnessing the capabilities of the Web3.js and others, such as the Solana Python SDK.",
        descriptionHtml: `
            <p>
                The <strong>Solana Mystery Box Shop</strong> is a crypto payment platform primarily built with
                <strong>Django</strong> and <strong>Next.js</strong>. It leverages
                <strong>Web3.js</strong> and the <strong>Solana Python SDK</strong> to overcome Python limitations while providing
                a seamless blockchain shopping experience.
            </p>

            <h4>Vision & Mission</h4>
            <p>
                The shop simplifies crypto payments by providing a secure, instant, and user-friendly shopping experience.
                No registration, wallet deposits, or complex connections are needed. By isolating the user's wallet from
                the webshop, it eliminates phishing risks and makes crypto accessible to everyone.
            </p>

            <h4>Mystery Boxes</h4>
            <ul>
                <li><strong>NFT Mystery Boxes:</strong> Random digital art and collectibles with exciting themes.</li>
                <li><strong>Solana Mystery Boxes:</strong> Chance to win 1 whole Solana per purchase, adding thrill to shopping.</li>
                <li><strong>Token Mystery Boxes:</strong> Potential to win up to a trillion tokens per purchase, expanding crypto portfolios.</li>
            </ul>

            <h4>My Role</h4>
            <p>As the sole developer and owner, I handled design, development, and implementation, including:</p>
            <ul>
                <li>QR code payment system integration</li>
                <li>Instant reward distribution</li>
                <li>Full project architecture and deployment</li>
            </ul>

            <h4>Innovative Features</h4>
            <ul>
                <li><strong>QR Code Payments:</strong> Quick, secure transactions via scanning.</li>
                <li><strong>No-Registration Shopping:</strong> Users can shop without creating accounts.</li>
                <li><strong>Instant Rewards:</strong> Immediate gratification through rapid reward distribution.</li>
            </ul>

            <h4>Impact</h4>
            <p>
                The platform has redefined crypto payments, making them more accessible, secure, and effortless,
                setting a new standard for digital transactions.
            </p>

            <h4>Conclusion</h4>
            <p>
                The Solana Mystery Box Shop demonstrates how technology can simplify and revolutionize user experiences
                in the crypto space. Explore its innovative features firsthand or review the source code on GitHub.
            </p>
        `,
        image: "/solana.jpeg",
        tags: ["Next.js", "Django", "PostgreSQL", "Web3"],
        techStack: ["Next.js", "JavaScript", "Web3.js", "Django", "Python", "Solana SDK", "PostgreSQL"],
        link: "https://solanamysterybox.vercel.app/",
        code: "https://github.com/davidkakov111/SolanaMysteryBoxShop",
        learnMore: "",
        isGame: false,
    },
    {
        title: "Movie Catalog",
        description: "Thrilled to present my Movie Catalog project! Built with TypeScript, it offers seamless browsing, personalized user accounts, and an intuitive admin panel. From detailed movie pages to comprehensive analytics, it demonstrates my commitment to leveraging cutting-edge technologies for user-centric applications.",
        descriptionHtml: `
            <p>
                <strong>Movie Catalog</strong> is a comprehensive web application built with <strong>Next.js</strong> and <strong>TypeScript</strong>. 
                The platform allows users to browse, discover, and manage movies while providing a rich, interactive experience with personalized features.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li><strong>Homepage:</strong> Lazy-loaded movie listings with a search bar for seamless navigation.</li>
                <li><strong>Movie Details Page:</strong> Detailed information for each movie including images, release dates, ratings, comments, and descriptions.</li>
                <li><strong>User Accounts:</strong> Users can register, log in, add ratings and comments, save movies to their watchlist, or create/manage movies (Editor role required).</li>
                <li><strong>Admin Panel:</strong> Admins can manage user roles, monitor platform activity, and ensure smooth operations.</li>
                <li><strong>User Roles:</strong> Viewer (save, rate, comment), Editor (curate content), Admin (manage platform).</li>
                <li><strong>Movie Categories:</strong> Organizes movies into categories to enhance discoverability.</li>
                <li><strong>Most Popular Movies:</strong> Highlights trending movies based on reviews and ratings.</li>
                <li><strong>Analytics Panel:</strong> Provides insights into trends and category preferences, with PDF export capability.</li>
                <li><strong>Film Slideshow:</strong> Immersive slideshows for each movie, enriching the visual experience.</li>
            </ul>

            <h4>Technical Implementation</h4>
            <ul>
                <li>Frontend: <strong>Next.js + TypeScript</strong> for responsive, modern UI and smooth client-side interactions.</li>
                <li>Backend: <strong>PostgreSQL</strong> database for secure and structured data storage.</li>
                <li>Focus on scalability, maintainability, and delivering an intuitive user experience across devices.</li>
            </ul>

            <h4>My Role & Impact</h4>
            <ul>
                <li>Implemented full-stack functionality using Next.js, TypeScript, and PostgreSQL.</li>
                <li>Designed interactive user features including personalized watchlists, ratings, and comment systems.</li>
                <li>Developed admin and editor tools to manage content and monitor analytics.</li>
                <li>Ensured a polished UI/UX with lazy loading, slideshows, and responsive design.</li>
            </ul>
        `,
        image: "/movie.png",
        tags: ["Next.js", "PostgreSQL"],
        techStack: [
            "Next.js",
            "TypeScript",
            "React",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "JWT",
            "Vercel"
        ],
        link: "https://mymoviecatalog.vercel.app/",
        code: "https://github.com/davidkakov111/MovieCatalog",
        learnMore: "",
        isGame: false,
    },
    {
        title: "Investment Analytics",
        description: "A full-stack platform for tracking investments, featuring a React + Tailwind frontend integrated with a Node.js and PostgreSQL backend. It delivers real-time profit and tax insights, transaction management, and secure account handling for Romanian investors with intuitive data visualizations.",
        descriptionHtml: `
            <p>
                <strong>Investment Analytics</strong> is a full-stack web app built with
                <strong>TypeScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, and
                <strong>PostgreSQL</strong>. It features a React frontend styled with Tailwind CSS, providing
                interactive dashboards, stats, profit/tax calculations, and secure transaction forms.
            </p>
            <p>
                The backend handles CRUD APIs, user registration, and account management, enabling
                seamless and secure data input for financial analytics.
            </p>
        `,
        image: "/investment.png",
        tags: ["React", "Node.js", "PostgreSQL"],
        techStack:  ["TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
        link: "https://romaniancryptoinvestmenttracker.vercel.app",
        code: "https://github.com/davidkakov111/InvestmentTrackerClient",
        learnMore: "",
        isGame: false,
    },
    {
        title: "Animal Invasion",
        description: "Discover my inaugural large-scale 2D game coded in Python using the Arcade game developer module. Assume the role of a businessman maneuvering challenges to collect bitcoins while evading perilous creatures.",
        descriptionHtml: `
            <p>
                <strong>Animal Invasion</strong> is a 2D game built with <strong>Python</strong> using the <strong>Arcade</strong> module.
                This project marks a key milestone in my development journey, combining fun gameplay with programming experimentation.
            </p>

            <h4>Game Overview</h4>
            <p>
                Take the role of a determined businessman on a quest to collect bitcoins while navigating treacherous terrain.
                Avoid various creatures that pose threats on contact, and use your skill to gather all 20 bitcoins to win the game.
            </p>

            <h4>Risk Assessment</h4>
            <p>
                The game's <code>.exe</code> file has been vetted with VirusTotal: over 85% of antivirus engines flagged it as safe. 
                Some flags may appear due to the file extension’s risk perception. For transparency, you can <a target="_blank" 
                href="https://www.virustotal.com/gui/file/3410b0575dbd261af7180c6aae27fb2e4765a5110a3fa57aa90358cb5a4f74aa">
                review the scan results</a> and the open-source code.
            </p>

            <h4>Guide to Launch</h4>
            <ol>
                <li>Download and extract the files.</li>
                <li>Open the extracted folder.</li>
                <li>Navigate to the 'dist' folder and open it.</li>
                <li>Run <strong>ANIMAL_INVASION.exe</strong> to start the game.</li>
            </ol>

            <h4>Get Started</h4>
            <p>
                Ready to conquer Animal Invasion? Click the download button and embark on an unforgettable gaming experience!
                Let the adventure begin.
            </p>
        `,
        image: "/arcade.jpeg",
        tags: ["Arcade", "Python"],
        techStack: ["Arcade", "Python"],
        link: "",
        code: "https://github.com/davidkakov111/Game",
        learnMore: "",
        isGame: true,
    },
];

export const projects = [
    {
        title: "Million Dollar Memecoins",
        description: "Million Dollar Memecoins lets memecoin projects showcase their tokens on a 1000×1000 interactive pixel grid across multiple blockchains. Combining the viral concept of the Million Dollar Homepage with memecoin hype, it drives visibility, engagement, and liquidity while offering a playful, gamified experience. Developed as an Upwork client project, delivered end-to-end.",
        descriptionHtml: `
            <p>
                <strong>Million Dollar Memecoins</strong> is a multichain Web3 platform for memecoin owners to advertise tokens via a 1000×1000 interactive pixel grid. Users can display logos, taglines, and links, with optional NFT minting as permanent Soulbound Tokens on Ethereum, Solana, and BSC.
            </p>

            <h4>Problem / Opportunity</h4>
            <p>
                Memecoin projects struggle for visibility, community engagement, and liquidity in a crowded market. Existing platforms lack a gamified, viral way to showcase tokens.
            </p>

            <h4>Solution</h4>
            <ul>
                <li>Interactive pixel grid for purchasing ad spaces.</li>
                <li>Multichain NFT minting (ETH, SOL, BSC) as Soulbound Tokens.</li>
                <li>Secure crypto (Nowpayments) and card (Paystack) payments.</li>
                <li>Gamified onboarding with live previews.</li>
                <li>Admin dashboard for tracking purchases, payments, and NFT minting.</li>
            </ul>

            <h4>Impact & Value</h4>
            <ul>
                <li>Boosts recognition, liquidity, and engagement for memecoin projects.</li>
                <li>Enables viral marketing via shareable pixel spaces.</li>
                <li>Ensures trust and transparency with blockchain-backed ownership.</li>
            </ul>

            <h4>My Role & Contributions</h4>
            <ul>
                <li>Delivered the platform end-to-end for an Upwork client: Node.js + React frontend with interactive pixel grid, live previews, and registration via Web3 wallets, social auth, or email/password.</li>
                <li>Integrated multichain Web3 NFT minting as Soulbound Tokens on Ethereum, Solana, and BSC.</li>
                <li>Built secure, scalable payment flows with automated receipts and admin tracking.</li>
                <li>Produced a polished platform combining gamification, viral marketing potential, and blockchain-backed ownership.</li>
            </ul>
        `,
        slug: 'million-dollar-memecoins',
        image: "/million-dollar-memecoins.png",
        tags: ["React", "Node.js", "PostgreSQL", "Web3"],
        techStack: ["React", "Node.js", "TypeScript", "Web3.js", "Metaplex", "Ethers", "thirdweb", "tronweb", "Ethereum", "Solana", "BSC", "Tron", "NFT", "Paystack", "Nowpayments", "PostgreSQL"],
        link: "", // TODO - add link after hosting
        code: [],
        isGame: false,
    },
    {
        title: "ChainPortal",
        description: "Users managing NFTs and tokens across multiple blockchains faced high fees and the hassle of using different platforms. ChainPortal solves this by unifying asset management into one platform, enabling seamless minting and tracking across chains with real-time transparency. Built with Angular, NestJS, PostgreSQL, and Docker for scalability, and automated with CI/CD, it ensures efficient, secure, and cost-effective Web3 asset creation.",
        descriptionHtml: `
            <p>
                <strong>ChainPortal</strong> is a multi-chain NFT & token management platform built with 
                <strong>Angular</strong> (frontend), <strong>Nest.js</strong> on <strong>Node.js</strong> (backend), and 
                <strong>PostgreSQL</strong>. Users managing assets across multiple blockchains faced high fees and the hassle of using different platforms. 
                ChainPortal solves this by providing a unified platform with a simple, guided UX, real-time transparency, and scalability. 
                Currently supports <strong>Ethereum</strong> and <strong>Solana</strong>, with additional chains and bridging on the roadmap.
            </p>

            <h4>What Users Can Do</h4>
            <ul>
                <li><strong>Mint NFTs or Tokens</strong> via a clear, step-by-step flow, reducing time spent switching platforms and lowering transaction errors.</li>
                <li><strong>Track progress in real time</strong> using WebSocket updates (payment validation, IPFS upload, mint confirmation) for transparency and trust.</li>
                <li><strong>View transaction history</strong> for full record-keeping and financial confidence.</li>
                <li><strong>Authenticate with a wallet</strong> (decentralized sign-in, no passwords) for simplified and secure access.</li>
            </ul>

            <h4>Architecture & DevOps</h4>
            <ul>
                <li><strong>Backend Dockerized</strong> with persistent PostgreSQL storage to ensure data integrity, reliability, and scalability.</li>
                <li><strong>CI/CD pipeline</strong> auto-deploys to a VPS on push to the designated branch for fast, consistent, and zero-downtime releases.</li>
                <li>Efficient Web3 integrations optimized for <strong>high-volume transactions</strong>, reducing operational costs.</li>
            </ul>

            <h4>Security & Transparency</h4>
            <ul>
                <li>End-to-end status visibility via <strong>WebSocket</strong> events with human-readable explanations, increasing user trust.</li>
                <li>Clear step-by-step feedback to ensure a financial-grade, reliable experience.</li>
            </ul>

            <h4>Monetization & Impact</h4>
            <p>
                By automating minting and transaction management, ChainPortal generates revenue through <strong>minting fees</strong> 
                while reducing manual intervention, enabling scalable and low-touch operations.
            </p>

            <h4>My Role & Contributions</h4>
            <ul>
                <li>Full ownership of the project: designed, built, and deployed the platform end-to-end (Angular, Nest.js/Node.js, PostgreSQL) including all Web3 integrations.</li>
                <li>Architected the real-time system for status updates and created a frictionless guided minting UX, reducing user errors and support requests.</li>
                <li>Set up Dockerized environments and production CI/CD pipelines for reliable, scalable, zero-downtime deployments.</li>
                <li>Delivered measurable business impact: faster minting processes, lower fees for users, and a scalable revenue-generating platform.</li>
            </ul>
        `,
        slug: 'chainportal',
        image: "/logos/chainportal.jpeg",
        tags: ["Node.js", "Angular", "PostgreSQL", "Web3"],
        techStack: ['Angular', 'Nest.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'WebSockets', 'Ethereum', 'Solana', 'IPFS'],
        link: "https://chainportal.app",
        code: [{link: 'https://github.com/davidkakov111/ChainPortalSrv', label: 'Backend Code'}, {link: 'https://github.com/davidkakov111/ChainPortalCli', label: 'Frontend Code'}],
        isGame: false,
    },
    {
        title: "Solana Mystery Box shop",
        description: "The NFT and token ecosystem lacked a fun, gamified way for users to discover digital assets. The Solana Mystery Box Shop introduces a new type of web shop where users can purchase mystery boxes containing NFTs, tokens, or Solana rewards, with QR code payments for a secure and simple experience. This creates an engaging, collectible-driven platform that enriches the ecosystem and encourages user participation.",        
        descriptionHtml: `
            <p>
                The <strong>Solana Mystery Box Shop</strong> is a full-stack project I built and own end-to-end, using 
                <strong>Django</strong> and <strong>Next.js</strong>. It leverages 
                <strong>Web3.js</strong> and the <strong>Solana Python SDK</strong> to provide a seamless blockchain-based shopping experience.
            </p>

            <h4>Problem / Opportunity</h4>
            <p>
                The NFT and crypto ecosystem lacked a gamified, collectible-focused web shop that made crypto fun, accessible, and engaging for users without complex wallet setups or registrations.
            </p>

            <h4>Solution</h4>
            <p>
                The Solana Mystery Box Shop introduces a new type of platform where users can purchase NFT, Solana, or token mystery boxes. 
                It features a QR code-based payment system for secure, anonymous transactions and instant reward distribution, eliminating phishing risks and simplifying the shopping experience.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li><strong>NFT Mystery Boxes:</strong> Random digital art and collectibles with exciting themes.</li>
                <li><strong>Solana Mystery Boxes:</strong> Chance to win 1 whole Solana per purchase.</li>
                <li><strong>Token Mystery Boxes:</strong> Potential to win up to a trillion tokens per purchase.</li>
                <li><strong>QR Code Payments:</strong> Secure, instant transactions without wallets or registrations.</li>
                <li><strong>Instant Rewards:</strong> Immediate gratification through rapid reward distribution.</li>
            </ul>

            <h4>My Role & Contributions</h4>
            <ul>
                <li>Full ownership: design, architecture, development, and deployment of the platform.</li>
                <li>Implemented QR code-based payment integration for secure, wallet-free transactions.</li>
                <li>Developed instant reward distribution system for all mystery box types.</li>
                <li>Built and optimized full-stack architecture (Django, Next.js, Web3.js, Solana Python SDK) for reliability, scalability, and security.</li>
            </ul>

            <h4>Impact</h4>
            <p>
                The platform enriches the crypto ecosystem by providing a fun, gamified way to discover digital assets while making payments simple, secure, and instant. 
                It sets a new standard for collectible-based webshops and demonstrates how innovative technology can enhance user engagement and trust.
            </p>

        `,
        slug: 'solana-mystery-box-shop',
        image: "/solana.jpeg",
        tags: ["Next.js", "Django", "PostgreSQL", "Web3"],
        techStack: ["Next.js", "JavaScript", "Web3.js", "Django", "Python", "Solana SDK", "PostgreSQL"],
        link: "https://solanamysterybox.vercel.app/",
        code: [{link: 'https://github.com/davidkakov111/SolanaMysteryBoxShop', label: 'Code'}],
        isGame: false,
    },
    {
        title: "Hockey Lineup Analyzer",
        description: "A React + TypeScript web app for NHL analysts to quickly evaluate lineups, compare player stats, and assign expert ratings. Interactive dashboards, historical stats, and visual analytics help experts make faster, data-driven decisions with confidence.",
        descriptionHtml: `
            <p>
                <strong>Hockey Lineup Analyzer</strong> streamlines NHL lineup analysis with interactive dashboards, player modals, and expert rating tools. Historical stats and visual analytics enable faster, smarter decisions. <em>(Private project under client NDA, no public preview available)</em>
            </p>
            <h4>My Role</h4>
            <ul>
                <li>Built full React frontend with TypeScript and ShadCN components.</li>
                <li>Implemented interactive lineups, player details, and rating system.</li>
                <li>Designed responsive, expert-focused UI for efficient analysis.</li>
            </ul>
        `,
        slug: 'hockey-lineup-analyzer',
        image: "/hockey-analyzer.png",
        tags: ["React", "TypeScript"],
        techStack: ["React", "TypeScript", "ShadCN UI", "Charts", "Data visualization"],
        link: "", 
        code: [],
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
        slug: 'movie-catalog',
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
        code: [{link: 'https://github.com/davidkakov111/MovieCatalog', label: 'Code'}],
        isGame: false,
    },
    {
        title: "Investment Analytics",
        description: "Romanian crypto investors struggle to track transactions and calculate profits or taxes manually. This full-stack platform (React + Tailwind frontend, Node.js + PostgreSQL backend) provides real-time profit and tax insights, secure account handling, and intuitive visualizations, helping users stay compliant, save time, and make informed investment decisions.",
        descriptionHtml: `
            <p>
                <strong>Investment Analytics</strong> is a full-stack web app built with <strong>TypeScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>PostgreSQL</strong>. Romanian crypto investors often struggle to track transactions and calculate profits or taxes manually. This platform solves that by providing real-time profit and tax insights, interactive dashboards, and secure transaction forms, enabling users to manage their investments efficiently and stay compliant with local regulations.
            </p>
            <p>
                The backend supports CRUD APIs, user registration, and account management, ensuring seamless, secure data input and reliable financial analytics for informed decision-making.
            </p>
        `,
        slug: 'investment-analytics',
        image: "/investment.png",
        tags: ["React", "Node.js", "PostgreSQL"],
        techStack:  ["TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
        link: "https://romaniancryptoinvestmenttracker.vercel.app",
        code: [{link: 'https://github.com/davidkakov111/InvestmentTrackerServer', label: 'Backend Code'}, {link: 'https://github.com/davidkakov111/InvestmentTrackerClient', label: 'Frontend Code'}],
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
        slug: 'animal-invasion',
        image: "/logos/arcade.jpeg",
        tags: ["Arcade", "Python"],
        techStack: ["Arcade", "Python"],
        link: "",
        code: [{link: 'https://github.com/davidkakov111/Game', label: 'Code'}],
        isGame: true,
    },
];

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: 'Commercial Video' | 'Motion & 3D' | 'Brand Campaign';
  description: string;
  youtubeId?: string;
  videoSrc?: string;
  thumbnail?: string;
  technologies: string[];
  featured?: boolean;
  quote?: string;
}

export interface MilestoneItem {
  id: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  title: string;
  organization: string;
  description: string;
  image: string;
  highlightTag: string;
  category: 'Robi Axiata' | 'Global Creative' | 'Creative IT & Prior';
  tags: string[];
  featured?: boolean;
}

export interface SkillNode {
  name: string;
  category: 'Video & Motion' | '3D & Visual' | 'Design & Branding' | 'Strategy & Growth' | 'Tech & Web';
  level: number;
  icon?: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Md IkTaj Khan",
  shortName: "IkTaj Khan",
  roleTitle: "Sales Apprentice / Territory Officer at Robi Axiata | Graphic Designer (Nike) | Professional Video Editor",
  headline: "Sales Apprentice / Territory Officer at Robi Axiata Limited • Graphic Designer working with Nike • Professional Video Editor in the international marketplace.",
  organization: "Robi Axiata Limited",
  department: "Territory Operations & Commercial Sales",
  email: "iktajkhan1997@gmail.com",
  phone: "+880 1332-507428",
  phoneClean: "+8801332507428",
  location: "Dhaka, Bangladesh",
  bio: "I am a dynamic professional currently working as a Sales Apprentice / Territory Officer at Robi Axiata Limited, while also actively working as a Graphic Designer for Nike and a Professional Video Editor in the international marketplace. Formerly a Junior Executive in Business Development at Creative IT Institute, with foundational experience at bKash, Instant Job Hub Ltd., and CSR Axis, I synthesize territory sales strategy, distribution growth, and brand leadership with world-class graphic design, 3D motion animation, and broadcast-level video post-production.",
  specialties: [
    "Territory Operations & Sales (Robi)",
    "Graphic Design & Brand Art (Nike)",
    "Video Editing & Motion Graphics (International)",
    "3D Animation & Visuals (Blender)"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/md-iktaj-khan-46619321b",
    facebook: "https://www.facebook.com/md.iktaj.khan",
    github: "https://github.com/iktajkhan",
    resume: "https://drive.google.com/file/d/1__c0FFZgjGbIthFFVkZw4IZoG9aZLLsj/view?usp=drivesdk",
    repo: "https://github.com/iktajkhan/Iktajkhan"
  },
  images: {
    heroPortrait: "/assets/images/iktaj.jpg",
    aboutPortrait: "/assets/images/About_me.JPG",
    robiPortrait: "/assets/images/robiIktaj.png",
    robiSummit: "/assets/images/robi.png",
    robi1: "/assets/images/robi1.png",
    robi2: "/assets/images/robi2.png",
    robi3: "/assets/images/robi3.png",
    robi4: "/assets/images/robi4.png",
    favicon: "/assets/images/IK.png",
    bannerVideo: "/assets/video/banner.mp4"
  }
};

export const IMPACT_METRICS = [
  { value: "01", label: "Young Talent Award", detail: "Robi Axiata Q1 2026 Northern Cluster" },
  { value: "03+", label: "Summits & Cluster Meets", detail: "Young Apex Summit 2026 & Northern Cluster Meets" },
  { value: "300+", label: "Students Trained", detail: "Mirpur Ideal Girls' Laboratory Workshop" },
  { value: "06", label: "Global & Enterprise Brands", detail: "Robi Axiata, Nike, Creative IT, bKash, Instant Job Hub, CSR Axis" }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    number: "01",
    title: "Cinematic Visual Showcase",
    category: "Commercial Video",
    description: "Featured primary commercial showcase demonstrating advanced timeline pacing, multi-track dynamic audio design, color grading, and broadcast-ready finishing.",
    youtubeId: "iCj10YZ1D7I",
    technologies: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Audio Mastering"],
    featured: true
  },
  {
    id: "proj-2",
    number: "02",
    title: "Brand Narrative & Dynamic Motion",
    category: "Commercial Video",
    description: "High-energy commercial cut featuring synchronized rhythmic cuts, motion graphics transitions, and branded visual elements tailored for corporate audience engagement.",
    youtubeId: "aoB3TCCw8Fo",
    technologies: ["Premiere Pro", "Motion Graphics", "Sound Design"]
  },
  {
    id: "proj-3",
    number: "03",
    title: "Creative Visual Production",
    category: "Motion & 3D",
    description: "Creative visual exploration combining cinematic compositions, visual effects, and storytelling rhythm designed to elevate brand identity.",
    youtubeId: "rcFI9unNBU0",
    technologies: ["After Effects", "Premiere Pro", "VFX & Compositing"]
  },
  {
    id: "proj-4",
    number: "04",
    title: "Commercial Promotional Reel",
    category: "Brand Campaign",
    description: "Promotional campaign reel produced for corporate outreach, optimizing viewer retention and social distribution across platforms.",
    youtubeId: "gQJfrbN-Yp4",
    technologies: ["Premiere Pro", "CapCut Pro", "Social Formats"]
  },
  {
    id: "proj-5",
    number: "05",
    title: "Visual Product & Brand Showcase",
    category: "Motion & 3D",
    description: "Dynamic product launch and visual feature video combining crisp framing, motion typography, and cinematic lighting accents.",
    youtubeId: "x1RNQCJXeFo",
    technologies: ["Blender", "After Effects", "Premiere Pro"]
  },
  {
    id: "proj-native-1",
    number: "06",
    title: "Promotional Creative Video Work",
    category: "Commercial Video",
    description: "Native promotional video creation. Reflecting the creative philosophy: 'Dreams are always growing up by hope. This is the last thing that I cannot get rid of just because I believe in myself and my abilities.'",
    videoSrc: "/assets/video/promo.mp4",
    quote: "Dreams are always growing up by hope.",
    technologies: ["Premiere Pro", "Promotional Editing", "Blender"]
  },
  {
    id: "proj-native-2",
    number: "07",
    title: "Dynamic Social & Campaign Motion",
    category: "Brand Campaign",
    description: "Broadcast and messaging video piece engineered for high-impact social and campaign conversion.",
    videoSrc: "/assets/video/whats.mp4",
    quote: "I believe in myself and my abilities.",
    technologies: ["Premiere Pro", "Motion Typography", "Audio Sync"]
  }
];

export const CAREER_MILESTONES: MilestoneItem[] = [
  {
    id: "milestone-robi-young-talent",
    date: { day: "Q1", month: "Award", year: "2026" },
    title: "Young Talent Award (Northern Cluster)",
    organization: "Robi Axiata Limited • Rangpur Region",
    description: "Awarded the coveted Robi 'Young Talent Award' crest for outstanding commercial agility, territory retail network growth, and high-velocity execution across the Northern Cluster.",
    image: "/assets/images/robi2.png",
    highlightTag: "Young Talent Award",
    category: "Robi Axiata",
    tags: ["Young Talent Award", "Robi Star Crest", "Northern Cluster", "Rangpur Region", "Territory Officer"],
    featured: true
  },
  {
    id: "milestone-robi-cluster-meet",
    date: { day: "Q2", month: "Summit", year: "2026" },
    title: "Cluster Meet Q2'26 Stage Celebration",
    organization: "Northern Cluster • Robi Axiata Limited",
    description: "Celebrated on the red carpet stage at the high-velocity Cluster Meet Q2'26 alongside regional cluster champions and top sales management, marking milestones in territory subscriber growth and digital services.",
    image: "/assets/images/robi3.png",
    highlightTag: "Cluster Meet Q2'26",
    category: "Robi Axiata",
    tags: ["Cluster Meet Q2'26", "Red Carpet Stage", "Sales Leadership", "Commercial Milestones"],
    featured: true
  },
  {
    id: "milestone-robi-warriors-stage",
    date: { day: "Stage", month: "Honor", year: "2026" },
    title: "Northern Warriors Stage Recognition & Leadership Crest",
    organization: "Robi Axiata Limited",
    description: "Recognized on the grand stage with executive leadership as an honored member of Northern Warriors for exemplary on-ground dedication, commercial agility, and distribution excellence.",
    image: "/assets/images/robi1.png",
    highlightTag: "Northern Warriors",
    category: "Robi Axiata",
    tags: ["Northern Warriors", "Stage Recognition", "Leadership Crest", "Territory Agility"],
    featured: true
  },
  {
    id: "milestone-robi-cluster-team",
    date: { day: "Cluster", month: "Grand Meet", year: "2026" },
    title: "Northern Cluster Grand Team Meet & Operations Convocation",
    organization: "Robi Axiata Limited",
    description: "Gathered with the entire regional operations force, cluster territory officers, and commercial directors at the Robi Northern Cluster Grand Meet, representing unified commercial momentum and collective excellence.",
    image: "/assets/images/robi4.png",
    highlightTag: "Northern Cluster Meet",
    category: "Robi Axiata",
    tags: ["Northern Cluster", "Grand Team Meet", "Territory Officers", "Commercial Force"],
    featured: true
  },
  {
    id: "milestone-robi-summit",
    date: { day: "Young Apex", month: "Summit", year: "2026" },
    title: "Red Velocity Young Apex Summit 2026",
    organization: "Robi Axiata Limited & Airtel",
    description: "Celebrated fearless execution and high-velocity teamwork at the prestigious Red Velocity Young Apex Summit 2026 alongside Robi Axiata and Airtel leadership, championing commercial momentum and countrywide digital outreach.",
    image: "/assets/images/robi.png",
    highlightTag: "Young Apex Summit 2026",
    category: "Robi Axiata",
    tags: ["Red Velocity", "Young Apex Summit", "Robi & Airtel", "Territory Leadership"],
    featured: true
  },
  {
    id: "milestone-robi-role",
    date: { day: "Territory", month: "Operations", year: "Recent" },
    title: "Appointed Sales Apprentice / Territory Officer",
    organization: "Robi Axiata Limited",
    description: "Spearheading on-ground territory operations, distribution synergies, retailer network growth, and high-impact digital telecom campaigns as a Sales Apprentice / Territory Officer at Robi Axiata Limited.",
    image: "/assets/images/robiIktaj.png",
    highlightTag: "Current Appointment",
    category: "Robi Axiata",
    tags: ["Sales Apprentice", "Territory Officer", "Commercial Strategy", "Telecom Operations"],
    featured: true
  },
  {
    id: "milestone-nike-global",
    date: { day: "Brand", month: "Design", year: "Ongoing" },
    title: "Graphic Designer for Nike & Global Video Production",
    organization: "Nike & International Marketplace",
    description: "Active as a professional Graphic Designer creating high-energy brand visuals for Nike, while simultaneously delivering broadcast-quality video editing, 3D motion graphics, and commercial post-production across international marketplaces.",
    image: "/assets/images/05.png",
    highlightTag: "Global Creative",
    category: "Global Creative",
    tags: ["Nike Graphic Designer", "International Marketplace", "Video Post-Production", "Blender 3D"]
  },
  {
    id: "milestone-executive-seminar",
    date: { day: "28", month: "Feb", year: "2025" },
    title: "Executive Seminar: AI, Cloud & Cybersecurity",
    organization: "Leadership Workshop",
    description: "Attended the executive seminar 'Navigating Tomorrow: AI, Cloud, and Cybersecurity for Business Leaders' conducted by Mohammad Mahadee Uz Zaman, exploring transformative enterprise technologies.",
    image: "/assets/images/05.png",
    highlightTag: "Executive Tech",
    category: "Creative IT & Prior",
    tags: ["AI & Cloud", "Cybersecurity", "Executive Leadership"]
  },
  {
    id: "milestone-industry-immersion",
    date: { day: "12", month: "Feb", year: "2025" },
    title: "Industry Immersion & Training Visit (60+ Students)",
    organization: "Creative IT Institute (Mirpur Branch)",
    description: "Hosted 60+ enthusiastic students from Mirpur Girl’s Ideal College for an industrial visit focused on Graphic Design training, inspiring the next generation of creative talent.",
    image: "/assets/images/04.png",
    highlightTag: "Industry Mentorship",
    category: "Creative IT & Prior",
    tags: ["Mentorship", "60+ Students", "Creative Training"]
  },
  {
    id: "milestone-workshop-300",
    date: { day: "08", month: "Feb", year: "2025" },
    title: "Graphic Design Workshop (300+ Students)",
    organization: "Mirpur Ideal Girls' Laboratory",
    description: "Conducted a successful Graphic Design Seminar at Mirpur Ideal Girls’ Laboratory, mentoring over 300+ students eager to learn digital design and creative software skills.",
    image: "/assets/images/03.png",
    highlightTag: "Keynote & Training",
    category: "Creative IT & Prior",
    tags: ["Keynote Speaker", "300+ Students", "Graphic Design"]
  },
  {
    id: "milestone-diu-mou",
    date: { day: "10", month: "Jan", year: "2025" },
    title: "Strategic MoU Meeting with Dhaka International University",
    organization: "Civil Dept, DIU & Creative IT Institute",
    description: "Productive meeting discussing potential collaborations and future projects aimed at enhancing the IT sector, combining creativity, technology, and civil engineering expertise to create lasting value.",
    image: "/assets/images/02.png",
    highlightTag: "University Alliance",
    category: "Creative IT & Prior",
    tags: ["MoU Partnership", "DIU Academic Alliance", "Institutional Growth"]
  },
  {
    id: "milestone-crest-award",
    date: { day: "23", month: "Dec", year: "2024" },
    title: "Skill Development Partner Crest Award",
    organization: "IIUPE 2024 Gala Night & Creative IT",
    description: "Honored and excited to receive the Skill Development Partner crest at the IIUPE 2024 International Inter University Photography Exhibition Gala Night for empowering students with essential creative tools.",
    image: "/assets/images/06.png",
    highlightTag: "Honor & Award",
    category: "Creative IT & Prior",
    tags: ["Partner Crest Award", "IIUPE 2024", "International Gala"]
  },
  {
    id: "milestone-bd-leadership",
    date: { day: "03", month: "Oct", year: "2024" },
    title: "Business Development Team Leadership",
    organization: "Creative IT Institute",
    description: "Led business development teams and university funnel operations at Creative IT Institute, driving institutional growth through strategic innovation and market insights.",
    image: "/assets/images/01.png",
    highlightTag: "Strategic Leadership",
    category: "Creative IT & Prior",
    tags: ["University Funnels", "Growth Strategy", "Creative IT"]
  }
];

export const SKILL_NODES: SkillNode[] = [
  {
    name: "Territory Operations & Sales",
    category: "Strategy & Growth",
    level: 96,
    description: "Retailer network development, territory routing, telecom service promotion, and commercial growth at Robi Axiata Limited."
  },
  {
    name: "Brand & Graphic Design (Nike)",
    category: "Design & Branding",
    level: 95,
    icon: "/assets/images/skills-03.png",
    description: "Commercial brand artwork, promotional apparel graphics, vector iconography, and global design deliverables."
  },
  {
    name: "Adobe Premiere Pro",
    category: "Video & Motion",
    level: 96,
    icon: "/assets/images/skills-02.png",
    description: "Broadcast-quality non-linear video editing, multi-track dynamic audio design, color grading, and commercial pacing."
  },
  {
    name: "Adobe After Effects",
    category: "Video & Motion",
    level: 90,
    description: "Motion graphics, visual effects compositing, kinetic typography, and title sequences for international clients."
  },
  {
    name: "CapCut Pro",
    category: "Video & Motion",
    level: 92,
    icon: "/assets/images/skills-04.png",
    description: "Rapid short-form and viral campaign editing, trend-focused transitions, and mobile video optimization."
  },
  {
    name: "Blender 3D",
    category: "3D & Visual",
    level: 85,
    description: "3D modeling, lighting, camera animation, product visualization, and assets for brand marketing launches."
  },
  {
    name: "Adobe Photoshop",
    category: "Design & Branding",
    level: 94,
    description: "Digital image manipulation, advanced retouching, commercial promotional posters, and visual layouts."
  },
  {
    name: "Adobe Illustrator",
    category: "Design & Branding",
    level: 90,
    icon: "/assets/images/skills-03.png",
    description: "Vector branding, corporate logo identity, marketing banners, and print assets."
  },
  {
    name: "Canva Pro",
    category: "Design & Branding",
    level: 95,
    icon: "/assets/images/skills-01.png",
    description: "Rapid marketing collateral design, collaborative team templates, and social presentation assets."
  },
  {
    name: "University Funnel Strategy",
    category: "Strategy & Growth",
    level: 94,
    description: "Institutional partnerships, student lifecycle management, university conversion funnels, and workshop pipelines."
  },
  {
    name: "Business Development & Client Relations",
    category: "Strategy & Growth",
    level: 92,
    description: "Strategic innovation, client engagement, market insights, and enterprise partnerships."
  },
  {
    name: "UI/UX & Web Development",
    category: "Tech & Web",
    level: 80,
    description: "Modern responsive web interfaces, user experience workflows, wireframing, and modern web applications."
  }
];

export const PRIOR_ORGANIZATIONS = [
  {
    name: "Robi Axiata Limited",
    role: "Sales Apprentice / Territory Officer",
    focus: "Territory Operations, Distribution & Commercial Sales",
    current: true,
    badge: "Recent / Current"
  },
  {
    name: "Nike",
    role: "Graphic Designer",
    focus: "Brand Visuals, Apparel Graphics & Creative Direction",
    current: true,
    badge: "Professional Role"
  },
  {
    name: "International Marketplace",
    role: "Professional Video Editor",
    focus: "Commercial Video, 3D Motion & Viral Content Post-Production",
    current: true,
    badge: "Global Clients"
  },
  {
    name: "Creative IT Institute",
    role: "Junior Executive in Business Development",
    focus: "University Funnel Management & Institutional Alliances",
    current: false,
    badge: "Past Experience"
  },
  {
    name: "bKash",
    role: "Operational Engagement & Branding Support",
    focus: "Client Engagement & Process Optimization",
    current: false,
    badge: "Past Experience"
  },
  {
    name: "Instant Job Hub Ltd.",
    role: "Business Development & Growth",
    focus: "Talent Acquisition & Strategic Expansion",
    current: false,
    badge: "Past Experience"
  },
  {
    name: "CSR Axis",
    role: "Client Engagement Specialist",
    focus: "Corporate Engagement & Relationship Management",
    current: false,
    badge: "Past Experience"
  }
];

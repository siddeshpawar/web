const STORAGE_KEY = 'cv-builder-data';

const defaultCVData = {
  personalInfo: {
    name: "Siddesh Vilas Pawar",
    phone: "+44 7554539805",
    email: "siddeshvilaspawar@gmail.com",
    location: "Guildford, GU2 7JH",
    github: "https://github.com/siddeshpawar",
    linkedin: "https://www.linkedin.com/in/siddesh-pawar04"
  },
  profile: "Connectivity and Network Infrastructure Engineer with 6+ years of experience in large-scale network operations, data center environments, and vendor management. Proven track record in executing complex project lifecycles, optimizing network performance, and managing multi-vendor hardware deployments. Proven track record of enhancing network performance and securing enterprise environments, with experience in UNIX, TCP/IP, network fundamental accompanied with Python, holding MSc in Cybersecurity with a technical focus on digital forensics, ethical hacking and penetration testing. Working with IETF on post-quantum cryptographic algorithms approved by NIST.",
  education: [
    { institution: "University of Surrey, MSc in Cyber Security", date: "February 2025 - January 2026" },
    { institution: "K.J. Somaiya College of Engineering, B.Tech in Electronics and Telecommunications", date: "June 2014 - June 2018" }
  ],
  workExperience: [
    {
      company: "Cybersecurity Part-Time Engineer (Infrastructure Setup) | Londis, UK",
      date: "February 2025 – Present",
      bullets: [
        "Developed a custom Asset Risk Management web application using React and Firebase (deployed via GitHub) to automate risk calculations and digitalize asset tracking.",
        "Managing data protection standards across store operations and digital transaction systems.",
        "Establishing GDPR compliance frameworks and implementing security protocols for the site's IT infrastructure."
      ]
    },
    {
      company: "System Admin | Tata Consultancy Services",
      date: "May 2022 – January 2025",
      bullets: [
        "Configured and managed multi-vendor network devices (Cisco, Aruba, Meraki), specifically resolving high-latency issues to optimize IPTV streaming performance and overall network throughput.",
        "Managed IPAM/DNS/DHCP using Infoblox, URL filtering, IP allocation, maintenance of critical DNS records (MX, A, CNAME).",
        "Monitored, configured, and troubleshot Meraki devices and VMware SD-WAN (VeloCloud) Edge devices.",
        "Specialized in authentication issues, configuring ClearPass, and planning upgrade and testing activities.",
        "Managed a complex security estate including Checkpoint, Cisco ASA, Cisco ACI, and Cisco Secure Workload (CSW). Maintained secure DMVPN connections for site-to-site communication.",
        "Configured F5 Load Balancers to ensure application high availability and performed traffic analysis to identify bottlenecks, carried out Failover activity addressed the TTL configuration issues on domain names.",
        "Utilized monitoring tools such as SolarWinds, Watchdog and ServiceNow for issue tracking and resolution.",
        "Implemented Infrastructure as Code (IaC) by utilizing GitLab CI/CD pipelines to deploy and manage firewall rules within Google Cloud Platform (GCP) environments.",
        "Led technical presentations in Change Advisory Board (CAB) meetings, justifying risk assessments to secure approvals for critical infrastructure changes, and successfully gain highest success rate.",
        "Conducted research and simulations on Post-Quantum Cryptography (PQC) algorithms using Qiskit SDK (Terra, Aer) to assess future network encryption standards."
      ]
    },
    {
      company: "Technical Advance Consultant - Network Engineer | CSS Corp Pvt Ltd (Now Movate)",
      date: "February 2021 – April 2022",
      bullets: [
        "Provided network solutions for users with Aruba ClearPass products on-premises or on-cloud, ClearPass deployment as a cluster.",
        "Served as the L3 Escalation Point for AAA issues; utilized Access Tracker and Policy Simulation tools to reduce mean-time-to-resolution (MTTR) for complex authentication failures by 40%.",
        "Designed a self-registration Guest Captive Portal with SMS gateway integration, automating access for 500+ daily visitors while maintaining audit logs for compliance.",
        "Managed the lifecycle of HP ProLiant servers and VMware ESXi hosts, performing firmware upgrades via iLO, replacing faulty hardware (RAID controllers, memory), and resolving Purple Screen of Death (PSOD) incidents to minimize downtime.",
        "Integrated Microsoft Intune extensions to enforce endpoint compliance (Posturing) and connected ClearPass with multi-vendor NAS devices (Aruba Controllers, Cisco Switches) and Hybrid Active Directory environments.",
        "Managed the internal Public Key Infrastructure (PKI) using AD CS, handling the generation, installation, and renewal of EAP-TLS certificates across the ClearPass estate.",
        "Utilized Jira for tracking bug registrations, incident reporting, and documenting resolution procedures."
      ]
    },
    {
      company: "Network Engineer | Unique Enterprise @Mumbai International Airport Ltd",
      date: "August 2019 – February 2021",
      bullets: [
        "Secured the GVK-MIAL airport network perimeter by configuring and managing next-gen firewalls (Checkpoint, FortiGate, Palo Alto), actively blocking malicious IPs and enforcing strict blacklisting policies to prevent cyber threats.",
        "Operated as a Layer 1 Security Analyst, conducting daily spam mail analysis, monitoring USB mass-storage access violations, and performing port-blocking audits to ensure compliance with aviation security standards.",
        "Monitored critical links (ILL/MPLS) and managed Vendor Service Level Agreements (SLAs) with ISPs (Tata, Airtel, MTNL), raising Trouble Tickets (TT) and driving rapid resolution for outages to maintain 24/7 airport operations.",
        "Managed a complex, heterogeneous network environment comprising Cisco, Juniper (EX/MX), Nortel, Avaya, and Allied Telesis devices. Utilized Juniper Junos Space and Contrail for centralized network management and automation."
      ]
    },
    {
      company: "Network Engineer | Orient Technology",
      date: "October 2018 – August 2019",
      bullets: [
        "Implemented Static IP subnet allocation for SMB services and VLANs on L2 switches.",
        "Developed troubleshooting skills for resolving issues in complex wireless network environments on IEEE 802.11 standards.",
        "Implemented OTP verification for customer secured login and DHCP option 82 for auto-login features.",
        "Resolved high latency issues in gaming through comparative analysis among different devices."
      ]
    }
  ],
  projects: [
    "Automated configuration of OSPF on routers using Netmiko, Paramiko module of Python.",
    "Designed a Python script to monitor network interfaces using SNMP and send alerts to the administrator.",
    "Developed Python scripts for taking configuration backups of network devices using TFTP processes.",
    "Successfully migrated Juniper SRX3600 to Palo Alto as an internal firewall.",
    "Actively participating in the IETF workgroup on MPLS over IP Data packets, PQC migration for EU.",
    "Worked on Digital Forensics: Autopsy, Volatility Framework (Memory), Wireshark (Network), FTK Imager, SANS SIFT Workstation, zsteg.",
    "Developed a Python-based Hybrid Encryption tool integrating FIPS 203 (ML-KEM/Kyber) algorithms via the Open Quantum Safe (liboqs) library to demonstrate quantum-resistant secure file transfer methodologies."
  ],
  skills: [
    { category: "Programming Languages", items: "C/C++, Python, JavaScript, CSS, HTML, Django, GIT & GITHUB." },
    { category: "Networking Technology", items: "CCNA R&S, JNCIA (JUNOS), MPLS, BGP, OSPF, VRRF, VPN, RSTP, ISIS." },
    { category: "Security Technology", items: "IBM QRadar, Skyatp (Juniper), Fortigate (NSE1, NS2), Juniper Junos, Checkpoint, Cisco CSW (Tetration), Cisco Secure Firewall, Cisco ISE." },
    { category: "Networking Tools", items: "Amazon SANDBOX, GNS3, VMware Workstation, Pycharm, PRTG Network Monitoring." },
    { category: "Network Solution", items: "Aruba CPPM, Microsoft AD, Aruba Controller, Azure Intune, LinkProof NG Radware LB." },
    { category: "Cloud Technology", items: "Amazon AWS, Microsoft Azure." },
    { category: "Management", items: "Lifecycle Management, Change Advisory Board (CAB), SLA/Vendor Management." },
    { category: "Infrastructure", items: "Structured Cabling, Data Center Operations, Network Design, Rack/Stack/Power." },
    { category: "PQC Tools", items: "Qiskit SDK." }
  ],
  appreciations: [
    "Successfully received a letter of appreciation for network automation from GVK-Mumbai International Airport.",
    "Received a letter of appreciation from Makermela for the \"Engistat AR app\" project.",
    "Experience investigating network-based data for anomalies at Mumbai Airport."
  ],
  achievements: [
    "Winner of RC Nitro competitions pan India, including IIT Bombay Techfest and IIT Roorkee.",
    "Successfully organized IIT Bombay Technical event named \"International Full-throttle Event 2019-20\"."
  ],
  certifications: [
    { name: "ISC2 Certified in Cybersecurity (CC)", details: "Certificate number: 2699643 | Jul 1, 2025 - Jun 30, 2028" },
    { name: "Juniper Networks Certified Associate - Junos (JNCIA-Junos)", details: "from Juniper Learnings – (skills: networking)" },
    { name: "Fortinet: NSE 1, 2.", details: "" },
    { name: "IBM QRadar SIEM Foundation", details: "issued by IBM - https://www.credly.com/badges/85d585b0-124b-4599-8e94-e977e5e1d00d" }
  ],
  extraCurricular: [
    {
      title: "Deloitte Australia Technology Job Simulation on Forage - October 2023",
      bullets: [
        "Completed a job simulation involving data analysis for Deloitte's Technology team, created a data dashboard using Tableau.",
        "Wrote a proposal for a client project to create a functioning dashboard, used Excel for data classification, and drew business conclusions."
      ]
    },
    {
      title: "RC Nitro Racing",
      bullets: [
        "Travelled to Indian institutes that organized various technical events and have participated and won multiple RC nitro car racing awards, like IIT Bombay Techfest, IIT Chennai."
      ]
    }
  ],
  dissertation: {
    title: "Design and Evaluation of StrongVPN: A Pure Post-Quantum VPN Architecture",
    submittedTo: "Submitted to University of Surrey",
    bullets: [
      "Designed a full VPN architecture leveraging lattice-based key encapsulation mechanisms (ML-DSA and ML-KEM) and reduction optimizations for post-quantum performance.",
      "Designed and evaluated the StrongVPN protocol stack more focused on resilience against quantum-capable adversaries, cryptographic agility, and performance under constrained environments, also deployed using EC2 multi regional instances (evaluation against VPN standards IPsec/OpenVPN/WireGuard).",
      "Conducted benchmarking of PQC primitives, network performance analysis, and comparative evaluation against classical VPN protocols."
    ]
  },
  publication: {
    authors: "Siddesh Vilas Pawar, Liqun Chen.",
    title: "\"Design and Evaluation of StrongVPN, a Pure Post-Quantum VPN Architecture.\"",
    journal: "TechRxiv, November 18, 2025.",
    doi: "DOI: 10.36227/techrxiv.176127352.21222483/v2",
    keywords: ""
  },
  publication2: {
    authors: "Siddesh Vilas Pawar.",
    title: "\"The Definitive Cryptanalysis of RSA: 55 Attack Vectors, Complete Mathematical Proofs, Tool Ecosystem, and Security Boundaries.\"",
    journal: "TechRxiv, January 14, 2026.",
    doi: "DOI: 10.36227/techrxiv.176836577.74239211/v1"
  }
};

let cvData = {};
let hasUnsavedChanges = false;

// ── Load / Save ──────────────────────────────────────────────
function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      cvData = {
        ...structuredClone(defaultCVData),
        ...parsed,
        personalInfo: { ...defaultCVData.personalInfo, ...(parsed.personalInfo || {}) },
        dissertation: { ...defaultCVData.dissertation, ...(parsed.dissertation || {}) },
        publication: { ...defaultCVData.publication, ...(parsed.publication || {}) },
        publication2: { ...defaultCVData.publication2, ...(parsed.publication2 || {}) }
      };
      return;
    }
  } catch (e) {
    console.warn('Failed to load saved CV data:', e);
  }
  cvData = structuredClone(defaultCVData);
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
    hasUnsavedChanges = false;
    showStatus('Saved!', 'status-saved');
    updateUnsavedIndicator();
  } catch (e) {
    console.error('Failed to save CV data:', e);
    showStatus('Save failed!', 'status-error');
  }
}

function resetData() {
  if (confirm('Reset all changes to default CV data? This cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    cvData = structuredClone(defaultCVData);
    hasUnsavedChanges = false;
    showStatus('Reset to default!', 'status-saved');
    renderEditor();
    renderPreview();
    updateUnsavedIndicator();
  }
}

function markDirty() {
  hasUnsavedChanges = true;
  updateUnsavedIndicator();
}

// ── Status Bar ───────────────────────────────────────────────
function showStatus(msg, cls) {
  const bar = document.getElementById('status-bar');
  bar.textContent = msg;
  bar.className = 'status-bar ' + cls;
  bar.classList.remove('hidden');
  setTimeout(() => {
    if (!hasUnsavedChanges) bar.classList.add('hidden');
    else {
      bar.textContent = 'You have unsaved changes';
      bar.className = 'status-bar status-unsaved';
    }
  }, 2000);
}

function updateUnsavedIndicator() {
  const bar = document.getElementById('status-bar');
  const fab = document.getElementById('fab-indicator');
  if (hasUnsavedChanges) {
    bar.textContent = 'You have unsaved changes';
    bar.className = 'status-bar status-unsaved';
    bar.classList.remove('hidden');
    fab.style.display = '';
  } else {
    bar.classList.add('hidden');
    fab.style.display = 'none';
  }
}

// ── Warn before leaving ──────────────────────────────────────
window.addEventListener('beforeunload', (e) => {
  if (hasUnsavedChanges) { e.preventDefault(); e.returnValue = ''; }
});

// ── PDF Download ─────────────────────────────────────────────
function downloadPDF() {
  const element = document.getElementById('cv-preview');
  const name = cvData.personalInfo.name.replace(/\s+/g, '') || 'CV';
  const opt = {
    margin: [8, 8, 8, 8],
    filename: name + '_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4, useCORS: true, letterRendering: true, logging: false, dpi: 300, windowWidth: 794 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    enableLinks: true
  };
  html2pdf().set(opt).from(element).save().catch(function (err) {
    console.error('PDF generation failed:', err);
    alert('PDF download failed. Please try again.');
  });
}

// ── Helpers ──────────────────────────────────────────────────
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function createBulletEditor(bullets, onChange) {
  const container = document.createElement('div');
  bullets.forEach((bullet, i) => {
    const row = document.createElement('div');
    row.className = 'bullet-item';
    const input = document.createElement('input');
    input.value = bullet;
    input.addEventListener('input', () => { bullets[i] = input.value; markDirty(); renderPreview(); });
    const del = document.createElement('button');
    del.className = 'remove-bullet-btn';
    del.textContent = '×';
    del.addEventListener('click', () => { bullets.splice(i, 1); markDirty(); onChange(); renderPreview(); });
    row.appendChild(input);
    row.appendChild(del);
    container.appendChild(row);
  });
  const addBtn = document.createElement('button');
  addBtn.className = 'add-bullet-btn';
  addBtn.textContent = '+ Add Bullet';
  addBtn.addEventListener('click', () => { bullets.push(''); markDirty(); onChange(); renderPreview(); });
  container.appendChild(addBtn);
  return container;
}

// ── Render Editor ────────────────────────────────────────────
function renderEditor() {
  const editor = document.getElementById('editor-content');
  editor.innerHTML = '';

  // Personal Info
  editor.appendChild(buildPersonalInfoSection());
  // Profile
  editor.appendChild(buildProfileSection());
  // Education
  editor.appendChild(buildEducationSection());
  // Work Experience
  editor.appendChild(buildWorkSection());
  // Projects
  editor.appendChild(buildProjectsSection());
  // Skills
  editor.appendChild(buildSkillsSection());
  // Appreciations
  editor.appendChild(buildSimpleListSection('Appreciations', cvData.appreciations, (arr) => { cvData.appreciations = arr; }));
  // Achievements
  editor.appendChild(buildSimpleListSection('Achievements', cvData.achievements, (arr) => { cvData.achievements = arr; }));
  // Certifications
  editor.appendChild(buildCertificationsSection());
  // Extra-Curricular
  editor.appendChild(buildExtraCurricularSection());
  // Dissertation
  editor.appendChild(buildDissertationSection());
  // Publication
  editor.appendChild(buildPublicationSection());
}

function buildPersonalInfoSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  sec.innerHTML = '<div class="section-header"><h3>Personal Information</h3></div>';
  const fields = [
    ['Full Name', 'name'], ['Phone', 'phone'], ['Email', 'email'],
    ['Location', 'location'], ['GitHub URL', 'github'], ['LinkedIn URL', 'linkedin']
  ];
  fields.forEach(([label, key]) => {
    const fg = document.createElement('div');
    fg.className = 'field-group';
    fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
    const input = document.createElement('input');
    input.value = cvData.personalInfo[key];
    input.addEventListener('input', () => { cvData.personalInfo[key] = input.value; markDirty(); renderPreview(); });
    fg.appendChild(input);
    sec.appendChild(fg);
  });
  return sec;
}

function buildProfileSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  sec.innerHTML = '<div class="section-header"><h3>Profile</h3></div>';
  const fg = document.createElement('div');
  fg.className = 'field-group';
  fg.innerHTML = '<label>Profile Summary</label>';
  const ta = document.createElement('textarea');
  ta.value = cvData.profile;
  ta.addEventListener('input', () => { cvData.profile = ta.value; markDirty(); renderPreview(); });
  fg.appendChild(ta);
  sec.appendChild(fg);
  return sec;
}

function buildEducationSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = '<h3>Education</h3>';
  const addBtn = document.createElement('button');
  addBtn.className = 'add-btn';
  addBtn.textContent = '+ Add Education';
  addBtn.addEventListener('click', () => { cvData.education.push({ institution: '', date: '' }); markDirty(); renderEditor(); renderPreview(); });
  header.appendChild(addBtn);
  sec.appendChild(header);

  cvData.education.forEach((edu, i) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    const ih = document.createElement('div');
    ih.className = 'item-header';
    ih.innerHTML = '<span>Education #' + (i + 1) + '</span>';
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = 'Delete';
    del.addEventListener('click', () => { cvData.education.splice(i, 1); markDirty(); renderEditor(); renderPreview(); });
    ih.appendChild(del);
    card.appendChild(ih);

    [['Institution & Degree', 'institution'], ['Date', 'date']].forEach(([label, key]) => {
      const fg = document.createElement('div');
      fg.className = 'field-group';
      fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
      const input = document.createElement('input');
      input.value = edu[key];
      input.addEventListener('input', () => { edu[key] = input.value; markDirty(); renderPreview(); });
      fg.appendChild(input);
      card.appendChild(fg);
    });
    sec.appendChild(card);
  });
  return sec;
}

function buildWorkSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = '<h3>Work Experience</h3>';
  const addBtn = document.createElement('button');
  addBtn.className = 'add-btn';
  addBtn.textContent = '+ Add Experience';
  addBtn.addEventListener('click', () => { cvData.workExperience.push({ company: '', date: '', bullets: [''] }); markDirty(); renderEditor(); renderPreview(); });
  header.appendChild(addBtn);
  sec.appendChild(header);

  cvData.workExperience.forEach((exp, i) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    const ih = document.createElement('div');
    ih.className = 'item-header';
    ih.innerHTML = '<span>Experience #' + (i + 1) + '</span>';
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = 'Delete';
    del.addEventListener('click', () => { cvData.workExperience.splice(i, 1); markDirty(); renderEditor(); renderPreview(); });
    ih.appendChild(del);
    card.appendChild(ih);

    [['Company & Role', 'company'], ['Date', 'date']].forEach(([label, key]) => {
      const fg = document.createElement('div');
      fg.className = 'field-group';
      fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
      const input = document.createElement('input');
      input.value = exp[key];
      input.addEventListener('input', () => { exp[key] = input.value; markDirty(); renderPreview(); });
      fg.appendChild(input);
      card.appendChild(fg);
    });

    const fg = document.createElement('div');
    fg.className = 'field-group';
    fg.innerHTML = '<label>Bullet Points</label>';
    const rebuildBullets = () => { fg.innerHTML = '<label>Bullet Points</label>'; fg.appendChild(createBulletEditor(exp.bullets, rebuildBullets)); };
    rebuildBullets();
    card.appendChild(fg);
    sec.appendChild(card);
  });
  return sec;
}

function buildProjectsSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = '<h3>Projects</h3>';
  const addBtn = document.createElement('button');
  addBtn.className = 'add-btn';
  addBtn.textContent = '+ Add Project';
  addBtn.addEventListener('click', () => { cvData.projects.push(''); markDirty(); renderEditor(); renderPreview(); });
  header.appendChild(addBtn);
  sec.appendChild(header);

  cvData.projects.forEach((proj, i) => {
    const row = document.createElement('div');
    row.className = 'bullet-item';
    const input = document.createElement('input');
    input.value = proj;
    input.addEventListener('input', () => { cvData.projects[i] = input.value; markDirty(); renderPreview(); });
    const del = document.createElement('button');
    del.className = 'remove-bullet-btn';
    del.textContent = '×';
    del.addEventListener('click', () => { cvData.projects.splice(i, 1); markDirty(); renderEditor(); renderPreview(); });
    row.appendChild(input);
    row.appendChild(del);
    sec.appendChild(row);
  });
  return sec;
}

function buildSkillsSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = '<h3>Skills</h3>';
  const addBtn = document.createElement('button');
  addBtn.className = 'add-btn';
  addBtn.textContent = '+ Add Skill';
  addBtn.addEventListener('click', () => { cvData.skills.push({ category: '', items: '' }); markDirty(); renderEditor(); renderPreview(); });
  header.appendChild(addBtn);
  sec.appendChild(header);

  cvData.skills.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    const ih = document.createElement('div');
    ih.className = 'item-header';
    ih.innerHTML = '<span>Skill Category #' + (i + 1) + '</span>';
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = 'Delete';
    del.addEventListener('click', () => { cvData.skills.splice(i, 1); markDirty(); renderEditor(); renderPreview(); });
    ih.appendChild(del);
    card.appendChild(ih);

    [['Category', 'category'], ['Items', 'items']].forEach(([label, key]) => {
      const fg = document.createElement('div');
      fg.className = 'field-group';
      fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
      const input = document.createElement('input');
      input.value = skill[key];
      input.addEventListener('input', () => { skill[key] = input.value; markDirty(); renderPreview(); });
      fg.appendChild(input);
      card.appendChild(fg);
    });
    sec.appendChild(card);
  });
  return sec;
}

function buildSimpleListSection(title, arr, setArr) {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = '<h3>' + escapeHTML(title) + '</h3>';
  const addBtn = document.createElement('button');
  addBtn.className = 'add-btn';
  addBtn.textContent = '+ Add';
  addBtn.addEventListener('click', () => { arr.push(''); markDirty(); renderEditor(); renderPreview(); });
  header.appendChild(addBtn);
  sec.appendChild(header);

  arr.forEach((item, i) => {
    const row = document.createElement('div');
    row.className = 'bullet-item';
    const input = document.createElement('input');
    input.value = item;
    input.addEventListener('input', () => { arr[i] = input.value; markDirty(); renderPreview(); });
    const del = document.createElement('button');
    del.className = 'remove-bullet-btn';
    del.textContent = '×';
    del.addEventListener('click', () => { arr.splice(i, 1); markDirty(); renderEditor(); renderPreview(); });
    row.appendChild(input);
    row.appendChild(del);
    sec.appendChild(row);
  });
  return sec;
}

function buildCertificationsSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = '<h3>Certifications</h3>';
  const addBtn = document.createElement('button');
  addBtn.className = 'add-btn';
  addBtn.textContent = '+ Add';
  addBtn.addEventListener('click', () => { cvData.certifications.push({ name: '', details: '' }); markDirty(); renderEditor(); renderPreview(); });
  header.appendChild(addBtn);
  sec.appendChild(header);

  cvData.certifications.forEach((cert, i) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    const ih = document.createElement('div');
    ih.className = 'item-header';
    ih.innerHTML = '<span>Certification #' + (i + 1) + '</span>';
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = 'Delete';
    del.addEventListener('click', () => { cvData.certifications.splice(i, 1); markDirty(); renderEditor(); renderPreview(); });
    ih.appendChild(del);
    card.appendChild(ih);

    [['Name', 'name'], ['Details', 'details']].forEach(([label, key]) => {
      const fg = document.createElement('div');
      fg.className = 'field-group';
      fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
      const input = document.createElement('input');
      input.value = cert[key];
      input.addEventListener('input', () => { cert[key] = input.value; markDirty(); renderPreview(); });
      fg.appendChild(input);
      card.appendChild(fg);
    });
    sec.appendChild(card);
  });
  return sec;
}

function buildExtraCurricularSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = '<h3>Extra-Curricular</h3>';
  const addBtn = document.createElement('button');
  addBtn.className = 'add-btn';
  addBtn.textContent = '+ Add';
  addBtn.addEventListener('click', () => { cvData.extraCurricular.push({ title: '', bullets: [''] }); markDirty(); renderEditor(); renderPreview(); });
  header.appendChild(addBtn);
  sec.appendChild(header);

  cvData.extraCurricular.forEach((extra, i) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    const ih = document.createElement('div');
    ih.className = 'item-header';
    ih.innerHTML = '<span>Activity #' + (i + 1) + '</span>';
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = 'Delete';
    del.addEventListener('click', () => { cvData.extraCurricular.splice(i, 1); markDirty(); renderEditor(); renderPreview(); });
    ih.appendChild(del);
    card.appendChild(ih);

    const fg1 = document.createElement('div');
    fg1.className = 'field-group';
    fg1.innerHTML = '<label>Title</label>';
    const titleInput = document.createElement('input');
    titleInput.value = extra.title;
    titleInput.addEventListener('input', () => { extra.title = titleInput.value; markDirty(); renderPreview(); });
    fg1.appendChild(titleInput);
    card.appendChild(fg1);

    const fg2 = document.createElement('div');
    fg2.className = 'field-group';
    fg2.innerHTML = '<label>Bullet Points</label>';
    const rebuildBullets = () => { fg2.innerHTML = '<label>Bullet Points</label>'; fg2.appendChild(createBulletEditor(extra.bullets, rebuildBullets)); };
    rebuildBullets();
    card.appendChild(fg2);
    sec.appendChild(card);
  });
  return sec;
}

function buildDissertationSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  sec.innerHTML = '<div class="section-header"><h3>Dissertation</h3></div>';

  [['Title', 'title'], ['Submitted To', 'submittedTo']].forEach(([label, key]) => {
    const fg = document.createElement('div');
    fg.className = 'field-group';
    fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
    const input = document.createElement('input');
    input.value = cvData.dissertation[key];
    input.addEventListener('input', () => { cvData.dissertation[key] = input.value; markDirty(); renderPreview(); });
    fg.appendChild(input);
    sec.appendChild(fg);
  });

  const fg = document.createElement('div');
  fg.className = 'field-group';
  fg.innerHTML = '<label>Bullet Points</label>';
  const rebuildBullets = () => { fg.innerHTML = '<label>Bullet Points</label>'; fg.appendChild(createBulletEditor(cvData.dissertation.bullets, rebuildBullets)); };
  rebuildBullets();
  sec.appendChild(fg);
  return sec;
}

function buildPublicationSection() {
  const sec = document.createElement('div');
  sec.className = 'section-editor';
  sec.innerHTML = '<div class="section-header"><h3>Publications</h3></div>';

  // Publication 1
  const h1 = document.createElement('div');
  h1.className = 'item-card';
  h1.innerHTML = '<div class="item-header"><span>Publication #1</span></div>';
  [['Authors', 'authors'], ['Title', 'title'], ['Journal', 'journal'], ['DOI', 'doi']].forEach(([label, key]) => {
    const fg = document.createElement('div');
    fg.className = 'field-group';
    fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
    const input = document.createElement('input');
    input.value = cvData.publication[key];
    input.addEventListener('input', () => { cvData.publication[key] = input.value; markDirty(); renderPreview(); });
    fg.appendChild(input);
    h1.appendChild(fg);
  });
  const fg1 = document.createElement('div');
  fg1.className = 'field-group';
  fg1.innerHTML = '<label>Keywords</label>';
  const ta = document.createElement('textarea');
  ta.value = cvData.publication.keywords;
  ta.addEventListener('input', () => { cvData.publication.keywords = ta.value; markDirty(); renderPreview(); });
  fg1.appendChild(ta);
  h1.appendChild(fg1);
  sec.appendChild(h1);

  // Publication 2
  const h2 = document.createElement('div');
  h2.className = 'item-card';
  h2.innerHTML = '<div class="item-header"><span>Publication #2</span></div>';
  [['Authors', 'authors'], ['Title', 'title'], ['Journal', 'journal'], ['DOI', 'doi']].forEach(([label, key]) => {
    const fg = document.createElement('div');
    fg.className = 'field-group';
    fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
    const input = document.createElement('input');
    input.value = cvData.publication2[key];
    input.addEventListener('input', () => { cvData.publication2[key] = input.value; markDirty(); renderPreview(); });
    fg.appendChild(input);
    h2.appendChild(fg);
  });
  sec.appendChild(h2);
  return sec;
}

// ── Render Preview ───────────────────────────────────────────
function renderPreview() {
  const p = cvData.personalInfo;
  const preview = document.getElementById('cv-preview');

  let html = '';

  // Header
  html += '<div class="cv-header">';
  html += '<h1>' + escapeHTML(p.name) + '</h1>';
  html += '<div class="cv-contact">';
  html += escapeHTML(p.phone) + ' | ' + escapeHTML(p.email) + ' | ' + escapeHTML(p.location) + ' |<br>';
  html += '<a href="' + escapeHTML(p.github) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(p.github) + '</a>';
  html += ' | <a href="' + escapeHTML(p.linkedin) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(p.linkedin) + '</a>';
  html += '</div></div>';

  // Profile
  html += '<div class="cv-section"><div class="cv-section-title">Professional Summary</div>';
  html += '<p class="cv-profile">' + escapeHTML(cvData.profile) + '</p></div>';

  // Education
  html += '<div class="cv-section"><div class="cv-section-title">Education</div>';
  cvData.education.forEach(edu => {
    html += '<div class="cv-education-item"><span class="institution">' + escapeHTML(edu.institution) + '</span>';
    html += '<span class="date">' + escapeHTML(edu.date) + '</span></div>';
  });
  html += '</div>';

  // Work Experience
  html += '<div class="cv-section"><div class="cv-section-title">Professional Experience</div>';
  cvData.workExperience.forEach(exp => {
    html += '<div class="cv-experience-item"><div class="cv-experience-header">';
    html += '<span class="company">' + escapeHTML(exp.company) + '</span>';
    html += '<span class="date">' + escapeHTML(exp.date) + '</span></div>';
    html += '<ul class="cv-bullets">';
    exp.bullets.forEach(b => { html += '<li>' + escapeHTML(b) + '</li>'; });
    html += '</ul></div>';
  });
  html += '</div>';

  // Projects
  html += '<div class="cv-section"><div class="cv-section-title">Key Projects & Research</div>';
  html += '<ul class="cv-bullets">';
  cvData.projects.forEach(proj => { html += '<li>' + escapeHTML(proj) + '</li>'; });
  html += '</ul></div>';

  // Skills
  html += '<div class="cv-section"><div class="cv-section-title">Technical Skills</div>';
  cvData.skills.forEach(s => {
    html += '<div class="cv-skills-category"><strong>' + escapeHTML(s.category) + ':</strong> ' + escapeHTML(s.items) + '</div>';
  });
  html += '</div>';

  // Appreciations
  if (cvData.appreciations.length > 0) {
    html += '<div class="cv-section"><div class="cv-section-title">Appreciations</div><ul class="cv-bullets">';
    cvData.appreciations.forEach(a => { html += '<li>' + escapeHTML(a) + '</li>'; });
    html += '</ul></div>';
  }

  // Achievements
  if (cvData.achievements.length > 0) {
    html += '<div class="cv-section"><div class="cv-section-title">Achievements</div><ul class="cv-bullets">';
    cvData.achievements.forEach(a => { html += '<li>' + escapeHTML(a) + '</li>'; });
    html += '</ul></div>';
  }

  // Extra-Curricular
  if (cvData.extraCurricular.length > 0) {
    html += '<div class="cv-section"><div class="cv-section-title">Extra-Curricular</div>';
    cvData.extraCurricular.forEach(ex => {
      html += '<div class="cv-experience-item"><div class="cv-experience-header">';
      html += '<span class="company">' + escapeHTML(ex.title) + '</span></div>';
      html += '<ul class="cv-bullets">';
      ex.bullets.forEach(b => { html += '<li>' + escapeHTML(b) + '</li>'; });
      html += '</ul></div>';
    });
    html += '</div>';
  }

  // Dissertation
  html += '<div class="cv-section"><div class="cv-section-title">Dissertation</div>';
  html += '<div class="cv-experience-item"><div class="cv-experience-header">';
  html += '<span class="company">' + escapeHTML(cvData.dissertation.title) + '</span>';
  html += '<span class="date">' + escapeHTML(cvData.dissertation.submittedTo) + '</span></div>';
  html += '<ul class="cv-bullets">';
  cvData.dissertation.bullets.forEach(b => { html += '<li>' + escapeHTML(b) + '</li>'; });
  html += '</ul></div></div>';

  // Publication & Certifications
  html += '<div class="cv-section"><div class="cv-section-title">Publications & Certifications</div>';
  html += '<div class="cv-publication"><p><strong>Publication:</strong> ' + escapeHTML(cvData.publication.authors) + ' <span class="pub-title">' + escapeHTML(cvData.publication.title) + '</span> ' + escapeHTML(cvData.publication.journal) + ' ' + escapeHTML(cvData.publication.doi) + '</p></div>';
  html += '<div class="cv-publication"><p>' + escapeHTML(cvData.publication2.authors) + ' <span class="pub-title">' + escapeHTML(cvData.publication2.title) + '</span> ' + escapeHTML(cvData.publication2.journal) + ' ' + escapeHTML(cvData.publication2.doi) + '</p></div>';
  html += '<div style="margin-top:8px"><strong>Certifications:</strong><ul class="cv-bullets">';
  cvData.certifications.forEach(c => { html += '<li>' + escapeHTML(c.name) + ' ' + escapeHTML(c.details) + '</li>'; });
  html += '</ul></div></div>';

  preview.innerHTML = html;
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  renderEditor();
  renderPreview();
  updateUnsavedIndicator();

  document.getElementById('btn-save').addEventListener('click', saveData);
  document.getElementById('btn-download').addEventListener('click', downloadPDF);
  document.getElementById('btn-reset').addEventListener('click', resetData);
  document.getElementById('fab-save').addEventListener('click', saveData);
  document.getElementById('fab-download').addEventListener('click', downloadPDF);

  console.log('CV Builder loaded successfully (plain HTML+JS, no build step)');
});

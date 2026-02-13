const STORAGE_KEY = 'cv-builder-data';

const defaultCVData = {
  personalInfo: {
    name: "Siddesh Vilas Pawar",
    phone: "+44 7554539805",
    email: "siddeshvilaspawar@gmail.com",
    location: "CC L2/ROOM2, University of Surrey, Guildford, GU2 7JH",
    github: "https://github.com/siddeshpawar",
    linkedin: "https://www.linkedin.com/in/siddesh-pawar04"
  },
  profile: "Security-focused Network Engineer with over 6 years of operational experience and a specialized Master's in Cyber Security (Distinction level track). Expert in deploying and securing enterprise networks (Cisco, Aruba, Meraki) and currently pioneering Post-Quantum Cryptography (PQC) integration for VPN architectures. Proven track record in automating network configurations using Python and ensuring GDPR compliance. Seeking to leverage a unique blend of classical network engineering and future-proof cryptographic research.",
  education: [
    { institution: "MSc in Cyber Security | University of Surrey, UK", date: "Feb 2025 – Feb 2026" },
    { institution: "B.Tech in Electronics & Telecommunications | K.J. Somaiya College of Engineering, India", date: "June 2014 – June 2018" }
  ],
  workExperience: [
    {
      company: "Cybersecurity Engineer (Part-Time) | Londis, UK",
      date: "Feb 2025 – Present",
      bullets: [
        "Spearheaded GDPR compliance protocols and security infrastructure setup for new BP petrol station integrations.",
        "Developed custom asset management web application using React and Firebase for asset risk calculation and inventory tracking.",
        "Managed sensitive data protection protocols while overseeing daily operational stock management."
      ]
    },
    {
      company: "System Administrator | Tata Consultancy Services (TCS)",
      date: "May 2022 – Jan 2025",
      bullets: [
        "Managed complex multi-vendor network environments (Cisco, Aruba, Meraki), resolving critical latency issues and optimizing performance for 500+ users.",
        "Configured and maintained security appliances: Check Point, Cisco ASA, Cisco ACI, and Cisco Secure Firewall. Managed DMVPN connections and firewall rules.",
        "Specialized in Aruba ClearPass configuration for 802.1X authentication; managed IPAM via Infoblox and DNS records (MX, A, CNAME, PTR).",
        "Deployed firewall networks on GCP via GitLab CI/CD pipelines. Utilized SolarWinds, Watchdog, and ServiceNow for proactive monitoring.",
        "Performed load balancing and traffic analysis using F5 BIG-IP. Successfully handled CAB meeting approvals for production changes.",
        "Explored Post-Quantum Cryptography (PQC) algorithms using Qiskit SDK to prepare network infrastructure for quantum resilience."
      ]
    },
    {
      company: "Technical Advance Consultant (Network Engineer) | CSS Corp (Now Movate)",
      date: "Feb 2021 – Apr 2022",
      bullets: [
        "Deployed ClearPass Policy Manager (CPPM) servers on-premises and cloud. Configured RADIUS/TACACS+ protocols for enterprise authentication.",
        "Integrated NAS devices with on-prem and cloud-based Active Directory. Implemented Azure Intune extensions for MDM.",
        "Managed VMware ESXi and HP server troubleshooting. Performed certificate lifecycle management (AD CS) and CPPM upgrades.",
        "Provided network solutions for Aruba ClearPass products; installed extensions and configured IAS services."
      ]
    },
    {
      company: "Network Engineer | Unique Enterprise (Mumbai International Airport Ltd)",
      date: "Aug 2019 – Feb 2021",
      bullets: [
        "Conducted daily security monitoring: spam mail analysis, anomaly detection, and network device change management for airport infrastructure.",
        "Collaborated with multi-vendor teams (Cisco, Juniper, Check Point, FortiGate, Palo Alto) for device installation and license management.",
        "Executed port activations and critical device changes within strict SLA windows. Received appreciation letter for network automation."
      ]
    },
    {
      company: "Network Engineer | Orient Technology",
      date: "Oct 2018 – Aug 2019",
      bullets: [
        "Implemented Static IP subnet allocation for SMB services and VLAN configurations on L2 switches.",
        "Deployed DHCP Option 82 for auto-login features and OTP verification for secure customer logins.",
        "Resolved high-latency issues for gaming clients through comparative device analysis across wireless environments."
      ]
    }
  ],
  projects: [
    "Network Automation Framework: Developed Python scripts utilizing Netmiko and Paramiko to automate OSPF configuration and execute TFTP configuration backups across multi-vendor devices.",
    "Firewall Migration: Successfully migrated legacy Juniper SRX3600 infrastructure to Palo Alto Next-Generation Firewalls.",
    "SNMP Monitoring Tool: Designed a Python-based monitoring tool to track interface status and trigger automated administrator alerts.",
    "IoT Startup Co-Founder: Launched a self-sustaining campus company facilitating microcontroller rentals for engineering students, automating inventory tracking."
  ],
  skills: [
    { category: "Network Security", items: "Check Point, Cisco ASA/Firepower, Palo Alto, FortiGate (NSE 1 & 2), Juniper SRX/Sky ATP, QRadar (SIEM), Cisco ISE." },
    { category: "Networking", items: "BGP, OSPF, MPLS, VRRP, VLANs, STP, TCP/IP, VPN (IPsec, DMVPN), Cisco ACI." },
    { category: "Post-Quantum & Cloud", items: "Qiskit SDK (Terra, Aer), ML-DSA, ML-KEM, AWS, Microsoft Azure, Google Cloud Platform (GCP)." },
    { category: "Automation & Code", items: "Python (Netmiko, Paramiko), Ansible, C/C++, Java, Django, Git/GitHub." },
    { category: "Tools", items: "SolarWinds, ServiceNow, PRTG, Wireshark, GNS3, VMware ESXi, Infoblox (IPAM), F5 Load Balancers." }
  ],
  appreciations: [],
  achievements: [],
  certifications: [
    { name: "ISC2 Certified in Cybersecurity (CC)", details: "#2699643 | Jul 2025 – Jun 2028" },
    { name: "Juniper Networks Certified Associate (JNCIA-Junos)", details: "" },
    { name: "Fortinet Network Security Expert (NSE 1 & 2)", details: "" }
  ],
  extraCurricular: [],
  dissertation: {
    title: "Design and Evaluation of StrongVPN: A Pure Post-Quantum VPN Architecture",
    submittedTo: "University of Surrey",
    bullets: [
      "Designed a full VPN architecture leveraging lattice-based key encapsulation mechanisms (ML-DSA and ML-KEM).",
      "Benchmarked performance against IPsec and WireGuard.",
      "Key Modules: Post-Quantum Cryptography, Network Security, Applied Cryptography."
    ]
  },
  publication: {
    authors: "Siddesh Vilas Pawar, Liqun Chen.",
    title: "\"Design and Evaluation of StrongVPN, a Pure Post-Quantum VPN Architecture.\"",
    journal: "TechRxiv, Nov 2025.",
    doi: "DOI: 10.36227/techrxiv.176127352.21222483/v2",
    keywords: ""
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
        publication: { ...defaultCVData.publication, ...(parsed.publication || {}) }
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
  sec.innerHTML = '<div class="section-header"><h3>Publication</h3></div>';

  [['Authors', 'authors'], ['Title', 'title'], ['Journal', 'journal'], ['DOI', 'doi']].forEach(([label, key]) => {
    const fg = document.createElement('div');
    fg.className = 'field-group';
    fg.innerHTML = '<label>' + escapeHTML(label) + '</label>';
    const input = document.createElement('input');
    input.value = cvData.publication[key];
    input.addEventListener('input', () => { cvData.publication[key] = input.value; markDirty(); renderPreview(); });
    fg.appendChild(input);
    sec.appendChild(fg);
  });

  const fg = document.createElement('div');
  fg.className = 'field-group';
  fg.innerHTML = '<label>Keywords</label>';
  const ta = document.createElement('textarea');
  ta.value = cvData.publication.keywords;
  ta.addEventListener('input', () => { cvData.publication.keywords = ta.value; markDirty(); renderPreview(); });
  fg.appendChild(ta);
  sec.appendChild(fg);
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

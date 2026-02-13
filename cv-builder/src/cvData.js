export const initialCVData = {
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
    {
      institution: "MSc in Cyber Security | University of Surrey, UK",
      date: "Feb 2025 – Feb 2026"
    },
    {
      institution: "B.Tech in Electronics & Telecommunications | K.J. Somaiya College of Engineering, India",
      date: "June 2014 – June 2018"
    }
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
    {
      category: "Network Security",
      items: "Check Point, Cisco ASA/Firepower, Palo Alto, FortiGate (NSE 1 & 2), Juniper SRX/Sky ATP, QRadar (SIEM), Cisco ISE."
    },
    {
      category: "Networking",
      items: "BGP, OSPF, MPLS, VRRP, VLANs, STP, TCP/IP, VPN (IPsec, DMVPN), Cisco ACI."
    },
    {
      category: "Post-Quantum & Cloud",
      items: "Qiskit SDK (Terra, Aer), ML-DSA, ML-KEM, AWS, Microsoft Azure, Google Cloud Platform (GCP)."
    },
    {
      category: "Automation & Code",
      items: "Python (Netmiko, Paramiko), Ansible, C/C++, Java, Django, Git/GitHub."
    },
    {
      category: "Tools",
      items: "SolarWinds, ServiceNow, PRTG, Wireshark, GNS3, VMware ESXi, Infoblox (IPAM), F5 Load Balancers."
    }
  ],
  appreciations: [],
  achievements: [],
  certifications: [
    {
      name: "ISC2 Certified in Cybersecurity (CC)",
      details: "#2699643 | Jul 2025 – Jun 2028"
    },
    {
      name: "Juniper Networks Certified Associate (JNCIA-Junos)",
      details: ""
    },
    {
      name: "Fortinet Network Security Expert (NSE 1 & 2)",
      details: ""
    }
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

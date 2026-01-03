export const initialCVData = {
  personalInfo: {
    name: "Siddesh Vilas Pawar",
    phone: "+44 7554539805",
    email: "siddeshvilaspawar@gmail.com",
    location: "Guildford, UK",
    github: "https://github.com/siddeshpawar",
    linkedin: "https://www.linkedin.com/in/siddesh-pawar04"
  },
  profile: "Security-focused Network Engineer with over 6 years of operational experience and a specialized Master's in Cyber Security (Distinction level track). Expert in deploying and securing enterprise networks (Cisco, Aruba, Meraki) and currently pioneering Post-Quantum Cryptography (PQC) integration for VPN architectures. Proven track record in automating network configurations using Python and ensuring GDPR compliance. Seeking to leverage a unique blend of classical network engineering and future-proof cryptographic research.",
  education: [
    {
      institution: "MSc in Cyber Security | University of Surrey, UK",
      date: "Feb 2025 – Feb 2026 (Expected)"
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
        "Spearheaded the setup of GDPR compliance protocols and security infrastructure for new BP petrol station integrations.",
        "Developed a custom asset management web application using React and Firebase to calculate asset risk and track inventory.",
        "Managed sensitive data protection protocols while overseeing daily operational stock management."
      ]
    },
    {
      company: "System Administrator | Tata Consultancy Services (TCS)",
      date: "May 2022 – Jan 2025",
      bullets: [
        "Managed complex multi-vendor environments (Cisco, Aruba, Meraki), resolving critical latency issues and optimizing network performance.",
        "Configured and maintained security appliances including Check Point, Cisco ASA, and Cisco ACI. Successfully managed DMVPN connections and firewall rules.",
        "Specialized in Aruba ClearPass configuration for 802.1X authentication; managed IPAM via Infoblox and DNS records (MX, A, CNAME).",
        "Deployed firewall networks on GCP via GitLab pipelines. Utilized SolarWinds and ServiceNow for proactive monitoring and incident resolution.",
        "Explored PQC algorithms using Qiskit SDK to prepare network infrastructure for quantum resilience."
      ]
    },
    {
      company: "Technical Advance Consultant (Network Engineer) | CSS Corp (Now Movate)",
      date: "Feb 2021 – April 2022",
      bullets: [
        "Deployed ClearPass Policy Manager (CPPM) servers on-prem and on-cloud. Integrated NAS devices and configured RADIUS/TACACS+ protocols.",
        "Managed VMware ESXi and HP server troubleshooting. Performed certificate lifecycle management (AD CS) and CPPM server upgrades.",
        "Implemented Azure Intune extensions and facilitated seamless integration with Active Directory."
      ]
    },
    {
      company: "Network Engineer | Unique Enterprise (Mumbai International Airport Ltd)",
      date: "Aug 2019 – Feb 2021",
      bullets: [
        "Investigated network-based data for anomalies and conducted spam mail analysis to secure airport infrastructure.",
        "Collaborated with Cisco, Juniper, Check Point, FortiGate, and Palo Alto vendors for device installation and license management.",
        "Executed port activations and critical device changes within strict SLA windows."
      ]
    },
    {
      company: "Network Engineer | Orient Technology",
      date: "Oct 2018 – Aug 2019",
      bullets: [
        "Implemented Static IP subnet allocation and VLAN configurations. Deployed DHCP Option 82 for auto-login features.",
        "Resolved high-latency issues for gaming clients through comparative device analysis and effectively managed complex wireless environments."
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
      details: "#2699643 (2025–2028)"
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

const resources = [
  {
    title: "OWASP Top 10",
    category: "Cheat Sheets",
    description: "A list of the top 10 most critical security risks to web applications.",
    url: "https://owasp.org/www-project-top-ten/"
  },
  {
  title: "Burp Suite",
  category: "Tools",
  description: "An advanced web vulnerability scanner and proxy tool used by penetration testers and security researchers.",
  url: "https://portswigger.net/burp"
  },
  {
  "title": "The Web Application Hacker's Handbook",
  "category": "Books",
  "description": "Comprehensive guide to discovering and exploiting security flaws in web applications.",
  "url": "https://a.co/d/3m8QdkV"
  },
  {
  "title": "Practical Malware Analysis",
  "category": "Books",
  "description": "Hands-on guide to analyzing and disarming malware.",
  "url": "https://a.co/d/eNtZ2yd"
  },
  {
  "title": "The Art of Intrusion: The Real Stories Behind the Exploits of Hackers, Intruders and Deceivers",
  "category": "Books",
  "description": "Real-life stories of hackers and cybercriminals, revealing how they exploit systems and deceive people, written by legendary hacker Kevin Mitnick.",
  "url": "https://a.co/d/aCIoThC"
  },  
  {
  title: "Tenable",
  category: "Tools",
  description: "Creators of Nessus and other solutions for vulnerability management and continuous network monitoring.",
  url: "https://www.tenable.com/products"
  },  
  {
    title: "NIST Cybersecurity Framework",
    category: "Frameworks",
    description: "A guide for improving the cybersecurity posture of an organization.",
    url: "https://www.nist.gov/cyberframework"
  },
  {
    title: "SSL/TLS Best Practices",
    category: "Tools",
    description: "Best practices for configuring SSL and TLS for secure communications.",
    url: "https://www.sslshopper.com/ssl-tls-best-practices.html"
  },
  {
    title: "Password Security Guidelines",
    category: "Cheat Sheets",
    description: "Recommendations for creating and managing secure passwords.",
    url: "https://pages.nist.gov/800-63-3/sp800-63b.html"
  },
  {
    title: "Metasploit Framework",
    category: "Tools",
    description: "An open-source platform for developing, testing, and executing exploits.",
    url: "https://www.metasploit.com/"
  },
  {
    title: "Kali Linux",
    category: "Tools",
    description: "A popular open-source Linux distribution used for penetration testing and security auditing.",
    url: "https://www.kali.org/"
  },
  {
    title: "Security News from The Hacker News",
    category: "News",
    description: "Stay up-to-date with the latest cybersecurity news and updates.",
    url: "https://thehackernews.com/"
  },
  {
    title: "Security Weekly",
    category: "News",
    description: "A podcast and blog providing the latest in security news and analysis.",
    url: "https://securityweekly.com/"
  },
  {
  "title": "MITRE CVE Directory",
  "category": "Vulnerability Databases",
  "description": "The official source for all CVE records, maintained by MITRE. Includes identifiers, details, and references.",
  "url": "https://cve.mitre.org/"
  },
  {
  "title": "NVD (National Vulnerability Database)",
  "category": "Vulnerability Databases",
  "description": "A U.S. government repository of standards-based vulnerability management data, including CVEs and severity scores.",
  "url": "https://nvd.nist.gov/"
  },
  {
  "title": "Bugcrowd",
  "category": "Bug Bounty Hunting",
  "description": "A platform connecting security researchers with companies looking for vulnerability assessments. Great for getting started in bug bounty hunting.",
  "url": "https://www.bugcrowd.com/"
  },
  {
  "title": "HackerOne",
  "category": "Bug Bounty Hunting",
  "description": "A platform for ethical hackers to find and report security vulnerabilities for various companies. Offers great resources for learning and improving bug bounty skills.",
  "url": "https://www.hackerone.com/"
  },
  {
  "title": "Open Bug Bounty",
  "category": "Bug Bounty Hunting",
  "description": "A free and open platform for reporting vulnerabilities, with a focus on web applications. Allows security researchers to report vulnerabilities without prior authorization.",
  "url": "https://www.openbugbounty.org/"
  },
  {
    "title": "CTFtime",
    "category": "CTFs",
    "description": "A central hub for tracking upcoming and ongoing CTF events, team rankings, and competition results.",
    "url": "https://ctftime.org/"
  },
  {
    "title": "PicoCTF",
    "category": "CTFs",
    "description": "A beginner-friendly CTF developed by security experts at Carnegie Mellon. Great for students and newcomers.",
    "url": "https://picoctf.org/"
  },
  {
    "title": "Hack The Box CTFs",
    "category": "CTFs",
    "description": "Offers regular CTF challenges and events, suitable for intermediate to advanced players.",
    "url": "https://www.hackthebox.com/events"
  },
  {
    "title": "OverTheWire: Wargames",
    "category": "CTFs",
    "description": "A set of interactive CTF-like wargames designed to teach Linux, networking, and hacking basics.",
    "url": "https://overthewire.org/wargames/"
  },
  {
    "title": "TryHackMe CTFs",
    "category": "CTFs",
    "description": "Hands-on labs and CTF challenges for beginners to advanced users, covering real-world cybersecurity skills.",
    "url": "https://tryhackme.com/"
  },
  {
    "title": "Hacking: The Art of Exploitation",
    "category": "Books",
    "description": "A deep dive into hacking techniques and the mindset of a hacker, including C programming and memory manipulation.",
    "url": "https://a.co/d/8RFnzyS"
  },
  {
    "title": "The Hacker Playbook 3",
    "category": "Books",
    "description": "A hands-on guide with red teaming strategies, tools, and walkthroughs mimicking real-world scenarios.",
    "url": "https://a.co/d/25rwQDf"
  },
  {
  title: "CompTIA Security+",
  category: "Certifications",
  description: "An entry-level certification that covers foundational cybersecurity skills and is widely recognized across the industry.",
  url: "https://www.comptia.org/certifications/security"
  },
  {
  title: "Certified Ethical Hacker (CEH)",
  category: "Certifications",
  description: "Offered by EC-Council, this certification teaches ethical hacking techniques and tools to assess the security posture of systems.",
  url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
  },
  {
  title: "CISSP (Certified Information Systems Security Professional)",
  category: "Certifications",
  description: "A globally recognized certification for experienced security practitioners, managers, and executives.",
  url: "https://www.isc2.org/Certifications/CISSP"
  },
  {
  title: "Certified Cloud Security Professional (CCSP)",
  category: "Certifications",
  description: "Focuses on cloud security architecture, design, operations, and service orchestration.",
  url: "https://www.isc2.org/Certifications/CCSP"
  },
  {
  title: "GIAC Security Essentials (GSEC)",
  category: "Certifications",
  description: "Designed for professionals looking to demonstrate they understand information security beyond simple terminology and concepts.",
  url: "https://www.giac.org/certifications/security-essentials-gsec/"
  },
  {
  title: "ISO/IEC 27001",
  category: "Frameworks",
  description: "An international standard for managing information security, focusing on risk management and organizational controls.",
  url: "https://www.iso.org/isoiec-27001-information-security.html"
},
{
  title: "CIS Controls",
  category: "Frameworks",
  description: "A set of prioritized cybersecurity best practices developed by the Center for Internet Security to defend against common threats.",
  url: "https://www.cisecurity.org/controls/cis-controls-list"
},
{
  title: "MITRE ATT&CK Framework",
  category: "Frameworks",
  description: "A knowledge base of adversary tactics and techniques used as a foundation for threat modeling and detection.",
  url: "https://attack.mitre.org/"
},
{
  title: "COBIT (Control Objectives for Information and Related Technologies)",
  category: "Frameworks",
  description: "A governance and management framework for enterprise IT that helps align cybersecurity with business goals.",
  url: "https://www.isaca.org/resources/cobit"
},
{
  title: "Zero Trust Architecture",
  category: "Frameworks",
  description: "A security model that requires strict identity verification and least privilege access for every person or device.",
  url: "https://www.cisa.gov/zero-trust-maturity-model"
}
];

const itemsPerPage = 10;
let currentPage = 1;

const categorySelect = document.getElementById('categoryFilter');

// Populate categories
const categories = new Set();
resources.forEach(resource => categories.add(resource.category));
categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
});

function renderResources() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const categoryValue = categorySelect.value;

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchValue) || resource.description.toLowerCase().includes(searchValue);
    const matchesCategory = categoryValue === 'all' || resource.category === categoryValue;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  currentPage = Math.min(currentPage, totalPages || 1);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const resourceList = document.getElementById('resourceList');
  resourceList.innerHTML = '';

  filteredResources.slice(start, end).forEach(resource => {
    const div = document.createElement('div');
    div.className = 'resourceItem';
    div.innerHTML = `
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <a href="${resource.url}" target="_blank">View Resource</a>
    `;
    resourceList.appendChild(div);
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = i === currentPage ? 'active' : '';
    btn.addEventListener('click', () => {
      currentPage = i;
      renderResources();
    });
    pagination.appendChild(btn);
  }
}

document.getElementById('searchInput').addEventListener('input', () => {
  currentPage = 1;
  renderResources();
});
categorySelect.addEventListener('change', () => {
  currentPage = 1;
  renderResources();
});

document.addEventListener('DOMContentLoaded', renderResources);

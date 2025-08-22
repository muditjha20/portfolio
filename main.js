document.addEventListener('DOMContentLoaded', function () {
  const smallScreen = window.matchMedia('(max-width: 480px)').matches;
  const particlesCount = smallScreen ? 40 : 80;
  const linkDistance = smallScreen ? 120 : 150;

  particlesJS('particles-js', {
    particles: {
      number: { value: particlesCount, density: { enable: true, value_area: 800 } },
      color: { value: '#2563eb' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: linkDistance,
        color: '#2563eb',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: smallScreen ? 1.2 : 2,
        direction: 'none',
        random: true,
        out_mode: 'out'
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      }
    }
  });
});

// Project data
const projects = {
  kanban: {
    title: 'Kanban-Board Web App',
    description:
      'Built and deployed a full-stack Kanban board on render by combining a React + TypeScript frontend with an ASP.NET Core Web API backend. Added Firebase Authentication (email/password and Google) handling 100+ tasks and concurrent edits with 0 data loss. Implemented API protection using firebase ID tokens. Improved data sync between frontend and backend by 37%.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'C#', 'PostgreSQL', 'Firebase Authentication', 'Render'],
    achievements: ['Handled 100+ tasks with concurrent edits', 'Zero data loss architecture', '37% improvement in data sync']
  },
  book: {
    title: 'Book Recommendation API',
    description:
      'Collaborated with Britney Nguyen (Google STEP Intern 2025) to build a backend RESTful API in modern C++ using the Crow framework. The system manages users, books, reviews, and personalized recommendations. Applied unit testing to cover 100% of the methods.',
    technologies: ['C++', 'Crow Framework', 'HTTP', 'JSON', 'Unit Testing (docTest)', 'SDLC'],
    achievements: ['100% unit test coverage', 'RESTful API architecture', 'Personalized recommendation engine']
  },
  dna: {
    title: 'DNA Subsequence Finder',
    description:
      'Developed a DNA sequence alignment tool in Java using the Needleman-Wunsch algorithm to compare biological sequences with customizable scoring matrices and per-nucleotide gap penalties. Implemented dynamic programming for global alignment and achieved a 100% accuracy rate.',
    technologies: ['Java', 'Dynamic Programming', 'File I/O', 'Needleman-Wunsch Algorithm', 'Data Parsing'],
    achievements: ['100% accuracy rate', 'Customizable scoring matrices', 'Global alignment implementation']
  },
  kernel: {
    title: 'Kernel Canary++',
    description:
      "Real-time anomaly detection engine for system logs using AutoML and Isolation Forest. Processed over 100,000 structured HDFS log entries. Integrated Microsoft's NNI framework for auto-tuning hyperparameters, achieving an F1-score of 0.926 in under 2 minutes for 20 trials.",
    technologies: ['Python', 'pandas', 'scikit-learn', 'Microsoft NNI', 'Isolation Forest'],
    achievements: ['0.926 F1-score', 'Processed 100k+ log entries', '2-minute AutoML tuning']
  },
  route: {
    title: 'Multi-Stop Route Optimizer',
    description:
      'Real-time route optimization app that computes optimal visiting order for multiple stops using geocoding, OSRM travel times, and dynamic programming (Held–Karp). Integrated with OpenStreetMap Nominatim for geocoding and OSRM for real road travel times.',
    technologies: ['Python', 'Streamlit', 'OpenStreetMap', 'OSRM', 'Dynamic Programming'],
    achievements: ['30-40% travel time reduction', 'Handles up to 15 stops optimally', 'Real-time geocoding and routing']
  },
  shell: {
    title: 'MyShell',
    description:
      'A Unix-like shell written in C that supports command execution, piping, and output redirection using low-level POSIX system calls like fork(), execv(), pipe(), and dup2(). Tested for 50+ commands, each executing in <1 second.',
    technologies: ['C', 'POSIX', 'System Calls', 'fork', 'execv', 'pipe', 'dup2'],
    achievements: ['<1 second execution time', 'Tested with 50+ commands', 'Piping and output redirection']
  },
  azure: {
    title: 'Microsoft Azure Talent Change Predictor',
    description:
      'End-to-end ML pipeline predicting job-seeking behavior from 19,158 real profiles. Engineered features and switched from logistic regression to XGBoost, exposed via a Flask API, and explained model decisions with SHAP.',
    technologies: ['Python', 'XGBoost', 'Flask', 'Azure ML', 'SHAP', 'scikit-learn', 'Pandas'],
    achievements: ['67.6% accuracy', '+112% F1 over baseline', '+185% recall of switchers (0.24 → 0.68)']
  },
  chatbot: {
    title: 'AI Powered PDF Q&A Chatbot',
    description:
      'Long-document Q&A over 100+ page PDFs using text chunking + embeddings + semantic search. Stores vectors in Astra DB (Cassandra) and uses an LLM to synthesize precise, grounded answers.',
    technologies: ['Python', 'LangChain', 'OpenAI GPT-4.1 Mini', 'Astra DB (Cassandra)', 'Semantic Search'],
    achievements: ['85% answer accuracy (manual eval)', 'Handles 100+ page PDFs', 'Interactive real-time Q&A']
  },
  hull: {
    title: 'Convex Hull Visualizer',
    description:
      'Interactive Java Swing tool that visualizes the Jarvis March (gift wrapping) algorithm step-by-step for 2D point sets, focusing on clarity and performance.',
    technologies: ['Java', 'Swing', 'Jarvis March'],
    achievements: ['31% faster execution after optimizations', '0 graphical lag on 100+ points', 'Educational step visualization']
  },
  leafy: {
    title: 'LeafyLink',
    description:
      'Static plant marketplace integrating a public plant API. Led a team of four and deployed on Firebase with aggressive asset caching for snappy loads.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Public APIs'],
    achievements: ['<1.2s cold start loads', 'Team of 4', 'Seamless API integration']
  },
  rpg: {
    title: 'RPG Super Adventure Game',
    description:
      'Turn-based RPG in C# WinForms built to practice OOP: 14 classes modeling player, monsters, items, quests, and combat flow.',
    technologies: ['C#', 'WinForms', 'OOP'],
    achievements: ['14-class OOP architecture', 'Combat, quests, items implemented', 'Clean separation of concerns']
  }
};

// DOM elements
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const projectFilters = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card');
const viewDetailsBtns = document.querySelectorAll('.view-details');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const contactForm = document.getElementById('contactForm');
const header = document.querySelector('header');
const body = document.body;

// Helpers for mobile menu
function openMenu() {
  navLinks.classList.add('active');
  body.classList.add('no-scroll');
  menuBtn.setAttribute('aria-expanded', 'true');
}
function closeMenu() {
  navLinks.classList.remove('active');
  body.classList.remove('no-scroll');
  menuBtn.setAttribute('aria-expanded', 'false');
}
function toggleMenu() {
  if (navLinks.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Menu toggle
menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Close on Escape (menu + modal)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
    if (modal.classList.contains('show')) {
      modal.classList.remove('show');
      body.classList.remove('no-scroll');
    }
  }
});

// Close menu when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Project filtering
projectFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    projectFilters.forEach((f) => f.classList.remove('active'));
    filter.classList.add('active');

    const filterValue = filter.getAttribute('data-filter');

    if (filterValue === 'all') {
      projectCards.forEach((card) => {
        card.style.display = 'block';
      });
    } else {
      projectCards.forEach((card) => {
        if (card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
});

// Project modal
viewDetailsBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectId = btn.getAttribute('data-project');
    const project = projects[projectId];

    if (project) {
      modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <h3>Technologies Used</h3>
        <div class="project-tech">
          ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <h3>Key Achievements</h3>
        <ul>
          ${project.achievements.map((achievement) => `<li>${achievement}</li>`).join('')}
        </ul>
      `;

      modal.classList.add('show');
      body.classList.add('no-scroll');
    }
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  body.classList.remove('no-scroll');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    body.classList.remove('no-scroll');
  }
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// Animation on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll('.project-card').forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Observe sections for animation
document.querySelectorAll('section').forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(section);
});

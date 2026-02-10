import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">AK</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hi there! 👋</div>
            <h1>Anand Karna</h1>
            <div className="title">Web Developer</div>
            <p className="tagline">
              Web Development Intern at Sithafal Technologies.
            </p>
            <a href="#projects" className="cta-button">View My Work</a>
          </div>
          <div className="hero-image">
            <div className="profile-photo">
              <div className="profile-photo-inner">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <p className="bio">
            I'm a passionate Full Stack Developer with expertise in building modern web applications. 
            With a strong foundation in both frontend and backend technologies, I love turning complex 
            problems into elegant solutions. When I'm not coding, you'll find me exploring new technologies, 
            contributing to open-source projects, or sharing knowledge with the developer community.
          </p>

          <div className="skills-container">
            <div className="skill-badge">
              <div className="skill-icon">⚛️</div>
              <div>React</div>
            </div>
            <div className="skill-badge">
              <div className="skill-icon">🟢</div>
              <div>Node.js</div>
            </div>
            <div className="skill-badge">
              <div className="skill-icon">🐍</div>
              <div>Python</div>
            </div>
            <div className="skill-badge">
              <div className="skill-icon">💾</div>
              <div>MongoDB</div>
            </div>
            <div className="skill-badge">
              <div className="skill-icon">🗄️</div>
              <div>PostgreSQL</div>
            </div>
            <div className="skill-badge">
              <div className="skill-icon">🔧</div>
              <div>TypeScript</div>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2025 - Present</div>
              <div className="timeline-content glass-card">
                <h3>Junior Developer</h3>
                <p>Started my journey in web development, building responsive user interfaces and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card glass-card">
            <h3>E-Commerce Platform</h3>
            <p>A full-featured e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard.</p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Stripe</span>
            </div>
            <a href="#" className="project-link">View Project →</a>
          </div>

          <div className="project-card glass-card">
            <h3>Task Management System</h3>
            <p>Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.</p>
            <div className="tech-stack">
              <span className="tech-tag">Vue.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Socket.io</span>
            </div>
            <a href="#" className="project-link">View Project →</a>
          </div>

          <div className="project-card glass-card">
            <h3>AI-Powered Analytics</h3>
            <p>Machine learning-based analytics platform that provides predictive insights and automated reporting for businesses.</p>
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">TensorFlow</span>
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">React</span>
            </div>
            <a href="#" className="project-link">View Project →</a>
          </div>

          <div className="project-card glass-card">
            <h3>Social Media Dashboard</h3>
            <p>Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.</p>
            <div className="tech-stack">
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">GraphQL</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">AWS</span>
            </div>
            <a href="#" className="project-link">View Project →</a>
          </div>

          <div className="project-card glass-card">
            <h3>Fitness Tracking App</h3>
            <p>Mobile-first fitness application with workout tracking, nutrition planning, and progress visualization.</p>
            <div className="tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">Chart.js</span>
            </div>
            <a href="#" className="project-link">View Project →</a>
          </div>

          <div className="project-card glass-card">
            <h3>Blog CMS Platform</h3>
            <p>Content management system with markdown support, SEO optimization, and multi-author collaboration.</p>
            <div className="tech-stack">
              <span className="tech-tag">Gatsby</span>
              <span className="tech-tag">Contentful</span>
              <span className="tech-tag">Netlify</span>
              <span className="tech-tag">GraphQL</span>
            </div>
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog">
        <h2 className="section-title">Latest Articles</h2>
        <div className="blog-grid">
          <div className="blog-card glass-card">
            <h3>Building Scalable APIs with Node.js</h3>
            <div className="blog-date">December 15, 2025</div>
            <p>Learn best practices for designing and implementing scalable RESTful APIs using Node.js and Express framework.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="blog-card glass-card">
            <h3>React Performance Optimization</h3>
            <div className="blog-date">December 10, 2025</div>
            <p>Deep dive into React performance optimization techniques including memoization, code splitting, and lazy loading.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="blog-card glass-card">
            <h3>Microservices Architecture Guide</h3>
            <div className="blog-date">December 5, 2025</div>
            <p>A comprehensive guide to microservices architecture, including when to use it and common pitfalls to avoid.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="blog-card glass-card">
            <h3>Docker Best Practices 2025</h3>
            <div className="blog-date">November 28, 2025</div>
            <p>Essential Docker best practices for containerizing applications in production environments.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contacts />

      <p>© {new Date().getFullYear()} Anand Karna. All rights reserved.</p>
    </div>
  );
}

export default App;
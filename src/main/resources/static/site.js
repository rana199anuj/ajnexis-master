// GRC Technologies – site.js
// Style: web.ncaitnoida.com inspired
// Dark theme, cyan/blue gradient, glassmorphism, NO calculator

(function () {
  "use strict";

  // ─── CONFIG ────────────────────────────────────────────────────────────────
  const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

  const CONTACT_EMAIL    = "contact@grc-technologies.com";
  const CONTACT_PHONE    = "+91-XXXXXXXXXX";
  const CONTACT_LOCATION = "India";
  const WHATSAPP_NUMBER  = "91XXXXXXXXXX";

  // ─── MOUNT ─────────────────────────────────────────────────────────────────
  const root = document.getElementById("root");
  root.innerHTML = buildPage();
  attachEvents();
  initScrollReveal();
  animateHero();
  animateCounters();

  // ────────────────────────────────────────────────────────────────────────────
  // PAGE HTML
  // ────────────────────────────────────────────────────────────────────────────
  function buildPage() {
    return `
      ${buildBlobs()}
      ${buildNav()}
      ${buildHero()}
      ${buildStats()}
      ${buildServices()}
      ${buildAbout()}
      ${buildProcess()}
      ${buildTestimonials()}
      ${buildContact()}
      ${buildFooter()}
      ${buildWA()}
    `;
  }

  // ─── BACKGROUND BLOBS ──────────────────────────────────────────────────────
  function buildBlobs() {
    return `
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="blob blob-4"></div>
    `;
  }

  // ─── NAVIGATION ────────────────────────────────────────────────────────────
  function buildNav() {
    return `
    <header id="site-header">
      <div class="container header-inner">
        <a href="#home" class="logo-text">GRC Technologies</a>
        <button id="menu-btn" class="menu-btn" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <nav id="site-nav">
          <a href="#home"          class="nav-link">Home</a>
          <a href="#services"      class="nav-link">Services</a>
          <a href="#about"         class="nav-link">About</a>
          <a href="#process"       class="nav-link">Process</a>
          <a href="#testimonials"  class="nav-link">Clients</a>
          <a href="#contact"       class="nav-link">Contact</a>
          <a href="#contact"       class="btn-nav-cta">
            <i class="fas fa-paper-plane"></i> Get Started
          </a>
        </nav>
      </div>
    </header>`;
  }

  // ─── HERO ───────────────────────────────────────────────────────────────────
  function buildHero() {
    return `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-badge">
          <span class="spark">✦</span> PREMIUM JAVA &amp; CLOUD SOLUTIONS
        </div>
        <h1 class="hero-title" id="hero-title">
          <span class="line1">Transform Your</span>
          <span class="line2">Business Vision</span>
        </h1>
        <p class="hero-sub" id="hero-sub">
          GRC Technologies crafts high-performance Java solutions that drive innovation,
          accelerate growth, and transform your business into an industry leader.
        </p>
        <div class="hero-btns" id="hero-btns">
          <a href="#contact" class="btn-hero-primary">
            Start Your Project <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#services" class="btn-hero-outline">
            View Services <i class="fas fa-bolt"></i>
          </a>
        </div>
        <div class="hero-trust-row" id="hero-trust">
          <span class="trust-pill"><i class="fas fa-shield-alt"></i> Secure &amp; Reliable</span>
          <span class="trust-pill"><i class="fas fa-star"></i> 5-Star Rated</span>
          <span class="trust-pill"><i class="fas fa-clock"></i> 24/7 Support</span>
          <span class="trust-pill"><i class="fas fa-check-circle"></i> On-Time Delivery</span>
        </div>
      </div>
    </section>`;
  }

  // ─── STATS ──────────────────────────────────────────────────────────────────
  function buildStats() {
    return `
    <section id="stats">
      <div class="container">
        <div class="stats-grid">
          ${statCard("fas fa-code",          "50",  "+",  "Projects Completed")}
          ${statCard("fas fa-smile",         "30",  "+",  "Happy Clients")}
          ${statCard("fas fa-calendar-alt",  "5",   "+",  "Years Experience")}
          ${statCard("fas fa-headset",       "24",  "/7", "Support Hours")}
        </div>
      </div>
    </section>`;
  }

  function statCard(icon, num, suf, label) {
    return `
    <div class="stat-card reveal">
      <span class="stat-icon-wrap"><i class="${icon}"></i></span>
      <div class="stat-num" data-target="${num}" data-suffix="${suf}">0</div>
      <div class="stat-label">${label}</div>
    </div>`;
  }

  // ─── SERVICES ───────────────────────────────────────────────────────────────
  function buildServices() {
    return `
    <section id="services" class="section">
      <div class="container">
        <div class="text-center reveal">
          <div class="sec-badge"><i class="fas fa-star"></i> OUR EXPERTISE</div>
          <h2 class="sec-title">Premium <span class="grad">Services</span></h2>
          <p class="sec-desc">
            We deliver cutting-edge Java &amp; cloud solutions that propel your business forward
            with innovation, precision, and unmatched quality.
          </p>
        </div>
        <div class="services-grid">
          ${svcCard(
            "grad-cyan","☕",
            "Java Development",
            "Enterprise-grade Java &amp; Spring Boot applications built for performance, scalability, and long-term maintainability.",
            ["Spring Boot &amp; REST APIs","Microservices Architecture","Spring Security","JPA / Hibernate","Maven / Gradle Build","API Gateway"],
            "reveal-d1"
          )}
          ${svcCard(
            "grad-purple","🛡️",
            "Application Support",
            "24/7 production monitoring, bug fixing, incident management, and SLA-driven support for business-critical systems.",
            ["24/7 Monitoring","Bug Fixing &amp; Patches","Performance Tuning","Incident Response","Version Upgrades","SLA Management"],
            "reveal-d2"
          )}
          ${svcCard(
            "grad-green","⚙️",
            "DevOps &amp; CI/CD",
            "End-to-end DevOps automation — from pipeline setup to container orchestration — for faster, safer deployments.",
            ["Docker &amp; Kubernetes","Jenkins / GitHub Actions","Infrastructure as Code","Automated Testing","Release Management","GitOps Workflows"],
            "reveal-d1"
          )}
          ${svcCard(
            "grad-teal","☁️",
            "Cloud Solutions",
            "Cloud migration, architecture design, and cost optimization on AWS, Azure &amp; GCP for modern, resilient infrastructure.",
            ["AWS / Azure / GCP","Cloud Migration","Serverless Architecture","Cost Optimization","High Availability","Security &amp; Compliance"],
            "reveal-d2"
          )}
          ${svcCard(
            "grad-orange","🚀",
            "New Project Delivery",
            "Full-cycle delivery from requirements to go-live — we manage design, build, test, and deployment end to end.",
            ["Requirement Analysis","System Architecture","Agile Development","QA &amp; Testing","Go-Live Support","Documentation"],
            "reveal-d1"
          )}
          ${svcCard(
            "grad-indigo","💡",
            "Architecture Consulting",
            "Expert guidance on technology roadmaps, system design reviews, legacy modernization, and optimization strategies.",
            ["Technology Roadmap","System Design Review","Legacy Modernization","Code Reviews","Performance Audit","Best Practices"],
            "reveal-d2"
          )}
        </div>
      </div>
    </section>`;
  }

  function svcCard(iconGrad, icon, title, desc, features, delay) {
    const featureHTML = features.map(f =>
      `<span class="svc-feat"><i class="fas fa-circle-check"></i> ${f}</span>`
    ).join("");
    return `
    <div class="svc-card ${delay}">
      <div class="svc-icon-box ${iconGrad}">${icon}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="svc-features">${featureHTML}</div>
    </div>`;
  }

  // ─── ABOUT ──────────────────────────────────────────────────────────────────
  function buildAbout() {
    return `
    <section id="about" class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image-area reveal">
            <div class="about-img-card">
              <span class="about-icon-big"><i class="fas fa-laptop-code"></i></span>
              <h3>GRC Technologies</h3>
              <p>Building Tomorrow's Solutions Today</p>
            </div>
            <div class="ab-float-badge">
              <strong>5+</strong>
              <span>Years in IT</span>
            </div>
          </div>

          <div class="about-text reveal-d2">
            <div class="sec-badge"><i class="fas fa-building"></i> ABOUT GRC TECHNOLOGIES</div>
            <h2 class="sec-title">
              Pioneering <span class="grad">Digital Excellence</span>
            </h2>
            <p>
              GRC Technologies is a India-based IT services firm specializing in Java development,
              Spring Boot microservices, cloud infrastructure, and enterprise application support.
              Since our founding, we've been at the forefront of digital transformation — empowering
              businesses with reliable, scalable, and high-performance technology solutions.
            </p>
            <div class="about-features">
              <div class="about-feat">
                <div class="about-feat-icon"><i class="fas fa-check"></i></div>
                Expert team of Java &amp; Cloud engineers with deep domain knowledge
              </div>
              <div class="about-feat">
                <div class="about-feat-icon"><i class="fas fa-check"></i></div>
                Agile-Scrum delivery with full transparency and weekly reporting
              </div>
              <div class="about-feat">
                <div class="about-feat-icon"><i class="fas fa-check"></i></div>
                24/7 production support with guaranteed SLA response times
              </div>
              <div class="about-feat">
                <div class="about-feat-icon"><i class="fas fa-check"></i></div>
                ISO-aligned quality processes and secure development practices
              </div>
            </div>
            <div class="about-mini-grid">
              <div class="mini-card">
                <div class="mini-card-icon grad-cyan" style="color:#fff;font-size:1.1rem;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;">
                  <i class="fas fa-bullseye"></i>
                </div>
                <h4>Mission Driven</h4>
                <p>Your business goals are our primary focus</p>
              </div>
              <div class="mini-card">
                <div class="mini-card-icon grad-purple" style="color:#fff;font-size:1.1rem;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <h4>Innovation First</h4>
                <p>Cutting-edge tech choices for future-proof solutions</p>
              </div>
              <div class="mini-card">
                <div class="mini-card-icon grad-green" style="color:#fff;font-size:1.1rem;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;">
                  <i class="fas fa-handshake"></i>
                </div>
                <h4>Client Focused</h4>
                <p>Long-term partnerships built on trust and results</p>
              </div>
              <div class="mini-card">
                <div class="mini-card-icon grad-orange" style="color:#fff;font-size:1.1rem;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h4>Quality Assured</h4>
                <p>Rigorous testing and code review standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  // ─── PROCESS ────────────────────────────────────────────────────────────────
  function buildProcess() {
    return `
    <section id="process" class="section">
      <div class="container">
        <div class="text-center reveal">
          <div class="sec-badge"><i class="fas fa-route"></i> HOW WE WORK</div>
          <h2 class="sec-title">Our Simple <span class="grad">4-Step Process</span></h2>
          <p class="sec-desc">
            A clear, transparent workflow from first call to go-live — designed to deliver results consistently.
          </p>
        </div>
        <div class="process-grid">
          ${processCard("01","💬","Discovery","We deep-dive into your business goals, requirements, and technology environment.","reveal-d1")}
          ${processCard("02","📐","Strategy","Senior engineers design the optimal architecture and delivery roadmap.","reveal-d2")}
          ${processCard("03","🛠️","Development","Agile sprints, rigorous code reviews, automated testing, and QA.","reveal-d3")}
          ${processCard("04","🚀","Delivery","Smooth go-live, CI/CD automation, and ongoing 24/7 post-launch support.","reveal-d1")}
        </div>
      </div>
    </section>`;
  }

  function processCard(num, icon, title, desc, delay) {
    return `
    <div class="process-card ${delay}">
      <div class="process-step-num">${num}</div>
      <span class="process-icon">${icon}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>`;
  }

  // ─── TESTIMONIALS ────────────────────────────────────────────────────────────
  function buildTestimonials() {
    return `
    <section id="testimonials" class="section">
      <div class="container">
        <div class="text-center reveal">
          <div class="sec-badge"><i class="fas fa-comments"></i> CLIENT REVIEWS</div>
          <h2 class="sec-title">What <span class="grad">Clients Say</span></h2>
        </div>
        <div class="testimonials-grid">
          ${testiCard(
            "★★★★★",
            '"GRC Technologies transformed our legacy system into a high-performance Spring Boot microservices architecture. Quality and communication were outstanding."',
            "R","av-blue","Rajesh Sharma","CTO, FinTech Solutions India"
          )}
          ${testiCard(
            "★★★★★",
            '"Professional, reliable, and incredibly talented team. They delivered our cloud migration on time, within budget, and exceeded our performance targets."',
            "P","av-purple","Priya Mehta","Founder, DataCloud Startup"
          )}
          ${testiCard(
            "★★★★★",
            '"Outstanding Java expertise and proactive support. GRC\'s team understood our vision perfectly and built exactly what our enterprise needed."',
            "A","av-green","Amit Kumar","Product Manager, ERP Innovations"
          )}
        </div>
      </div>
    </section>`;
  }

  function testiCard(stars, text, initials, avClass, name, role) {
    return `
    <div class="testi-card reveal">
      <div class="testi-stars">${stars}</div>
      <p class="testi-text">${text}</p>
      <div class="testi-author">
        <div class="testi-avatar ${avClass}">${initials}</div>
        <div>
          <div class="testi-name">${name}</div>
          <div class="testi-role">${role}</div>
        </div>
      </div>
    </div>`;
  }

  // ─── CONTACT ─────────────────────────────────────────────────────────────────
  function buildContact() {
    return `
    <section id="contact" class="section">
      <div class="container">
        <div class="text-center reveal">
          <div class="sec-badge"><i class="fas fa-satellite-dish"></i> LET'S CONNECT</div>
          <h2 class="sec-title">Start Your <span class="grad">Journey</span></h2>
          <p class="sec-desc">
            Ready to build something great? Reach out and our team will respond within 24 hours.
          </p>
        </div>
        <div class="contact-layout">
          <div class="contact-info reveal">
            <div class="contact-items">
              <a href="mailto:${CONTACT_EMAIL}" class="contact-item">
                <div class="contact-item-icon ic-cyan"><i class="fas fa-envelope"></i></div>
                <div><strong>Email</strong><span>${CONTACT_EMAIL}</span></div>
              </a>
              <a href="tel:${CONTACT_PHONE.replace(/[^+\d]/g,'')}" class="contact-item">
                <div class="contact-item-icon ic-purple"><i class="fas fa-phone-alt"></i></div>
                <div><strong>Phone</strong><span>${CONTACT_PHONE}</span></div>
              </a>
              <div class="contact-item">
                <div class="contact-item-icon ic-green"><i class="fas fa-map-marker-alt"></i></div>
                <div><strong>Location</strong><span>${CONTACT_LOCATION}</span></div>
              </div>
              <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="contact-item">
                <div class="contact-item-icon ic-wa"><i class="fab fa-whatsapp"></i></div>
                <div><strong>WhatsApp</strong><span>Chat with us instantly</span></div>
              </a>
            </div>
          </div>

          <div class="contact-form-box reveal-d2">
            <p class="form-title">📋 Send Us a Message</p>
            <form id="contact-form" class="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="cf-name">Full Name *</label>
                  <input id="cf-name" type="text" name="name" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label for="cf-email">Email *</label>
                  <input id="cf-email" type="email" name="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="cf-phone">Phone</label>
                  <input id="cf-phone" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div class="form-group">
                  <label for="cf-service">Service *</label>
                  <select id="cf-service" name="service" required>
                    <option value="" disabled selected>Select a service…</option>
                    <option>Java Development</option>
                    <option>Application Support</option>
                    <option>DevOps &amp; CI/CD</option>
                    <option>Cloud Solutions</option>
                    <option>New Project Delivery</option>
                    <option>Architecture Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="cf-msg">Message *</label>
                <textarea id="cf-msg" name="message" rows="4"
                  placeholder="Tell us about your project…" required></textarea>
              </div>
              <div id="form-feedback" class="form-feedback" aria-live="polite"></div>
              <button type="submit" id="submit-btn" class="btn-send">
                <span id="btn-text"><i class="fas fa-paper-plane"></i> Send Message</span>
                <span id="btn-loader" class="hidden">⏳ Sending…</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>`;
  }

  // ─── FOOTER ──────────────────────────────────────────────────────────────────
  function buildFooter() {
    return `
    <footer>
      <div class="container">
        <div class="footer-inner">
          <p class="footer-logo">GRC Technologies</p>
          <p class="footer-tagline">
            Transforming businesses through innovative Java &amp; cloud technology solutions. Your success is our mission.
          </p>
          <div class="footer-links-row">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Clients</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="footer-social">
            <a href="#" class="soc-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="soc-btn" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
            <a href="#" class="soc-btn" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}" class="soc-btn" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          </div>
          <p class="footer-copy">
            © ${new Date().getFullYear()} GRC Technologies. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>`;
  }

  // ─── WHATSAPP FLOAT ───────────────────────────────────────────────────────────
  function buildWA() {
    return `
    <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener" class="wa-float" aria-label="Chat on WhatsApp">
      <span class="wa-tooltip">Chat on WhatsApp!</span>
      <span class="wa-float-btn"><i class="fab fa-whatsapp"></i></span>
    </a>`;
  }

  // ─── EVENTS ──────────────────────────────────────────────────────────────────
  function attachEvents() {
    // Mobile nav toggle
    document.getElementById("menu-btn").addEventListener("click", () => {
      document.getElementById("site-nav").classList.toggle("open");
    });
    document.querySelectorAll(".nav-link, .btn-nav-cta").forEach(link => {
      link.addEventListener("click", () => {
        document.getElementById("site-nav").classList.remove("open");
      });
    });

    // Sticky header
    window.addEventListener("scroll", () => {
      document.getElementById("site-header").classList.toggle("scrolled", window.scrollY > 30);
    });

    // Contact form
    document.getElementById("contact-form").addEventListener("submit", handleForm);
  }

  // ─── CONTACT FORM HANDLER ──────────────────────────────────────────────────
  async function handleForm(e) {
    e.preventDefault();
    const form     = e.target;
    const feedback = document.getElementById("form-feedback");
    const btnText  = document.getElementById("btn-text");
    const loader   = document.getElementById("btn-loader");
    const btn      = document.getElementById("submit-btn");

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const msg     = form.message.value.trim();
    const service = form.service.value;

    if (!name || !email || !msg || !service) {
      setFeedback(feedback, "error", "⚠️ Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback(feedback, "error", "⚠️ Please enter a valid email address.");
      return;
    }

    setFeedback(feedback, "", "");
    btnText.classList.add("hidden");
    loader.classList.remove("hidden");
    btn.disabled = true;

    try {
      if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
        await new Promise(r => setTimeout(r, 1400));
        setFeedback(feedback, "success",
          "✅ Message received! We'll contact you within 24 hours. (Set up EmailJS in site.js for real emails.)");
        form.reset();
      } else {
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          from_name: name, from_email: email, service, message: msg
        }, EMAILJS_PUBLIC_KEY);
        setFeedback(feedback, "success", "✅ Message sent! We'll get back to you shortly.");
        form.reset();
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setFeedback(feedback, "error", "❌ Failed to send. Email us directly at " + CONTACT_EMAIL);
    } finally {
      btnText.classList.remove("hidden");
      loader.classList.add("hidden");
      btn.disabled = false;
    }
  }

  function setFeedback(el, type, msg) {
    el.className = "form-feedback";
    el.textContent = msg;
    if (type) el.classList.add("fb-" + type);
  }

  // ─── HERO ANIMATION ───────────────────────────────────────────────────────────
  function animateHero() {
    setTimeout(() => {
      const t = document.getElementById("hero-title");
      const s = document.getElementById("hero-sub");
      const b = document.getElementById("hero-btns");
      const r = document.getElementById("hero-trust");
      if (t) t.classList.add("visible");
      setTimeout(() => { if (s) s.classList.add("visible"); }, 200);
      setTimeout(() => { if (b) b.classList.add("visible"); }, 400);
      setTimeout(() => { if (r) r.classList.add("visible"); }, 600);
    }, 100);
  }

  // ─── COUNTER ANIMATION ────────────────────────────────────────────────────────
  function animateCounters() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        let cur = 0;
        const step = target / 60;
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(t); }
          el.textContent = Math.floor(cur) + suffix;
        }, 22);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll(".stat-num[data-target]").forEach(el => obs.observe(el));
  }

  // ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
  function initScrollReveal() {
    const selector = ".reveal, .reveal-d1, .reveal-d2, .reveal-d3";
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(selector).forEach(el => obs.observe(el));
  }

})();

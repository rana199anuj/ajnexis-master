// Ajnexis Site - Fixed Contact Us Page
// Uses vanilla JS + CSS animations (no framework dependency)

(function () {
  "use strict";

  // ─── EMAIL CONFIG ──────────────────────────────────────────────────────────
  // IMPORTANT: Replace these with your real EmailJS credentials from
  //            https://dashboard.emailjs.com/admin
  const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_xxxxxx"
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xxxxxx"
  const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abcDEF123456"

  // ─── CONTACT INFO ──────────────────────────────────────────────────────────
  const CONTACT_EMAIL = "contact@ajnexis.com";
  const CONTACT_PHONE = "+91-XXXXXXXXXX"; // Replace with real number
  const CONTACT_LOCATION = "India";

  // ─── RENDER ────────────────────────────────────────────────────────────────
  const root = document.getElementById("root");
  root.innerHTML = buildHTML();
  attachEvents();
  initScrollAnimations();

  function buildHTML() {
    return `
    <div id="app">
      <!-- HEADER -->
      <header id="site-header">
        <div class="container header-inner">
          <a href="#home" class="logo">Ajnexis</a>
          <button id="menu-btn" class="menu-btn" aria-label="Toggle menu">☰</button>
          <nav id="site-nav">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#contact" class="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <!-- HERO -->
      <section id="home" class="hero">
        <div class="hero-bg"></div>
        <div class="container hero-content fade-in-up">
          <h1 class="hero-title">Ajnexis Technologies</h1>
          <p class="hero-subtitle">Next-Gen Development &amp; Support Solutions</p>
          <a href="#contact" class="btn-primary">Get In Touch</a>
        </div>
        <div class="hero-scroll-hint">↓</div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="section section-light">
        <div class="container text-center reveal">
          <span class="section-tag">Who We Are</span>
          <h2 class="section-title">About Us</h2>
          <p class="section-desc">
            Ajnexis Technologies specializes in Java development, application support,
            and scalable software solutions. We partner with businesses to deliver
            high-performance, reliable systems tailored to their needs.
          </p>
          <div class="stats-row">
            <div class="stat-item reveal-delay-1"><strong>5+</strong><span>Years Experience</span></div>
            <div class="stat-item reveal-delay-2"><strong>50+</strong><span>Projects Delivered</span></div>
            <div class="stat-item reveal-delay-3"><strong>100%</strong><span>Client Satisfaction</span></div>
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section id="services" class="section section-dark">
        <div class="container">
          <div class="text-center reveal">
            <span class="section-tag">What We Do</span>
            <h2 class="section-title">Our Services</h2>
          </div>
          <div class="services-grid">
            ${buildServiceCard("☕", "Java Development", "Spring Boot, Microservices, REST APIs", "reveal-delay-1")}
            ${buildServiceCard("🛡️", "Application Support", "Bug fixing, monitoring, maintenance", "reveal-delay-2")}
            ${buildServiceCard("⚙️", "Admin Support", "Server management, CI/CD pipelines", "reveal-delay-3")}
            ${buildServiceCard("🚀", "New Project Delivery", "End-to-end project delivery", "reveal-delay-1")}
            ${buildServiceCard("🐳", "DevOps", "Docker, Kubernetes, cloud infrastructure", "reveal-delay-2")}
            ${buildServiceCard("💡", "Consulting", "Architecture &amp; optimization", "reveal-delay-3")}
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="section section-contact">
        <div class="container">
          <div class="contact-grid">
            <!-- Left: Info -->
            <div class="contact-info reveal">
              <span class="section-tag">Reach Out</span>
              <h2 class="contact-title">Contact Us</h2>
              <p class="contact-desc">
                Have a project in mind or need support? Reach out — our team will get back to you promptly.
              </p>
              <div class="contact-items">
                <a href="mailto:${CONTACT_EMAIL}" class="contact-item">
                  <span class="contact-icon">📧</span>
                  <span>${CONTACT_EMAIL}</span>
                </a>
                <a href="tel:${CONTACT_PHONE.replace(/[^+\d]/g, '')}" class="contact-item">
                  <span class="contact-icon">📞</span>
                  <span>${CONTACT_PHONE}</span>
                </a>
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <span>${CONTACT_LOCATION}</span>
                </div>
              </div>
            </div>

            <!-- Right: Form -->
            <div class="contact-form-wrap reveal-delay-2">
              <form id="contact-form" class="contact-form" novalidate>
                <div class="form-group">
                  <label for="cf-name">Your Name</label>
                  <input id="cf-name" type="text" name="name" placeholder="e.g. Ravi Kumar" autocomplete="name" required />
                </div>
                <div class="form-group">
                  <label for="cf-email">Email Address</label>
                  <input id="cf-email" type="email" name="email" placeholder="you@example.com" autocomplete="email" required />
                </div>
                <div class="form-group">
                  <label for="cf-subject">Subject</label>
                  <input id="cf-subject" type="text" name="subject" placeholder="How can we help?" required />
                </div>
                <div class="form-group">
                  <label for="cf-message">Message</label>
                  <textarea id="cf-message" name="message" rows="4" placeholder="Tell us about your project or query..." required></textarea>
                </div>
                <div id="form-feedback" class="form-feedback" aria-live="polite"></div>
                <button type="submit" id="submit-btn" class="btn-submit">
                  <span id="btn-text">Send Message 🚀</span>
                  <span id="btn-loader" class="btn-loader hidden">Sending…</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="footer">
        <div class="container footer-inner">
          <p class="logo">Ajnexis</p>
          <p class="footer-copy">© ${new Date().getFullYear()} Ajnexis Technologies. All rights reserved.</p>
          <p class="footer-note">
            <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
          </p>
        </div>
      </footer>
    </div>`;
  }

  function buildServiceCard(icon, title, desc, delayClass) {
    return `
      <div class="service-card ${delayClass}">
        <div class="service-icon">${icon}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>`;
  }

  // ─── EVENTS ────────────────────────────────────────────────────────────────
  function attachEvents() {
    // Mobile nav toggle
    document.getElementById("menu-btn").addEventListener("click", () => {
      document.getElementById("site-nav").classList.toggle("open");
    });

    // Close nav on link click
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        document.getElementById("site-nav").classList.remove("open");
      });
    });

    // Sticky header shadow
    window.addEventListener("scroll", () => {
      const header = document.getElementById("site-header");
      header.classList.toggle("scrolled", window.scrollY > 10);
    });

    // Contact form submit
    document.getElementById("contact-form").addEventListener("submit", handleFormSubmit);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const feedback = document.getElementById("form-feedback");
    const btnText = document.getElementById("btn-text");
    const btnLoader = document.getElementById("btn-loader");
    const submitBtn = document.getElementById("submit-btn");

    // Basic client-side validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      setFeedback(feedback, "error", "⚠️ Please fill in all fields before sending.");
      return;
    }
    if (!isValidEmail(email)) {
      setFeedback(feedback, "error", "⚠️ Please enter a valid email address.");
      return;
    }

    // Show loading state
    setFeedback(feedback, "", "");
    btnText.classList.add("hidden");
    btnLoader.classList.remove("hidden");
    submitBtn.disabled = true;

    try {
      if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
        // Demo mode — simulate success when credentials aren't configured
        await new Promise((r) => setTimeout(r, 1200));
        setFeedback(feedback, "success",
          "✅ Message sent successfully! We'll get back to you shortly. (Note: configure EmailJS credentials in site.js to enable real sending.)");
        form.reset();
      } else {
        // Real EmailJS send
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        }, EMAILJS_PUBLIC_KEY);
        setFeedback(feedback, "success", "✅ Message sent! We'll get back to you shortly.");
        form.reset();
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setFeedback(feedback, "error",
        "❌ Failed to send message. Please email us directly at " + CONTACT_EMAIL);
    } finally {
      btnText.classList.remove("hidden");
      btnLoader.classList.add("hidden");
      submitBtn.disabled = false;
    }
  }

  function setFeedback(el, type, msg) {
    el.className = "form-feedback";
    el.textContent = msg;
    if (type) el.classList.add("fb-" + type);
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  // ─── SCROLL ANIMATIONS ──────────────────────────────────────────────────────
  function initScrollAnimations() {
    const els = document.querySelectorAll(
      ".reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3, .fade-in-up"
    );
    // Trigger hero immediately
    document.querySelectorAll(".fade-in-up").forEach((el) => el.classList.add("visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
  }
})();

 const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const roles = [
    'Backend Developer',
    'Frontend Developer',
    'Laravel / CodeIgniter & PHP Dev',
    'React / Next.js Dev',
  ];
  let roleIdx = 0, charIdx = 0, deleting = false;
  const typeEl = document.getElementById('typewriter');
  function type() {
    const current = roles[roleIdx];
    if (!deleting) {
      charIdx++;
      if (charIdx > current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      charIdx--;
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
    }
    typeEl.innerHTML = current.slice(0, charIdx) + '<span class="cursor"></span>';
    setTimeout(type, deleting ? 50 : 85);
  }
  type();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

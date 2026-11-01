// Builds the page from the files in /data. You normally don't edit this file.
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const icon = (n) => `<svg class="ic"><use href="#${esc(n)}"/></svg>`;

// Header
document.title = PROFILE.name;
$("name").textContent = PROFILE.name;
$("tagline").textContent = PROFILE.tagline;
const photo = $("photo");
photo.alt = PROFILE.name;
photo.onerror = () => photo.removeAttribute("src");
photo.src = PROFILE.photo;
$("links").innerHTML = PROFILE.links
  .map((l) => `<a href="${esc(l.url)}">${icon(l.icon)}${esc(l.label)}</a>`)
  .join("");

// About
$("about").innerHTML = PROFILE.about.map((p) => `<p>${p}</p>`).join("");

// Projects
function media(m, i, title) {
  let inner = "";
  if (m.type === "video") inner = `<video src="${esc(m.src)}" autoplay muted loop playsinline preload="metadata"></video>`;
  else if (m.type === "image") inner = `<img src="${esc(m.src)}" alt="" loading="lazy">`;
  else if (m.type === "cover") inner = `<span class="num">${String(i + 1).padStart(2, "0")}</span><span class="cap">${esc(m.label || title)}</span>`;
  else inner = icon(m.icon || "eye");
  return `<div class="fig f${(i % 4) + 1}${m.type === "cover" ? " cover" : ""}">${inner}</div>`;
}
$("projects").innerHTML = PROJECTS.map((p, i) => `
  <div class="pub">
    ${media(p.media || {}, i, p.title)}
    <h3>${p.link ? `<a href="${esc(p.link)}">${esc(p.title)}</a>` : esc(p.title)}</h3>
    <div class="meta">${esc(p.meta || "")}</div>
    <blockquote>${esc(p.description)}</blockquote>
    <div class="chips">${(p.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
  </div>`).join("");

// Experience and education
const row = (a, b, when) => `<div class="row"><div><b>${esc(a)}</b><br><span>${esc(b)}</span></div><span class="when">${esc(when)}</span></div>`;
$("experience-list").innerHTML = EXPERIENCE.map((e) => row(e.company, e.role, e.period)).join("");
$("education").innerHTML = EDUCATION.map((e) => row(e.school, e.degree, e.period)).join("");

// Skills
$("skills").innerHTML = SKILLS.map((s) => `<span class="chip">${esc(s)}</span>`).join("");

// Contact and footer
$("email").href = "mailto:" + PROFILE.email;
$("email").innerHTML = icon("mail") + esc(PROFILE.email);
$("footer").textContent = `© ${new Date().getFullYear()} ${PROFILE.name}`;

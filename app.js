const projects = [
  {
    title: "Workflow Opportunity Auditor",
    category: "PROCESS ANALYSIS + ROI",
    status: "Public tool",
    subtitle:
      "Make an evidence-backed automation decision before committing to a build.",
    flow: [
      ["MAP", "Current workflow", "Inputs, decisions, exceptions"],
      ["EVALUATE", "Existing alternatives", "Reuse before custom work"],
      ["DECIDE", "Bounded experiment", "Time, cost, payback"],
    ],
    problem:
      "Repetitive work does not automatically justify new software. A useful decision needs a clear baseline, alternatives, and a realistic cost model.",
    contribution:
      "Defined and developed an AI-agent skill through AI-assisted implementation. It maps workflows, researches alternatives, and supports deterministic time, cost, and payback calculations when sufficient inputs exist.",
    evidence:
      "Repository includes a portable skill, workflow economics calculator, sample inputs, and tests. Savings are estimates until measured against real operational data.",
    repo: "workflow-opportunity-auditor",
    skill: "Workflow assessment · ROI analysis · Documentation",
  },
  {
    title: "Auto Model Router",
    category: "AI TOOLING + OPERATING CONTROLS",
    status: "Public tool",
    subtitle:
      "Match the task to a suitable model tier while preserving review boundaries.",
    flow: [
      ["CONTEXT", "Understand the task", "Complexity and constraints"],
      ["ROUTE", "Suggest a tier", "Lightest sufficient capability"],
      ["GATE", "Review the boundary", "Risk, spend, permissions"],
    ],
    problem:
      "AI-assisted work can use more capability than a task needs, while sensitive work still requires deliberate controls.",
    contribution:
      "Developed a portable routing policy and offline classifier demonstration for AI coding workflows, with task classification, provider guidance, review gates, and outcome logging.",
    evidence:
      "Public repository documents integrations for AI development tools, a heuristic demo, and limits. It does not automatically change every host’s model picker or guarantee cost savings.",
    repo: "auto-model-router",
    skill: "AI implementation · Cost awareness · Governance",
  },
  {
    title: "Agent Handoff Bridge",
    category: "SYSTEMS COORDINATION + AI PROJECT DELIVERY",
    status: "Public source",
    subtitle:
      "Keep tasks, context, and review history coherent across assistant handoffs.",
    flow: [
      ["COORDINATE", "Shared task queue", "Ownership and context"],
      ["CONTINUE", "Role checkpoint", "Verified state and next step"],
      ["REVIEW", "Audit trail", "Human approval boundaries"],
    ],
    problem:
      "Project context can fragment across assistants, making ownership, current state, and the next action difficult to follow.",
    contribution:
      "Developed an AI-assisted MCP project for shared topics, task queues, role checkpoints, and supervised agent handoffs. Defined workflows that preserve provider identity and review boundaries.",
    evidence:
      "The repository describes the MCP server, role skills, checkpoint flows, and append-only audit history. Demonstrates workflow ownership, documentation, and supervised coordination.",
    repo: "agent-handoff-bridge",
    skill: "System integration · Cross-functional coordination · Handoffs",
  },
  {
    title: "Swing Trade Pros",
    category: "BUSINESS WORKFLOWS + AI-ASSISTED IMPLEMENTATION",
    status: "Public showcase",
    subtitle:
      "Bring discovery, onboarding, dashboard access, and community workflows together.",
    flow: [
      ["ACQUIRE", "Customer entry", "Website and membership"],
      ["SERVE", "Member workspace", "Market tools and dashboard"],
      ["OPERATE", "Review the journey", "Exceptions and usability"],
    ],
    problem:
      "A membership business needs a coherent journey across marketing, signup, billing boundaries, information delivery, and community access.",
    contribution:
      "Directed AI-assisted development of the website and member dashboard. Defined requirements, reviewed customer journeys, identified interface issues, and coordinated improvements across product and operational workflows.",
    evidence:
      "Repository documents the Next.js application, member dashboard, public funnel, and alert workflows. Source remains private; the linked public showcase displays sample Node AI screens rather than a live chat. No trading or AI savings outcomes are claimed.",
    repo: "swingtradepros",
    viewUrl: "https://swingtradepros.com/ai-assistant-demo",
    viewLabel: "View Node AI showcase",
    skill: "Process redesign · Business systems · User acceptance review",
  },
  {
    title: "GRTWA School Demo",
    category: "STAKEHOLDER NEEDS + RAPID PROTOTYPING",
    status: "Demonstration",
    subtitle:
      "Translate family and school-administration needs into a connected experience.",
    flow: [
      ["UNDERSTAND", "Family questions", "Information and tuition"],
      ["PROTOTYPE", "Connected journey", "Tours, giving, parent pages"],
      ["DISCUSS", "Stakeholder review", "Feedback and next steps"],
    ],
    problem:
      "Prospective families need a clear path through school information, tuition questions, and tour booking, while staff need a consistent administrative experience.",
    contribution:
      "Built an AI-assisted school demonstration covering tour booking, tuition estimation, giving/payment flows, and parent information. Shared the demonstration with institutional advancement for follow-up discussion.",
    evidence:
      "Independent school demonstration showing requirements translation, digital workflow design, and stakeholder communication. Tour and payment flows are prototypes.",
    repo: "grtwa-tour-demo",
    viewUrl: "https://grtwa-tour-demo.vercel.app/",
    viewLabel: "View school demo",
    skill:
      "Requirements discovery · Digital workflow design · Stakeholder communication",
  },
];

const $ = (s) => document.querySelector(s);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  grid.innerHTML = projects
    .map((p) => {
      const url = p.viewUrl || `https://github.com/1ststepai/${p.repo}`;
      const label = p.viewLabel || "View public tool";
      const note = p.viewUrl
        ? "Publicly viewable · no GitHub access needed"
        : "Public source, documentation, and setup instructions";
      const tags = [p.status, ...p.skill.split("·").map((t) => t.trim())];
      return `<article class="project-card reveal">
        <div class="project-top">
          <div>
            <p class="category">${escapeHtml(p.category)}</p>
            <h3>${escapeHtml(p.title)}</h3>
          </div>
          <a class="project-link" href="${escapeHtml(url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(label)}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 5h5v5M19 5 10 14"/><path d="M5 10v9h9"/></svg>
          </a>
        </div>
        <p class="subtitle">${escapeHtml(p.subtitle)}</p>
        <div class="flow" aria-label="Illustrative project workflow">${p.flow
          .map(
            (s) =>
              `<div><small>${escapeHtml(s[0])}</small><b>${escapeHtml(s[1])}</b><em>${escapeHtml(s[2])}</em></div>`,
          )
          .join("")}</div>
        <div class="project-columns">
          <div><h4>The business problem</h4><p>${escapeHtml(p.problem)}</p></div>
          <div><h4>My contribution</h4><p>${escapeHtml(p.contribution)}</p></div>
        </div>
        <div class="project-evidence"><h4>Evidence and scope</h4><p>${escapeHtml(p.evidence)}</p></div>
        <div class="project-tags">${tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
        <div class="project-access">
          <a class="button primary" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)} ↗</a>
          <span class="note">${escapeHtml(note)}</span>
        </div>
      </article>`;
    })
    .join("");
}

renderProjects();

function syncThemeButton() {
  const dark = document.documentElement.classList.contains("dark");
  const btn = $("#theme-toggle");
  if (!btn) return;
  btn.setAttribute(
    "aria-label",
    dark ? "Switch to light theme" : "Switch to dark theme",
  );
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue("--theme-color")
    .trim();
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta && color) meta.setAttribute("content", color);
}

$("#theme-toggle").addEventListener("click", () => {
  const dark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  } catch (e) {}
  syncThemeButton();
});
syncThemeButton();

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let paused = reduced;

function motionState() {
  document.body.classList.toggle("motion-paused", paused);
  $("#motion").setAttribute("aria-pressed", String(paused));
  $("#motion").textContent = paused ? "Enable motion" : "Pause motion";
}

$("#motion").addEventListener("click", () => {
  paused = !paused;
  motionState();
});
motionState();

if ("IntersectionObserver" in window && !reduced) {
  document.body.classList.add("js-motion");
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

let scheduled = false;
function progress() {
  const range = document.documentElement.scrollHeight - window.innerHeight;
  $("#progress").style.width =
    (range > 0
      ? Math.max(0, Math.min(100, (window.scrollY / range) * 100))
      : 0) + "%";
  scheduled = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(progress);
    }
  },
  { passive: true },
);
window.addEventListener("resize", progress);
progress();

function calculateCase(v, b, a, r, s, m) {
  const hours = (v * (b - a)) / 60,
    annual = hours * r * 52,
    monthlyNet = annual / 12 - m;
  return {
    hours,
    annual,
    cost: m * 12,
    net: annual - m * 12 - s,
    payback: monthlyNet > 0 ? s / monthlyNet : null,
  };
}

const currency = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

function updateRoi() {
  const ids = ["volume", "before", "after", "rate", "setup", "monthly"];
  const inputs = ids.map((id) => $("#roi-" + id));
  if (inputs.some((i) => i.value === "" || !i.validity.valid)) {
    ["hours", "value", "cost", "net", "payback"].forEach(
      (id) => ($("#roi-" + id).textContent = "—"),
    );
    $("#roi-message").textContent =
      "Enter a valid nonnegative value in every field.";
    return;
  }
  const values = inputs.map((i) => Number(i.value)),
    x = calculateCase(...values);
  $("#roi-hours").textContent = x.hours.toLocaleString("en-US", {
    maximumFractionDigits: 1,
  });
  $("#roi-value").textContent = currency(x.annual);
  $("#roi-cost").textContent = currency(x.cost);
  $("#roi-net").textContent = currency(x.net);
  $("#roi-payback").textContent =
    x.payback === null
      ? "No modeled payback"
      : x.payback.toFixed(1) + " months";
  $("#roi-message").textContent =
    x.hours < 0
      ? "These assumptions increase the work required. Revisit the design before proceeding."
      : x.net <= 0
        ? "The first-year modeled value does not exceed the entered costs. A smaller experiment or different approach may be appropriate."
        : "This is a capacity-value estimate, not cash savings. Validate time, quality, adoption, and actual cost before committing.";
}

$("#roi-form").addEventListener("input", updateRoi);
$("#roi-form").addEventListener("submit", (e) => e.preventDefault());
$("#roi-form").addEventListener("reset", () =>
  requestAnimationFrame(updateRoi),
);
updateRoi();

$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#contact-name").value.trim();
  const email = $("#contact-email").value.trim();
  const subject = $("#contact-subject").value.trim();
  const message = $("#contact-message").value.trim();
  if (!name || !email || !subject || !message) return;
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const href = `mailto:epancis12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
});

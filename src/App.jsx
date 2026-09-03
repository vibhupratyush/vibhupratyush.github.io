import React, { useEffect, useState } from "react";

const PROFILE = {
  name: "Vibhu Pratyush",
  title: "Ph.D. Candidate, Economics",
  affiliation: "The University of British Columbia",
  email: "vibhu1@student.ubc.ca",
  linkedin: "https://www.linkedin.com/in/vibhu-pratyush-300abb117/",
  photo: "/profile.jpg",
  cv: "/cv.pdf",
};

const JMP = {
  title: "Land for Opportunity? Deprivation and Immobility in Rural India",
  coauthors: "with Pulak Ghosh",
  abstract:
    "We examine how land ownership shapes educational mobility in rural India. Using full-count rural census microdata, we document a robust step-function pattern across the land distribution: educational mobility rises sharply from the landless to marginal landholders and then plateaus. Exploiting historical variation in British-era land-tenure regimes, we demonstrate a causal link between higher landlessness and lower educational mobility. To unpack mechanisms, we develop a model where parents allocate children’s time between school and work under a subsistence constraint. With little or no land, the constraint binds, increasing child labour and suppressing schooling; a small rise in land relaxes it, producing a sharp drop in child labour and a jump in schooling and upward mobility. The framework endogenously generates the step-function, matches the core facts, rationalizes heterogeneities, and yields testable predictions that we validate.",
  pdf: "/jmp.pdf",
};

const WORK_IN_PROGRESS  = [
  {
    title: "Elite Control and the Political Economy of Development: Evidence from India",
    coauthors: "with Aditi Singh and Pulak Ghosh",
    abstract:
      "Does local elite control blunt the impact of democratic decentralization? We study Indian village governments (panchayats) in Uttar Pradesh and measure elite capture using the land-wealth share held by top landowners. We assemble a new village–year dataset linking full-count household land records from SECC to administrative data on panchayat leadership and development spending across major programs. Three results emerge. First, higher elite land share is associated with systematically lower per-capita development spending and a shift away from broad-based public goods. Second, elite control undercuts the positive effects of political reservations for historically disadvantaged pradhan seats: in high-capture villages, the spending gains from reservation are substantially reduced. Third, these patterns are stronger in larger, more socially fragmented, and weaker-oversight villages, consistent with lower accountability. Ongoing work is focused on causally identifying the effect of elite control by exploiting historical variation in land tenure regimes.",
  },
  {
    title: "The Land Education Atlas",
    abstract:
      "This project maps the link between land distribution and intergenerational educational mobility across countries. Using data from 50 developing countries, we harmonize household surveys and census microdata to build comparable estimates of how land ownership relates to schooling and educational mobility. The Atlas shows where mobility rises once families cross minimal land thresholds—and where high land concentration holds mobility down.",
  },
  {
    title: "Credit Expansion and Firm Dynamics",
    coauthors: "with Anubhav Jha",
    abstract:
      "We assemble data on the universe of India’s formal-sector firms, complete credit registries (loans, defaults, and delinquencies), and staggered banking-sector expansion to study how shifts in credit supply shape firm entry and growth. We then examine how public-sector credit expansion affects subsequent private-sector lending to test whether public credit crowds out—or crowds in—private credit. To interpret these patterns, we develop and estimate a structural model of firm entry and growth with endogenous credit demand. In the model, potential entrants draw productivity, face collateral/borrowing constraints, and choose whether to enter and how much to borrow; incumbent firms choose growth and financing subject to evolving balance-sheet states. Estimating the model on the microdata yields primitives for entry costs, borrowing frictions (collateral elasticity, outside-option rates), and the responsiveness of credit demand to supply-side shifts. We use the estimated model for counterfactuals that trace firm entry, size distribution, and aggregate credit demand under alternative policies—e.g., targeted public-credit expansions, risk-weighted capital rules, or branch-opening mandates—and decompose impacts into selection (who enters) versus scaling (how much entrants and incumbents grow) and the consequences for private sector credit demand.",
  },
];

const TEACHING = [
  { role: "Teaching Assistant", course: "ECON 304 — Microeconomic Theory, Honours", institution: "UBC", term: "2022, 2023" },
  { role: "Teaching Assistant", course: "ECON 305 — Microeconomic Theory, Honours", institution: "UBC", term: "2022, 2023" },
  { role: "Teaching Assistant", course: "ECON 306 — Microeconomic Theory, Honours", institution: "UBC", term: "2024" },
  { role: "Teaching Assistant", course: "ECON 307 — Macroeconomic Theory, Honours", institution: "UBC", term: "2024" },
  { role: "Teaching Assistant", course: "ECON 306 — Microeconomic Theory, Honours", institution: "UBC", term: "2024" },
  { role: "Teaching Assistant", course: "ECON 326 — Intermediate Econometrics", institution: "UBC", term: "2022, 2025" },
  { role: "Teaching Assistant", course: "ECON 356 — Land and Resource Economics", institution: "UBC", term: "2024" },
  { role: "Teaching Assistant", course: "ECON 302 — Intermediate Macroeconomics", institution: "UBC", term: "2022" },
  { role: "Teaching Assistant", course: "ECON 101 — Principles of Microeconomics", institution: "UBC", term: "2019, 2020, 2021, 2025" },
  { role: "Teaching Assistant", course: "ECON 102 — Principles of Macroeconomics", institution: "UBC", term: "2020, 2021, 2024" },
];

function getRoute() {
  const hash = (typeof window !== "undefined" && window.location.hash) || "#/";
  if (hash.startsWith("#/research")) return "research";
  if (hash.startsWith("#/teaching")) return "teaching";
  return "home";
}

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    if (!window.location.hash) window.location.hash = "#/";
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="site-name" href="#/">{PROFILE.name}</a>
        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink href="#/" active={route === "home"}>Home</NavLink>
          <NavLink href="#/research" active={route === "research"}>Research</NavLink>
          <NavLink href="#/teaching" active={route === "teaching"}>Teaching</NavLink>
          <a href={PROFILE.cv} target="_blank" rel="noreferrer">CV</a>
        </nav>
      </header>

      <main className="site-content">
        {route === "research" ? <Research /> : route === "teaching" ? <Teaching /> : <Home />}
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  );
}

function NavLink({ href, active, children }) {
  return (
    <a href={href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
      {children}
    </a>
  );
}

function Home() {
  return (
    <article className="home-page">
      <h1>{PROFILE.name}</h1>
      <div className="home-grid">
        <div className="portrait-column">
          <img src={PROFILE.photo} alt={`${PROFILE.name} headshot`} className="profile-photo" />
          <div className="contact-block">
            <div>{PROFILE.title}</div>
            <div>{PROFILE.affiliation}</div>
            <div className="contact-links">
              <a href={`mailto:${PROFILE.email}`}>Email</a>
              <span aria-hidden="true"> · </span>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span aria-hidden="true"> · </span>
              <a href={PROFILE.cv} target="_blank" rel="noreferrer">CV</a>
            </div>
          </div>
        </div>

        <div className="home-copy">
          <p>
            Welcome! I am an applied microeconomist with research interests in development economics,
            public economics, inequality, and political economy.
          </p>
          <p>
            My research explores how inequality affects social mobility, human capital attainment, and
            the political economy of development. I am particularly interested in the determinants of
            intergenerational mobility and why the poor and vulnerable in the developing world fall
            behind in acquiring skills and human capital.
          </p>
          <p>I am a PhD Fellow at the Stone Center on Wealth and Income Inequality at UBC.</p>
          <p>You can reach me at <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.</p>
          <p className="job-market-note">I am on the 2025/26 job market.</p>
        </div>
      </div>
    </article>
  );
}

function Research() {
  return (
    <article>
      <h1>Research</h1>

      <section className="research-section">
        <h2>Job Market Paper</h2>
        <PaperItem {...JMP} featured defaultOpen />
      </section>

      <section className="research-section">
        <h2>Working Papers</h2>
        <div className="paper-list">
          {WORKING_PAPERS.map((paper) => (
            <PaperItem key={paper.title} {...paper} />
          ))}
        </div>
      </section>
    </article>
  );
}

function PaperItem({ title, coauthors, abstract, pdf, slides, featured = false, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className={`paper-item${featured ? " featured-paper" : ""}`}>
      <h3 className="paper-title">
        {pdf ? (
          <a href={pdf} target="_blank" rel="noreferrer">{title}</a>
        ) : title}
      </h3>
      {coauthors && <div className="paper-coauthors">{coauthors}</div>}

      <div className="paper-links">
        {pdf && <a href={pdf} target="_blank" rel="noreferrer">PDF</a>}
        {slides && <a href={slides} target="_blank" rel="noreferrer">Slides</a>}
        {abstract && (
          <button type="button" className="text-link" onClick={() => setOpen((value) => !value)}>
            {open ? "Hide abstract" : "Abstract"}
          </button>
        )}
      </div>

      {open && abstract && <p className="paper-abstract">{abstract}</p>}
    </article>
  );
}

function Teaching() {
  return (
    <article>
      <h1>Teaching</h1>
      <div className="teaching-list">
        {TEACHING.map((item, index) => (
          <div className="teaching-item" key={`${item.course}-${item.term}-${index}`}>
            <div className="teaching-course">{item.course}</div>
            <div className="teaching-meta">
              {item.role}, {item.institution} · {item.term}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

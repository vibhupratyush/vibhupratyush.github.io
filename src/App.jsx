import React, { useEffect, useState } from "react";

/**
 * Minimal-style academic site with Home, Research, and Teaching
 * - Uses hash routes: #/ , #/research , #/teaching
 * - Relies on theme files in /public: style.css, pygment_trac.css, scale.fix.js
 * - Assets in /public: profile.jpg, cv.pdf, (optional) papers/*
 */

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
  title: "Land for Opportunity? Deprivation and Intergenerational Mobility in Rural India",
  coauthors: "with Pulak Ghosh",
  abstract:
    "We examine how inequality in land-wealth, particularly landlessness, inhibits educational mobility in rural India. Using full-count rural census microdata, we document a robust step-function pattern across the land distribution: mobility rises sharply from the landless to marginal landholders and then plateaus. Exploiting historical variation in British-era land-tenure regimes, we demonstrate a causal link between higher landlessness and lower educational mobility. To unpack mechanisms, we develop and empirically validate a model that endogenously generates the step, combining subsistence constraints, dynamic complementarity in educational investments, the prevalence of child labour and the rising opportunity cost of schooling over the life cycle, and concavity in returns to land. The model rationalizes cross-state heterogeneity and generates sharp predictions we validate.",
  pdf: "", // set to "/papers/JMP_draft.pdf" when ready
};

const WORKING_PAPERS = [
  {
    title: "Elite Control and the Political Economy of Development: Evidence from India",
    coauthors: "with Aditi Singh and Pulak Ghosh",
    abstract:
      "We study Indian village governments (panchayats) in Uttar Pradesh and proxy elite control using the land-wealth share held by top landowners. Villages with higher elite land shares spend less per capita on development and shift away from broad public goods. Elite control weakens the spending gains from reserved pradhan seats. Effects are larger in bigger, weaker-oversight villages.",
  },
  {
    title: "Protests, Prosociality, and Public Goods",
    abstract:
      "Using the 2020 farmers’ agitation in India, we test whether protest exposure shifts political engagement, norms, and welfare delivery. Villages closer to protest sites with a high share of agriculture-dependent workers see higher welfare spending, driven by targeted poverty-alleviation programs.",
  },
  {
    title: "Redistribution and Human Capital: A Structural Approach",
    abstract:
      "We estimate a structural model of human-capital accumulation in an agrarian setting, recover key parameters and threshold land-wealth levels, and quantify human-capital gains under more egalitarian land distributions.",
  },
];

const WIP = [
  {
    title: "The Land Mobility Atlas",
    abstract:
      "This project maps the link between land distribution and intergenerational educational mobility across countries. Using data from 50 developing countries, we harmonize household surveys and census microdata to build comparable estimates of how land ownership relates to mobility. The Atlas shows where mobility rises once families cross minimal land thresholds—and where high land concentration holds mobility down. By visualizing these patterns and their correlates, we highlight practical levers to increase mobility.",
  },
  {
    title: "Credit Expansion and Firm Dynamics",
    coauthors: "with Anubhav Jha",
    abstract:
      "We use data on the universe of India's formal-sector firms to study how shifts in credit supply affect entry, growth, employment, and productivity.",
  },
];

/** ---------------- Teaching data (edit this) ---------------- */
const TEACHING = [

  {
    role: "Teaching Assistant",
    course: "ECON 304 and ECON 306 — Microeconomics, Honours",
    institution: "UBC",
    term: "2022, 2023, 2024",
  },
  {
    role: "Teaching Assistant",
    course: "ECON 305 and ECON 307 — Microeconomics, Honours",
    institution: "UBC",
    term: "2022, 2023, 2024",
  },

  {
    role: "Teaching Assistant",
    course: "ECON 305 — Microeconomics, Honours",
    institution: "UBC",
    term: "2022, 2023, 2024",
  },
  
  {
    role: "Teaching Assistant",
    course: "ECON 326 — Econometrics",
    institution: "UBC",
    term: "2022,2025",
  },

  {
    role: "Teaching Assistant",
    course: "ECON 101 — Principles of Microeconomics",
    institution: "UBC",
    term: "2020, 2021, 2023, 2024, 2025",
  },
  ];


export default function App() {
  const getRoute = () => {
    const h = (typeof window !== "undefined" && window.location.hash) || "#/";
    if (h.startsWith("#/research")) return "research";
    if (h.startsWith("#/teaching")) return "teaching";
    return "home";
  };

  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    if (!window.location.hash) window.location.hash = "#/";
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="wrapper">
      <header>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
          <h1 style={{ margin: 0 }}>{/* (Minimal-style clean header) */}</h1>
          <p className="view" style={{ margin: 0 }}>
            <a href="#/">Home</a>&nbsp;&nbsp;·&nbsp;&nbsp;
            <a href="#/research">Research</a>&nbsp;&nbsp;·&nbsp;&nbsp;
            <a href="#/teaching">Teaching</a>&nbsp;&nbsp;·&nbsp;&nbsp;
            <a href={PROFILE.cv} target="_blank" rel="noreferrer">CV</a>
          </p>
        </div>
      </header>

      <section id="content">
        {route === "research" ? <Research /> : route === "teaching" ? <Teaching /> : <Home />}
      </section>

      <footer>
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
      </footer>
    </div>
  );
}

/* -------------------- Pages -------------------- */

function Home() {
  return (
    <article>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
        <img
          src={PROFILE.photo}
          alt={`${PROFILE.name} headshot`}
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #ddd",
          }}
        />
        <div>
          <h1 style={{ marginTop: 0, marginBottom: 8 }}>{PROFILE.name}</h1>
          <p style={{ margin: 0 }}>{PROFILE.title}</p>
          <p style={{ marginTop: 4 }}>{PROFILE.affiliation}</p>

          <div style={{ marginTop: 16, maxWidth: "70ch", lineHeight: 1.55 }}>
            <p>
              Welcome! I am an applied microeconomist with research interests in
              development economics, public economics, inequality, and political
              economy.
            </p>
            <p>
              My research explores how inequality affects social mobility, human
              capital attainment, and the political economy of development.
            </p>
            <p style={{ fontWeight: 600 }}>I am on the 2025/26 job market.</p>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <a href={`mailto:${PROFILE.email}`} title="Email"><span aria-hidden="true">✉️</span> Email</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><span aria-hidden="true">in</span> LinkedIn</a>
            <a href="#/research" title="Research">Research</a>
            <a href="#/teaching" title="Teaching">Teaching</a>
            <a href={PROFILE.cv} target="_blank" rel="noreferrer" title="CV">CV (PDF)</a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Research() {
  const [showJmp, setShowJmp] = useState(true);

  return (
    <article>
      {/* JMP */}
      <h2>Job Market Paper</h2>
      <div>
        <div style={{ fontWeight: 600 }}>{JMP.title}</div>
        {JMP.coauthors && <div style={{ color: "#666" }}>{JMP.coauthors}</div>}
        <p style={{ marginTop: 6, fontSize: "0.95em" }}>
          {JMP.pdf ? (
            <a href={JMP.pdf} target="_blank" rel="noreferrer">[Draft]</a>
          ) : (
            <span style={{ color: "#777" }}>[Draft coming soon]</span>
          )}
          {" "}
          <a href="#/research" onClick={(e) => { e.preventDefault(); setShowJmp((s) => !s); }}>
            [Show/Hide Abstract]
          </a>
        </p>
        {showJmp && <p style={{ maxWidth: "80ch", lineHeight: 1.55 }}>{JMP.abstract}</p>}
      </div>

      {/* Working Papers */}
      <h2>Working Papers</h2>
      {WORKING_PAPERS.length === 0 ? (
        <p style={{ color: "#666" }}>None yet.</p>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {WORKING_PAPERS.map((p, i) => <PaperItem key={i} {...p} />)}
        </div>
      )}

      {/* Works in Progress */}
      <h2>Works in Progress</h2>
      {WIP.length === 0 ? (
        <p style={{ color: "#666" }}>None yet.</p>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {WIP.map((p, i) => <PaperItem key={i} {...p} />)}
        </div>
      )}
    </article>
  );
}

function Teaching() {
  return (
    <article>
      <h2>Teaching</h2>

      {TEACHING.length === 0 ? (
        <p style={{ color: "#666" }}>No teaching listed yet.</p>
      ) : (
        <div style={{ display: "grid", gap: 20 }}>
          {TEACHING.map((t, i) => (
            <div key={i}>
              <div style={{ fontWeight: 600 }}>
                {t.course}
                {t.term ? <span style={{ color: "#666", fontWeight: 400 }}> — {t.term}</span> : null}
              </div>
              <div style={{ color: "#666" }}>
                {t.role}{t.institution ? `, ${t.institution}` : ""}
              </div>
              {t.notes && (
                <p style={{ maxWidth: "80ch", lineHeight: 1.55, marginTop: 6 }}>{t.notes}</p>
              )}
              {(t.syllabus || t.site) && (
                <p style={{ marginTop: 6, fontSize: "0.95em" }}>
                  {t.syllabus && (
                    <>
                      <a href={t.syllabus} target="_blank" rel="noreferrer">[Syllabus]</a>{" "}
                    </>
                  )}
                  {t.site && (
                    <>
                      <a href={t.site} target="_blank" rel="noreferrer">[Course page]</a>
                    </>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function PaperItem({ title, coauthors, abstract, pdf, slides }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{ fontWeight: 600 }}>{title}</div>
      {coauthors && <div style={{ color: "#666" }}>{coauthors}</div>}
      <p style={{ marginTop: 6, fontSize: "0.95em" }}>
        {pdf && <><a href={pdf} target="_blank" rel="noreferrer">[Draft]</a>{" "}</>}
        {slides && <><a href={slides} target="_blank" rel="noreferrer">[Slides]</a>{" "}</>}
        {abstract && (
          <a
            href="#/research"
            onClick={(e) => {
              e.preventDefault();
              setOpen((o) => !o);
            }}
          >
            [Show/Hide Abstract]
          </a>
        )}
      </p>
      {open && abstract && (
        <p style={{ maxWidth: "80ch", lineHeight: 1.55 }}>{abstract}</p>
      )}
    </div>
  );
}

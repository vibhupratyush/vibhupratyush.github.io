import React, { useEffect, useState } from "react";

/** ---------- SITE DATA (edit) ---------- */
const PROFILE = {
  name: "Vibhu Pratyush",
  title: "Ph.D. Candidate, Economics",
  affiliation: "The University of British Columbia",
  email: "vibhu1@student.ubc.ca",
  linkedin: "https://www.linkedin.com/in/vibhu-pratyush-300abb117/",
  photo: "public/profile.jpg",
  cv: "public/cv.pdf",
};

const JMP = {
  title: "Land for Opportunity? Deprivation and Intergenerational Mobility in Rural India",
  coauthors: "with Pulak Ghosh",
  abstract:
    "We study how inequality in land wealth—especially landlessness—constrains educational mobility in rural India. Using full-count rural census microdata, we document a striking step pattern across the land distribution: mobility jumps sharply from the landless to marginal landholders and then levels off. Leveraging historical variation in British-era land-tenure regimes, we show that higher landlessness causally reduces educational mobility. To unpack mechanisms, we develop and empirically validate a model that endogenously produces this step via subsistence constraints, dynamic complementarity in educational investments, the prevalence of child labour and the rising opportunity cost of schooling over the child’s life cycle, and concavity in returns to land. The model predicts the core facts in the data, explains cross-state heterogeneity in the mobility–land relationship, and yields a set of sharp predictions that we confirm. To our knowledge, this is the first study in a developing-country context to (i) precisely identify the causal link between landlessness and mobility and (ii) theoretically pin down—and empirically validate—the mechanism behind it.",
  pdf: "", // set to "/papers/JMP_draft.pdf" when ready
};

const WORKING_PAPERS = [
  {
    title: "Elite Control and the Political Economy of Development: Evidence from India",
    coauthors: "with Aditi Singh and Pulak Ghosh",
    abstract:
      "Does local elite control blunt the impact of democratic decentralization? We study Indian village governments (panchayats) in Uttar Pradesh and measure elite capture using the land-wealth share held by top landowners. We assemble a new village–year dataset linking full-count household land records from SECC to administrative data on panchayat leadership and development spending across major programs. Three results emerge. First, higher elite land share is associated with systematically lower per-capita development spending and a shift away from broad-based public goods. Second, elite control undercuts the positive effects of political reservations for historically disadvantaged pradhan seats: in high-capture villages, the spending gains from reservation are substantially reduced. Third, these patterns are stronger in larger, more socially fragmented, and weaker-oversight villages, consistent with lower accountability. Ongoing work is focused on causally identifying the effect of elite control by exploiting historical vaiation in land tenure regimes.",
  },
  {
    title: "Protests, Prosociality, and Public Goods",
    abstract:
      "The political and economic effects of protest engagement have received considerable attention in the social sciences. This work aims to add to this literature by testing the hypothesis that protest participation can have effects on participants political engagement, inter-group norms and through these channels, on public goods provision and welfare delivery. To this end I study the 2020 farmers agitation in India. My results suggest that village closest to major protest sites with a high share of agriculture dependent workforce see a significant increase in welfare spending in the months following the protests. These effects are driven by increases in targeted poverty alleviation spending that primarily benefits the landless and backward caste groups.",
  },
  {
    title: "Redistribution and Human Capital: A Structural Approach",
    abstract:
      "We build and estimate a structural model of human capital accumulation with heterogeneous households—differing in land and liquid‐wealth endowments—tailored to an agrarian economy. Using linked survey, administrative, and full-count census microdata, we recover the core structural parameters: (i) a threshold wealth level beyond which additional wealth has little marginal effect on schooling investments; (ii) the strength of dynamic complementarity across the child’s life cycle (how early investments raise the productivity of later ones); and (iii) key opportunity-cost and returns parameters that govern the work–school tradeoff (wages, child labor prevalence, and school costs). With the estimated model, we run policy counterfactuals—modest land redistribution, targeted transfers/credit to land-poor households, and schooling-cost subsidies—to quantify resulting gains in schooling and human capital, and to decompose which margins (crossing the wealth threshold vs. amplifying complementarities) drive the aggregate impact.",
  },
];

const WIP = [
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

/** ---------- APP ---------- */
export default function App() {
  // tiny debug so we know it mounted on the live page
  console.log("App mounted");

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
          <h1 style={{ margin: 0 }}>{/* keep header minimal */}</h1>
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

/** ---------- PAGES ---------- */

function Home() {
  // Inline styles ensure layout even if theme CSS overrides things
  return (
    <article>
      <div
        className="home-row"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 24,
          flexWrap: "nowrap",
        }}
      >
        <img
          src={PROFILE.photo}
          alt={`${PROFILE.name} headshot`}
          className="home-photo"
          style={{
            flex: "0 0 280px",
            width: 220,
            height: 280,
            objectFit: "cover",
            borderRadius: 8,
            border: "1px solid #ddd",
            margin: 0,
            display: "block",
          }}
        />

        <div className="home-text" style={{ flex: "1 1 auto", minWidth: 0 }}>
          <h1 style={{ marginTop: 0, marginBottom: 8, fontSize: "2.25rem", lineHeight: 1.2 }}>
            {PROFILE.name}
          </h1>
          <p style={{ margin: 0 }}>{PROFILE.title}</p>
          <p style={{ marginTop: 4 }}>{PROFILE.affiliation}</p>

          <div className="home-intro" style={{ marginTop: 16, lineHeight: 1.55, maxWidth: "72ch" }}>
            <p>
              Welcome! I am an applied microeconomist with research interests in
              development economics, public economics, inequality, and political
              economy.
            </p>
            <p>
              My research explores how inequality affects social mobility, human
              capital attainment, and the political economy of development. I am particularly interested in exploring the determinants
              of interegenerational mobility and why the poor and vulnerable in the developing world fall behind in acquiring skills and human capital.   
            </p>
            <p style={{ fontWeight: 600 }}>I am on the 2025/26 job market.</p>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
            <a href={`mailto:${PROFILE.email}`} title="Email">
              <span aria-hidden="true">✉️</span> Email
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
              <span aria-hidden="true">in</span> LinkedIn
            </a>
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
          <a
            href="#/research"
            onClick={(e) => {
              e.preventDefault();
              setShowJmp((s) => !s);
            }}
          >
            [Show/Hide Abstract]
          </a>
        </p>
        {showJmp && <p style={{ maxWidth: "80ch", lineHeight: 1.55 }}>{JMP.abstract}</p>}
      </div>

      <h2>Working Papers</h2>
      {WORKING_PAPERS.length === 0 ? (
        <p style={{ color: "#666" }}>None yet.</p>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {WORKING_PAPERS.map((p, i) => (
            <PaperItem key={i} {...p} />
          ))}
        </div>
      )}

      <h2>Works in Progress</h2>
      {WIP.length === 0 ? (
        <p style={{ color: "#666" }}>None yet.</p>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {WIP.map((p, i) => (
            <PaperItem key={i} {...p} />
          ))}
        </div>
      )}
    </article>
  );
}

function Teaching() {
  const TEACHING = [
    {
      role: "Teaching Assistant",
      course: "ECON 101 — Principles of Microeconomics",
      institution: "UBC",
      term: "2023–2024",
      notes:
        "Led tutorials on consumer/producer theory and introductory causal inference; ran R lab sessions and problem classes.",
      syllabus: "",
      site: "",
    },
    {
      role: "Teaching Assistant",
      course: "ECON 326 — Econometrics",
      institution: "UBC",
      term: "2024–2025",
      notes:
        "TA for undergraduate econometrics; recitations on regression/IV and coding walk-throughs in R/Stata.",
      syllabus: "",
      site: "",
    },
  ];

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
                  {t.syllabus && <a href={t.syllabus} target="_blank" rel="noreferrer">[Syllabus]</a>}{" "}
                  {t.site && <a href={t.site} target="_blank" rel="noreferrer">[Course page]</a>}
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


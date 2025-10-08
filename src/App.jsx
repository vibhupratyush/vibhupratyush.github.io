import React, { useEffect, useState } from "react";

/**
 * Minimal Academic Site (adjusted)
 * - Header: only right-side links (no name)
 * - Home: bigger headshot, bigger name & intro, icon buttons (Email + LinkedIn),
 *         plus Research + CV buttons
 * - Research: JMP (toggle abstract), Working Papers, WIP
 * - Routes: #/  and  #/research
 * - Static files: /public/profile.jpg, /public/cv.pdf, /public/papers/JMP_draft.pdf (later)
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
    "We examine how inequality in land-wealth, particularly landlessness, inhibits educational mobility in rural India. Using full-count rural census microdata, we document a robust step-function pattern across the land distribution: mobility rises sharply from the landless to marginal landholders and then plateaus. Exploiting historical variation in British-era land-tenure regimes, we demonstrate a causal link between higher landlessness and lower educational mobility. To unpack mechanisms, we develop and empirically validate a model  that endogenously generates the step, combining subsistence constraints, dynamic complementarity in educational investments, the prevalence of child labour and the rising opportunity cost of schooling over children’s life cycle, and concavity in returns to land. In addition to predicting the core stylized facts in the data, the model rationalizes heterogeneity in the mobility land relationship across states, and makes a range of sharp and robust predictions which we validate. Our study is novel in the developing world context for two reasons; (i) it is the first study to examine and precisely identify the causal link between landlessness and mobility, (ii) it is the first study to theoretically pin down and empirically validate the mechanism behind this relationship.",
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
    title: "Protests Prosociality and Public Goods",
    abstract:
      "The political and economic effects of protest engagement have received considerable attention in the social sciences. This work aims to add to this literature by testing the hypothesis that protest participation can have effects on participants political engagement, inter-group norms and through these channels, on public goods provision and welfare delivery. To this end I study the 2020 farmers agitation in India. My results suggest that village closest to major protest sites with a high share of agriculture dependent workforce see a significant increase in welfare spending in the months following the protests. These effects are driven by increases in targeted poverty alleviation spending that primarily benefits the landless and backward caste groups.",
  },
  {
    title: "Redistribution and Human Capital: A Structural Approach",
    coauthors: "",
    abstract:
      "We estimate a structural model of human capital accumulation in an agrarian setting. We estimate key parameters of the human capital acquisition function and threshold land wealth levels that enable sufficient human capital investment. We conduct counterfactuals to show the human capital gains from a more egalitarian distribution of land wealth. ",
  },
];


const WIP = [
  {
    title: "The Land Mobility Atlas",
    abstract:
      "This project maps the link between land distribution and intergenerational educational mobility across countries. Using data from 50 developing countries, we harmonize household surveys and census microdata to build comparable estimates of the effect of land ownership on educational mobility. The Atlas shows where mobility rises sharply once families cross minimal land thresholds—and where high land concentration holds mobility down. By visualizing these patterns and their correlates, we highlight practical levers to increase educational mobility."
  },
];


export default function App() {
  // --- tiny hash router ---
  const getRoute = () =>
    typeof window !== "undefined" &&
    window.location.hash.startsWith("#/research")
      ? "research"
      : "home";
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    if (!window.location.hash) window.location.hash = "#/";
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        {route === "research" ? <Research /> : <Home />}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-200">
      <nav className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-end">
        <div className="flex items-center space-x-6 text-sm">
          <a className="hover:opacity-80" href="#/">Home</a>
          <a className="hover:opacity-80" href="#/research">Research</a>
          <a className="hover:opacity-80" href={PROFILE.cv} target="_blank" rel="noreferrer">CV</a>
        </div>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-start">
      {/* Bigger headshot */}
      <img
        src={PROFILE.photo}
        alt={`${PROFILE.name} headshot`}
        className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover ring-1 ring-slate-200"
      />

      <div>
        {/* Bigger name */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {PROFILE.name}
        </h1>
        <p className="text-slate-700 mt-4 text-lg">{PROFILE.title}</p>
        <p className="text-slate-700">{PROFILE.affiliation}</p>

       {/* Bigger brief intro */}
<div className="mt-8 text-slate-700 text-sm md:text-base leading-normal space-y-4 max-w-[150ch]">
  <p>
    Welcome! I am an applied microeconomist with research interests in
    development economics, public economics, inequality, and political
    economy.
  </p>

  <p>
    My research explores how inequality affects social mobility, human capital
    attainment, and the political economy of development.
  </p>

  <p className="font-semibold">I am on the 2025/26 job market.</p>
</div>



        {/* Icon buttons: Email + LinkedIn */}
        <div className="mt-6 flex items-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-lg ring-1 ring-slate-200 px-3 py-2 hover:bg-slate-50"
            aria-label="Email"
            title="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2Z"/>
              <path d="M22 8v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8"/>
            </svg>
            <span>Email</span>
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg ring-1 ring-slate-200 px-3 py-2 hover:bg-slate-50"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
              viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
              <path d="M100.3 448H7.4V148.9h92.9zm-46.4-340C24.2 108 0 83.8 0 54.7 0 24.6 24.2.4 53.9.4 83.6.4 107.8 24.6 107.8 54.7c0 29.1-24.2 53.3-53.9 53.3zM447.9 448h-92.4V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.5V148.9h88.8v40.8h1.3c12.4-23.6 42.6-48.5 87.7-48.5 93.8 0 111.1 61.8 111.1 142.3V448z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Research / CV buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
          <a
            href="#/research"
            className="px-4 py-2 rounded-lg ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Research
          </a>
          <a
            href={PROFILE.cv}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:opacity-90"
          >
            CV
          </a>
        </div>
      </div>
    </div>
  );
}

function Research() {
  const [showJmpAbs, setShowJmpAbs] = useState(true);
  return (
    <div className="space-y-8">
      {/* Job Market Paper */}
      <section>
        <h2 className="text-xl font-semibold">Job Market Paper</h2>
        <div className="mt-2">
          <div className="font-medium">{JMP.title}</div>
          <div className="mt-1 text-sm flex items-center gap-2">
            {JMP.pdf ? (
              <a className="underline" href={JMP.pdf} target="_blank" rel="noreferrer">
                [Draft]
              </a>
            ) : (
              <span className="text-slate-500">[Draft coming soon]</span>
            )}
            <button onClick={() => setShowJmpAbs((s) => !s)} className="underline">
              [Show/Hide Abstract]
            </button>
          </div>
          {showJmpAbs && (
            <p className="mt-3 text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {JMP.abstract}
            </p>
          )}
        </div>
      </section>

      {/* Working Papers */}
      <section>
        <h2 className="text-xl font-semibold">Working papers</h2>
        <div className="mt-2 space-y-4">
          {WORKING_PAPERS.length === 0 && (
            <div className="text-slate-600 text-sm">None yet.</div>
          )}
          {WORKING_PAPERS.map((p, i) => (
            <PaperItem key={i} {...p} />
          ))}
        </div>
      </section>

      {/* Works in progress */}
      <section>
        <h2 className="text-xl font-semibold">Work in progress</h2>
        <div className="mt-2 space-y-4">
          {WIP.length === 0 && (
            <div className="text-slate-600 text-sm">None yet.</div>
          )}
          {WIP.map((p, i) => (
            <PaperItem key={i} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function PaperItem({ title, coauthors, abstract, pdf, slides }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="font-medium">{title}</div>
      {coauthors && <div className="text-sm text-slate-600">{coauthors}</div>}
      <div className="mt-1 text-sm flex items-center gap-2">
        {pdf && (
          <a className="underline" href={pdf} target="_blank" rel="noreferrer">
            [Draft]
          </a>
        )}
        {slides && (
          <a className="underline" href={slides} target="_blank" rel="noreferrer">
            [Slides]
          </a>
        )}
        {abstract && (
          <button onClick={() => setOpen((o) => !o)} className="underline">
            [Show/Hide Abstract]
          </button>
        )}
      </div>
      {open && abstract && (
        <p className="mt-2 text-slate-700 text-sm leading-relaxed whitespace-pre-line">
          {abstract}
        </p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-12 py-6 text-sm">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}
        </div>
      </div>
    </footer>
  );
}

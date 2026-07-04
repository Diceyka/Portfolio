import { useState } from "react";
import { content, type Lang } from "./lib/content";
import { usePath } from "./lib/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CasePage from "./pages/CasePage";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];
  const path = usePath();
  const slug = path.replace(/^\/+|\/+$/g, "");
  const currentCase = t.cases[slug];

  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar lang={lang} onLangChange={setLang} t={t} isHome={!currentCase} />
      {currentCase ? <CasePage c={currentCase} slug={slug} /> : <Home t={t} />}
      <Footer t={t} />
    </div>
  );
}

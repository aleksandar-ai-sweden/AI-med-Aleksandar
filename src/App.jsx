import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <header className="p-6 bg-gray-100 shadow-md">
          <h1 className="text-3xl font-bold">AI med Aleksandar</h1>
          <nav className="mt-2 space-x-4">
            <Link to="/">Start</Link>
            <Link to="/samhallskunskap">Samhällskunskap</Link>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/samhallskunskap" element={<SamhallPage />} />
            <Route path="/samhallskunskap/1b" element={<SH1BPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function IntroPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Välkommen!</h2>
      <p>
        Den här sidan är för dig som är lärare och vill börja eller fördjupa din användning av AI i undervisningen. Här får du konkreta exempel, pedagogiska tips och tillgång till verktyg – särskilt med fokus på ChatGPT.
      </p>
      <p>
        Syftet är att hjälpa dig att spara tid, skapa bättre material och göra eleverna mer delaktiga. AI är inte ett hot – det är ett verktyg. Och du styr det.
      </p>
      <a href="https://chat.openai.com" target="_blank" className="text-blue-700 underline">Prova ChatGPT här</a>
    </section>
  );
}

function SamhallPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Samhällskunskap och AI</h2>
      <p>
        Den nya kursplanen i samhällskunskap enligt Gy25 innehåller flera delar där AI kan vara ett stöd – både för undervisning, elevaktivitet och bedömning.
      </p>
      <ul className="list-disc list-inside">
        <li><Link to="/samhallskunskap/1b" className="text-blue-600 hover:underline">Samhällskunskap 1b – med fokus på AI</Link></li>
      </ul>
    </section>
  );
}

function SH1BPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Samhällskunskap 1b – med ChatGPT</h2>
      <p>
        Centralt innehåll enligt Gy25 omfattar t.ex. medier och informationssamhälle, demokrati, rättigheter och ekonomiska strukturer. Här visar vi hur AI kan användas i:
      </p>
      <ul className="list-disc list-inside">
        <li>🧠 Förståelse: ChatGPT förklarar svåra begrepp och händelser</li>
        <li>🎓 Instuderingsfrågor: generera frågor automatiskt från text</li>
        <li>🗂️ Material: skapa arbetsblad, sammanfattningar, jämförelser</li>
        <li>🎤 Diskussioner: få stöd för elevfrågor eller påståenden att bemöta</li>
        <li>🧪 Examination: skapa provfrågor, case, muntliga diskussioner</li>
        <li>🧭 AI-kritik: analysera AI:s roll i samhället – etiskt, politiskt, ekonomiskt</li>
      </ul>
    </section>
  );
}

export default App;

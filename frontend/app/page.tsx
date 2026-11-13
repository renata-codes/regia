"use client";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/picmix.com_4080951.gif')",
      }}
    >
      <div className="min-h-screen bg-black/60">
        <div className="max-w-5xl mx-auto p-8">
          <h1 className="text-6xl font-bold text-pink-200">
            🌺 RegIA
          </h1>

          <p className="mt-2 text-white">
            Copiloto Regulatório Inteligente
          </p>

          <div className="mt-10 rounded-3xl bg-slate-950/70 p-6">
            <textarea
              placeholder="Faça sua pergunta..."
              className="w-full h-48 rounded-2xl bg-slate-900/80 border border-slate-700 p-4 text-white"
            />

            <button
              className="mt-5 px-8 py-4 rounded-2xl bg-pink-600 hover:bg-pink-500 text-white"
            >
              Consultar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
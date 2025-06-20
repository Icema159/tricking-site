import React from 'react';
import MapSection from './MapSection';

function App() {
  const videos = ['/hero1.mp4', '/hero2.mp4', '/hero3.mp4'];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  return (
    <>
      {/* Sticky navbar su glassmorphism efektu */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-xl md:text-2xl font-bold text-white font-orbitron tracking-wide">
            Tricking Lietuva
          </a>
          <ul className="flex gap-4 md:gap-6 text-sm md:text-base font-medium font-orbitron">
            <li><a href="#apie" className="text-white hover:text-primary transition">Apie</a></li>
            <li><a href="#spotai" className="text-white hover:text-primary transition">Spot’ai</a></li>
            <li><a href="#video" className="text-white hover:text-primary transition">Video</a></li>
            <li><a href="#kontaktai" className="text-white hover:text-primary transition">Kontaktai</a></li>
          </ul>
        </nav>
      </header>

      <main className="min-h-screen bg-background text-white px-6 py-12 font-orbitron">
        {/* HERO */}
        <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-125"
          >
            <source src={randomVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

          <div className="relative z-20 px-6" data-aos="zoom-in" data-aos-duration="800">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tricking Lietuva</h1>
            <p className="text-lg md:text-xl mb-8 text-white">
              Pirmasis puslapis Lietuvoje skirtas Tricking bendruomenei – čia rasi informaciją apie šį sportą, treniruočių vietas ir vaizdo galeriją.
            </p>
            <a
              href="#apie"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              Sužinok daugiau
            </a>
          </div>
        </section>

        {/* APIE */}
        <section
          id="apie"
          className="scroll-mt-24 max-w-5xl mx-auto text-left mb-24 px-4 mt-24"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Kas yra Tricking?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Tricking – tai dinamiškas judesių menas, sujungiantis kovos menų smūgius, akrobatinius šuolius ir šokio elementus į vientisą sprogstamą pasirodymą. Tai nėra varžybinis sportas – tai kūrybiška judesio išraiška, kurioje svarbiausia stilius, technika ir asmeninis braižas.
          </p>
          <p className="text-lg leading-relaxed">
            Tricking bendruomenė Lietuvoje sparčiai auga – vis daugiau žmonių atranda šį laisvą ir įkvepiantį sportą, kuris ugdo ne tik fizinę ištvermę, bet ir kūrybiškumą.
          </p>
        </section>

        {/* SPOT’AI + MAP */}
        <section
          id="spotai"
          className="scroll-mt-24 max-w-6xl mx-auto mb-24 px-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Tricking spot’ai Lietuvoje</h2>

          {/* Kortelės */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#131a2f] rounded-xl p-4 shadow-md hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="100">
              <img src="/images/igym-photo.jpg" alt="Vilniaus IGYM salė" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Vilnius</h3>
              <p className="text-sm leading-relaxed">IGYM gimnastikos centras – patalpos su specialia danga triukams.</p>
            </div>
            <div className="bg-[#131a2f] rounded-xl p-4 shadow-md hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="200">
              <img src="/images/santakos-parkas.jpg" alt="Santakos parkas" className="rounded-lg mb-4" />              <h3 className="text-xl font-semibold text-primary mb-2">Kaunas</h3>
              <p className="text-sm leading-relaxed">Santakos parkas – lygi veja ir daug erdvės treniruotėms.</p>
            </div>
            <div className="bg-[#131a2f] rounded-xl p-4 shadow-md hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="300">
              <img src="/images/pirmas-tvenkas.jpg" alt="Klaipėdos spotas" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Jonava</h3>
              <p className="text-sm leading-relaxed">Pirmas tvenkinys su minkstu smeliu </p>
            </div>
          </div>

          {/* Žemėlapis */}
          <MapSection />
        </section>

        {/* VIDEO */}
        <section
          id="video"
          className="scroll-mt-24 max-w-6xl mx-auto mb-24 px-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Tricking video galerija</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="400">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AnL4Abie4Ps"
                title="Tricking video 4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="500">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rK7ID2SO_Iw"
                title="Tricking video 5"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="600">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iIuvLCS5KvY"
                title="Tricking video 6"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* KONTAKTAI */}
        <section
          id="kontaktai"
          className="scroll-mt-24 max-w-4xl mx-auto px-4 mb-12 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Susisiek su mumis</h2>
          <p className="text-lg mb-6">
            Turi klausimų ar nori prisijungti prie Tricking bendruomenės? Parašyk mums!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com" target="_blank" className="bg-primary hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition">Instagram</a>
            <a href="mailto:trickinglt@example.com" className="bg-primary hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition">El. paštas</a>
          </div>
          <p className="text-sm text-gray-400">Sukurta Lietuvoje • 2025</p>
        </section>
      </main>
    </>
  );
}

export default App;
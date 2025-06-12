function App() {
  return (
    <>
      {/* Sticky navbar su glassmorphism efektu */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-xl md:text-2xl font-bold text-primary font-orbitron tracking-wide">
            Tricking Lietuva
          </a>
          <ul className="flex gap-4 md:gap-6 text-sm md:text-base font-medium">
            <li><a href="#apie" className="text-white hover:text-primary transition">Apie</a></li>
            <li><a href="#spotai" className="text-white hover:text-primary transition">Spot’ai</a></li>
            <li><a href="#video" className="text-white hover:text-primary transition">Video</a></li>
            <li><a href="#kontaktai" className="text-white hover:text-primary transition">Kontaktai</a></li>
          </ul>
        </nav>
      </header>

      <main className="min-h-screen bg-background text-white px-6 py-12">
        {/* HERO */}
        <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-125"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

          {/* Content */}
          <div className="relative z-20 px-6" data-aos="zoom-in" data-aos-duration="800">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-orbitron mb-6">
              Tricking Lietuva
            </h1>
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
          className="scroll-mt-24 max-w-5xl mx-auto text-left mb-24 px-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Kas yra Tricking?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Tricking – tai dinamiškas judesių menas, sujungiantis kovos menų smūgius, akrobatinius šuolius ir šokio elementus į vientisą sprogstamą pasirodymą. Tai nėra varžybinis sportas – tai kūrybiška judesio išraiška, kurioje svarbiausia stilius, technika ir asmeninis braižas.
          </p>
          <p className="text-lg leading-relaxed">
            Tricking bendruomenė Lietuvoje sparčiai auga – vis daugiau žmonių atranda šį laisvą ir įkvepiantį sportą, kuris ugdo ne tik fizinę ištvermę, bet ir kūrybiškumą.
          </p>
        </section>

        {/* SPOT’AI */}
        <section
          id="spotai"
          className="scroll-mt-24 max-w-6xl mx-auto mb-24 px-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
            Tricking spot’ai Lietuvoje
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* VILNIUS */}
            <div className="bg-[#131a2f] rounded-xl p-4 shadow-md hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="100">
              <img src="https://via.placeholder.com/400x200?text=Vilnius+Spot" alt="Vilniaus spotas" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Vilnius</h3>
              <p className="text-sm leading-relaxed">Vingio parkas, sporto aikštelė su minkšta žole, tinka trukams ant žemės.</p>
            </div>
            {/* KAUNAS */}
            <div className="bg-[#131a2f] rounded-xl p-4 shadow-md hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://via.placeholder.com/400x200?text=Kaunas+Spot" alt="Kauno spotas" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Kaunas</h3>
              <p className="text-sm leading-relaxed">Santakos parkas – lygi veja ir daug erdvės treniruotėms.</p>
            </div>
            {/* KLAIPĖDA */}
            <div className="bg-[#131a2f] rounded-xl p-4 shadow-md hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="300">
              <img src="https://via.placeholder.com/400x200?text=Klaipeda+Spot" alt="Klaipėdos spotas" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Klaipėda</h3>
              <p className="text-sm leading-relaxed">Parkas prie Danės – kietesnė danga, tinka su kilimėliais ar crash mats.</p>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section
          id="video"
          className="scroll-mt-24 max-w-6xl mx-auto mb-24 px-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
            Tricking video galerija
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/XMi7NKD4GV4" title="Tricking video 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/lV7d1TBgzF4" title="Tricking video 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="300">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/RZKhVMWNjW0" title="Tricking video 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Susisiek su mumis</h2>
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
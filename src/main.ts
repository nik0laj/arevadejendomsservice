import './style.css';

const services = [
  {
    number: '01',
    title: 'Haveservice',
    text: 'Få en have, der er rar at være i. Vi hjælper med den løbende pleje og de større opgaver.',
    items: ['Plæne- og hækklipning', 'Beskæring og træfældning', 'Hegn, terrasser og stier'],
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '02',
    title: 'Grønne arealer',
    text: 'Velholdte fællesarealer og grønne omgivelser, der fungerer i hverdagen for beboere og gæster.',
    items: ['Plænepleje og vedligeholdelse', 'Buske og beplantning', 'Aftaler til foreninger og virksomheder'],
    image: 'https://images.unsplash.com/photo-1599685315640-4c7f5d6e5f1c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '03',
    title: 'Ejendomsservice',
    text: 'En ekstra hånd til de praktiske opgaver, så ejendommen er pæn, tryg og klar til hverdagen.',
    items: ['Vicevært- og driftsopgaver', 'Storskrald og aflæsninger', 'Maling, flyttesyn og klargøring'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85',
  },
];

const serviceCards = services
  .map(
    (service) => `
      <article class="service-card">
        <div class="service-image" style="background-image: url('${service.image}')">
          <span class="service-number">${service.number}</span>
        </div>
        <div class="service-content">
          <h3>${service.title}</h3>
          <p>${service.text}</p>
          <ul>${service.items.map((item) => `<li>${item}</li>`).join('')}</ul>
          <a class="text-link" href="#kontakt">Læs mere <span>↗</span></a>
        </div>
      </article>
    `,
  )
  .join('');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="Arevad Ejendomsservice forside">
        <span class="brand-mark" aria-hidden="true"><span></span></span>
        <span class="brand-copy"><strong>AREVAD</strong><small>Ejendomsservice</small></span>
      </a>
      <button class="menu-toggle" aria-label="Åbn menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="main-nav" aria-label="Hovedmenu">
        <a href="#ydelser">Ydelser</a>
        <a href="#om-os">Om os</a>
        <a href="#proces">Sådan arbejder vi</a>
        <a class="nav-cta" href="#kontakt">Få et tilbud <span>↗</span></a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-text">
        <p class="eyebrow"><span></span> Have- og ejendomsservice</p>
        <h1>Praktisk hjælp<br /><em>til hus og have.</em></h1>
        <p class="hero-lead">Vi holder dine grønne arealer og din ejendom i god stand — med ordentlighed, erfaring og blik for detaljen.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#kontakt">Få et uforpligtende tilbud <span>↗</span></a>
          <a class="phone-link" href="tel:+4526884884"><span class="phone-icon">⌕</span> 26 884 884</a>
        </div>
        <div class="hero-note"><span class="check">✓</span> Vi kommer altid forbi og ser på opgaven først</div>
      </div>
      <div class="hero-visual">
        <div class="hero-image"></div>
        <div class="hero-sticker"><strong>25+</strong><span>års erfaring<br />med service</span></div>
        <div class="hero-leaf" aria-hidden="true">✦</div>
      </div>
    </section>

    <section class="intro section-pad">
      <div class="container intro-grid">
        <div>
          <p class="eyebrow"><span></span> Det handler om mere end vedligeholdelse</p>
          <h2>Et pænt resultat.<br /><em>Hver gang.</em></h2>
        </div>
        <div class="intro-copy">
          <p>Hos Arevad Ejendomsservice får du en fast og pålidelig samarbejdspartner til de opgaver, der får hus, have og ejendom til at fungere.</p>
          <p>Vi hjælper private, virksomheder, grundejerforeninger og boligselskaber i Nordsjælland og København.</p>
          <a class="text-link" href="#om-os">Mød Karsten <span>↗</span></a>
        </div>
      </div>
    </section>

    <section class="services section-pad" id="ydelser">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow"><span></span> Det kan vi hjælpe med</p><h2>Service, der gør<br /><em>en forskel.</em></h2></div>
          <p>Fra den faste græsslåning til de større praktiske opgaver. Vi skræddersyr hjælpen efter din ejendom og dine behov.</p>
        </div>
        <div class="service-grid">${serviceCards}</div>
      </div>
    </section>

    <section class="process section-pad" id="proces">
      <div class="container">
        <div class="process-head"><p class="eyebrow light"><span></span> En enkel proces</p><h2>Fra første snak<br />til <em>færdigt arbejde.</em></h2></div>
        <div class="steps">
          <div class="step"><span>01</span><h3>Tag fat i os</h3><p>Ring eller skriv, og fortæl kort om det, du har brug for hjælp til.</p></div>
          <div class="step"><span>02</span><h3>Vi ser på opgaven</h3><p>Karsten kommer forbi, så vi sammen kan finde den rigtige løsning.</p></div>
          <div class="step"><span>03</span><h3>Du får et tilbud</h3><p>Du modtager et uforpligtende tilbud, før arbejdet går i gang.</p></div>
        </div>
      </div>
    </section>

    <section class="about section-pad" id="om-os">
      <div class="container about-grid">
        <div class="about-image"></div>
        <div class="about-content"><p class="eyebrow"><span></span> Mennesket bag</p><h2>Ordentlighed<br />er en del af <em>arbejdet.</em></h2><p>Arevad Ejendomsservice er bygget på ønsket om at levere kvalitetsarbejde, der passer til den enkelte kundes behov. Vi holder, hvad vi lover, og går først, når opgaven er løst ordentligt.</p><p>Det gælder, uanset om du har brug for hjælp i haven, på fællesarealerne eller omkring hele ejendommen.</p><a class="button button-outline" href="#kontakt">Lad os tage en snak <span>↗</span></a></div>
      </div>
    </section>

    <section class="contact section-pad" id="kontakt">
      <div class="container contact-grid">
        <div class="contact-intro"><p class="eyebrow"><span></span> Skal vi hjælpe dig?</p><h2>Fortæl os om<br /><em>din opgave.</em></h2><p>Ring til Karsten eller send en besked. Vi vender tilbage hurtigst muligt.</p><div class="contact-details"><a href="tel:+4526884884"><small>Telefon</small><strong>26 884 884</strong></a><a href="mailto:mail@arevadservice.dk"><small>E-mail</small><strong>mail@arevadservice.dk</strong></a><div><small>Adresse</small><strong>Engsvinget 8<br />3200 Helsinge</strong></div></div></div>
        <form class="contact-form"><label>Dit navn<input type="text" name="name" placeholder="Skriv dit navn" required /></label><label>Telefon eller e-mail<input type="text" name="contact" placeholder="Hvordan kontakter vi dig?" required /></label><label>Hvad skal vi hjælpe med?<textarea name="message" rows="4" placeholder="Fortæl kort om opgaven"></textarea></label><button class="button button-dark" type="submit">Send forespørgsel <span>↗</span></button><p class="form-status" role="status"></p></form>
      </div>
    </section>
  </main>

  <footer class="site-footer"><div class="container footer-inner"><a class="brand footer-brand" href="#top"><span class="brand-mark" aria-hidden="true"><span></span></span><span class="brand-copy"><strong>AREVAD</strong><small>Ejendomsservice</small></span></a><p>Praktisk hjælp til hus og have.</p><p>© ${new Date().getFullYear()} Arevad Ejendomsservice</p></div></footer>
`;

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('.main-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelector<HTMLFormElement>('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector<HTMLParagraphElement>('.form-status');
  if (status) status.textContent = 'Tak for din forespørgsel — ring gerne på 26 884 884, så tager vi en snak.';
});

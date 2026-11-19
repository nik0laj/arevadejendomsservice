import './style.css';
import './responsive.css';

const services = [
  {
    number: '01',
    title: 'Haveservice',
    text: 'Få en have, der er rar at være i. Vi hjælper med den løbende pleje og de større opgaver.',
    items: ['Plæne- og hækklipning', 'Beskæring og træfældning', 'Stubfræsning', 'Hegn, terrasser og stier'],
    image: 'assets/arevad-plaeneklipning.jpg',
    imageAlt: 'Plæneklipning udført af Arevad Ejendomsservice',
    imageWidth: 575,
    imageHeight: 200,
  },
  {
    number: '02',
    title: 'Grønne arealer',
    text: 'Velholdte fællesarealer og grønne omgivelser, der fungerer i hverdagen for beboere og gæster.',
    items: ['Plænepleje og vedligeholdelse', 'Buske og beplantning', 'Aftaler til foreninger og virksomheder'],
    image: 'assets/arevad-haveservice.jpg',
    imageAlt: 'Hæk og grønne arealer i en have',
    imageWidth: 575,
    imageHeight: 321,
  },
  {
    number: '03',
    title: 'Ejendomsservice',
    text: 'En ekstra hånd til de praktiske opgaver, så ejendommen er pæn, tryg og klar til hverdagen.',
    items: ['Vicevært- og driftsopgaver', 'Storskrald og aflæsninger', 'Maling, flyttesyn og klargøring'],
    image: 'assets/arevad-servicebil.jpg',
    imageAlt: 'Karsten ved Arevad Ejendomsservices servicebil',
    imageWidth: 575,
    imageHeight: 227,
  },
];

const responsiveSrcSet = (url: string) =>
  url.includes('images.unsplash.com')
    ? [480, 800, 1200].map((width) => `${url.replace('w=1200', `w=${width}`)} ${width}w`).join(', ')
    : `${url} 575w`;

const serviceCards = services
  .map(
    (service) => `
      <article class="service-card">
        <div class="service-image">
          <img
            src="${service.image}"
            srcset="${responsiveSrcSet(service.image)}"
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
            alt="${service.imageAlt}"
            width="${service.imageWidth}"
            height="${service.imageHeight}"
            loading="lazy"
            decoding="async"
          />
          <span class="service-number">${service.number}</span>
        </div>
        <div class="service-content">
          <h3>${service.title}</h3>
          <p>${service.text}</p>
          <ul>${service.items.map((item) => `<li>${item}</li>`).join('')}</ul>
          <a class="text-link" href="#kontakt">Få et tilbud <span>↗</span></a>
        </div>
      </article>
    `,
  )
  .join('');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="Arevad Ejendomsservice forside">
        <img class="brand-logo" src="assets/arevad-logo-transparent.png" alt="Arevad Ejendomsservice - Praktisk hjælp til hus og have" />
      </a>
      <button class="menu-toggle" aria-label="Åbn menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>
      <nav class="main-nav" id="main-nav" aria-label="Hovedmenu">
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
          <a class="phone-link" href="tel:+4526884884"><svg class="phone-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.02l-2.19 2.19z" /></svg> 26 884 884</a>
        </div>
        <div class="hero-note"><span class="check">✓</span> Vi kommer altid forbi og ser på opgaven først</div>
      </div>
      <div class="hero-visual">
        <img
          class="hero-image"
          src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1600&q=90"
          srcset="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=960&q=85 960w, https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1600&q=90 1600w"
          sizes="(max-width: 900px) 100vw, 53vw"
          alt="Havearbejde i et grønt bed"
          width="1600"
          height="1000"
          fetchpriority="high"
          decoding="async"
        />
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
          <p>Vi hjælper private, virksomheder, grundejerforeninger og boligselskaber i Nordsjælland og København. Vi har særligt fokus på Gribskov Kommune og byer som Helsinge, Hillerød, Frederiksværk, Hundested, Græsted og Gilleleje.</p>
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

    <section class="reviews section-pad" aria-labelledby="reviews-title">
      <div class="container">
        <div class="reviews-heading">
          <div>
            <p class="eyebrow"><span></span> Anbefalinger fra kunder</p>
            <h2 id="reviews-title">Det siger kunderne.</h2>
          </div>
          <a
            class="text-link"
            href="https://dk.trustpilot.com/review/www.arevadservice.dk"
            target="_blank"
            rel="noopener noreferrer"
          >Se anmeldelser på Trustpilot <span>↗</span></a>
        </div>
        <div class="reviews-grid">
          <article class="review-card">
            <p class="review-rating" aria-label="5 ud af 5 stjerner">★★★★★ <span>5/5 på Trustpilot</span></p>
            <blockquote class="review-quote">På en uge fik vi fjernet den gamle fliseterrasse, gravet jord af og lagt ny stor træterrasse. … alt ryddet pænt op.</blockquote>
            <p class="review-author">Gitte S.</p>
          </article>
          <article class="review-card">
            <p class="review-rating" aria-label="5 ud af 5 stjerner">★★★★★ <span>5/5 på Trustpilot</span></p>
            <blockquote class="review-quote">Det var hurtigt og rigtig pænt arbejde. … Venlig og imødekommende.</blockquote>
            <p class="review-author">Marianne F.</p>
          </article>
          <article class="review-card">
            <p class="review-rating" aria-label="5 ud af 5 stjerner">★★★★★ <span>5/5 på Trustpilot</span></p>
            <blockquote class="review-quote">Fik klippet min hæk af Arevad Service og kan kun tilstå at den service jeg fik, overgik hvad jeg forventede. … Det er ikke sidste gang, vi har brugt Arevad Service.</blockquote>
            <p class="review-author">Peter N.</p>
          </article>
        </div>
        <p class="reviews-note">Forkortede citater fra Trustpilot. Udeladelser er markeret med …</p>
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
        <img
          class="about-image"
          src="assets/karsten-arevad.jpg"
          alt="Karsten Arevad i haven"
          width="300"
          height="200"
          loading="lazy"
          decoding="async"
        />
        <div class="about-content"><p class="eyebrow"><span></span> Mennesket bag</p><h2>Jeg hedder<br /><em>Karsten Arevad.</em></h2><p>Jeg hjælper med opgaver i haven, på fællesarealer og omkring ejendomme. Jeg kommer selv ud og ser på opgaven, så vi sammen kan finde den løsning, der passer til dig.</p><p>Med over 25 års erfaring kan jeg hjælpe dig med at afklare opgaven, gennemgå mulighederne og finde en praktisk løsning, der passer til din ejendom.</p><p>For mig handler godt arbejde om ordentlighed: at holde, hvad jeg lover, og først gå, når opgaven er løst ordentligt. Har du en opgave, er du velkommen til at tage en snak med mig.</p><a class="button button-outline" href="#kontakt">Tag en snak med mig <span>↗</span></a></div>
      </div>
      <div class="container">
        <img
          class="about-van"
          src="assets/arevad-servicebil.jpg"
          alt="Karsten ved Arevad Ejendomsservices servicebil"
          width="575"
          height="227"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>

    <section class="contact section-pad" id="kontakt">
      <div class="container contact-grid">
        <div class="contact-intro"><p class="eyebrow"><span></span> Skal vi hjælpe dig?</p><h2>Fortæl os om<br /><em>din opgave.</em></h2><p>Ring til Karsten eller send en besked. Vi vender tilbage hurtigst muligt.</p><div class="contact-details"><a href="tel:+4526884884"><small>Telefon</small><strong>26 884 884</strong></a><a href="mailto:mail@arevadservice.dk"><small>E-mail</small><strong>mail@arevadservice.dk</strong></a><div><small>Adresse</small><strong>Engsvinget 8<br />3200 Helsinge</strong></div></div></div>
        <form class="contact-form">
          <label>Dit navn<input type="text" name="name" placeholder="Skriv dit navn" autocomplete="name" required /></label>
          <label>Telefon eller e-mail<input type="text" name="contact" placeholder="Hvordan kontakter vi dig?" required /></label>
          <label>Hvad skal vi hjælpe med?<textarea name="message" rows="4" placeholder="Fortæl kort om opgaven"></textarea></label>
          <button class="button button-dark" type="submit">Åbn e-mail for at sende <span>↗</span></button>
          <p class="form-help">En e-mailkladde til Arevad åbnes med dine oplysninger. Du sender den selv fra din e-mail-app; oplysningerne bruges til at besvare din henvendelse.</p>
          <p class="form-status" role="status"></p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand-block">
        <a class="brand footer-brand" href="#top" aria-label="Arevad Ejendomsservice forside">
          <img class="brand-logo" src="assets/arevad-logo-transparent.png" alt="" />
        </a>
        <p>Praktisk hjælp til hus og have.</p>
      </div>
      <div class="footer-contact">
        <h2 class="footer-heading">Kontakt</h2>
        <a href="tel:+4526884884">26 884 884</a>
        <a href="mailto:mail@arevadservice.dk">mail@arevadservice.dk</a>
      </div>
      <div class="footer-business">
        <h2 class="footer-heading">Adresse og virksomhed</h2>
        <address>Engsvinget 8<br />3200 Helsinge</address>
        <p>CVR: 39 49 06 92</p>
      </div>
      <p class="footer-legal">© ${new Date().getFullYear()} Arevad Ejendomsservice</p>
    </div>
  </footer>
`;

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('.main-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Luk menu' : 'Åbn menu');
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Åbn menu');
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Åbn menu');
    menuToggle?.focus();
  }
});

const contactForm = document.querySelector<HTMLFormElement>('.contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get('name') ?? '').trim();
  const contact = String(formData.get('contact') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const body = [`Navn: ${name}`, `Telefon eller e-mail: ${contact}`, `Besked: ${message || '(ikke angivet)'}`].join('\n');
  const mailtoUrl = `mailto:mail@arevadservice.dk?subject=${encodeURIComponent('Forespørgsel via Arevad Ejendomsservice')}&body=${encodeURIComponent(body)}`;
  const status = document.querySelector<HTMLParagraphElement>('.form-status');
  if (status) {
    status.textContent = 'Vi forsøger at åbne din e-mail-app. Husk selv at trykke Send. Hvis den ikke åbner, skriv til ';
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:mail@arevadservice.dk';
    emailLink.textContent = 'mail@arevadservice.dk';
    status.append(emailLink);
    status.append(' eller ring på 26 884 884.');
  }
  window.location.href = mailtoUrl;
});

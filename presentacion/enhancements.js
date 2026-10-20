(() => {
  const root = document.querySelector('#root');
  const officialMark = 'media/logo-t.png';

  if (!root) return;

  const projectImpact = {
    avigo: {
      stack: 'Datos operativos · analítica · app móvil',
      outcome: 'Visibilidad para actuar antes.'
    },
    agroclub: {
      stack: 'Comercio · contenido · comunidad',
      outcome: 'Mercado y conocimiento en un mismo ecosistema.'
    },
    vision: {
      stack: 'Contenido · mercado · inteligencia sectorial',
      outcome: 'Decisiones pecuarias con mayor contexto.'
    },
    gymvexa: {
      stack: 'SaaS · accesos QR · automatización',
      outcome: 'Toda la experiencia del gimnasio conectada.'
    },
    praxia: {
      stack: 'Expediente · agenda · mensajería',
      outcome: 'Menos administración, más tiempo clínico.'
    },
    pondera: {
      stack: 'Optimización · reglas · reportes',
      outcome: 'Precisión técnica con el costo siempre visible.'
    },
    imdac: {
      stack: 'Obra · finanzas · alertas',
      outcome: 'Desviaciones visibles antes de convertirse en pérdidas.'
    },
    globalvet: {
      stack: 'LMS · pagos · certificados verificables',
      outcome: 'Formación que también construye comunidad.'
    },
    dulcelab: {
      stack: 'Contenido · comunidad · conversión',
      outcome: 'Del aprendizaje al emprendimiento.'
    },
    mediteck: {
      stack: 'Directorio · agenda · pagos',
      outcome: 'Encontrar y reservar atención en menos pasos.'
    },
    expo: {
      stack: 'Marca · registro · agenda digital',
      outcome: 'Una experiencia continua antes, durante y después.'
    }
  };

  const projectSystems = {
    avigo: {
      label: 'OPERACIÓN AVÍCOLA', pulse: 'EN LÍNEA', accent: '#65f09c',
      metrics: [['AMBIENTE', 'ESTABLE'], ['CONSUMO', '−4.8%'], ['ALERTAS', '02']],
      flow: ['Sensores', 'Datos', 'Acción']
    },
    agroclub: {
      label: 'ECOSISTEMA DEL CAMPO', pulse: 'ACTIVO', accent: '#79d68c',
      metrics: [['MERCADO', '+4.8%'], ['CONTENIDO', 'ACTIVO'], ['COMUNIDAD', 'ONLINE']],
      flow: ['Descubrir', 'Aprender', 'Conectar']
    },
    vision: {
      label: 'INTELIGENCIA PECUARIA', pulse: '360°', accent: '#e0b567',
      metrics: [['CLIMA', '28°'], ['MERCADO', 'ACTIVO'], ['CONTEXTO', 'LISTO']],
      flow: ['Observar', 'Entender', 'Decidir']
    },
    gymvexa: {
      label: 'OPERACIÓN FITNESS', pulse: 'EN VIVO', accent: '#a976ff',
      metrics: [['ACCESOS', 'QR'], ['RUTINAS', 'ACTIVAS'], ['COBROS', 'AL DÍA']],
      flow: ['Captar', 'Activar', 'Retener']
    },
    praxia: {
      label: 'FLUJO CLÍNICO', pulse: 'CONECTADO', accent: '#6ecdf1',
      metrics: [['AGENDA', '11:30'], ['MENSAJERÍA', 'OK'], ['EXPEDIENTE', '360°']],
      flow: ['Agenda', 'Consulta', 'Seguimiento']
    },
    pondera: {
      label: 'MOTOR DE OPTIMIZACIÓN', pulse: 'ÓPTIMO', accent: '#e2aa3d',
      metrics: [['COSTO', '$8.42/kg'], ['LISINA', '91%'], ['REGLAS', 'CUMPLE']],
      flow: ['Variables', 'Restricciones', 'Fórmula']
    },
    imdac: {
      label: 'CONTROL DE OBRA', pulse: 'SINCRONIZADO', accent: '#ff9d32',
      metrics: [['FÍSICO', '74%'], ['FINANCIERO', '68%'], ['DESVÍOS', '06']],
      flow: ['Campo', 'Finanzas', 'Decisión']
    },
    globalvet: {
      label: 'APRENDIZAJE VERIFICABLE', pulse: 'VALIDADO', accent: '#bc8cff',
      metrics: [['RUTAS', '03'], ['FOLIO', 'ACTIVO'], ['CERTIFICADO', 'QR']],
      flow: ['Aprender', 'Certificar', 'Crecer']
    },
    dulcelab: {
      label: 'CRECIMIENTO DEL ALUMNO', pulse: 'ACTIVO', accent: '#f0c872',
      metrics: [['MODALIDAD', 'ONLINE'], ['RECURSOS', 'KIT'], ['CERTIFICADO', 'QR']],
      flow: ['Aprende', 'Crea', 'Emprende']
    },
    mediteck: {
      label: 'ACCESO A LA SALUD', pulse: 'DISPONIBLE', accent: '#68d5d2',
      metrics: [['ESPECIALISTAS', '02'], ['AGENDA', 'HOY'], ['PAGOS', 'LISTOS']],
      flow: ['Buscar', 'Reservar', 'Atender']
    },
    expo: {
      label: 'EVENTO CONECTADO', pulse: '07 AGO', accent: '#e5a530',
      metrics: [['REGISTRO', 'ACTIVO'], ['AGENDA', 'DIGITAL'], ['CONTENIDO', 'ON DEMAND']],
      flow: ['Antes', 'En vivo', 'Después']
    }
  };

  const projectBackdrops = {
    avigo: 'media/precision-operations-landscape-v1.png',
    gymvexa: 'media/connected-fitness-landscape-v1.png',
    pondera: 'media/precision-operations-landscape-v1.png',
    imdac: 'media/precision-operations-landscape-v1.png',
    mediteck: 'media/human-systems-landscape-v1.png'
  };

  const portfolioProjectNumbers = {
    gymvexa: '01',
    praxia: '02',
    imdac: '03',
    pondera: '04',
    feedmix: '05'
  };

  const capabilities = [
    ['01', 'Estrategia de producto', 'Convertimos retos de negocio en una ruta tecnológica clara.', 'Ruta priorizada'],
    ['02', 'Experiencia & marca', 'Diseñamos interfaces e identidades que hacen entendible cada producto.', 'Prototipo validable'],
    ['03', 'Web, apps & plataformas', 'Construimos herramientas a la medida para clientes, equipos y operaciones.', 'Producto en operación'],
    ['04', 'IA & automatización', 'Aplicamos agentes y flujos inteligentes donde generan valor real.', 'Flujo automatizado'],
    ['05', 'Datos & conexiones', 'Integramos sistemas, pagos, mensajería y analítica en una sola operación.', 'Operación conectada'],
    ['06', 'Cloud & evolución', 'Desplegamos, protegemos y mejoramos productos preparados para crecer.', 'Evolución continua']
  ];

  const clubFamily = [];

  const create = (tag, className, html) => {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = html;
    return element;
  };

  const clubButtonsMarkup = (activeId = '') => clubFamily.map((club) => `
    <button
      class="club-network-link${club.id === activeId ? ' is-active' : ''}"
      type="button"
      data-club-target="${club.destination}"
      data-short-label="${club.shortLabel}"
      aria-label="Ver ${club.label} dentro de la red de clubes"
      ${club.id === activeId ? 'aria-current="true"' : ''}
    >
      <img src="${club.image}" alt="">
      <span><b>${club.label}</b><small>${club.sector}</small></span>
    </button>
  `).join('');

  const bindClubNavigation = (container) => {
    container.querySelectorAll('[data-club-target]').forEach((button) => {
      button.addEventListener('click', () => {
        const destination = button.dataset.clubTarget;
        const target = [...root.querySelectorAll('button')].find((candidate) => (
          candidate.getAttribute('aria-label') === `Ir a ${destination}`
        ));

        target?.click();
      });
    });
  };

  const enhanceIntro = (stage) => {
    const subtitle = stage.querySelector('.intro-sub');
    const copy = stage.querySelector('.intro-copy');
    const monument = stage.querySelector('.tec-monument');

    if (subtitle) {
      subtitle.textContent = 'Convertimos retos de negocio en productos, automatizaciones y sistemas digitales listos para operar y crecer.';
    }

    if (copy && !copy.querySelector('.intro-signals')) {
      copy.append(create('div', 'intro-signals', `
        <span><b>5</b><small>productos seleccionados</small></span>
        <i></i>
        <span><b>4</b><small>verticales</small></span>
        <i></i>
        <span><b>1</b><small>equipo integral</small></span>
      `));
    }

    if (copy && !copy.querySelector('.intro-operating-path')) {
      copy.append(create('div', 'intro-operating-path', `
        <small>DE RETO A OPERACIÓN</small>
        <div><span>Reto</span><i></i><span>Producto</span><i></i><span>Operación</span><i></i><span>Escala</span></div>
      `));
    }

    if (monument && !monument.querySelector('.official-mark-hero')) {
      const mark = document.createElement('img');
      mark.className = 'official-mark-hero';
      mark.src = officialMark;
      mark.alt = '';

      const glow = document.createElement('div');
      glow.className = 'official-mark-glow';

      monument.replaceChildren(glow, mark);
      monument.append(create('div', 'intro-signal-field', `
        <span style="--signal-x:18%;--signal-y:29%;--signal-delay:-1s"></span>
        <span style="--signal-x:77%;--signal-y:20%;--signal-delay:-2.6s"></span>
        <span style="--signal-x:83%;--signal-y:72%;--signal-delay:-4.2s"></span>
        <span style="--signal-x:25%;--signal-y:78%;--signal-delay:-5.7s"></span>
      `));
    }
  };

  const enhanceEcosystem = (stage) => {
    const layout = stage.querySelector('.ecosystem-layout');
    const orbit = stage.querySelector('.orbit');
    const orbitCore = stage.querySelector('.orbit-core');
    const orbitMark = stage.querySelector('.orbit-core img');
    const orbitNodes = [
      { image: 'media/feedmix-mark.svg', alt: 'FeedMix MX', label: 'FeedMix', meta: 'FORMULACIÓN AVÍCOLA', accent: '#f59e0b' },
      { image: 'media/praxia-human-care.webp', alt: 'Praxia', label: 'Praxia', meta: 'CARE OS', accent: '#79d9e6' },
      { image: 'media/pondera.png', alt: 'Pondera', label: 'Pondera', meta: 'OPTIMIZACIÓN', accent: '#e2aa3d' },
      { image: 'media/gym-fuerza.webp', alt: 'Gymvexa', label: 'Gymvexa', meta: 'FITNESS SAAS', accent: '#8f6cff' },
      { image: 'media/imdac-logo.png', alt: 'IMDAC', label: 'IMDAC', meta: 'CONTROL DE OBRA', accent: '#ff9d32' }
    ];
    const particlePositions = [
      [12, 17, 2], [28, 7, 1], [47, 15, 2], [71, 9, 1], [88, 24, 2],
      [94, 49, 1], [83, 74, 2], [62, 89, 1], [39, 94, 2], [16, 81, 1],
      [5, 58, 2], [23, 43, 1], [76, 38, 1], [55, 75, 2]
    ];

    if (!layout) return;

    if (orbitMark) orbitMark.src = officialMark;

    stage.querySelectorAll('.orbit-label').forEach((label, index) => {
      const node = orbitNodes[index];
      if (!node) {
        label.hidden = true;
        return;
      }

      if (label.dataset.orbitEnhanced === 'true') return;

      let image = label.querySelector('img');
      if (!image) {
        image = document.createElement('img');
        label.prepend(image);
      }

      image.src = node.image;
      image.alt = node.alt;

      [...label.childNodes]
        .filter((child) => child.nodeType === Node.TEXT_NODE)
        .forEach((child) => child.remove());

      label.style.setProperty('--node-accent', node.accent);
      label.style.setProperty('--node-scan-delay', `-${index * 2.15}s`);
      label.dataset.orbitEnhanced = 'true';
      label.dataset.orbitIndex = String(index + 1).padStart(2, '0');
      label.append(create('span', 'orbit-label-copy', `
        <small>${String(index + 1).padStart(2, '0')} · ${node.meta}</small>
        <b>${node.label}</b>
      `));
      label.append(create('span', 'orbit-node-activity', '<i></i><i></i><i></i>'));
    });

    if (orbit && !orbit.querySelector('.orbit-system-enhancement')) {
      const system = create('div', 'orbit-system-enhancement', `
        <div class="orbit-grid-lines"></div>
        <div class="orbit-radar"></div>
        <div class="orbit-arc orbit-arc-one"></div>
        <div class="orbit-arc orbit-arc-two"></div>
        <div class="orbit-arc orbit-arc-three"></div>
        <div class="orbit-connections">
          <span style="--connection-angle:-145deg;--connection-length:46%;--connection-delay:-0.4s;--connection-color:#8bd279"><i></i></span>
          <span style="--connection-angle:-42deg;--connection-length:43%;--connection-delay:-1.7s;--connection-color:#79d9e6"><i></i></span>
          <span style="--connection-angle:5deg;--connection-length:46%;--connection-delay:-2.8s;--connection-color:#b891ff"><i></i></span>
          <span style="--connection-angle:67deg;--connection-length:45%;--connection-delay:-3.6s;--connection-color:#5388ff"><i></i></span>
          <span style="--connection-angle:145deg;--connection-length:45%;--connection-delay:-4.4s;--connection-color:#e8bd6d"><i></i></span>
        </div>
        <div class="orbit-particles">
          ${particlePositions.map(([x, y, size], index) => (
            `<i style="--particle-x:${x}%;--particle-y:${y}%;--particle-size:${size}px;--particle-delay:-${index * 0.55}s"></i>`
          )).join('')}
        </div>
        <div class="orbit-satellites">
          <div class="orbit-satellite orbit-satellite-one">
            <div class="orbit-satellite-anchor"><span class="orbit-satellite-chip"><i></i>IA</span></div>
          </div>
          <div class="orbit-satellite orbit-satellite-two is-reverse">
            <div class="orbit-satellite-anchor"><span class="orbit-satellite-chip"><i></i>DATOS</span></div>
          </div>
          <div class="orbit-satellite orbit-satellite-three">
            <div class="orbit-satellite-anchor"><span class="orbit-satellite-chip"><i></i>PAGOS</span></div>
          </div>
          <div class="orbit-satellite orbit-satellite-four is-reverse">
            <div class="orbit-satellite-anchor"><span class="orbit-satellite-chip"><i></i>CLOUD</span></div>
          </div>
          <div class="orbit-satellite orbit-satellite-five">
            <div class="orbit-satellite-anchor"><span class="orbit-satellite-chip"><i></i>AUTO</span></div>
          </div>
        </div>
        <span class="orbit-live-state"><i></i> RED TEC · EN OPERACIÓN</span>
      `);

      orbit.prepend(system);

      const thirdRing = document.createElement('div');
      thirdRing.className = 'orbit-ring ring-three';
      orbit.append(thirdRing);
    }

    if (orbitCore && !orbitCore.querySelector('.orbit-core-caption')) {
      orbitCore.append(create('span', 'orbit-core-caption', `
        <b>05</b><small>PRODUCTOS</small><i></i><b>04</b><small>VERTICALES</small>
      `));
    }

    if (layout.querySelector('.technology-stack')) return;

    layout.append(create('div', 'technology-stack', `
      <small>UN SISTEMA, DE PUNTA A PUNTA</small>
      <div>
        <span>Experiencia</span><i>→</i>
        <span>Software</span><i>→</i>
        <span>IA & automatización</span><i>→</i>
        <span>Datos & integraciones</span><i>→</i>
        <span>Cloud & operación</span>
      </div>
    `));
  };

  const enhanceClubFamily = (stage, id) => {
    const clubIndex = clubFamily.findIndex((club) => club.id === id);
    const club = clubFamily[clubIndex];
    const copy = stage.querySelector('.project-copy');
    const timelineLabel = root.querySelector('.timeline-label strong');
    const impact = copy?.querySelector('.project-impact');

    if (!club || !copy) return;

    stage.classList.add('stage-club-family');

    if (timelineLabel) timelineLabel.textContent = `CLUBES · ${club.label}`;

    if (impact) {
      const impactLabel = impact.querySelector('small');
      if (impactLabel) impactLabel.textContent = 'MOTOR TECNOLÓGICO COMPARTIDO';
    }

    if (!copy.querySelector('.club-series-marker')) {
      const marker = create('div', 'club-series-marker', `
        <b>RED DE CLUBES · ${String(clubIndex + 1).padStart(2, '0')}/05</b>
        <span>Una base tecnológica. Una identidad propia.</span>
      `);

      const tags = copy.querySelector('.tag-row');
      tags?.after(marker);
    }

    if (!stage.querySelector('.club-family-rail')) {
      const rail = create('nav', 'club-family-rail', `
        <div class="club-family-summary">
          <small>ECOSISTEMAS TEC</small>
          <strong>5 comunidades</strong>
          <span>con un motor compartido</span>
        </div>
        <div class="club-family-items">${clubButtonsMarkup(id)}</div>
      `);

      rail.setAttribute('aria-label', 'Explorar la red de clubes especializados');
      stage.append(rail);
      bindClubNavigation(rail);
    }
  };

  const enhanceProjectTheater = (stage, id) => {
    const system = projectSystems[id];
    const visual = stage.querySelector('.project-visual, .vision-layout, .praxia-layout, .dulcelab-layout, .expo-layout');

    if (!system || !visual) return;

    stage.classList.add('stage-product-theater');
    stage.style.setProperty('--project-accent', system.accent);

    if (projectBackdrops[id] && !visual.querySelector('.project-scene-backdrop')) {
      const backdrop = document.createElement('img');
      backdrop.className = 'project-scene-backdrop';
      backdrop.src = projectBackdrops[id];
      backdrop.alt = '';
      backdrop.setAttribute('aria-hidden', 'true');
      visual.prepend(backdrop);
    }

    if (!visual.querySelector('.project-system')) {
      visual.append(create('aside', 'project-system', `
        <header>
          <span><i></i>${system.label}</span>
          <b>${system.pulse}</b>
        </header>
        <div class="project-system-metrics">
          ${system.metrics.map(([label, value]) => `<span><small>${label}</small><strong>${value}</strong></span>`).join('')}
        </div>
        <footer>
          ${system.flow.map((step, index) => `${index ? '<i></i>' : ''}<span>${step}</span>`).join('')}
        </footer>
      `));
    }
  };

  const enhanceProjectDetails = (stage, id) => {
    if (id === 'avigo') {
      const visual = stage.querySelector('.avigo-visual');
      if (visual && !visual.querySelector('.avigo-sensor-field')) {
        visual.append(create('div', 'avigo-sensor-field', `
          <span class="sensor-beacon sensor-beacon-a"><i></i><b>24.2°</b><small>TEMP</small></span>
          <span class="sensor-beacon sensor-beacon-b"><i></i><b>61%</b><small>HUM</small></span>
          <span class="sensor-beacon sensor-beacon-c"><i></i><b>OK</b><small>AGUA</small></span>
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <path class="route-a" d="M16 50 C29 42 41 42 54 43"></path>
            <path class="route-b" d="M48 72 C50 60 52 51 54 43"></path>
            <path class="route-c" d="M94 58 C79 54 66 47 54 43"></path>
            <circle cx="54" cy="43" r="0.9"></circle>
          </svg>
        `));
      }

      if (visual && !visual.querySelector('.avigo-field-console')) {
        visual.append(create('section', 'avigo-field-console', `
          <header>
            <span><i></i> MAPA OPERATIVO</span>
            <b>EN LÍNEA</b>
          </header>
          <div class="avigo-zone-map" aria-label="Zonas de monitoreo conectadas">
            ${Array.from({ length: 24 }, (_, index) => `<i class="${[3, 8, 14, 19, 22].includes(index) ? 'is-pulsing' : ''}"></i>`).join('')}
            <span class="avigo-zone-route"></span>
            <strong>LOTE A-17<small>ZONAS CONECTADAS</small></strong>
          </div>
          <div class="avigo-console-metrics">
            <span><small>CLIMA</small><b>24.2°</b></span>
            <span><small>HUM</small><b>61%</b></span>
            <span><small>AGUA</small><b>OK</b></span>
          </div>
          <div class="avigo-ai-note">
            <span>IA</span>
            <p><b>Patrón estable</b><small>Ambiente y consumo dentro de rango</small></p>
            <i>→</i>
          </div>
        `));
      }
    }

    if (id === 'agroclub') {
      const visual = stage.querySelector('.agro-visual');
      const panel = stage.querySelector('.agro-panel');

      if (panel && panel.dataset.agroMarketUi !== 'true') {
        panel.dataset.agroMarketUi = 'true';
        panel.innerHTML = `
          <header class="agro-market-head"><span data-short="MERCADO"><i></i> MERCADO</span><b>HOY</b></header>
          <div class="agro-market-main">
            <p><small>MAÍZ BLANCO</small><strong>+4.8%</strong><span>tendencia</span></p>
            <svg viewBox="0 0 180 62" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="agroMarketFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#79d68c" stop-opacity=".42"/><stop offset="1" stop-color="#79d68c" stop-opacity="0"/></linearGradient></defs>
              <path class="agro-market-area" d="M0 53 L0 45 L20 42 L39 46 L61 31 L82 36 L104 22 L126 31 L149 16 L180 9 L180 53 Z"></path>
              <path class="agro-market-line" d="M0 45 L20 42 L39 46 L61 31 L82 36 L104 22 L126 31 L149 16 L180 9"></path>
              <circle cx="180" cy="9" r="3"></circle>
            </svg>
          </div>
          <div class="agro-market-watch"><span class="is-active">MAÍZ</span><span>SORGO</span><span>SOYA</span></div>
          <footer><span><i></i> SEÑAL ACTUALIZADA</span><b>ALZA</b></footer>
        `;
      }

      const course = visual?.querySelector(':scope > .agro-course');
      if (course && !visual.querySelector('.agro-learning-card')) {
        const learningCard = create('article', 'agro-learning-card', `
          <header><span><i></i> AULA</span><b>AGROCLUB</b></header>
          <div class="agro-learning-media"></div>
          <footer><small>FORMACIÓN APLICADA</small><strong>Sanidad vegetal</strong><span>Contenido + especialistas</span></footer>
        `);
        course.replaceWith(learningCard);
        learningCard.querySelector('.agro-learning-media')?.prepend(course);
      }

      if (visual && !visual.querySelector('.agro-field-hub')) {
        visual.append(create('aside', 'agro-field-hub', `
          <header><span data-short="PULSO AGRO"><i></i> PULSO AGRO</span><b>ACTIVO</b></header>
          <div>
            <span><i>M</i><p><b>Mercado</b><small>Señales visibles</small></p></span>
            <span><i>A</i><p><b>Aprendizaje</b><small>Contenido aplicado</small></p></span>
            <span><i>C</i><p><b>Comunidad</b><small>Conexión sectorial</small></p></span>
          </div>
          <footer><span>UNA RED</span><i></i><b>UN MISMO MOTOR</b></footer>
        `));
      }

      if (visual && !visual.querySelector('.agro-field-network')) {
        visual.append(create('div', 'agro-field-network', `
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M18 29 C35 29 43 42 61 46"></path>
            <path d="M21 77 C36 69 46 55 61 46"></path>
            <path d="M88 75 C80 62 72 53 61 46"></path>
            <circle cx="61" cy="46" r="1.25"></circle>
          </svg>
          <span class="agro-network-core"><i></i><b>AGROCLUB</b><small>FIELD HUB</small></span>
          <i class="agro-network-pulse pulse-a"></i><i class="agro-network-pulse pulse-b"></i><i class="agro-network-pulse pulse-c"></i>
        `));
      }
    }

    if (id === 'vision') {
      const stat = stage.querySelector('.vision-stat');
      if (stat && !stat.querySelector('.vision-context')) {
        stat.append(create('div', 'vision-context', '<span>CLIMA</span><span>PRECIO</span><span>MERCADO</span>'));
      }
    }

    if (id === 'gymvexa') {
      const visual = stage.querySelector('.gym-visual');
      if (visual && !visual.querySelector('.gym-activity-panel')) {
        visual.append(create('div', 'gym-activity-panel', `
          <header><span><i></i> ASISTENCIA</span><b>HOY</b></header>
          <strong>68%</strong><small>ocupación actual</small>
          <div class="gym-activity-bars" aria-hidden="true"><i style="height:28%"></i><i style="height:46%"></i><i style="height:38%"></i><i style="height:72%"></i><i style="height:64%"></i><i style="height:91%"></i><i style="height:78%"></i></div>
          <footer><span><i></i> ACCESO QR</span><b>AFORO</b></footer>
        `));
      }

      const phone = visual?.querySelector('.phone-shell');
      if (phone && !phone.dataset.gymvexaUi) {
        phone.dataset.gymvexaUi = 'true';
        phone.innerHTML = `
          <div class="phone-top"></div>
          <div class="gym-phone-status"><span>09:41</span><i></i><b>100</b></div>
          <div class="gym-phone-user">
            <div><small>BUEN DÍA</small><strong>Tu entrenamiento</strong></div>
            <span class="gym-phone-streak">↗ 6 DÍAS</span>
          </div>
          <div class="gym-phone-focus">
            <div class="gym-progress-ring"><span>72<small>%</small></span></div>
            <div><small>RUTINA ACTIVA</small><strong>Fuerza total</strong><p>48 min · 8 ejercicios</p></div>
          </div>
          <div class="gym-phone-exercises">
            <header><span>SIGUIENTES</span><b>VER PLAN</b></header>
            <div><i>01</i><span><strong>Sentadilla</strong><small>4 × 10 · 60 kg</small></span><em>✓</em></div>
            <div><i>02</i><span><strong>Press inclinado</strong><small>3 × 12 · 24 kg</small></span><em>→</em></div>
            <div><i>03</i><span><strong>Remo sentado</strong><small>3 × 12 · 45 kg</small></span><em>→</em></div>
          </div>
          <button class="gym-phone-cta" type="button" tabindex="-1" aria-hidden="true"><span>Continuar sesión</span><i>→</i></button>
          <div class="gym-phone-next-class">
            <i></i><p><small>PRÓXIMA CLASE</small><b>Mobility · 18:30</b></p><em>LISTA</em>
          </div>
          <nav class="gym-phone-nav" aria-label="Navegación de la aplicación"><i class="is-active"></i><i></i><i></i><i></i></nav>
        `;
      }

      if (visual && !visual.querySelector('.gym-access-pass')) {
        visual.append(create('div', 'gym-access-pass', `
          <header><span><i></i> PASE DIGITAL</span><b>ACTIVO</b></header>
          <div>
            <span class="gym-mini-qr" aria-hidden="true"><i></i><i></i><i></i></span>
            <p><strong>GYMVEXA BLACK</strong><span>Acceso inmediato</span><small>ACCESO VERIFICADO</small></p>
          </div>
        `));
      }

      if (visual && !visual.querySelector('.gym-energy-path')) {
        visual.append(create('div', 'gym-energy-path', `
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M22 35 C42 20 48 82 86 67"></path>
            <path class="gym-energy-signal" d="M22 35 C42 20 48 82 86 67"></path>
          </svg>
          <i class="gym-energy-node node-a"></i><i class="gym-energy-node node-b"></i><i class="gym-energy-node node-c"></i>
        `));
      }
    }

    if (id === 'praxia') {
      const agenda = stage.querySelector('.praxia-agenda');
      const note = stage.querySelector('.praxia-note');

      const agendaTop = agenda?.querySelector('.agenda-top');
      if (agendaTop && agendaTop.dataset.praxiaChrome !== 'true') {
        agendaTop.dataset.praxiaChrome = 'true';
        agendaTop.innerHTML = '<span><i></i> PRAXIA / CARE OS</span><strong>03 MÓDULOS</strong>';
      }

      if (agenda && !agenda.querySelector('.praxia-tour-tabs')) {
        agenda.append(create('div', 'praxia-tour-tabs', '<span data-short="Agenda">Agenda</span><span data-short="Perfil">Paciente</span><span data-short="Docs">Documentos</span>'));
      }

      const tabs = agenda?.querySelector('.praxia-tour-tabs');
      if (tabs && tabs.dataset.synced !== 'true') {
        tabs.dataset.synced = 'true';
        [...tabs.children].forEach((tab, index) => tab.style.setProperty('--tour-delay', `${index * 3}s`));
      }

      if (agenda && !agenda.querySelector('.praxia-care-status')) {
        agenda.append(create('div', 'praxia-care-status', `
          <span><i></i> PRODUCTO EN OPERACIÓN</span><b>AGENDA · PACIENTE · DOCUMENTOS</b>
        `));
      }

      if (note && note.dataset.praxiaCareUi !== 'true') {
        note.dataset.praxiaCareUi = 'true';
        note.innerHTML = `
          <header><span><i></i> CITA VERIFICADA</span><b>WHATSAPP ✓</b></header>
          <div class="praxia-appointment-main">
            <span class="praxia-patient-avatar">P</span>
            <p><small>PRÓXIMA CITA</small><strong>11:30</strong><em>Consulta de seguimiento</em></p>
            <i>✓</i>
          </div>
          <div class="praxia-care-checks"><span><i></i> Expediente listo</span><span><i></i> Aviso listo</span></div>
          <div class="praxia-confirmation-flow"><span>Cita</span><i></i><span>Consulta</span><i></i><span>Seguimiento</span></div>
        `;
      }

      const layout = stage.querySelector('.praxia-layout');
      if (layout && !layout.querySelector('.praxia-care-network')) {
        layout.append(create('div', 'praxia-care-network', `
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M44 31 C55 20 62 24 72 34"></path>
            <path d="M72 34 C69 54 61 64 56 72"></path>
            <path class="praxia-care-signal" d="M44 31 C55 20 62 24 72 34 C69 54 61 64 56 72"></path>
          </svg>
          <i class="praxia-care-node node-a"></i><i class="praxia-care-node node-b"></i><i class="praxia-care-node node-c"></i>
          <span>PRECONSULTA <i></i> CONSULTA <i></i> SEGUIMIENTO</span>
        `));
      }
    }

    if (id === 'pondera') {
      const card = stage.querySelector('.formula-card');
      if (card && !card.querySelector('.optimization-proof')) {
        card.append(create('div', 'optimization-proof', `
          <span><small>BASE</small><b>$9.17</b></span>
          <i>→</i>
          <span class="is-optimal"><small>ÓPTIMA</small><b>$8.42</b></span>
          <strong>RESTRICCIONES CUMPLIDAS</strong>
        `));
      }
    }

    if (id === 'imdac') {
      const main = stage.querySelector('.dash-main');
      if (main && !main.querySelector('.dash-milestones')) {
        main.append(create('div', 'dash-milestones', `
          <header><span>HITOS DE OBRA</span><b>SEMANA 18</b></header>
          <div><span class="is-done">Cimentación</span><i></i><span class="is-done">Estructura</span><i></i><span class="is-live">Instalaciones</span><i></i><span>Entrega</span></div>
        `));
      }
    }

    if (id === 'globalvet') {
      const certificate = stage.querySelector('.certificate-card');
      if (certificate && !certificate.querySelector('.certificate-chain')) {
        certificate.append(create('div', 'certificate-chain', '<span>CURSO COMPLETADO</span><i></i><span>FOLIO EMITIDO</span><i></i><span>QR VALIDADO</span>'));
      }
    }

    if (id === 'dulcelab') {
      const stamp = stage.querySelector('.dulce-stamp');
      if (stamp && stamp.dataset.tecJourney !== 'true') {
        stamp.innerHTML = '<span>APRENDE</span><i></i><span>CREA</span><i></i><span>EMPRENDE</span>';
        stamp.dataset.tecJourney = 'true';
      }
    }

    if (id === 'mediteck') {
      const appointments = stage.querySelector('.appointments-card');
      if (appointments && !appointments.querySelector('.availability-meter')) {
        appointments.append(create('div', 'availability-meter', '<span><i></i> DISPONIBILIDAD ACTUALIZADA</span><b><i></i></b><small>3 espacios próximos</small>'));
      }
    }

    if (id === 'expo') {
      const agenda = stage.querySelector('.expo-agenda');
      if (agenda && !agenda.querySelector('.event-continuum')) {
        agenda.append(create('div', 'event-continuum', '<span>REGISTRO</span><i></i><span>AGENDA</span><i></i><span>CONTENIDO</span>'));
      }
    }
  };

  const enhanceProject = (stage, id) => {
    const copy = stage.querySelector('.project-copy');
    const impact = projectImpact[id];

    const projectNumber = copy?.querySelector('.project-kicker span');
    if (projectNumber && portfolioProjectNumbers[id]) {
      projectNumber.textContent = portfolioProjectNumbers[id];
    }

    if (copy && impact && !copy.querySelector('.project-impact')) {
      copy.append(create('div', 'project-impact', `
        <small>TECNOLOGÍA ACTIVADA</small>
        <span>${impact.stack}</span>
        <strong>${impact.outcome}</strong>
      `));
    }

    enhanceProjectTheater(stage, id);
    enhanceProjectDetails(stage, id);

    if (id === 'praxia') {
      const agenda = stage.querySelector('.praxia-agenda');
      const agendaLabel = agenda?.querySelector('.agenda-top span');
      const originalScreen = agenda?.querySelector('img');

      if (agenda && originalScreen && !agenda.querySelector('.praxia-screen-extra')) {
        originalScreen.classList.add('praxia-screen');

        [
          ['media/praxia-ficha-paciente.jpeg', 'Ficha digital de paciente en Praxia'],
          ['media/praxia-documentos.jpeg', 'Gestión documental de Praxia']
        ].forEach(([src, alt]) => {
          const image = document.createElement('img');
          image.className = 'praxia-screen praxia-screen-extra';
          image.src = src;
          image.alt = alt;
          agenda.append(image);
        });
      }
    }

    if (id === 'imdac') {
      const navigation = stage.querySelector('.dash-nav');

      if (navigation && !navigation.querySelector('.imdac-authentic-mark')) {
        const image = document.createElement('img');
        image.className = 'imdac-authentic-mark';
        image.src = 'media/imdac-logo.png';
        image.alt = 'IMDAC';
        navigation.prepend(image);
      }
    }

    if (id === 'globalvet') {
      const visual = stage.querySelector('.globalvet-visual');

      if (visual && !visual.querySelector('.vet-course-c')) {
        visual.append(create('div', 'vet-course vet-course-c', `
          <img src="media/globalvet-fisioterapia.webp" alt="Curso de fisioterapia veterinaria de Globalvet">
          <span>03</span>
        `));
      }
    }

    if (id === 'expo') {
      const layout = stage.querySelector('.expo-layout');
      const background = stage.querySelector('.expo-bg');

      if (background) background.src = 'media/expo-fondo-hero.jpeg';

      if (layout && !layout.querySelector('.expo-speakers')) {
        const speakers = document.createElement('img');
        speakers.className = 'expo-speakers';
        speakers.src = 'media/expo-ponentes.png';
        speakers.alt = 'Ponentes del Congreso Avícola';
        layout.append(speakers);

        layout.append(create('div', 'expo-proof-card', `
          <img src="media/expo-poster.webp" alt="Experiencia audiovisual de Expo Avipro">
          <span>EXPERIENCIA DIGITAL DEL EVENTO</span>
        `));
      }
    }

    if (clubFamily.some((club) => club.id === id)) {
      enhanceClubFamily(stage, id);
    }
  };

  const enhanceFeedmix = (stage) => {
    stage.classList.remove('stage-expo');
    stage.classList.add('stage-feedmix', 'stage-product-theater');
    stage.style.setProperty('--project-accent', '#f59e0b');

    stage.replaceChildren(create('div', 'feedmix-layout', `
      <div class="feedmix-copy project-copy">
        <div class="project-kicker"><span>05</span><i></i> FORMULACIÓN AVÍCOLA</div>
        <div class="feedmix-brand-line"><img src="media/feedmix-mark.svg" alt=""><span>PRODUCTO TEC CAPITAL · MÉXICO</span></div>
        <h2>FeedMix <em>MX</em></h2>
        <p>Formula alimento balanceado para aves con requerimientos técnicos, ingredientes locales y costo bajo control.</p>
        <div class="tag-row"><span>30 razas</span><span>179 etapas</span><span>NRC + Rostagno</span></div>
        <div class="project-impact">
          <small>TECNOLOGÍA ACTIVADA</small>
          <span>Nutrición · costos · programación lineal</span>
          <strong>De ingredientes dispersos a una fórmula lista para producir.</strong>
        </div>
      </div>

      <div class="feedmix-visual">
        <div class="feedmix-ambient-grid" aria-hidden="true"></div>
        <div class="feedmix-particle-field" aria-hidden="true">
          <i style="--x:8%;--y:18%;--d:-1s"></i><i style="--x:23%;--y:78%;--d:-2.4s"></i>
          <i style="--x:62%;--y:9%;--d:-3.7s"></i><i style="--x:91%;--y:54%;--d:-4.8s"></i>
          <i style="--x:73%;--y:88%;--d:-6.1s"></i>
        </div>

        <section class="feedmix-console" aria-label="Interfaz del formulador FeedMix MX">
          <header>
            <div><img src="media/feedmix-mark.svg" alt=""><p><strong>FeedMix MX</strong><small>FORMULADOR AVÍCOLA</small></p></div>
            <span><i></i> MOTOR LISTO</span>
          </header>

          <div class="feedmix-context">
            <span><small>ESPECIE</small><b>Gallina ponedora</b></span>
            <span><small>LÍNEA</small><b>Hy-Line W-36</b></span>
            <span><small>ETAPA</small><b>Semana 25–40</b></span>
            <span><small>LOTE</small><b>1,000 kg</b></span>
          </div>

          <div class="feedmix-console-grid">
            <article class="feedmix-ingredients">
              <header><span>INGREDIENTES</span><b>$/KG</b><b>INCLUSIÓN</b></header>
              <div><span><i class="is-corn"></i>Maíz amarillo</span><b>$6.50</b><strong>58.40%</strong></div>
              <div><span><i class="is-soy"></i>Harina de soya</span><b>$10.80</b><strong>25.70%</strong></div>
              <div><span><i class="is-oil"></i>Aceite vegetal</span><b>$24.00</b><strong>2.60%</strong></div>
              <div><span><i class="is-calcium"></i>Carbonato de calcio</span><b>$2.40</b><strong>8.10%</strong></div>
              <footer><span>+ 6 ingredientes activos</span><b>CATÁLOGO LOCAL</b></footer>
            </article>

            <article class="feedmix-nutrients">
              <header><span>REQUERIMIENTOS</span><b>CUMPLIMIENTO</b></header>
              <div><span><small>EM</small><b>2,800 kcal</b></span><i><em style="--fill:92%"></em></i><strong>✓</strong></div>
              <div><span><small>PC</small><b>16.50%</b></span><i><em style="--fill:84%"></em></i><strong>✓</strong></div>
              <div><span><small>LIS</small><b>0.78%</b></span><i><em style="--fill:76%"></em></i><strong>✓</strong></div>
              <div><span><small>CA</small><b>4.10%</b></span><i><em style="--fill:88%"></em></i><strong>✓</strong></div>
              <footer><i></i><span>PERFIL NUTRICIONAL DENTRO DE RANGO</span></footer>
            </article>
          </div>

          <footer class="feedmix-console-footer">
            <span><i></i> Ingredientes</span><em>→</em><span>Restricciones</span><em>→</em><span>Fórmula</span><em>→</em><span>PDF</span>
            <button type="button" tabindex="-1" aria-hidden="true">OPTIMIZAR FÓRMULA <b>→</b></button>
          </footer>
        </section>

        <aside class="feedmix-result">
          <header><span><i></i> RESULTADO ÓPTIMO</span><b>&lt; 2 S</b></header>
          <small>COSTO DE LA FÓRMULA</small>
          <strong>$7.86<em>/kg</em></strong>
          <div><span><small>POR TONELADA</small><b>$7,860</b></span><span><small>ESCENARIO</small><b>−12%</b></span></div>
          <footer><i>✓</i><span><b>CUMPLE REQUERIMIENTOS</b><small>NRC + Rostagno</small></span></footer>
        </aside>

        <aside class="feedmix-system">
          <header><img src="media/feedmix-mark.svg" alt=""><span>FEEDMIX · MOTOR</span></header>
          <div><span><b>30</b><small>RAZAS</small></span><i></i><span><b>179</b><small>ETAPAS</small></span><i></i><span><b>01</b><small>FÓRMULA</small></span></div>
          <footer><i></i> DATOS TÉCNICOS CONVERTIDOS EN DECISIÓN</footer>
        </aside>

        <div class="feedmix-data-route" aria-hidden="true">
          <span>INGREDIENTES</span><i></i><span>NUTRICIÓN</span><i></i><span>COSTO</span><i></i><span>PRODUCCIÓN</span>
        </div>
      </div>
    `));

    const timelineLabel = root.querySelector('.timeline-label strong');
    if (timelineLabel) timelineLabel.textContent = 'FeedMix';
  };

  const enhanceMethod = (stage) => {
    const heading = stage.querySelector('.method-heading > p:last-child');
    const signature = stage.querySelector('.method-signature');
    const layout = stage.querySelector('.method-layout');
    const track = stage.querySelector('.method-track');
    const outputs = ['BRIEF + KPIS', 'PROTOTIPO VALIDADO', 'PRODUCTO EN OPERACIÓN', 'MÉTRICAS + ROADMAP'];

    if (heading) {
      heading.textContent = 'Negocio, diseño, software y datos trabajan juntos desde el primer día.';
    }

    if (signature) {
      signature.textContent = 'TEC CAPITAL · TECHNOLOGY & PRODUCT STUDIO';
    }

    if (layout && !layout.querySelector('.method-proof-wall')) {
      layout.append(create('div', 'method-proof-wall', `
        <small>TECNOLOGÍA QUE YA ESTÁ EN USO</small>
        <div>
          <figure><img src="media/gym-fuerza.webp" alt="Operación digital de gimnasios con Gymvexa"><figcaption>GYMVEXA</figcaption></figure>
          <figure><img src="media/praxia-human-care.webp" alt="Experiencia digital para atención clínica con Praxia"><figcaption>PRAXIA</figcaption></figure>
          <figure><img src="media/imdac-logo.png" alt="Control digital de obra con IMDAC"><figcaption>IMDAC</figcaption></figure>
          <figure><img src="media/pondera.png" alt="Optimización técnica con Pondera"><figcaption>PONDERA</figcaption></figure>
          <figure><img src="media/feedmix-mark.svg" alt="Formulación avícola con FeedMix"><figcaption>FEEDMIX</figcaption></figure>
        </div>
      `));
    }

    track?.querySelectorAll('article').forEach((article, index) => {
      if (!article.querySelector('.method-output')) {
        article.append(create('small', 'method-output', `<i></i>${outputs[index]}`));
      }
    });

    if (layout && !layout.querySelector('.method-operating-bar')) {
      layout.append(create('div', 'method-operating-bar', `
        <span><i></i> UN SOLO EQUIPO</span>
        <div><b>Estrategia</b><i></i><b>Experiencia</b><i></i><b>Ingeniería</b><i></i><b>Datos</b></div>
        <strong>ENTREGA CONTINUA</strong>
      `));
    }

    if (layout && !layout.querySelector('.method-watermark')) {
      const watermark = document.createElement('img');
      watermark.className = 'method-watermark';
      watermark.src = officialMark;
      watermark.alt = '';
      watermark.setAttribute('aria-hidden', 'true');
      layout.append(watermark);
    }
  };

  const enhanceCapabilities = (stage) => {
    const heading = stage.querySelector('.capabilities-heading h2');
    const grid = stage.querySelector('.capability-grid');
    const ribbon = stage.querySelector('.client-ribbon');

    if (heading) heading.innerHTML = 'Del reto<br>a un <em>sistema.</em>';
    if (!grid) return;

    grid.classList.add('is-expanded');

    capabilities.forEach(([number, title, description, output], index) => {
      let card = grid.children[index];

      if (!card) {
        card = document.createElement('article');
        grid.append(card);
      }

      card.style.setProperty('--capability-index', String(index));
      card.innerHTML = `<span>${number}</span><h3>${title}</h3><p>${description}</p><small class="capability-output"><i></i>${output}</small>`;
    });

    if (ribbon && ribbon.dataset.tecRibbon !== 'true') {
      ribbon.innerHTML = `
        <div class="capability-ribbon-track">
          ${['ESTRATEGIA', 'EXPERIENCIA', 'SOFTWARE', 'IA APLICADA', 'DATOS', 'CLOUD', 'OPERACIÓN', 'ESTRATEGIA', 'EXPERIENCIA', 'SOFTWARE', 'IA APLICADA', 'DATOS', 'CLOUD', 'OPERACIÓN']
            .map((label) => `<span><i></i>${label}</span>`).join('')}
        </div>
      `;
      ribbon.dataset.tecRibbon = 'true';
    }

    if (!stage.querySelector('.capabilities-status')) {
      stage.append(create('div', 'capabilities-status', '<span><i></i> STACK INTEGRAL</span><b>DE LA ESTRATEGIA A LA OPERACIÓN</b><small>06 CAPAS · 01 EQUIPO</small>'));
    }
  };

  const enhanceContact = (stage) => {
    const copy = stage.querySelector('.contact-copy');
    const paragraph = stage.querySelector('.contact-copy > p:not(.eyebrow)');
    const url = stage.querySelector('.contact-url');
    const qrCard = stage.querySelector('.qr-card');

    if (paragraph) {
      paragraph.textContent = 'Trae una idea, un proceso o una operación compleja. Nosotros la convertimos en una solución clara, útil y escalable.';
    }

    if (url) {
      url.innerHTML = '<a href="https://teccapitalweb.com" target="_blank" rel="noopener">teccapitalweb.com ↗</a>';
    }

    if (copy && !copy.querySelector('.contact-services')) {
      copy.append(create('div', 'contact-services', `
        <span>Producto digital</span>
        <span>IA aplicada</span>
        <span>Automatización</span>
        <span>Infraestructura</span>
      `));
    }

    if (copy && !copy.querySelector('.contact-path')) {
      copy.append(create('div', 'contact-path', `
        <span><small>01</small><b>Conversación</b></span>
        <i></i>
        <span><small>02</small><b>Diagnóstico</b></span>
        <i></i>
        <span><small>03</small><b>Siguiente paso</b></span>
      `));
    }

    if (qrCard && !qrCard.querySelector('.qr-action')) {
      const action = document.createElement('a');
      action.className = 'qr-action';
      action.href = 'https://wa.me/5212361112213?text=Hola%20TEC%20CAPITAL%2C%20quiero%20platicarles%20un%20proyecto';
      action.target = '_blank';
      action.rel = 'noopener';
      action.textContent = 'Abrir conversación ↗';
      qrCard.append(action);
    }

    if (qrCard && !qrCard.querySelector('.qr-live-status')) {
      qrCard.prepend(create('div', 'qr-live-status', '<i></i><span>WHATSAPP DIRECTO</span><b>RESPUESTA PERSONAL</b>'));
      qrCard.append(create('div', 'qr-trust-row', '<span>Equipo directo</span><i></i><span>Alcance claro</span><i></i><span>Evolución continua</span>'));
    }

    if (!stage.querySelector('.contact-constellation')) {
      stage.append(create('div', 'contact-constellation', `
        <span style="--cx:12%;--cy:68%;--delay:-1s"></span>
        <span style="--cx:38%;--cy:28%;--delay:-2.4s"></span>
        <span style="--cx:72%;--cy:18%;--delay:-3.8s"></span>
        <span style="--cx:88%;--cy:67%;--delay:-5.2s"></span>
        <i></i><i></i><i></i>
      `));
    }
  };

  const enhance = () => {
    const stage = root.querySelector('.stage');
    const topbarMeta = root.querySelector('.topbar-meta');
    const topbarMark = root.querySelector('.wordmark img');

    if (topbarMark && !topbarMark.src.endsWith('/media/logo-t.png')) {
      topbarMark.src = officialMark;
    }

    if (topbarMeta && topbarMeta.dataset.tecEnhanced !== 'true') {
      const dot = topbarMeta.querySelector('.live-dot');
      topbarMeta.replaceChildren();
      if (dot) topbarMeta.append(dot);
      topbarMeta.append(' TECHNOLOGY SHOWCASE / 2026');
      topbarMeta.dataset.tecEnhanced = 'true';
    }

    if (!stage || stage.dataset.tecEnhanced === 'true') return;

    const stageClass = [...stage.classList].find((name) => name.startsWith('stage-'));
    const id = stageClass?.replace('stage-', '');

    if (!id) return;

    stage.dataset.tecEnhanced = 'true';

    if (id === 'intro') enhanceIntro(stage);
    else if (id === 'ecosystem') enhanceEcosystem(stage);
    else if (id === 'feedmix') enhanceFeedmix(stage);
    else if (projectImpact[id]) enhanceProject(stage, id);
    else if (id === 'method') enhanceMethod(stage);
    else if (id === 'capabilities') enhanceCapabilities(stage);
    else if (id === 'contact') enhanceContact(stage);
  };

  let animationFrame;
  const scheduleEnhancement = () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = window.requestAnimationFrame(enhance);
  };

  new MutationObserver(scheduleEnhancement).observe(root, {
    childList: true,
    subtree: true
  });

  scheduleEnhancement();
})();

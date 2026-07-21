const mixes = [
  {
    title: "夢境紀",
    audio: "assets/mix/夢境紀.mp3",
    cover: "assets/img/mu.jpg",
    genre: "Ambient",
    date: "2026.05.11",
    tracklist: `01 Mark Isham / Love's Ash Dissolves
02 Bob James / Far From Turtle
03 Natural Calamity / Lotus Field
04 The IT / Brazilian Love Dance
05 Toshinori Kondo x DJ Krush / 夢宙 Mu-Chu
06 Yoshio Ojima / Sealed
07 Oneohtrix Point Never / Imago
08 St.GIGA / 音の潮流 Tide of Sound
09 Yas-Kaz / Jungle Book
10 Yas-Kaz / 田園の愉楽
11 William Aura / I Call Your Name
12 Jan Jelinek / Vibraphonspulen
13 Masayoshi Fujita & Jan Jelinek / Botuto
14 Kara-Lis Coverdale / Moments In Love
15 Lyu Hongjun / Forest Trail`
  },
  {
    title: "dreamz",
    audio: "assets/mix/dreamz.mp3",
    cover: "assets/img/mix_dreamz.jpg",
    genre: "黒昼夢",
    date: "2025.04.17",
    subtitle: "DJ YAMINO'S VINYL COLLECTION",
    titleImage: "assets/img/dreamz_inverted.png",
    tracklist: `01 Smog / The Miracles
02 I Feel Like Loving You Today / Donald Byrd feat. Isaac Hayes
03 Soul Sides / Art Farmer
04 Summer in the City / Quincy Jones
05 Daydreaming / Quincy Jones feat. Aretha Franklin
06 Brighton by the Sea / Bob James
07 Inside My Love / Minnie Riperton
08 Marcella's Dream / The Crusaders
09 Night Crawler / Bob James
10 Just the Two of Us / Grover Washington, Jr. feat. Bill Withers
11 Feel Like Makin' Love / Hubert Laws
12 Uzuri / Catalyst
13 Top of the World / George Benson
14 Sweet Dreamer / Lenny White
15 Barry's Love (Part 2) / The Love Unlimited Orchestra`
  },
  {
    title: "DA FINEST",
    audio: "assets/mix/DA_FINEST.mp3",
    cover: "assets/img/mix_da_finest_cover.jpg",
    genre: "Hip Hop",
    date: "2024.03.03",
    subtitle: "DJ YAMINO'S VINYL COLLECTION",
    titleImage: "assets/img/finest_inverted.png",
    tracklist: `01 Dedicated / The Anonymous
02 Methodman PLO Freestyle / Mathematics
03 Far From Yours / O.C. feat. Yvette Michele
04 How We Chill, Pt.2 / Juice, Moleman & Rhymefest
05 Death Be the Penalty / Shabazz the Disciple
06 Sneakers / Raekwon
07 Tha Realness / Group Home
08 Mayday / Self Jupiter
09 Closer To God / D. Gibbs
10 Do Your Thing / Erick Sermon
11 On the Road Again / The Nonce feat. Figures Of Speech
12 Survival Warz (When It Rains It Pours) / DJ Spinna & Shadez Of Brooklyn
13 Keep Your Head Up (Mixed) / Laurnea
14 Usual Suspect (Stretch Armstrong Remix) / Big Noyd
15 Human Condition / School Of Thought
16 Story / O.C.
17 Check It Out / Show & A.G.
18 Fallin' Remix (Without Rap) / Alicia Keys
19 Back On Da Block (DJ Krush Remix) / Pete Rock
20 Recognize & Realize Part 1 / Big Noyd, Prodigy & Havoc
21 First Thing Last / Daddy Kev feat. Myka 9
22 Meiso / DJ Krush, Black Thought & Malik B
23 Unstoppable / Mic Geronimo
24 More Trife Life / Mobb Deep
25 Survival of the Fittest / Mobb Deep
26 Who I Be (part two) / Finsta Bundy`
  },
  {
    title: "my favorite shit",
    audio: "assets/mix/myfavoriteshit.mp3",
    cover: "assets/img/mix_myfavoriteshit.jpg",
    genre: "Hip Hop",
    date: "2022.11.30",
    tracklist: `01 Godfather Don / Status
02 Obscure Disorder feat. Kinetic NRG / Small Talk
03 Emskee / Any Rapper...
04 All City / The Actual
05 Da Grass Roots Music feat. Elemental / Drama
06 Raekwon feat. Ghostface Killah, Method Man, Cappadonna / Ice Cream
07 Intelligent Hoodlum / Street Life (Return Of The Life Mix)
08 Onyx / Shout (Pete Rock Remix)
09 Awol One / Toilet Water
10 Big Ric / Knoc 'Em Out
11 Scoob Rock aka Grandemperial / The Marvelous
12 Millennium / Ga-mingh Technique
13 Cooley Roc / Check Da Method
14 Super Natural / Buddha Blessed It
15 Dirty Science Crew / They Be Loving Me
16 Aboriginals / The Joint
17 Nine / When The Shit Hits The Fan
18 Da Punisherrs / Lick A Shot
19 Hycin Jo & Illin P / Yes (Squad Mix)
20 South Case / Buy My Tape
21 Redman feat. Roz / I Get Down Like That
22 Lord V.I. / Not Tonight
23 Mic Geronimo / It's Real (Kut Masta Kurt Remix)
24 Load Apex & V Don / Life Goes On`
  },
  {
    title: "88.4MHz",
    audio: "assets/mix/88.4MHz.mp3",
    cover: "assets/img/mix_884mhz_soundcloud.jpg",
    genre: "Ambient",
    date: "2021.08.30",
    tracklist: `0:00:00 Nobuyuki Tsujii - Improvisation and Fugue
0:07:35 Claude Debussy - Danse Sacree
0:12:34 Richard Warner - Spirit Wind
0:29:32 Michel Banabila - Synchronicity
0:34:04 Richard Stoltzman - Tristeza
0:37:08 Kevin Lyons - Midnight at the Well of Souls
0:40:04 St.GIGA - Ozone
0:42:07 Free Sound Collective - Undertow
0:53:04 Loop Guru - The Third Chamber (Part 4)
1:02:59 Sayuw - Old Memories
1:05:43 Hybrid Palms - Sailboat Bliss`
  }
];

const photos = window.AK100_PHOTOS || [];

let dreamText = window.AK100_DREAM_TEXT || "";
const dreamTextPath = "assets/text/夢境紀.txt";
const imageRoot = "assets/img/";
const gallery = document.querySelector("#gallery");
const focusReader = document.querySelector("#focusReader");
const focusReaderText = document.querySelector("#focusReaderText");
const focusClose = document.querySelector(".focus-close");
const mobileBreakpoint = 720;

async function loadDreamText() {
  try {
    const response = await fetch(`${dreamTextPath}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    dreamText = await response.text();
  } catch {
    // Local file previews may block fetch; keep content.generated.js as fallback.
  }
}

function splitDreamText() {
  return dreamText
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

const heroCharacterRegions = {
  desktop: [
    { x: [12, 34], y: [13, 38] },
    { x: [62, 88], y: [10, 36] },
    { x: [38, 72], y: [8, 24] }
  ],
  mobile: [
    { x: [14, 36], y: [10, 30] },
    { x: [60, 86], y: [12, 34] },
    { x: [38, 70], y: [8, 22] }
  ]
};

const galleryProfiles = {
  desktop: {
    photoLimit: 48,
    mixIndex: .34,
    backdropLimit: 20
  },
  mobile: {
    photoLimit: 34,
    mixIndex: .3,
    backdropLimit: 12
  }
};

const photoShapes = [
  "photo-wide", "photo-square", "photo-tall", "photo-small", "photo-wide",
  "photo-slab", "photo-square", "photo-portrait", "photo-small", "photo-wide",
  "photo-square", "photo-slab"
];

const textShapeGroups = {
  short: ["text-large", "text-focus", "text-clear"],
  medium: ["text-clear", "text-calm", "text-whisper"],
  long: ["text-calm", "text-clear"]
};

const textMotionProfiles = {
  default: {
    drift: [5, 14],
    minAlpha: .76,
    maxAlpha: .97
  },
  long: {
    drift: [3, 9],
    minAlpha: .82,
    maxAlpha: .98
  }
};

const photoMotions = ["drift-slow", "drift-x", "still", "drift-y", "drift-slow", "still"];

const mixClassByTitle = {
  "my favorite shit": "is-my-favorite-shit",
  "夢境紀": "is-yumekyouki",
  "88.4MHz": "is-884mhz"
};

const titleClassesByTitle = {
  dreamz: {
    image: "is-dreamz-title",
    stack: "is-dreamz-stack"
  },
  "DA FINEST": {
    image: "is-finest-title",
    stack: "is-finest-stack"
  }
};

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[otherIndex]] = [copy[otherIndex], copy[index]];
  }
  return copy;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function styleVars(vars) {
  return Object.entries(vars)
    .map(([name, value]) => `--${name}:${value}`)
    .join(";");
}

function pickCycled(items, index) {
  return items[index % items.length];
}

function distributeByLength(items) {
  const sorted = [...items].sort((left, right) => right.length - left.length);
  const buckets = Array.from({ length: 3 }, () => []);

  sorted.forEach((item, index) => {
    buckets[index % buckets.length].push(item);
  });

  return shuffle(buckets).flatMap((bucket) => shuffle(bucket));
}

function textLengthGroup(text) {
  if (text.length <= 36) return "short";
  if (text.length >= 130) return "long";
  return "medium";
}

function textShapeFor(fragment, index) {
  const lengthGroup = textLengthGroup(fragment);
  return pickCycled(textShapeGroups[lengthGroup], index);
}

function textMotionFor(lengthGroup) {
  const profile = textMotionProfiles[lengthGroup] || textMotionProfiles.default;

  return {
    "text-delay": `${randomBetween(-18, 0).toFixed(1)}s`,
    "text-duration": `${randomBetween(26, 46).toFixed(1)}s`,
    "text-drift": `${randomBetween(...profile.drift).toFixed(0)}px`,
    "text-min-alpha": profile.minAlpha,
    "text-max-alpha": profile.maxAlpha
  };
}

function currentMode() {
  return window.innerWidth < mobileBreakpoint ? "mobile" : "desktop";
}

function setupHeroCharacter() {
  const character = document.querySelector(".hero-character-field");
  if (!character) return;

  const mode = currentMode();
  const regions = heroCharacterRegions[mode];
  const region = regions[Math.floor(Math.random() * regions.length)];
  const size = mode === "mobile" ? randomBetween(74, 138) : randomBetween(118, 230);

  character.style.setProperty("--character-x", `${randomBetween(...region.x).toFixed(1)}%`);
  character.style.setProperty("--character-y", `${randomBetween(...region.y).toFixed(1)}%`);
  character.style.setProperty("--character-size", `${size.toFixed(0)}px`);
  character.style.setProperty("--character-drift-x", `${randomBetween(8, 24).toFixed(0)}px`);
  character.style.setProperty("--character-drift-y", `${randomBetween(4, 16).toFixed(0)}px`);
  character.style.setProperty("--character-duration", `${randomBetween(18, 32).toFixed(1)}s`);

  window.setTimeout(() => {
    character.classList.add("is-visible");
  }, randomBetween(6500, 16000));
}

function mixCardClass(mix) {
  const variant = mixClassByTitle[mix.title];
  return variant ? `mix-card ${variant}` : "mix-card";
}

function titleClass(mix, type) {
  const classes = titleClassesByTitle[mix.title];
  return classes ? classes[type] : "";
}

function mixTitleImageClass(mix) {
  const variant = titleClass(mix, "image");
  return variant ? `mix-title-image ${variant}` : "mix-title-image";
}

function renderMixTitle(mix) {
  if (!mix.titleImage) return escapeHtml(mix.title);

  return `<img class="${mixTitleImageClass(mix)}" src="${escapeHtml(mix.titleImage)}" alt="${escapeHtml(mix.title)}" decoding="async">`;
}

function mixTitleStackClass(mix) {
  const classes = ["mix-title-stack"];
  if (mix.titleImage) classes.push("has-title-image");
  const variant = titleClass(mix, "stack");
  if (variant) classes.push(variant);
  return classes.join(" ");
}

function buildMixes() {
  const mixGrid = document.querySelector("#mixGrid");
  if (!mixGrid) return;

  mixGrid.innerHTML = mixes.map((mix) => `
    <article class="${mixCardClass(mix)}">
      <div class="mix-cover">
        <img src="${escapeHtml(mix.cover)}" alt="${escapeHtml(mix.title)}" loading="lazy" decoding="async">
      </div>
      <div class="mix-body">
        <div class="mix-title-row">
          <div class="${mixTitleStackClass(mix)}">
            <h3>${renderMixTitle(mix)}</h3>
            ${mix.subtitle ? `<div class="mix-subtitle">${escapeHtml(mix.subtitle)}</div>` : ""}
          </div>
          <div class="mix-meta">
            ${mix.genre ? `<div class="genre">${escapeHtml(mix.genre)}</div>` : ""}
            ${mix.date ? `<time class="release-date">${escapeHtml(mix.date)}</time>` : ""}
          </div>
        </div>
        <div class="mix-player">
          <button class="mix-play" type="button" aria-label="${escapeHtml(mix.title)} を再生">PLAY</button>
          <input class="mix-seek" type="range" min="0" max="1000" value="0" step="1" aria-label="${escapeHtml(mix.title)} の再生位置">
          <span class="mix-time">00:00 / 00:00</span>
          <audio class="mix-audio" preload="metadata" src="${escapeHtml(mix.audio)}" controlsList="nodownload noplaybackrate" disableRemotePlayback></audio>
        </div>
        <pre class="tracklist">${escapeHtml(mix.tracklist)}</pre>
      </div>
    </article>
  `).join("");

  setupMixPlayers();
}

function formatTime(value) {
  if (!Number.isFinite(value)) return "00:00";

  const totalSeconds = Math.max(0, Math.floor(value));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setupMixPlayers() {
  const players = [...document.querySelectorAll(".mix-player")];

  players.forEach((player) => {
    const audio = player.querySelector(".mix-audio");
    const playButton = player.querySelector(".mix-play");
    const seek = player.querySelector(".mix-seek");
    const time = player.querySelector(".mix-time");

    const setPlaying = (isPlaying) => {
      player.classList.toggle("is-playing", isPlaying);
      playButton.textContent = isPlaying ? "PAUSE" : "PLAY";
    };

    const update = () => {
      const duration = audio.duration;
      seek.value = Number.isFinite(duration) && duration > 0
        ? String(Math.round((audio.currentTime / duration) * 1000))
        : "0";
      time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(duration)}`;
    };

    playButton.addEventListener("click", () => {
      if (audio.paused) {
        players.forEach((otherPlayer) => {
          const otherAudio = otherPlayer.querySelector(".mix-audio");
          if (otherAudio !== audio) otherAudio.pause();
        });
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });

    seek.addEventListener("input", () => {
      if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
      audio.currentTime = (Number(seek.value) / 1000) * audio.duration;
    });

    audio.addEventListener("loadedmetadata", update);
    audio.addEventListener("durationchange", update);
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("play", () => setPlaying(true));
    audio.addEventListener("pause", () => setPlaying(false));
    audio.addEventListener("ended", () => setPlaying(false));
    audio.addEventListener("ratechange", () => {
      if (audio.playbackRate !== 1) audio.playbackRate = 1;
    });

    update();
  });
}

function openFocusReader(text) {
  if (!focusReader || !focusReaderText) return;

  focusReaderText.textContent = text;
  focusReader.hidden = false;
  window.requestAnimationFrame(() => focusReader.classList.add("is-open"));
}

function closeFocusReader() {
  if (!focusReader) return;

  focusReader.classList.remove("is-open");
  window.setTimeout(() => {
    if (!focusReader.classList.contains("is-open")) focusReader.hidden = true;
  }, 220);
}

function setupFocusReader() {
  if (!focusReader || !focusClose) return;

  focusClose.addEventListener("click", closeFocusReader);
  focusReader.addEventListener("click", (event) => {
    if (event.target === focusReader) closeFocusReader();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !focusReader.hidden) closeFocusReader();
  });
}

function buildGallery() {
  if (!gallery) return;

  const mode = currentMode();
  const profile = galleryProfiles[mode];
  const photoPool = shuffle(photos);
  const selectedPhotos = photoPool.slice(0, Math.min(photos.length, profile.photoLimit));
  const fragments = distributeByLength(splitDreamText());
  const mixBackdropPool = photoPool.slice(selectedPhotos.length);

  const createTextItem = (fragment, index) => {
    const lengthGroup = textLengthGroup(fragment);
    const textStyle = styleVars(textMotionFor(lengthGroup));
    const shape = textShapeFor(fragment, index);

    return `
      <button class="art-item dream-fragment ${shape} is-${lengthGroup}-text" type="button" style="${textStyle}" data-fragment="${escapeHtml(fragment)}" aria-label="テキストを拡大表示">
        ${escapeHtml(fragment)}
      </button>
    `;
  };

  const createPhotoItem = (name, index, className = "") => {
    const src = `${imageRoot}${name}`;
    const label = name.replace(/\.[^.]+$/, "");
    const motion = pickCycled(photoMotions, index);
    const shape = pickCycled(photoShapes, index);
    const photoStyle = styleVars({
      lift: `${randomBetween(-16, 18).toFixed(0)}px`,
      shift: `${randomBetween(-14, 14).toFixed(0)}px`,
      run: `${randomBetween(5, 16).toFixed(0)}px`,
      "slow-run": `${randomBetween(3, 9).toFixed(0)}px`,
      speed: `${randomBetween(18, 38).toFixed(1)}s`,
      delay: `${randomBetween(-22, 0).toFixed(1)}s`,
      burn: randomBetween(.78, 1.1).toFixed(2),
      scale: randomBetween(.98, 1.07).toFixed(2),
      alpha: randomBetween(.62, .92).toFixed(2),
      z: Math.floor(randomBetween(1, 5))
    });

    return `
      <figure class="art-item photo-item ${className} ${shape} ${motion}" style="${photoStyle}" aria-label="${escapeHtml(label)}">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(label)}" loading="lazy" decoding="async">
      </figure>
    `;
  };

  const photoItems = selectedPhotos.map((name, index) => createPhotoItem(name, index));
  const textItems = fragments.map((fragment, index) => createTextItem(fragment, index));
  const items = [];
  let photoIndex = 0;

  textItems.forEach((textItem, textIndex) => {
    const targetPhotoCount = Math.round(((textIndex + 1) / textItems.length) * photoItems.length);
    while (photoIndex < targetPhotoCount && photoIndex < photoItems.length) {
      items.push({ type: "photo", html: photoItems[photoIndex] });
      photoIndex += 1;
    }
    items.push({ type: "text", html: textItem });
  });

  while (photoIndex < photoItems.length) {
    items.push({ type: "photo", html: photoItems[photoIndex] });
    photoIndex += 1;
  }

  const mixIndex = Math.min(Math.max(8, Math.floor(items.length * profile.mixIndex)), Math.max(0, items.length - 8));
  const mixBackdropPhotos = mixBackdropPool
    .slice(0, profile.backdropLimit)
    .map((name, index) => createPhotoItem(name, selectedPhotos.length + index, "mix-backdrop-item"))
    .join("");
  const mixSection = `
    <section class="art-item mix-section">
      <div class="mix-backdrop" aria-hidden="true">
        ${mixBackdropPhotos}
      </div>
      <div class="mix-grid" id="mixGrid"></div>
    </section>
  `;
  items.splice(mixIndex, 0, { type: "mix", html: mixSection });

  gallery.innerHTML = items.map((item) => item.html).join("");
  gallery.querySelectorAll(".dream-fragment").forEach((fragment) => {
    fragment.addEventListener("click", () => openFocusReader(fragment.dataset.fragment || fragment.textContent.trim()));
  });
}

async function initSite() {
  await loadDreamText();
  setupFocusReader();
  setupHeroCharacter();
  buildGallery();
  buildMixes();
}

initSite();

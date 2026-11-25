import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import {
  Cctv, ShieldAlert, KeyRound, BellRing, Flame, HeartPulse, Radar, Search, Network, Handshake, ArrowRight, Plane,
  Store, Warehouse, Factory, Building2, Landmark, Briefcase, ChevronDown, Check, Play, CloudFog, ShieldCheck, Sparkles,
} from "lucide-react";
import hero from "@/assets/hero_security.mp4.asset.json";
import cam from "@/assets/camera_closeup.mp4.asset.json";
import intrusion from "@/assets/intrusion_open_gateway.mp4.asset.json";
import shoplifting from "@/assets/shoplifting_detection.mp4.asset.json";
import fireAi from "@/assets/fire_ai_detection.mp4.asset.json";
import weaponAi from "@/assets/weapon_detection.mp4.asset.json";
import access from "@/assets/access_control_v2.mp4.asset.json";
import irisAccess from "@/assets/iris_premium_access.mp4.asset.json";
import control from "@/assets/control_room.mp4.asset.json";
import cyberNetwork from "@/assets/cybersecurity_network.mp4.asset.json";
import dronePatrol from "@/assets/drone_warehouse_patrol.mp4.asset.json";
import hygieneRobot from "@/assets/humanoid_vacuum_motion.mp4.asset.json";
import fire from "@/assets/fire_detection.mp4.asset.json";
import aed from "@/assets/defibrillator.mp4.asset.json";
import logo from "@/assets/intel_trade_logo.png.asset.json";
import eurotecLogo from "@/assets/brands/eurotec.jpg.asset.json";
import edenLogo from "@/assets/brands/eden.png.asset.json";
import zktecoLogo from "@/assets/brands/zkteco.svg.asset.json";
import ajaxLogo from "@/assets/brands/ajax.svg.asset.json";
import jablotronLogo from "@/assets/brands/jablotron.svg.asset.json";
import paradoxLogo from "@/assets/brands/paradox.png.asset.json";
import incertLogo from "@/assets/brands/incert.svg.asset.json";
import honeywellLogo from "@/assets/brands/honeywell.svg.asset.json";
import bosecLogo from "@/assets/brands/bosec.svg.asset.json";
import siemensLogo from "@/assets/brands/siemens.svg.asset.json";
import hikvisionLogo from "@/assets/brands/hikvision.svg.asset.json";
import dahuaLogo from "@/assets/brands/dahua.svg.asset.json";
import lgLogo from "@/assets/brands/lg_color.svg.asset.json";
import boschLogo from "@/assets/brands/bosch_color.svg.asset.json";
import hidLogo from "@/assets/brands/hid.svg.asset.json";
import totalLogo from "@/assets/brands/clients/totalenergies.svg.asset.json";
import stellantisLogo from "@/assets/brands/clients/stellantis.svg.asset.json";
import carrefourLogo from "@/assets/brands/clients/carrefour_market.svg.asset.json";
import delhaizeLogo from "@/assets/brands/clients/delhaize.svg.asset.json";
import mercedesLogo from "@/assets/brands/clients/mercedes_benz.svg.asset.json";
import aspriaLogo from "@/assets/brands/clients/aspria_royal_la_rasante.svg.asset.json";
import audiLogo from "@/assets/brands/clients/audi.svg.asset.json";
const clients = [
  { name: "TotalEnergies Benelux", logo: totalLogo.url },
  { name: "Stellantis", logo: stellantisLogo.url },
  { name: "Carrefour Market", logo: carrefourLogo.url },
  { name: "Delhaize", logo: delhaizeLogo.url },
  { name: "Mercedes-Benz", logo: mercedesLogo.url },
  { name: "Aspria Royal La Rasante", logo: aspriaLogo.url },
  { name: "Audi", logo: audiLogo.url },
];
import { dict, LANGS, type Lang } from "@/lib/i18n";
import { securityOfferings } from "@/lib/security-offerings";
import { SecurityOfferings } from "@/components/security-offerings";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intel Trade by CA — Conseil & audit sécurité" },
      { name: "description", content: "Huit domaines technologiques : robotique, intrusion, vidéosurveillance, accès, incendie, santé, hygiène et cybersécurité. Conseil et audit par Intel Trade by CA." },
      { property: "og:title", content: "Intel Trade by CA — Conseil & audit sécurité" },
      { property: "og:description", content: "Huit domaines technologiques, des rondes par drone aux robots de nettoyage : conseil, audit et sélection de solutions adaptées à votre site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const svcMeta = [
  { icon: Plane, n: "01", color: 4, video: dronePatrol.url },
  { icon: ShieldAlert, n: "02", color: 1, video: intrusion.url },
  { icon: Cctv, n: "03", color: 2, video: cam.url },
  { icon: KeyRound, n: "04", color: 3, video: irisAccess.url },
  { icon: Flame, n: "05", color: 5, video: fire.url },
  { icon: HeartPulse, n: "06", color: 6, video: aed.url },
  { icon: Sparkles, n: "07", color: 8, video: hygieneRobot.url },
  { icon: ShieldCheck, n: "08", color: 7, video: cyberNetwork.url },
];
const sectorIcons = [Store, Warehouse, Factory, Building2, Landmark, Briefcase];
const stepIcons = [Radar, Search, Network, Handshake];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")), { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      let i = 0;
      const t = setInterval(() => { i++; setV(Math.round((to * i) / 40)); if (i >= 40) clearInterval(t); }, 30);
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function BgVideo({ src, className = "" }: { src: string; className?: string }) {
  return <video src={src} autoPlay muted loop playsInline className={`absolute inset-0 h-full w-full object-cover ${className}`} />;
}

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// {children}</p>;
}

function Ticker({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % words.length), 2000); return () => clearInterval(t); }, [words.length]);
  return <span key={i} className="inline-block text-accent animate-in fade-in slide-in-from-bottom-2 duration-500">{words[i]}</span>;
}

const brands: { name: string; cats: number[]; logo: string }[] = [
  { name: "Incert", cats: [0], logo: incertLogo.url },
  { name: "Eurotec", cats: [0], logo: eurotecLogo.url },
  { name: "Ajax", cats: [0, 1], logo: ajaxLogo.url },
  { name: "Jablotron", cats: [0], logo: jablotronLogo.url },
  { name: "Paradox", cats: [0], logo: paradoxLogo.url },
  { name: "Honeywell", cats: [0, 3], logo: honeywellLogo.url },
  { name: "Bosec", cats: [1], logo: bosecLogo.url },
  { name: "Siemens", cats: [1], logo: siemensLogo.url },
  { name: "Hikvision", cats: [2], logo: hikvisionLogo.url },
  { name: "Dahua", cats: [2], logo: dahuaLogo.url },
  { name: "LG", cats: [2], logo: lgLogo.url },
  { name: "Bosch", cats: [2, 3], logo: boschLogo.url },
  { name: "HID", cats: [3], logo: hidLogo.url },
  { name: "Eden", cats: [3], logo: edenLogo.url },
  { name: "ZKTeco", cats: [3], logo: zktecoLogo.url },
];

function Index() {
  useReveal();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const [lang, setLang] = useState<Lang>("fr");
  useEffect(() => { const l = localStorage.getItem("lang") as Lang | null; if (l && LANGS.includes(l)) setLang(l); }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const changeLang = (l: Lang) => { setLang(l); localStorage.setItem("lang", l); };
  const t = dict[lang];
  const additional = securityOfferings[lang];
  const navigation = [...t.nav.slice(0, 2), ["home-security", additional.home.label], ...t.nav.slice(2)];
  const services = t.services.map((x, i) => ({ ...x, ...(svcMeta[i] ?? { icon: Cctv, n: "01", color: 2, video: cam.url }) }));
  const sectors = t.sectors.map(([tt, d], i) => ({ t: tt, d, icon: sectorIcons[i] ?? Store }));
  const steps = t.steps.map(([tt, d], i) => ({ t: tt, d, icon: stepIcons[i] ?? Radar }));
  const faqs = t.faqs;
  const s = services[active] ?? services[0];
  if (!s) return null;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" aria-label={`Intel Trade by CA — ${t.home}`} className="block shrink-0">
            <img src={logo.url} alt="Intel Trade by CA" width={1932} height={714} className="h-16 w-44 object-contain object-left sm:h-20 sm:w-60" />
          </a>
          <div className="hidden gap-3 font-mono text-xs uppercase text-accent 2xl:flex">
            {navigation.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-accent/80">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex overflow-hidden rounded-sm border border-border font-mono text-xs" role="group" aria-label="Language">
              {LANGS.map((l) => (
                <button key={l} onClick={() => changeLang(l)} aria-pressed={lang === l}
                  className={`px-2.5 py-2 uppercase transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}>{l}</button>
              ))}
            </div>
            <a href="#contact" className="hidden rounded-sm border border-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground hover:shadow-glow sm:inline-block">{t.audit}</a>
          </div>
        </nav>
        <nav aria-label={t.solLabel} className="flex gap-5 overflow-x-auto border-t border-border px-6 py-3 font-mono text-xs uppercase text-accent 2xl:hidden">
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} className="shrink-0 transition hover:text-accent/80">{label}</a>)}
        </nav>
      </header>

      {/* HERO VIDEO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <BgVideo src={hero.url} />
        <div className="absolute inset-0 video-shade" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/15 to-transparent animate-scan" />
        <div className="absolute right-6 top-24 hidden font-mono text-xs text-primary md:block">
          <span className="animate-blink text-destructive">●</span> REC · CAM-01 · {t.rec}
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="animate-blink">▮</span> <Ticker key={lang} words={services.map((x) => x.short.toUpperCase())} /> · {t.tagline}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {t.h1[0]}<br />{t.h1[1]}<br />{t.h1[2]}<span className="text-primary text-glow">{t.h1[3]}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/80">{t.heroP}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:brightness-110">
              {t.cta1} <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#solutions" className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/40 px-6 py-3 font-medium backdrop-blur transition hover:border-primary">
              <Play className="size-4" /> {t.cta2}
            </a>
          </div>
        </div>
        <a href="#approche" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"><ChevronDown /></a>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-card py-4">
        <div className="flex w-max animate-marquee gap-12 font-mono text-sm uppercase tracking-widest text-accent">
          {[...Array(2)].flatMap((_, k) => t.marquee.map((w) => (
            <span key={k + w} className="flex items-center gap-12">{w}<span>◆</span></span>
          )))}
        </div>
      </div>

      {/* APPROCHE */}
      <section id="approche" className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal max-w-3xl">
          <Label>{t.apLabel}</Label>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{t.apH}</h2>
          <p className="mt-6 text-muted-foreground">{t.apP1}</p>
          <p className="mt-4 text-muted-foreground">{t.apP2}</p>
          <div className="mt-10 grid grid-cols-3 gap-6 font-mono">
            <div className="border-l-2 border-primary pl-3"><div className="text-4xl"><Counter to={services.length} /></div><div className="text-xs uppercase text-muted-foreground">{t.stats[0]}</div></div>
            <div className="border-l-2 border-primary pl-3"><div className="text-4xl"><Counter to={3} /></div><div className="text-xs uppercase text-muted-foreground">{t.stats[1]}</div></div>
            <div className="border-l-2 border-primary pl-3"><div className="text-4xl"><Counter to={360} suffix="°" /></div><div className="text-xs uppercase text-muted-foreground">{t.stats[2]}</div></div>
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section id="partenaires" className="border-y border-border bg-card/40 py-24">
        <div className="reveal mx-auto max-w-7xl px-6"><Label>{t.pLabel}</Label>
          <p className="mt-4 max-w-3xl text-muted-foreground">{t.pP}</p></div>
        <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-6" style={{ animationDuration: "75s" }}>
            {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
              <div key={i} className="group flex h-32 w-60 shrink-0 items-center justify-center rounded-sm border border-border bg-foreground/95 transition hover:border-primary hover:shadow-glow">
                <img src={b.logo} alt={b.name} loading="lazy" className="max-h-14 max-w-[75%] object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {t.pCats.map((c, i) => {
            const names = brands.filter((b) => b.cats.includes(i)).map((b) => b.name);
            const Icon = [BellRing, Flame, Cctv, KeyRound][i] ?? BellRing;
            return (
              <div key={c} className="reveal rounded-sm border border-border p-4">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"><Icon className="size-4" />{c}</p>
                <p className="mt-2 text-sm text-muted-foreground">{names.length ? names.join(" · ") : t.pSoon}</p>
              </div>
            );
          })}
        </div>
        <div className="reveal mx-auto mt-20 max-w-7xl px-6"><Label>{t.trustLabel}</Label></div>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-6" style={{ animationDuration: "60s", animationDirection: "reverse" }}>
            {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
              <div key={i} className="flex h-32 w-60 shrink-0 items-center justify-center rounded-sm border border-border bg-foreground/95 transition hover:border-primary hover:shadow-glow">
                <img src={c.logo} alt={c.name} loading="lazy" className="max-h-16 max-w-[78%] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS INTERACTIVES */}
      <section id="solutions" className="relative isolate scroll-mt-40 overflow-clip border-y border-border bg-background">
        {active === 1 && <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 top-20 -z-10 overflow-hidden">
          <BgVideo src={control.url} className="object-top" />
          <div className="absolute inset-0 video-shade bg-background/40" />
        </div>}
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="reveal"><Label>{t.solLabel}</Label>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{t.solH}</h2></div>
          <div className="reveal mt-12 flex flex-wrap gap-2">
            {services.map((x, i) => (
              <Button key={x.n} variant="ghost" onClick={() => setActive(i)} aria-pressed={i === active}
                style={{ "--dc": `var(--domain-${x.color})` } as CSSProperties}
                className={`h-auto flex items-center gap-2 rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${i === active ? "border-[var(--dc)] bg-[var(--dc)] text-background hover:bg-[var(--dc)] hover:text-background" : "bg-background/70 border-[var(--dc)]/50 text-[var(--dc)] hover:border-[var(--dc)] hover:bg-transparent hover:text-[var(--dc)]"}`}>
                <x.icon className="size-4" /> {x.short}
              </Button>
            ))}
          </div>
          <div key={active} style={{ "--primary": `var(--domain-${s.color})` } as CSSProperties} className="mt-10 grid gap-10 lg:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative aspect-video overflow-hidden rounded-sm border border-border p-1 hud-corner">
              <div className="relative h-full w-full overflow-hidden">
                <BgVideo src={s.video} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-6xl font-bold text-primary/80">{s.n}</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold">{s.t}</h3>
              <p className="mt-4 text-foreground/85">{s.d}</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {s.items.map(([a, b]) => (
                  <li key={a} className="rounded-sm border border-border bg-background/80 p-4 transition hover:border-primary">
                    <p className="flex items-center gap-2 font-medium"><Check className="size-4 text-primary" />{a}</p>
                    <p className="mt-1 text-sm text-foreground/85">{b}</p>
                  </li>
                ))}
              </ul>
              {active === 1 && <div className="mt-4 rounded-sm border border-primary/40 bg-background/80 p-4">
                <p className="flex items-center gap-3 font-medium"><CloudFog aria-hidden="true" className="size-6 shrink-0 text-primary" />{additional.fog[0]}</p>
                <p className="mt-2 text-sm text-foreground/85">{additional.fog[1]}</p>
              </div>}
              <p className="mt-6 border-l-2 border-accent pl-4 text-sm"><span className="font-mono text-accent">{t.added}</span> {s.v}</p>
            </div>
          </div>
          <p className="mt-10 text-xs text-foreground/85">{t.solNote}</p>
        </div>
      </section>

      <SecurityOfferings lang={lang} contactLabel={t.cta1} />

      {/* IA */}
      <section id="ia" className="mx-auto max-w-7xl px-6 py-28">
        <div className="reveal"><Label>{t.aiLabel}</Label>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{t.aiH}</h2>
          <p className="mt-6 max-w-3xl text-muted-foreground">{t.aiP}</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.ai.map((x, i) => {
            const Icon = [ShieldAlert, Store, Flame][i] ?? ShieldAlert;
            const vid = [intrusion.url, shoplifting.url, fireAi.url, weaponAi.url][i] ?? hero.url;
            return (
              <article key={x.t} className="reveal group flex flex-col overflow-hidden rounded-sm border border-border bg-card/60 transition hover:border-primary hover:shadow-glow" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative aspect-video overflow-hidden">
                  <BgVideo src={vid} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <span className="absolute left-3 top-3 font-mono text-xs text-primary"><span className="animate-blink text-destructive">●</span> AI · 0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex items-center gap-3 font-display text-2xl font-bold"><Icon className="size-6 text-primary" />{x.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{x.d}</p>
                  <p className="mt-5 font-mono text-xs uppercase tracking-widest text-accent">{t.aiHow}</p>
                  <ul className="mb-6 mt-3 space-y-2 text-sm">
                    {x.how.map((h) => <li key={h} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{h}</li>)}
                  </ul>
                  <p className="mt-auto border-l-2 border-accent pl-3 text-sm"><span className="font-mono text-accent">{t.aiGain} — </span>{x.gain}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTEURS */}
      <section id="secteurs" className="mx-auto max-w-7xl px-6 py-28">
        <div className="reveal"><Label>{t.secLabel}</Label>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{t.secH}</h2></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((x, i) => (
            <div key={x.t} className="reveal group relative bg-background p-8 transition hover:bg-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-primary transition duration-500 group-hover:scale-x-100" />
              <x.icon className="size-8 text-primary" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-xl font-bold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO BAND */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <BgVideo src={access.url} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="reveal relative mx-auto max-w-4xl px-6 text-center">
          <p className="font-display text-3xl font-bold md:text-5xl">{t.quote}</p>
          <p className="mt-6 font-mono text-sm uppercase tracking-widest text-primary">Intel Trade by CA</p>
        </div>
      </section>

      {/* METHODE */}
      <section id="methode" className="mx-auto max-w-7xl px-6 py-28">
        <div className="reveal"><Label>{t.metLabel}</Label>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{t.metH}</h2></div>
        <div className="relative mt-14 grid gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-primary via-accent to-transparent md:block" />
          {steps.map((x, i) => (
            <div key={x.t} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="relative flex size-14 items-center justify-center rounded-sm border border-primary/50 bg-background shadow-glow"><x.icon className="size-6 text-primary" /></div>
              <p className="mt-6 font-mono text-xs text-muted-foreground">{t.step} 0{i + 1}</p>
              <h3 className="mt-1 font-display text-lg font-bold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 py-28">
          <div className="reveal"><Label>FAQ</Label>
            <h2 className="mt-4 font-display text-4xl font-bold">{t.faqH}</h2></div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map(([q, a], i) => (
              <div key={q}>
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left font-medium">
                  {q}<ChevronDown className={`size-5 text-primary transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="pb-5 text-muted-foreground animate-in fade-in slide-in-from-top-1">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden hero-bg">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
          <h2 className="reveal font-display text-4xl font-bold md:text-6xl">{t.ctH1}<span className="text-primary text-glow">{t.ctH2}</span></h2>
          <p className="mt-6 text-muted-foreground">{t.ctP}</p>
          <form className="mt-10 grid gap-3 text-left sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); alert(t.thanks); }}>
            <input required placeholder={t.fName} className="rounded-sm border border-input bg-background/80 px-4 py-3 outline-none focus:border-primary" />
            <input placeholder={t.fCompany} className="rounded-sm border border-input bg-background/80 px-4 py-3 outline-none focus:border-primary" />
            <input required type="email" placeholder={t.fEmail} className="rounded-sm border border-input bg-background/80 px-4 py-3 outline-none focus:border-primary" />
            <select className="rounded-sm border border-input bg-background/80 px-4 py-3 outline-none focus:border-primary">
              {services.map((x) => <option key={x.n}>{x.short}</option>)}
              <option>{additional.home.label}</option>
            </select>
            <textarea required placeholder={t.fProject} rows={4} className="rounded-sm border border-input bg-background/80 px-4 py-3 outline-none focus:border-primary sm:col-span-2" />
            <button className="rounded-sm bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:brightness-110 sm:col-span-2">{t.fSend}</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} INTEL TRADE BY CA</span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </div>
  );
}

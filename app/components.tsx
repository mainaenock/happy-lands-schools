"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, MapPin, Menu, Pause, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { publicAsset } from "./public-assets";
import { campuses, stages } from "./school-data";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#campuses", label: "Our Campuses" },
  { href: "/#learning", label: "Learning" },
  { href: "/#school-life", label: "School Life" },
];

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Happyland Schools home">
      <Image src={publicAsset("/images/crest.png")} width={52} height={52} alt="" />
      <span><strong>Happyland</strong><small>Schools</small></span>
    </Link>
  );
}

export function Navigation({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="site-nav">
      <div className="wrap nav-inner">
        <Brand />
        <button className="menu-toggle icon-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={open ? "nav-links is-open" : "nav-links"} id="primary-navigation" aria-label="Main navigation" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={home && href === "/" ? "page" : undefined} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/#admissions" className="button nav-admissions" onClick={() => setOpen(false)}>Admissions <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </div>
  );
}

const slides = [
  {
    eyebrow: "A Christian school community since 1993",
    title: "Happy learners.",
    accent: "Bright futures.",
    description: "From first discoveries to big ambitions, we nurture curious minds and strong character across four Happyland campuses.",
    image: "/images/hero.jpg",
    illustrative: true,
    cta: "Explore our campuses",
    href: "#campuses",
  },
  {
    eyebrow: "Learning at every stage",
    title: "Curious minds.",
    accent: "Confident learners.",
    description: "Discover how Happyland supports children from their first years at school through junior secondary and senior school.",
    image: "/images/preparatory.jpg",
    illustrative: false,
    cta: "Explore our programmes",
    href: "#learning",
  },
  {
    eyebrow: "Happyland Girls Senior School",
    title: "Room to grow.",
    accent: "Ready to lead.",
    description: "Meet our girls’ boarding school in Kiserian, where academic learning goes hand in hand with growing independence.",
    image: "/images/senior-girls.jpg",
    illustrative: false,
    cta: "Explore Girls Senior School",
    href: "/campuses/senior-girls/",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const playbackControl = useRef<HTMLButtonElement>(null);
  const slide = slides[active];
  const rotating = playing && !hovered && !focusPaused;
  const step = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPlaying(!motion.matches);
    syncMotionPreference();
    motion.addEventListener("change", syncMotionPreference);
    return () => motion.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [active, rotating]);

  return (
    <section
      className="hero"
      aria-label="Welcome to Happyland Schools"
      aria-roledescription="carousel"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={(event) => setFocusPaused(event.target !== playbackControl.current)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusPaused(false);
      }}
    >
      {slides.map(({ image }, index) => (
        <Image key={image} src={publicAsset(image)} alt="" fill sizes="100vw" preload={index === 0}
          className={index === 0 ? "hero-image" : "hero-image hero-image-secondary"} data-active={index === active} />
      ))}
      <div className="wrap hero-layout">
        <div className="hero-copy" aria-live={rotating ? "off" : "polite"} aria-atomic="true">
          <p className="eyebrow hero-eyebrow"><span />{slide.eyebrow}</p>
          <h1>{slide.title}<br /><em>{slide.accent}</em></h1>
          <p className="hero-description">{slide.description}</p>
          <div className="actions">
            <Link href={slide.href} className="button gold">{slide.cta}<ArrowUpRight size={17} /></Link>
            <Link href="#admissions" className="button outline">Plan a visit <ArrowRight size={17} /></Link>
          </div>
        </div>
        <div className="hero-bottom">
          <a className="hero-scroll" href="#about"><ArrowDown size={14} /> Discover Happyland</a>
          <div className="hero-controls">
            <span aria-hidden="true">{String(active + 1).padStart(2, "0")} <i /> {String(slides.length).padStart(2, "0")}</span>
            <button ref={playbackControl} type="button" className="icon-button" aria-label={playing ? "Pause slideshow" : "Play slideshow"} onClick={() => setPlaying(!playing)}>
              {playing ? <Pause size={17} /> : <Play size={17} />}
            </button>
            <button type="button" className="icon-button" aria-label="Previous slide" onClick={() => step(-1)}><ChevronLeft size={21} /></button>
            <button type="button" className="icon-button" aria-label="Next slide" onClick={() => step(1)}><ChevronRight size={21} /></button>
          </div>
        </div>
      </div>
      {slide.illustrative && <span className="image-credit">Illustrative image</span>}
    </section>
  );
}

export function LearningStages() {
  return (
    <div className="stage-list">
      {stages.map(({ title, description, campuses: campusSlugs }, index) => (
        <details key={title} open={index === 0 || undefined}>
          <summary><span className="stage-number">{String(index + 1).padStart(2, "0")}</span>{title}<ChevronDown size={20} /></summary>
          <div className="stage-content">
            <p>{description}</p>
            <div className="stage-links">
              {campuses.filter(({ slug }) => campusSlugs.includes(slug)).map(({ slug, shortName }) => (
                <Link key={slug} href={`/campuses/${slug}/`}><MapPin size={13} />{shortName}</Link>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarDays, Compass, GraduationCap, MapPin, Music2, School, Waves } from "lucide-react";
import { Hero, LearningStages } from "./components";
import { publicAsset } from "./public-assets";
import { campuses } from "./school-data";
import { Admissions, Footer, Header } from "./site-shell";

const facts = [
  { icon: CalendarDays, value: "1993", label: "Year founded" },
  { icon: School, value: "4 campuses", label: "One Happyland family" },
  { icon: GraduationCap, value: "Early years to senior", label: "A path through school" },
  { icon: Compass, value: "Day & boarding", label: "Options vary by campus" },
];

const activities = [
  { icon: Waves, title: "Sport & swimming", description: "Build confidence in the pool and learn to work as a team through games and athletics." },
  { icon: Music2, title: "Music & the arts", description: "Find your voice through music, drama and creative work in and after school." },
  { icon: BookOpen, title: "Labs & library", description: "Test ideas in the lab, find a new favourite book and practise independent research." },
];

export default function Home() {
  return (
    <div id="top">
      <Header home />
      <main id="main">
        <Hero />
        <div className="facts">
          <div className="wrap">
            <ul className="fact-grid" aria-label="Happyland at a glance">
              {facts.map(({ icon: Icon, value, label }) => (
                <li key={value}>
                  <span className="fact-icon"><Icon size={22} strokeWidth={1.6} /></span>
                  <span><strong>{value}</strong><small>{label}</small></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section id="about" className="section about">
          <div className="wrap split about-grid">
            <div className="story-image">
              <Image src={publicAsset("/images/story.jpg")} alt="A Happyland girls’ sports team wearing their medals" fill sizes="(max-width: 760px) 92vw, 45vw" />
              <span className="story-tag">Since <strong>1993</strong></span>
            </div>
            <div>
              <p className="eyebrow"><span />Our story</p>
              <h2>Growing with families since <span className="heading-accent">1993.</span></h2>
              <p className="body-copy">Happyland began with a handful of pre-schoolers in a rented Nairobi house. A primary section followed in 1999. Today, four campuses carry that same Christian foundation into classrooms, clubs and school life.</p>
              <p className="body-copy">We want every child to feel known, be challenged in their learning and have the chance to discover what they love.</p>
              <Link href="#campuses" className="text-link">Meet the Happyland family <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>

        <section id="campuses" className="section campuses">
          <div className="wrap">
            <div className="section-intro">
              <p className="eyebrow"><span />Our campuses</p>
              <h2>Four schools. <span className="heading-accent">One family.</span></h2>
              <p className="body-copy">Explore the campus and learning stage that fit your family.</p>
            </div>
            <div className="campus-grid">
              {campuses.map(({ slug, name, location, image, imageAlt }) => (
                <Link key={slug} className="campus-card" href={`/campuses/${slug}/`}>
                  <div className="campus-photo"><Image src={publicAsset(image)} alt={imageAlt} fill sizes="(max-width: 540px) 92vw, (max-width: 900px) 46vw, 25vw" /></div>
                  <div className="campus-copy">
                    <p><MapPin size={14} />{location}</p>
                    <h3>{name}</h3>
                    <span className="campus-arrow"><ArrowUpRight size={17} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="learning" className="section learning">
          <div className="wrap split learning-grid">
            <div>
              <p className="eyebrow"><span />Learning at Happyland</p>
              <h2>Space to grow at every stage.</h2>
              <p className="body-copy">See what each stage of learning looks like and where it’s offered.</p>
            </div>
            <LearningStages />
          </div>
        </section>

        <section id="school-life" className="section school-life">
          <div className="wrap split life-grid">
            <div>
              <p className="eyebrow"><span />School life</p>
              <h2>Beyond the <span className="heading-accent">classroom.</span></h2>
              <ul className="activity-list">
                {activities.map(({ icon: Icon, title, description }) => (
                  <li key={title}>
                    <Icon size={22} strokeWidth={1.7} />
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </li>
                ))}
              </ul>
              <a className="text-link" href="https://happylandschools.com/gallery/">View the school gallery <ArrowUpRight size={18} /></a>
            </div>
            <div className="life-image">
              <Image src={publicAsset("/images/school-life.jpg")} alt="Happyland learners taking part in an outdoor martial arts activity" fill sizes="(max-width: 760px) 92vw, 45vw" />
            </div>
          </div>
        </section>
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}

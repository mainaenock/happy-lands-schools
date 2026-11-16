import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Brand, Navigation } from "./components";
import { campuses, email, phone, phoneLink } from "./school-data";

export function Header({ home = false }: { home?: boolean }) {
  return (
    <header>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="utility">
        <div className="wrap utility-inner">
          <span><MapPin size={13} /> Kenya</span>
          <div className="utility-contacts">
            <a href={phoneLink}><Phone size={13} />{phone}</a>
            <a href={`mailto:${email}`}><Mail size={14} />{email}</a>
          </div>
        </div>
      </div>
      <Navigation home={home} />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>A family of Christian schools serving learners from early childhood through senior school.</p>
          </div>
          <div>
            <h2>Explore</h2>
            <Link href="/#about">About us</Link>
            <Link href="/#learning">Learning</Link>
            <Link href="/#school-life">School life</Link>
            <Link href="/#admissions">Admissions</Link>
          </div>
          <div>
            <h2>Our campuses</h2>
            {campuses.map(({ slug, shortName }) => <Link key={slug} href={`/campuses/${slug}/`}>{shortName}</Link>)}
          </div>
          <div>
            <h2>Get in touch</h2>
            <a href={phoneLink}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <a href="https://happylandschools.com/contact/">School contact page <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="footer-base">
          <span>Happyland Schools website concept</span>
          <a href="#top">Back to top <ArrowDown size={14} /></a>
        </div>
      </div>
    </footer>
  );
}

export function Admissions() {
  return (
    <section className="admissions section" id="admissions" aria-labelledby="admissions-title">
      <div className="wrap admissions-inner">
        <div>
          <p className="eyebrow light-eyebrow"><span />Admissions</p>
          <h2 id="admissions-title">Come meet us.</h2>
          <p>Tell our admissions team which campus and year group you’re interested in. They can help you arrange a visit and explain what to bring.</p>
        </div>
        <div className="actions">
          <a href={`mailto:${email}?subject=Happyland%20campus%20visit`} className="button gold">Email admissions <ArrowUpRight size={17} /></a>
          <a href={phoneLink} className="button outline"><Phone size={15} /> Call the school</a>
        </div>
      </div>
    </section>
  );
}

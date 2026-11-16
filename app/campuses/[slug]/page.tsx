import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { publicAsset } from "../../public-assets";
import { campuses, stages } from "../../school-data";
import { Admissions, Footer, Header } from "../../site-shell";

type CampusProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return campuses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CampusProps) {
  const { slug } = await params;
  const campus = campuses.find((entry) => entry.slug === slug);
  if (!campus) return {};
  return { title: campus.name, description: campus.introduction };
}

export default async function CampusPage({ params }: CampusProps) {
  const { slug } = await params;
  const campus = campuses.find((entry) => entry.slug === slug);
  if (!campus) notFound();

  return (
    <div id="top">
      <Header />
      <main id="main">
        <section className="campus-detail section">
          <div className="wrap">
            <Link className="text-link back-link" href="/#campuses"><ArrowLeft size={16} /> All campuses</Link>
            <div className="split campus-detail-grid">
              <div>
                <p className="eyebrow"><MapPin size={16} />{campus.location}</p>
                <h1>{campus.name}</h1>
                <p className="body-copy">{campus.introduction}</p>
                <ul className="campus-programmes" aria-label="Learning stages at this campus">
                  {stages.filter((stage) => stage.campuses.includes(slug)).map(({ title }) => (
                    <li key={title}><GraduationCap size={18} />{title}</li>
                  ))}
                </ul>
                <div className="actions">
                  <a href="#admissions" className="button">Plan a visit <ArrowUpRight size={17} /></a>
                  <a href={`https://happylandschools.com/${campus.officialPath}/`} className="text-link">School information <ArrowUpRight size={16} /></a>
                </div>
              </div>
              <div className="detail-image">
                <Image src={publicAsset(campus.image)} alt={campus.imageAlt} fill sizes="(max-width: 760px) 92vw, 45vw" preload />
              </div>
            </div>
          </div>
        </section>
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}

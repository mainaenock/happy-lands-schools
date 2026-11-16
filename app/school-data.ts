export const phone = "+254 719 696 151";
export const phoneLink = "tel:+254719696151";
export const email = "info@happylandschools.com";

export const campuses = [
  {
    slug: "preparatory",
    name: "Happyland Preparatory School",
    shortName: "Preparatory",
    location: "Buruburu, Nairobi",
    image: "/images/preparatory.jpg",
    imageAlt: "Happyland Preparatory School in Buruburu",
    introduction: "Where the Happyland story began. Our Buruburu community supports learners as they build strong foundations, discover their interests and grow in confidence.",
    officialPath: "buruburu-preparatory",
  },
  {
    slug: "greenspan",
    name: "Happyland Greenspan School",
    shortName: "Greenspan",
    location: "Donholm, Nairobi",
    image: "/images/greenspan.jpg",
    imageAlt: "Happyland Greenspan School in Donholm",
    introduction: "A school community in Greenspan where pupils develop academic skills through hands-on learning and discover what they enjoy beyond the classroom.",
    officialPath: "happyland-greenspan",
  },
  {
    slug: "eden",
    name: "Happyland Eden School",
    shortName: "Eden",
    location: "Syokimau, Machakos",
    image: "/images/eden.jpg",
    imageAlt: "Young learners at Happyland",
    introduction: "Our Syokimau early-years campus offers daycare and kindergarten. Children build confidence through guided play, practical activities and Montessori-inspired learning.",
    officialPath: "eden",
  },
  {
    slug: "senior-girls",
    name: "Happyland Girls Senior School",
    shortName: "Girls Senior School",
    location: "Kiserian, Kajiado",
    image: "/images/senior-girls.jpg",
    imageAlt: "Courtyard at Happyland Girls Senior School",
    introduction: "A girls’ boarding school in Kiserian where young women are supported as they take on new academic challenges and grow into leadership roles.",
    officialPath: "senior-girls",
  },
] as const;

export const stages = [
  { title: "Pre-school & daycare", description: "Through play, stories and hands-on activities, our youngest learners build the confidence to try new things.", campuses: ["preparatory", "greenspan", "eden"] },
  { title: "Primary school", description: "Learners build strong foundations in literacy and numeracy, then put those skills to work through projects, discussion and practical activities.", campuses: ["preparatory", "greenspan"] },
  { title: "Junior secondary", description: "Pupils explore a wider range of subjects and begin to connect what they learn with their interests and future choices.", campuses: ["preparatory", "greenspan"] },
  { title: "Senior school", description: "At Happyland Girls Senior School, young women deepen their subject knowledge, take on more responsibility and prepare for life after school.", campuses: ["senior-girls"] },
];

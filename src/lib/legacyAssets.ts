export interface LegacyAssetImage {
  src: string;
  alt: string;
  fullWidth?: boolean;
}

export interface LegacyVideo {
  id: string;
  title: string;
}

export interface LegacyAssetPack {
  featuredStrip?: LegacyAssetImage;
  clientStrip?: LegacyAssetImage;
  clientLabel?: string;
  gallery?: LegacyAssetImage[];
  galleryTitle?: string;
  extraVideos?: LegacyVideo[];
}

const img = (src: string, alt: string, fullWidth = false): LegacyAssetImage => ({
  src,
  alt,
  fullWidth,
});

export const DEFAULT_LEGACY_VIDEO: LegacyVideo = {
  id: 'Jqe-SDu1yoU',
  title: 'SOS Admissions - College and Graduate School Admissions Consulting',
};

export const LEGACY_IMAGES = {
  featuredInNews: img('/images/legacy/featured-in-news.webp', 'SOS Admissions featured in major news outlets', true),
  collegeClients: img('/images/legacy/college-application-clients.webp', 'College admissions clients have gone to top universities', true),
  sosFeaturedIn: img('/images/legacy/sos-featured-in.webp', 'SOS Admissions featured in national media', true),
  sosClients: img('/images/legacy/sos-clients.webp', 'SOS Admissions clients have gone to leading schools', true),
  sosMbaClients: img('/images/legacy/sos-mba-clients.webp', 'SOS Admissions MBA clients have gone to top business schools', true),
  nursingClients: img('/images/legacy/sos-nursing-clients.webp', 'SOS Admissions nursing clients have gone to top programs', true),
  schoolClients: img('/images/legacy/school-clients-have-gone-to.webp', 'SOS Admissions clients have gone to top healthcare and graduate schools', true),
  dentalClients: img('/images/legacy/dental-school-clients.webp', 'SOS Admissions dental school clients have gone to top dental programs', true),
  lawClients: img('/images/legacy/logos_law.webp', 'SOS Admissions law school clients have gone to top law schools', true),
  veterinaryClients: img('/images/legacy/vetschool-logos-1.webp', 'SOS Admissions veterinary school clients have gone to top veterinary schools', true),
  cnnAppearance: img('/images/legacy/sos-latest-appearance-on-cnn.webp', 'SOS Admissions latest appearance on CNN'),
  resumeService: img('/images/legacy/sosresumeservice.webp', 'SOS Admissions resume service'),
  faqPromo: img('/images/legacy/sos-frequently-asked-questions.webp', 'SOS Admissions frequently asked questions'),
  contactImage: img('/images/legacy/contactusimage.png', 'Contact SOS Admissions'),
  privacyPromo: img('/images/legacy/privacy-policy-and-terms.webp', 'Privacy policy and terms'),
  privateSchoolPromo: img('/images/legacy/private-school-application-small.png', 'Private school admissions consulting'),
  intlHomeIcon: img('/images/legacy/homeicon3-4-300x300.png', 'International student admissions support icon'),
  intlAdmissionsIcon: img('/images/legacy/homeouradmissions3.png', 'International admissions consulting icon'),
  intlGuidanceIcon: img('/images/legacy/homeicon4-8.png', 'International admissions guidance icon'),
  intlSupportIcon: img('/images/legacy/icon2.png', 'International student support icon'),
  newsGraphic: img('/images/legacy/news.png', 'SOS Admissions news graphic'),
  startGraphic: img('/images/legacy/start.jpg', 'Start your admissions journey'),
  startIcon: img('/images/legacy/start.png', 'Start now graphic'),
  untitledGraphic: img('/images/legacy/untitled-1.png', 'Admissions consulting service graphic'),
  sendUs: img('/images/legacy/send-us.webp', 'Send us your application materials'),
  askYou: img('/images/legacy/we-will-ask-you.webp', 'We will ask you targeted interview questions'),
  askYouTwo: img('/images/legacy/we-will-ask-you-2.webp', 'We will ask follow-up interview questions'),
  reviewAndRevise: img('/images/legacy/we-will-review-and-revise.webp', 'We will review and revise your interview responses'),
  editAndProofread: img('/images/legacy/well-edit-and-proofread.webp', 'We will edit and proofread your application'),
  pastClients: img('/images/legacy/pastclients.png', 'Past SOS Admissions clients'),
  messageIcon: img('/images/legacy/msgicon1.png', 'Message and communication icon'),
  editIcon: img('/images/legacy/edit2.png', 'Editing service icon'),
  gradConsulting: img('/images/legacy/graduate-school-application-consulting-sos-admissions-1.png', 'Graduate school application consulting'),
} as const;

const legacyServiceAssets: Record<string, LegacyAssetPack> = {
  'college-admissions-freshman': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.collegeClients,
    extraVideos: [
      { id: 'zElrobt6cis', title: 'College Admissions Consulting' },
    ],
  },
  'college-admissions-transfer': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.collegeClients,
    extraVideos: [
      { id: 'zElrobt6cis', title: 'College Transfer Admissions Consulting' },
    ],
  },
  'masters-degree': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.collegeClients,
    extraVideos: [
      { id: 'o7yVHuFjaLk', title: 'Graduate School Admissions Consulting' },
    ],
  },
  'computer-science-admissions': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.collegeClients,
    extraVideos: [
      { id: 'o7yVHuFjaLk', title: 'Computer Science Admissions Consulting' },
    ],
  },
  'psychology-counseling-admissions': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.collegeClients,
    extraVideos: [
      { id: 'o7yVHuFjaLk', title: 'Psychology and Counseling Admissions Consulting' },
    ],
  },
  'law-school': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.lawClients,
    extraVideos: [
      { id: 'ZtYt_oaembY', title: 'Law School Admissions Consulting' },
    ],
  },
  'mba-programs': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.sosMbaClients,
    extraVideos: [
      { id: '8h9NHJbYe8U', title: 'MBA Admissions Consulting' },
    ],
  },
  'medical-school': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.sosClients,
    extraVideos: [
      { id: 'H79abHGaiQM', title: 'Medical School Admissions Consulting' },
    ],
  },
  'medical-school-consulting': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.sosClients,
    extraVideos: [
      { id: 'H79abHGaiQM', title: 'Medical School Admissions Consulting' },
    ],
  },
  'medical-residency': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.sosClients,
    extraVideos: [
      { id: 'Lo2yKNYbsmk', title: 'Medical Residency Admissions Consulting' },
    ],
  },
  'bs-md-programs': {
    clientStrip: LEGACY_IMAGES.sosClients,
    galleryTitle: 'Featured Resource',
    gallery: [LEGACY_IMAGES.newsGraphic],
  },
  'dental-school': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.dentalClients,
  },
  'pa-school': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.schoolClients,
  },
  'pa-school-admissions': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.schoolClients,
  },
  'crna-admissions': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.nursingClients,
    extraVideos: [
      { id: 'hIow44Vl5d0', title: 'CRNA Admissions Consulting' },
    ],
  },
  'nurse-practitioner-admissions': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.schoolClients,
    extraVideos: [
      { id: 'hIow44Vl5d0', title: 'Nurse Practitioner Admissions Consulting' },
    ],
  },
  'general-nursing': {
    featuredStrip: LEGACY_IMAGES.sosFeaturedIn,
    clientStrip: LEGACY_IMAGES.nursingClients,
    extraVideos: [
      { id: 'hIow44Vl5d0', title: 'Nursing School Admissions Consulting' },
    ],
  },
  'nursing-programs': {
    galleryTitle: 'Legacy Program Assets',
    gallery: [LEGACY_IMAGES.newsGraphic, LEGACY_IMAGES.startGraphic, LEGACY_IMAGES.untitledGraphic],
    extraVideos: [
      { id: 'v0K0udm4yZ0', title: 'Graduate School Admissions Consulting' },
    ],
  },
  'phd-programs': {
    galleryTitle: 'Legacy Program Assets',
    gallery: [LEGACY_IMAGES.newsGraphic, LEGACY_IMAGES.startGraphic, LEGACY_IMAGES.untitledGraphic],
    extraVideos: [
      { id: 'v0K0udm4yZ0', title: 'Graduate School Admissions Consulting' },
    ],
  },
  'letters-of-recommendation': {
    galleryTitle: 'Legacy Service Assets',
    gallery: [
      LEGACY_IMAGES.editIcon,
      LEGACY_IMAGES.gradConsulting,
      LEGACY_IMAGES.messageIcon,
      LEGACY_IMAGES.pastClients,
      LEGACY_IMAGES.startIcon,
    ],
    extraVideos: [
      { id: 'bkQKXmCwOqs', title: 'Letters of Recommendation Service' },
    ],
  },
  'personal-statement-writing': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.collegeClients,
    extraVideos: [
      { id: 'wtdA0LtdWos', title: 'Personal Statement Writing Services' },
    ],
  },
  'standardized-test-prep': {
    galleryTitle: 'Legacy Test Prep Assets',
    gallery: [LEGACY_IMAGES.newsGraphic, LEGACY_IMAGES.startGraphic, LEGACY_IMAGES.untitledGraphic],
  },
  'international-students': {
    galleryTitle: 'Legacy International Student Assets',
    gallery: [
      LEGACY_IMAGES.newsGraphic,
      LEGACY_IMAGES.startIcon,
      LEGACY_IMAGES.intlHomeIcon,
      LEGACY_IMAGES.intlAdmissionsIcon,
      LEGACY_IMAGES.intlGuidanceIcon,
      LEGACY_IMAGES.intlSupportIcon,
    ],
    extraVideos: [
      { id: 'o0vsmq-Wue0', title: 'Admissions Consulting for International Students' },
    ],
  },
  'private-school-k12': {
    galleryTitle: 'Legacy Private School Assets',
    gallery: [LEGACY_IMAGES.newsGraphic, LEGACY_IMAGES.privateSchoolPromo, LEGACY_IMAGES.startGraphic],
    extraVideos: [
      { id: 'OY7A3vsqIPE', title: 'Private School Admissions Consultants' },
    ],
  },
  'veterinary-school-admissions': {
    galleryTitle: 'Legacy Veterinary School Assets',
    gallery: [LEGACY_IMAGES.newsGraphic, LEGACY_IMAGES.veterinaryClients],
    extraVideos: [
      { id: 'o7yVHuFjaLk', title: 'Veterinary School Admissions Consulting' },
    ],
  },
  'college-interviews': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.collegeClients,
    extraVideos: [
      { id: 'PSskKV4LNYg', title: 'College Interview Preparation' },
    ],
    galleryTitle: 'Legacy Interview Coaching Assets',
    gallery: [
      LEGACY_IMAGES.sendUs,
      LEGACY_IMAGES.askYou,
      LEGACY_IMAGES.askYouTwo,
      LEGACY_IMAGES.reviewAndRevise,
      LEGACY_IMAGES.editAndProofread,
    ],
  },
  'graduate-school-interview': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.collegeClients,
    galleryTitle: 'Legacy Interview Coaching Assets',
    gallery: [
      LEGACY_IMAGES.sendUs,
      LEGACY_IMAGES.askYou,
      LEGACY_IMAGES.askYouTwo,
      LEGACY_IMAGES.reviewAndRevise,
      LEGACY_IMAGES.editAndProofread,
    ],
  },
  'mba-interview': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.sosMbaClients,
    extraVideos: [
      { id: 'brcf8HH433g', title: 'MBA Interview Preparation' },
    ],
    galleryTitle: 'Legacy Interview Coaching Assets',
    gallery: [
      LEGACY_IMAGES.sendUs,
      LEGACY_IMAGES.askYou,
      LEGACY_IMAGES.askYouTwo,
      LEGACY_IMAGES.reviewAndRevise,
      LEGACY_IMAGES.editAndProofread,
    ],
  },
  'medical-school-interview': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.sosClients,
    extraVideos: [
      { id: 'xfy1GgnHscA', title: 'Medical School Interview Preparation' },
    ],
    galleryTitle: 'Legacy Interview Coaching Assets',
    gallery: [
      LEGACY_IMAGES.sendUs,
      LEGACY_IMAGES.askYou,
      LEGACY_IMAGES.askYouTwo,
      LEGACY_IMAGES.reviewAndRevise,
      LEGACY_IMAGES.editAndProofread,
    ],
  },
  'medical-residency-interview': {
    featuredStrip: LEGACY_IMAGES.featuredInNews,
    clientStrip: LEGACY_IMAGES.sosClients,
    extraVideos: [
      { id: 'xfy1GgnHscA', title: 'Medical Residency Interview Preparation' },
    ],
    galleryTitle: 'Legacy Interview Coaching Assets',
    gallery: [
      LEGACY_IMAGES.sendUs,
      LEGACY_IMAGES.askYou,
      LEGACY_IMAGES.askYouTwo,
      LEGACY_IMAGES.reviewAndRevise,
      LEGACY_IMAGES.editAndProofread,
    ],
  },
};

export function getLegacyServiceAssets(key: string): LegacyAssetPack {
  return legacyServiceAssets[key] ?? {};
}

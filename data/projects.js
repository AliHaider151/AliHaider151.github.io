// To add a project: copy one block, paste it in the list, edit it.
// media.type can be:
//   "cover" -> { type: "cover", label: "Short name" }       (big 01, 02 number + name)
//   "icon"  -> { type: "icon",  icon: "eye" }          (eye, pulse, book, users)
//   "image" -> { type: "image", src: "images/name.jpg" }   (1600x800 px)
//   "video" -> { type: "video", src: "videos/name.mp4" }   (autoplays, muted, loops)
const PROJECTS = [
  {
    title: "Crash Guard: AI Accident Detection",
    link: "https://github.com/AliHaider151", // leave "" for no link
    meta: "Final year project · AMD Developer Hackathon ACT III",
    description:
      "Detects traffic accidents from video with YOLOv8, saves evidence and sends automated alerts. A second AI model verifies each incident.",
    tags: [],
    media: { type: "cover", label: "Crash Guard" },
  },
  {
    title: "FlockSense",
    link: "https://play.google.com/store/apps/details?id=com.flocksense.flocksense&hl=en",
    meta: "Mobile app · poultry farm management",
    description:
      "Live monitoring of sensors, equipment and farm operations, with push notifications.",
    tags: [],
    media: { type: "cover", label: "FlockSense" },
  },
  {
    title: "Brainiac's",
    link: "https://play.google.com/store/apps/details?id=com.brainiacsmobile.app&hl=en",
    meta: "Mobile and web app · school management",
    description:
      "Connects parents and schools and runs admin across multiple branches.",
    tags: [],
    media: { type: "cover", label: "Brainiac's" },
  },
  {
    title: "Noptime",
    link: "https://play.google.com/store/apps/details?id=com.noptime&hl=en",
    meta: "Mobile app · community",
    description:
      "Helps people find activities and connect with others in their free time.",
    tags: [],
    media: { type: "cover", label: "Noptime" },
  },
];

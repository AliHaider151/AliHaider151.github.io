# Ali Haider – Portfolio

Simple white and green portfolio. Hosted free on GitHub Pages. The page builds itself from small data files, so you only edit lists.

## Folder structure

```
.
├── index.html          page skeleton (don't edit)
├── style.css           colors and design
├── main.js             builds the page from /data (don't edit)
├── favicon.svg         browser tab icon
├── README.md           this file
├── data/
│   ├── profile.js      name, tagline, links, About text
│   ├── projects.js     list of projects
│   ├── experience.js   list of jobs
│   ├── education.js    list of schools
│   └── skills.js       list of skills
├── images/             project pictures and photo.jpg
└── videos/             project videos (.mp4)
```

## How to edit

| I want to... | Edit this file |
|---|---|
| Change name, tagline, About text, links | `data/profile.js` |
| Add a project | `data/projects.js` (copy a block, paste below, edit) |
| Add a job | `data/experience.js` |
| Add a school | `data/education.js` |
| Add a skill | `data/skills.js` |
| Change colors | `style.css` (the `--g` variables at the top) |

Keep the commas between blocks. A missing comma breaks that section.

### Project picture or video

```js
media: { type: "image", src: "images/crashguard.jpg" },  // 1600 x 800 px, under 300 KB
media: { type: "video", src: "videos/crashguard.mp4" },  // autoplay, muted, loops, under 10 MB
media: { type: "icon",  icon: "eye" },                   // eye, pulse, book, users
```

- Put your profile photo at `images/photo.jpg` (square).
- File names are case sensitive on GitHub Pages.
- Compress a video first:
  `ffmpeg -i input.mp4 -vf "scale=1280:-2" -an -c:v libx264 -crf 28 -preset slow -movflags +faststart crashguard.mp4`

## Host on GitHub Pages

1. Create a public repo named `<your-username>.github.io`.
2. Upload everything in this folder (keep the folder structure).
3. Settings → Pages → Source: Deploy from a branch → `main` / root → Save.
4. Open `https://<your-username>.github.io` after 1 to 2 minutes.

To update later, edit a file on GitHub (pencil icon) and commit. The site refreshes by itself.

## Test on your computer

Open `index.html` in a browser. No server needed.

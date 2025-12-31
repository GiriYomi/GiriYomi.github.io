# DIRLab Website

Official website for the Data Intelligence Research Lab (DIRLab) at the University of Delaware.

## 🚀 Quick Start

This is a static website designed for GitHub Pages. Simply push to the repository and it will be deployed automatically.

### Local Development

1. Clone the repository
2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
3. Visit `http://localhost:8000`

## 📁 Project Structure

```
/
├── index.html              # Home page
├── assets/
│   ├── css/
│   │   ├── variables.css   # Design system tokens
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # Shared JavaScript
│   └── img/
│       ├── dirlab-logo.svg # Logo
│       ├── favicon.svg     # Favicon
│       ├── people/         # Team photos (add here)
│       └── gallery/        # Gallery photos (add here)
├── data/
│   ├── publications.js     # Publications data
│   ├── people.js           # Team members data
│   ├── cfp.js             # Call for Papers data
│   └── gallery.js         # Gallery albums data
├── publications/
│   └── index.html          # Publications list page
├── people/
│   ├── index.html          # Team list page
│   └── [person-id].html    # Individual profile pages
├── cfp/
│   └── index.html          # CFP table page
├── gallery/
│   ├── index.html          # Gallery overview
│   └── [album-id].html     # Individual album pages
├── datasets/
│   └── index.html          # Datasets page
└── about/
    └── index.html          # About & Contact page
```

## 📝 How to Update Content

### Adding a New Publication

1. Open `data/publications.js`
2. Find the appropriate year array
3. Add a new publication object:

```javascript
{
  id: "venue-year-keyword",           // Unique identifier
  title: "Paper Title",
  authors: "**Student Name**, Other Author, Dong Dai",  // ** marks mentored students
  venue: "VENUE'YY",
  year: 2025,
  type: "conference",                 // conference, journal, or workshop
  doi: "10.xxxx/xxxxx",              // Optional
  pdf: "https://...",                 // Optional
  code: "https://github.com/...",    // Optional
  note: "Best Paper Award"           // Optional
}
```

### Adding a New Team Member

1. Open `data/people.js`
2. Add to the appropriate category (`phd`, `master`, `undergraduate`, or `alumni`)
3. Create a profile page by copying an existing one (e.g., `people/minqiu-sun.html`)

```javascript
{
  id: "firstname-lastname",           // Used for profile page URL
  name: "Full Name",
  role: "Ph.D. Student",
  email: "email@udel.edu",           // Optional
  photo: "firstname-lastname.jpg",    // Optional - place in assets/img/people/
  bio: "Short bio..."                 // Optional
}
```

### Adding CFP Deadlines

1. Open `data/cfp.js`
2. Add to `CFP_DATA` array:

```javascript
{
  venue: "VENUE'YY",
  deadlines: "Abstract: Month DD, YYYY | Paper: Month DD, YYYY",
  conference: "Month DD-DD, YYYY | City, Country",
  tier: "A*",                         // A*, A, B, C, or empty
  urlKey: "VENUE"                     // Key from URL_DICTIONARY
}
```

3. If adding a new venue, add its URL to `URL_DICTIONARY`:

```javascript
"VENUE": "https://conference-website.com",
```

### Adding Gallery Photos

1. Create album folder: `assets/img/gallery/[album-id]/`
2. Add photos to that folder
3. Update `data/gallery.js`:

```javascript
{
  id: "album-id",
  title: "Album Title",
  year: 2024,
  cover: "cover.jpg",                // Cover image filename
  photos: [
    { src: "photo1.jpg", caption: "Description" },
    { src: "photo2.jpg", caption: "Description" }
  ]
}
```

4. Create/update the album page at `gallery/[album-id].html`

## 🎨 Design System

The website uses CSS custom properties defined in `assets/css/variables.css`:

- **Colors**: Primary (navy), Accent (orange), neutrals
- **Typography**: Outfit (headings), Plus Jakarta Sans (body)
- **Spacing**: 4px-based scale
- **Components**: Cards, buttons, tags, tables

## 🔗 Important Links

- **Join Us**: Currently a placeholder. Update `about/index.html` when Google Form is ready.
- **External Links**: Only use links explicitly listed in source data. See `data/people.js` for Dong Dai's link whitelist.

## ⚠️ Maintenance Notes

1. **English Only**: All content must be in English.
2. **No Fabrication**: Never invent content not in the source data. Use "TBD" or "Coming soon" for missing info.
3. **Modularity**: Use data files for content. Don't hardcode repeated information.
4. **Photos**: Add photos manually to appropriate folders; update data files to reference them.

## 📄 License

© DIRLab @ University of Delaware. All rights reserved.



/**
 * DIRLab Gallery Data
 * ===================
 * 
 * HOW TO ADD A NEW ALBUM:
 * 1. Add a new object to the appropriate category (conferences or activities)
 * 2. Required fields: id, title, year
 * 3. Optional fields: date, location, cover, photos[]
 * 4. For cover/photos: place images in /assets/img/gallery/<album-id>/ and set paths accordingly
 * 
 * NOTE: Photos are added manually later. Leave cover and photos as null/[] for placeholders.
 */

const GALLERY = {
  // Conference photos
  conferences: [
    {
      id: "sc24",
      title: "SC 2024",
      year: 2024,
      location: "TBD",
      cover: null, // TBD - set to image path when available
      photos: [] // Add photos as { src: "path", caption: "description" }
    },
    {
      id: "sc23",
      title: "SC 2023",
      year: 2023,
      location: "Denver, CO",
      cover: null,
      photos: []
    },
    {
      id: "ipdps23",
      title: "IPDPS 2023",
      year: 2023,
      location: "St. Petersburg, FL",
      cover: null,
      photos: []
    }
    // Add more conference albums here
  ],

  // Lab activities
  activities: [
    {
      id: "1219-2024",
      title: "Lab Activity",
      date: "December 19, 2024",
      year: 2024,
      cover: null,
      photos: []
    }
    // Add more activity albums here
  ]
};

// Helper function to get all albums as flat array
function getAllAlbums() {
  return [
    ...GALLERY.conferences.map(a => ({ ...a, category: 'conferences' })),
    ...GALLERY.activities.map(a => ({ ...a, category: 'activities' }))
  ].sort((a, b) => b.year - a.year);
}

// Helper to check if album has photos
function hasPhotos(album) {
  return album.photos && album.photos.length > 0;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GALLERY, getAllAlbums, hasPhotos };
}



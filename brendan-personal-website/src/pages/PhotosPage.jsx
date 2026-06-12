import { useState } from "react";
import Reveal from "../components/Reveal";

// Every image dropped in src/photos/ appears here automatically.
// Filename convention: YYYY-MM-DD-short-caption.jpg → sorted newest first,
// caption rendered from the rest of the name.
const modules = import.meta.glob(
  "../photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, query: "?url", import: "default" },
);

const PHOTOS = Object.entries(modules)
  .map(([path, url]) => {
    const stem = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "");
    const match = stem.match(/^(\d{4}-\d{2}-\d{2})-?(.*)$/);
    return {
      url,
      date: match ? match[1] : "",
      caption: (match ? match[2] : stem).replace(/[-_]+/g, " ").trim(),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

function Photo({ photo, index }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Reveal className="photo-item" index={Math.min(index, 4)}>
      <img
        src={photo.url}
        alt={photo.caption || "photo"}
        loading="lazy"
        decoding="async"
        data-loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
      {(photo.date || photo.caption) && (
        <p className="photo-caption">
          {[photo.date, photo.caption].filter(Boolean).join(" · ")}
        </p>
      )}
    </Reveal>
  );
}

export default function PhotosPage() {
  return (
    <main>
      <Reveal index={0}>
        <h1 className="page-title">Photos</h1>
      </Reveal>
      {PHOTOS.length === 0 ? (
        <p className="muted">Nothing here yet. Check back soon.</p>
      ) : (
        <div className="photo-list">
          {PHOTOS.map((photo, i) => (
            <Photo key={photo.url} photo={photo} index={i} />
          ))}
        </div>
      )}
    </main>
  );
}

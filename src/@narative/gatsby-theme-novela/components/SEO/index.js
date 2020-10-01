import React from 'react';

export default function SEO() {
  return (
  image = image ? image : `${site.siteUrl}/icons/icon-512x512.png`;

  // Checks if the source of the image is hosted on Contentful
  if (`${image}`.includes('ctfassets')) {
    image = `${image}`;
  } else {
    image = fullURL(image);
  }

  );
};

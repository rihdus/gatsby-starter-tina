// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';

export const wrapPageElement = ({ element, props }) => {
  const cms = new TinaCMS({
    sidebar: true
  });
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <TinaProvider cms={cms}>
    {element}
  </TinaProvider>
}
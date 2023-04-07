import localFont from 'next/font/local'

const myFont = localFont({     
  src: [{
    path: 'fonts/StrawfordWebfont/Strawford-Black.otf',
    weight: '400',
    style: 'black',
  },
  {
    path: 'fonts/BouldWebfont/Bould-Italic-Webfontkit/bould-bolditalic-webfont.woff',
    weight: '400',
    style: 'italic',
  },
  {
    path: 'fonts/StrawfordWebfont/Strawford-ThinItalic.otf',
    weight: '100',
    style: 'italic',
  },
], 
});


import HomePage from '../pages/home';

export default function Home() {
  return (
    <div className={myFont.className}>
      {HomePage()}
    </div>
  )
}

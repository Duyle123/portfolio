import localFont from 'next/font/local'

const strawfordFont = localFont({     
  src: [{
    //-----black--------
    path: 'StrawfordWebfont/Strawford-Black.otf',
    weight: '700',
    style: 'black',
  },
  {
    //-----bold--------
    path: 'StrawfordWebfont/Strawford-Bold.otf',
    weight: '600',
    style: 'bold',
  },
  {
    //-----regular--------
    path: 'StrawfordWebfont/Strawford-Regular.otf',
    weight: '400',
    style: 'normal',
  },
  {
    //-----thin--------
    path: 'StrawfordWebfont/Strawford-Thin.otf',
    weight: '300',
    style: 'normal',
  },
  {
    //-----thin--------
    path: 'StrawfordWebfont/Strawford-Light.otf',
    weight: '200',
    style: 'normal',
  },
], 
});

export default strawfordFont;
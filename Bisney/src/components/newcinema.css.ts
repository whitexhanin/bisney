import {style , globalStyle} from '@vanilla-extract/css';

export const newcinema = style({
    width: '100%',
    height: '100%',
})

globalStyle('.swiper', {
    width: '100%',
    height: '100%',
  });
  
  globalStyle('.swiper-slide', {
    width:'300px',
    height:'500px',
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  
  globalStyle('.swiper-slide img', {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  });
  
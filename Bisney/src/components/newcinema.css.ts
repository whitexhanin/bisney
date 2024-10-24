import {style , globalStyle ,  styleVariants} from '@vanilla-extract/css';

export const newcinema = style({
    width: '100%',
    height: 'auto',
})

globalStyle('.swiper', {
    width: '100%',
    height: '100%',    
  });
  globalStyle('.swiper-wrapper', {    
    // height:'100%',
    aspectRatio:'2 / 3',    
  });
  
  globalStyle('.swiper-slide', {
    // textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // aspectRatio:'2 / 3',    
    
  });
  
  globalStyle('.swiper-slide img', {
    display: 'block',
    width: '100%',
    height: '100%',
    // objectFit: 'cover',
  });
  
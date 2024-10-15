import {style , globalStyle ,  styleVariants} from '@vanilla-extract/css';

export const newcinema = style({
    width: '100%',
    height: '100%',
})

// export const box = style({
//   selectors: {
//     '.newcinema &': {
//       width:'100%',
//       height:'100%',
//       backgroundSize : '100%',      
//     }
//   }
// })

// export const background = styleVariants({
//   primary: { background: 'blue' },
//   secondary: { background: 'aqua' }
// });

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
  
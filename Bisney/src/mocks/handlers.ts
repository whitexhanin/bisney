import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';



const userList = [
    {id: 'elonmusk', nickname: 'Elon Musk', image: '/avatar/b.png',
      playsetting : {
        autoplay:'on',
        autopreview:'on',
      }
    },
    {id: 'zerohch0', nickname: '제로초', image: '/avatar/bb.png',playsetting : {
      autoplay:'on',
      autopreview:'on',
    }},
    {id: 'leoturtle', nickname: '레오', image: faker.image.avatar(),playsetting : {
      autoplay:'on',
      autopreview:'on',
    }},
    {id: 'jjstar', email:'user@example.com',nickname: '반짝이는나', image: '/avatar/g.png', playsetting : {
      autoplay:'on',
      autopreview:'on',
    }},
  ]
  const avatarList = [
    {
      id:'b',image:'/avatar/b.png'
    },
    {
      id:'bb',image:'/avatar/bb.png'
    },
    {
      id:'g',image:'/avatar/g.png'
    },
    {
      id:'m',image:'/avatar/m.png'
    },
    {
      id:'mr',image:'/avatar/mr.png'
    },
    {
      id:'pink',image:'/avatar/pink.png'
    },
    {
      id:'s',image:'/avatar/s.png'
    },
    {
      id:'sad',image:'/avatar/sad.png'
    }
  ]
  const Posts = [];

  let isAuthenticated = false;

export const handlers = [

  http.post('/api/check-user',(req, res , ctx) => {

    const {identifier} = req.json();
    const userExists = userList.some(
      user => user.email === identifier
    )
    return res(
      ctx.status(200),
      ctx.json({
        exists: userExists,
        type: userExists
          ? userList.find(
              u => u.email === identifier 
            )?.email === identifier
            ? 'email'
            : ''
          : null,
      })
    )
  }),

  http.post('/api/userlist', (req, res, ctx) => { 
    const { user } = req.body;
     userList.push(user);
      return res( 
        ctx.status(201),
         ctx.json({ 
          message: 'User added successfully' 
        }),
      );
  }),
  http.get('/api/userlist', (req, res, ctx) => {
    //  return res( ctx.status(200), ctx.json(userList), );
     return HttpResponse.text(JSON.stringify(userList), {
          status: 200,
        })
     }),
  http.get('/api/avatarlist', (req, res, ctx) => {
  //  return res( ctx.status(200), ctx.json(userList), );
    return HttpResponse.text(JSON.stringify(avatarList), {
        status: 200,
      })
    }),
    // http.post('/api/login', (req, res, ctx) => {
    //    const { username, password } = req.body;
    //     if (username === 'user@u.com' && password === 'password') { 
    //       isAuthenticated = true;
    //        return res( 
    //         ctx.status(200), 
    //         ctx.json({ token: 'dummy_token', username: 'user@u.com' }) ); 
    //       } else {
    //          return res( 
    //           ctx.status(401),
    //           ctx.json({ message: 'Invalid credentials' }) 
    //         ); 
    //         } 
    //         }),
    http.get('/api/user', (req, res, ctx) => {

      // if (isAuthenticated) { 
        //가짜 user 정보 random으로 가져오기
        
        const randomNums = Math.floor(Math.random() * userList.length);
        return HttpResponse.json(( userList[3] ))

      //  } 
    //    else { 
    //     return HttpResponse.json(
    //       { message: 'Not authenticated' }, {
    //         status: 401,
    //       }
    //     )          
    // }
  }),

  http.put('/api/user', async ({ request }) => {
    const updatedUser = await request.json();
    const userIndex = userList.findIndex(user => user.id === updatedUser.id);
    if (userIndex !== -1) {
      userList[userIndex] = { ...userList[userIndex], ...updatedUser };
    }
    return HttpResponse.json(updatedUser);
  }),

  http.post('/api/login', (req) => {
    // Note that you DON'T have to stringify the JSON!
    console.log(req);  
    
    return HttpResponse.json({
      
      user: {
        id: 'abc-123',
        name: 'John Maverick',
        email :"user@example.com"
      },
        headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    })
  }),
    // http.post('/api/login', async (req) => {
    //   console.log(req)
    //     console.log('로그인',req);
    //     // const {email , password }= req.body;
    //     const newPost = await req.json()
    //     // console.log(email);
    //     return HttpResponse.json(User[1], {
    //       headers: {
    //         'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
    //       }
    //     })
    //   }),
      http.post('/api/logout', () => {
        console.log('로그아웃');
        return new HttpResponse(null, {
          headers: {
            'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
          }
        })
      }),
    http.post('/api/users', async ({ request }) => {
        console.log('회원가입');
        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //   status: 403,
        // })
        return HttpResponse.text(JSON.stringify(request), {
          headers: {
            'Set-Cookie': 'authToken=abc-123'
          },          
        })
      }),          
]


import { http, HttpResponse } from 'msw';

export const handlers = [
    // http.get('https://example.com/user', () => {
    //     return HttpResponse.json({
    //         id: 'jieun',
    //         firstName: 'Lee',
    //         lastName: 'Eun'
    //     })
    // }),

    // http.post('/login',async ({request, params}) => {
    //     const info = await request.formData();
    //     console.log(info.get('username'));
    // })
    http.post('/signup',(request,response,ctx)=>{
        const {email , password} = request.body;
        return response(
            ctx.status(200),
            ctx.json({
                message:'Signup successful!',
                user: { email , password}
            })
        )

    })
]
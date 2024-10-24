
import createClient, { Middleware } from "openapi-fetch";
import type {paths} from './api/types.js'; 

const tmdbToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTcyOTY1MDE4OC4xOTMxNjQsInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K5XnlJn4rCtrnBfXwd-jeRLovext9esMdW8NiXXjWMY';
const baseUrl = 'https://api.themoviedb.org/3/'
 
const authMiddleware: Middleware = {
  async onRequest({request, options }) {
    request.headers.set('Authorization', `Bearer ${tmdbToken}`);
    request.headers.set('accept','application/json');
    // request.withCredentials = true;   
    return request;
  },
}
 
export const client = createClient<paths>({ baseUrl });
//  client
client.use(authMiddleware);

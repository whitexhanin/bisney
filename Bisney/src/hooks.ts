// import { useMutation , UseMutationOptions as RQUseMutationOptions, useQuery } from "@tanstack/react-query";
// import { client } from "./client";
// import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers";
// import { FetchOptions } from "openapi-fetch";

import { useQuery } from "@tanstack/react-query";
import { client } from "./client";

// type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>
// type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P]? FetchOptions<paths[P][M]> : never
// type UseMutationOptions = Pick<RQUseMutationOptions, 'retry'>

// export function usePostMutation(path , options?: UseMutationOptions){
//     return useMutation({
//         mutationFn: async (params) => {
//             const { data , error } = await client.POST(path, params)
//             if(error) throw error
//             return data
//         },
//         ...options,
//     })
// }

// type UseQueryOptions = Pick<RQUseQueryOption, 'enabled'> // 필요하다면 더 많은 옵션을 추가하세요.
 
// export function useGetQuery<P extends Paths<'get'>>(
//   path: P,
//   // params?: Params<'get', P> & { rq?: UseQueryOptions }
// ) {
//   return useQuery({
//     queryKey: [path],
//     queryFn: async () => {
//       const { data, error } = await client.GET(path)
//       if (error) throw error      
//       return data
//     },
//     // ...params?.rq,
    
//   })
// }

// export function usePutMutation<P extends Paths<'put'>>(path: P, options?: UseMutationOptions) {
//     return useMutation({
//       mutationFn: async (params: Params<'put', P>) => {
//         const { data, error } = await client.PUT(path, params)
//         if (error) throw error
//         return data
//       },
//       ...options,
//     })
//   }
   
//   export function useDeleteMutation<P extends Paths<'delete'>>(
//     path: P,
//     options?: UseMutationOptions
//   ) {
//     return useMutation({
//       mutationFn: async (params: Params<'delete', P>) => {
//         const { data, error } = await client.DELETE(path, params)
//         if (error) throw error
//         return data
//       },
//       ...options,
//     })
//   }
import { HttpMethod, PathsWithMethod } from 'openapi-typescript-helpers'
import { FetchOptions } from 'openapi-fetch'
import { UseQueryOptions as RQUseQueryOptions } from '@tanstack/react-query'
 
type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P]
  ? FetchOptions<paths[P][M]>
  : never 

type UseQueryOptions = Pick<RQUseQueryOptions, 'enabled'>

export function useGetQuery<P extends Paths<'get'>> (path:P, params: Params<'get', P> & { rq?: UseQueryOptions }){
    return useQuery ({
        queryKey : [path , params],
        queryFn : async () => {
          const { data, error } = await client.GET(path , params)         
          
          if ( error ) throw error          
          return data 
        },
        ...params?.rq,      
    })
}

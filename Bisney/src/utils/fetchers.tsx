export const fetchers = async (url) => {
    // const res = await fetch(url);

    

    // if(!res.ok) {
    //     const error = new Error('An error')

    //     error.info = await res.json();
    //     error.status = res.status
    //     throw error
    // }

    // return res.json()

    // fetch(url).then(res => res.json())


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTczMDE2NjEwMi4zNTg3NDksInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Rd6L2-PKHAmYHVPgYHvdacAs3JO9LvcPzokfb22zKU'
        }
      };
    // const response = await fetch(u)
    const response = await fetch(url , options);
    if(!response.ok) {
        throw new Error('Network');
    }
    const data = await response.json();

    return  data;


    //   await fetch(url, options)
    //     .then(res => await res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));
}



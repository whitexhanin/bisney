export const getUser = async() => {
    const response = await fetch('/api/user');
    return response.json();
}

export const updateUser = async(userData: any) => {
    const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    return response.json();
}
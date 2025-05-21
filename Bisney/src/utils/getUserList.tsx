
export const getUserList = async() => {
    const response = await fetch('/api/userlist');
    return response.json();

}
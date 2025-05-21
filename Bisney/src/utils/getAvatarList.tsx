
export const getAvatarList = async() => {
    const response = await fetch('/api/avatarlist');
    return response.json();

}
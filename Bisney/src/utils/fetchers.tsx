export const fetchers = (url) => {
    fetch(url).then(res => res.json())
}
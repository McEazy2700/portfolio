const getUrl = (path) => {
    const domain = 'http://localhost:8000/'
    let url = domain + path
    return url
}

export default getUrl;
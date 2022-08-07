const getData = async (url)=>{
    const response = await fetch(url).catch()
    let data = await response.json()

    return data;
}

export default getData;
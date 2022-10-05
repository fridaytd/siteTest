const call = () => {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                resolve(xhttp.responseURL)
            }   
        }
        xhttp.open("GET", "https://picsum.photos/200/300", true)
        xhttp.send()
    })
}

call().then((data) => {
    document.getElementById('img_1').setAttribute('src', data)
    call().then((data) => {
        document.getElementById('img_2').setAttribute('src', data)
        call().then((data) => {
            document.getElementById('img_3').setAttribute('src', data)
        })
    })
})
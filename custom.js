function getParams() {
    var params = {},
        pairs = document.URL.split('?')
            .pop()
            .split('&');

    for (var i = 0, p; i < pairs.length; i++) {
        p = pairs[i].split('=');
        params[p[0]] = p[1];
    }

    document.title = params.time || 0;
    let count = 0;
    setInterval(() => {
        document.title = params.time - count;
        count++;
    }, 1000);

    document.getElementById("site").innerHTML = `<p id="site">You will be redirected to ${decodeURIComponent(params.url)}... Not working? <a href="${decodeURIComponent(params.url)}">Click here.</a></p>`
    setTimeout(() => {
        if (params.time > 0) window.location.href = decodeURIComponent(params.url) || window.location.href;
    }, params.time * 1000 || 1);

    return params;
}
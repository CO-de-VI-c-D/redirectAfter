function getParams() {
    var params = {},
        pairs = document.URL.split('?')
            .pop()
            .split('&');

    for (var i = 0, p; i < pairs.length; i++) {
        p = pairs[i].split('=');
        params[p[0]] = p[1];
    }

    document.getElementById("site").innerText = `You will be redirected to ${params.url} soon!`;

    setTimeout(() => {
        if (params.time > 0) window.location.href = params.url || window.location.href;
    }, params.time * 1000 || 1);

    return params;
}

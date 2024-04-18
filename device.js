
    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        var items = location.search.substr(1).split("&");
        for (var index = 0; index < items.length; index++) {
            tmp = items[index].split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        }
        return result;
    }

    function doGetJSON(url, options)  {
        let aPromise = fetch(url, options);
        aPromise
            .then(function(response) {
                if(!response.ok) {
                    throw new Error("HTTP error, status = " + response.status);
                }
                return myJSON_promise;
            })
            .then(function(myJSON) {

            })
            .catch(function(error)  {

            });
    }



    // processing
    let url = "https://tool.quanlyads.com/api-detect-user/collect";

    let target_link = window.location.href;
    if (
        findGetParameter('gclid') != null || findGetParameter('gad_source') != null
        || findGetParameter('fbclid') != null || findGetParameter('utm_source') == "coccoc_context"
        || findGetParameter('gad_source') != null
    ){
        doGetJSON(url + "?targetLink=" + target_link, {});
    }
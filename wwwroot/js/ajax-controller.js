(() => {
    window.loadPage = function () {
        var xmlReq = new XMLHttpRequest(),
            url = window.baseUrl + '/ajax/Data';
        xmlReq.onreadystatechange = () => {
            if (xmlReq.readyState === XMLHttpRequest.DONE) {
                var content = document.getElementById("content");
                content.innerHTML = '';
                content.classList.toggle('fade');
                content.insertAdjacentHTML('beforeend', xmlReq.responseText);
                setTimeout(() => content.classList.toggle('fade'), 500);
            }
        };

        xmlReq.open('GET', url, true);
        xmlReq.send();
    }
})();
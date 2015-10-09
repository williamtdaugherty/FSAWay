var request = new XMLHttpRequest();
request.open('GET', 'https://www.mockaroo.com/1feebdf0/download?count=1000&key=cbd19840');
request.addEventListener('load', function (e) {
    var data = JSON.parse(request.responseText);
    console.dir(data);
});
request.send();
//# sourceMappingURL=prodlist.js.map
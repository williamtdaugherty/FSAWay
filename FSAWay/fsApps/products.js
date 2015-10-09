var request = new XMLHttpRequest();
request.open('GET', 'https://api.zanox.com/json/2011-03-01/products?connectid=43EEF0445509C7205827&items=5&q=nike');
request.addEventListener('load', function (e) {
    // parse the data from JSON
    var data = JSON.parse(request.responseText);
    // dump results to the console
    console.dir(data);
});
request.send();
//# sourceMappingURL=products.js.map
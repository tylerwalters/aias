aias
====

A standalone AJAX library using JavaScript promises.

## Installation

Download the [latest aias release](https://github.com/tylerwalters/aias/releases/latest) and load using a script tag:

```html
<script src="dist/aias.min.js"></script>
```

or install with [npm](https://www.npmjs.org/):

```bash
npm install aias
```

or install with [bower](http://bower.io/):

```bash
bower install aias
```

## How to use aias

### aias.get()

```JavaScript
aias.get(url)
```

```JavaScript
aias.get('/endpoint')
  .then(function (response) {
    console.log(response);
  });
```

### aias.post()

```JavaScript
aias.post(url[, data])
```

```JavaScript
aias.post('/endpoint', {"name": "Bill", "age": 64})
  .then(function (response) {
    console.log(response);
  });
```

### aias.put()

```JavaScript
aias.put(url[, data])
```

```JavaScript
aias.put('/endpoint', {"name": "Bill", "age": 64})
  .then(function (response) {
    console.log(response);
  });
```

### aias.delete()

```JavaScript
aias.delete(url)
```

```JavaScript
aias.delete('/endpoint')
  .then(function (response) {
    console.log(response);
  });
```

## License

This is free software distributed under the MIT License.
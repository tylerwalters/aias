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

#### Syntax

```JavaScript
aias.get(url)
```

#### Example

```JavaScript
aias.get('/endpoint')
  .then(function (res, req) {
    console.log(res);
  });
```

### aias.post()

#### Syntax

```JavaScript
aias.post(url[, data])
```

#### Example

```JavaScript
aias.post('/endpoint', {"name": "Bill", "age": 64})
  .then(function (res, req) {
    console.log(res);
  });
```

### aias.put()

#### Syntax

```JavaScript
aias.put(url[, data])
```

#### Example

```JavaScript
aias.put('/endpoint', {"name": "Bill", "age": 64})
  .then(function (res, req) {
    console.log(res);
  });
```

### aias.delete()

#### Syntax

```JavaScript
aias.delete(url)
```

#### Example

```JavaScript
aias.delete('/endpoint')
  .then(function (res, req) {
    console.log(res);
  });
```

## Version History

**1.2.0:** Removing reliance on *window*.
**1.1.2:** Adding JSDoc-style comments.
**1.1.1:** Updating documentation.
**1.1.0:** Adding request to output.
**1.0.3:** Fixing bug with missing var statement.
**1.0.2:** Updating minification output to aias.min.js.
**1.0.1:** Updating documentation.
**1.0.0:** Initial release.

## License

This is free software distributed under the MIT License.
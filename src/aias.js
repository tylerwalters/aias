(function () {
	'use strict';

	var Promise = (typeof module !== 'undefined' && module.exports) ? require('promise') : this.Promise;

	var aias = {};

	function prepareResponse (res) {
		try {
			return JSON.parse(res);
		}
		catch (e) {
			return res;
		}
	}

	function request (type, url, data) {
		return new Promise(function (fulfill, reject) {
			// Set ajax to correct XHR type. Source: https://gist.github.com/jed/993585
			var Xhr = window.XMLHttpRequest||ActiveXObject;
			req = new Xhr('MSXML2.XMLHTTP.3.0');

			req.open(type, url, true);
			req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			req.onreadystatechange = function (e) {
				if (this.readyState === 4) {
					if (this.status === 200) {
						var response = prepareResponse(req.responseText);
						fulfill(response);
					}
					else {
						reject(new Error('Request responded with status ' + req.status));
					}
				}
			};
			req.send(data);
		});
	}

	aias.get = function (url) {
		return request('GET', url);
	};

	aias.post = function (url, data) {
		return request('POST', url, data);
	};

	aias.put = function (url, data) {
		return request('PUT', url, data);
	};

	aias.delete = function (url) {
		return request('DELETE', url);
	};

	// AMD module
	if (typeof define === 'function' && define.amd) {
		define('aias', function () {
			return aias;
		});
	}
	// Require.js module
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = aias;
	}
	// Global library
	else {
		this.aias = aias;
	}
}).call(window);
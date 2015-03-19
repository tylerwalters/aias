/** 
	* A standalone AJAX library using JavaScript promises.
	*
	* @namespace aias
	*/

(function () {
	'use strict';

	var Promise = (typeof module !== 'undefined' && module.exports) ? require('promise') : context.Promise,
			aias = {};

/**
	* Attempts to parse the response as JSON otherwise returns it untouched.
	* 
	* @param {string} res The response to be processed.
	* 
	* @memberof aias
	*/
	function prepareResponse (res) {
		try {
			return JSON.parse(res);
		}
		catch (e) {
			return res;
		}
	}

/**
	* Attempts to parse the response as JSON otherwise returns it untouched.
	* 
	* @param {string} type The HTTP verb to be used.
	* @param {string} url The url for the XHR request.
	* @param {object} data Optional. The data to be passed with a POST or PUT request.
	* 
	* @memberof aias
	*/
	function request (type, url, data) {
		return new Promise(function (fulfill, reject) {
			// Set ajax to correct XHR type. Source: https://gist.github.com/jed/993585
			var Xhr = window.XMLHttpRequest||ActiveXObject,
					req = new Xhr('MSXML2.XMLHTTP.3.0');

			req.open(type, url, true);
			req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			req.onreadystatechange = function (e) {
				if (this.readyState === 4) {
					if (this.status === 200) {
						var res = prepareResponse(req.responseText);
						fulfill(res, req);
					}
					else {
						reject(new Error('Request responded with status ' + req.statusText));
					}
				}
			};
			req.send(data);
		});
	}

/**
	* Calls request() using the GET verb.
	* 
	* @param {string} url The url for the XHR request.
	* 
	* @memberof aias
	*/
	aias.get = function (url) {
		return request('GET', url);
	};

/**
	* Calls request() using the POST verb.
	* 
	* @param {string} url The url for the XHR request.
	* @param {object} data Optional. The data to be passed with the request.
	* 
	* @memberof aias
	*/
	aias.post = function (url, data) {
		return request('POST', url, data);
	};

/**
	* Calls request() using the PUT verb.
	* 
	* @param {string} url The url for the XHR request.
	* @param {object} data Optional. The data to be passed with the request.
	* 
	* @memberof aias
	*/
	aias.put = function (url, data) {
		return request('PUT', url, data);
	};

/**
	* Calls request() using the DELETE verb.
	* 
	* @param {string} url The url for the XHR request.
	* 
	* @memberof aias
	*/
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
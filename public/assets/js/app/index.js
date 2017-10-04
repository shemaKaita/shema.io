const jQuery = require('jquery');

window.$ = jQuery,
window.jQuery = jQuery;

$(document).ready(($) => {
	let blah = [0,1,2,3,4];

	console.log(...blah, 5, 6, 7);
});
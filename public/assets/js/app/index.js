import jQuery from 'jquery';
import uikit from 'uikit';


class Shema{
	constructor(message){
		this.msg = message;
	}
	greet(){
		return (`Hello ${this.msg}`);
	}
}

const greeting = new Shema("Universe!!");

jQuery(document).ready(($) => {
	const message = greeting.greet();
	$('h1').text(message);
	console.log(uikit); 
});
import jQuery from 'jquery';
import lodash from 'lodash';

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
});
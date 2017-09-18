import jQuery from 'jquery';
import lodash from 'lodash';

class Shema{
	constructor(message){
		this.msg = message;
	}
	greet(){
		console.log(`Hello ${this.msg}`);
	}
}

const greeting = new Shema("Me");

jQuery(document).ready(($) => {
	greeting.greet(); 
});
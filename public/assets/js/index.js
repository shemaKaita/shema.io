import jQuery from 'jquery';

class Shema{
	constructor(message){
		this.msg = message;
	}
	greet(){
		console.log(`Hello ${this.msg}`);
	}
}

const greeting = new Shema("World!!");

jQuery(document).ready(($) => {
	greeting.greet();
});
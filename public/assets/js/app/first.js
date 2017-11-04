import JQS from './jqs.js';

class First extends JQS{
	constructor(){
		super();
		this.loadScripts = [this.logger.name, this.greet.name];
		this.loadScriptsReady = [this.calc.name];
	}
	logger(){
		console.log("hello world");
	}
	greet(){
		console.log("Hello shema");
	}
	calc(){
		console.log(237 + 4998);
	}	
}

export default First;
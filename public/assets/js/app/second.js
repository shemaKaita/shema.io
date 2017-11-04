import JQS from './jqs.js';

class Second extends JQS{
	constructor(){
		super();
		this.loadScriptsReady = [this.changeTitle.name];
	}
	changeTitle(){
		console.log('hi there');
		$('h3').text('Shema');
	}
}

export default Second;
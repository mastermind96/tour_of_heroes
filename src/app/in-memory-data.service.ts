import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
	createDb() {
		const heroes = [
			{id:1,name:'Falcon'},
		  {id:2,name:'Captain America'},
		  {id:3,name:'Hulk'},
		  {id:4,name:'Black Panther'},
		  {id:5,name:'Iron Man'},
		  {id:6,name:'Batman'}
		];
		return (heroes);
	}
}

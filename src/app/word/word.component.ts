import { Component } from '@angular/core';
import { WordService } from './word.service';

@Component({
  selector: 'word',
  templateUrl: 'word.component.html',
  styleUrls: ['word.component.css'],
  providers : [WordService]
})
export class WordComponent {
  
  	words : any;
	constructor(private service: WordService){
		
	}

	search(term){
		this.service.search_word(term).subscribe(res => {
			this.words = res;
		})	
	}

}

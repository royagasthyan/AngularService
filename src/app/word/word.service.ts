import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class WordService {
     
	url: string

    constructor(private http : Http){
        this.url  = 'https://api.datamuse.com/words?max=10&ml='
    }

    search_word(term){
        return this.http.get(this.url + term).map(res => {
        	return res.json()
        })
    }
}
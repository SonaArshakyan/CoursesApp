import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Author } from '../models/authors';

@Injectable()
export class AuthorsService {
    authors: Author[];

  getAllAuthors(): Observable<Author[]> {
   return new Observable(obs => obs.next(this.authors));
  }

  getAuthor(id: number ): Observable<Author> {
    return  new Observable( obs =>
        obs.next(this.authors.filter((obj) => {
            return obj.id === id; })[0] ));   
        }

  constructor() {
    this.authors = [
        {
            name: "Stephen King",
             id : 1
        },
        {
            name : "George Orwell",
            id : 2
        },
        {
            name : "Virginia Woolf",
            id : 3
        },
        {
            name : "Kurt Vonnegut",
            id : 4
        },
        {
            name : "John Steinbeck",
            id : 5
        }
    ]
  }
}

import { Injectable } from '@angular/core';

import {Person} from '../_class/person';
import {PERSONS} from '../_mockdatafiles/mock-persons';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService {

  private personsUrl = 'api/persons';
  constructor(private http: Http){}


    // getAllPerson(): Promise<Person[]>{
    //   return Promise.resolve(PERSONS);  
    // }

  getAllPerson(): Promise<Person[]>{
        return this.http.get(this.personsUrl)
        .toPromise()
        .then(response => response.json().data as Person[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  getPerson(id: number): Promise<Person>{
    const url = `${this.personsUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Person)
        .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});



  update(person: Person): Promise<Person> {
    const url = `${this.personsUrl}/${person.id}`;
    return this.http
        .put(url, JSON.stringify(person), {headers: this.headers})
        .toPromise()
        .then(() => person)
        .catch(this.handleError);
    }

    create(name: string): Promise<Person> {
        return this.http
            .post(this.personsUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Person)
            .catch(this.handleError);
        }

    delete(id: number): Promise<void> {
        const url = `${this.personsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        }


}

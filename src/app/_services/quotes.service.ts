import { Injectable } from '@angular/core';

import {Quote} from '../_class/quote';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class QuoteService {

  private quoteUrl = 'api/tribes';
  constructor(private http: Http){}

  getAllQuotes(): Promise<Quote[]>{
        return this.http.get(this.quoteUrl)
        .toPromise()
        .then(response => response.json().data as Quote[])
        .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  getTribe(id: number): Promise<Quote>{
    const url = `${this.quoteUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Quote)
        .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});



  update(quote: Quote): Promise<Quote> {
    const url = `${this.quoteUrl}/${quote.id}`;
    return this.http
        .put(url, JSON.stringify(quote), {headers: this.headers})
        .toPromise()
        .then(() => quote)
        .catch(this.handleError);
    }

    create(name: string): Promise<Quote> {
        return this.http
            .post(this.quoteUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Quote)
            .catch(this.handleError);
        }

    delete(id: number): Promise<void> {
        const url = `${this.quoteUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        }


}

import { Injectable } from '@angular/core';

import {Tribe} from '../_class/tribe';
//import {TRIBES} from '../_mockdatafiles/mock-tribes';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class TribeService {

  private tribeUrl = 'api/tribes';
  constructor(private http: Http){}


    // getAllTribes(): Promise<Tribe[]>{
    //   return Promise.resolve(TRIBES);  
    // }

  getAllTribes(): Promise<Tribe[]>{
        return this.http.get(this.tribeUrl)
        .toPromise()
        .then(response => response.json().data as Tribe[])
        .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  getTribe(id: number): Promise<Tribe>{
    const url = `${this.tribeUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Tribe)
        .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});



  update(tribe: Tribe): Promise<Tribe> {
    const url = `${this.tribeUrl}/${tribe.id}`;
    return this.http
        .put(url, JSON.stringify(tribe), {headers: this.headers})
        .toPromise()
        .then(() => tribe)
        .catch(this.handleError);
    }

    create(name: string): Promise<Tribe> {
        return this.http
            .post(this.tribeUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Tribe)
            .catch(this.handleError);
        }

    delete(id: number): Promise<void> {
        const url = `${this.tribeUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        }


}

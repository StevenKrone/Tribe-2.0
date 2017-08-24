import { Injectable } from '@angular/core';

import {Message} from '../_class/message';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageService {

  private messagesUrl = 'api/messages';
  constructor(private http: Http){}


  getAllMessage(): Promise<Message[]>{
        return this.http.get(this.messagesUrl)
        .toPromise()
        .then(response => response.json().data as Message[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  getMessage(id: number): Promise<Message>{
    const url = `${this.messagesUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Message)
        .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});



  update(message: Message): Promise<Message> {
    const url = `${this.messagesUrl}/${message.id}`;
    return this.http
        .put(url, JSON.stringify(message), {headers: this.headers})
        .toPromise()
        .then(() => message)
        .catch(this.handleError);
    }

    create(name: string): Promise<Message> {
        return this.http
            .post(this.messagesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Message)
            .catch(this.handleError);
        }

    delete(id: number): Promise<void> {
        const url = `${this.messagesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        }


}

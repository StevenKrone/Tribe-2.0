import { Component, OnInit } from '@angular/core';

import { Message } from '../../_class/message';
import { MessageService } from '../../_services/messages.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
//import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

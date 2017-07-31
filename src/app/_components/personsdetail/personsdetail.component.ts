import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../../_class/person';
import { PersonService } from '../../_services/person.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
//import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-personsdetail',
  templateUrl: './personsdetail.component.html',
  styleUrls: ['./personsdetail.component.css']
})
export class PersonsdetailComponent implements OnInit {
  @Input() person: Person;
  private sub: any;



  constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private location: Location
  ) { }

  ngOnInit() {
     this.route.paramMap
    .switchMap((params: ParamMap) => this.personService.getPerson(+params.get('id')))
    .subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.personService.update(this.person)
      .then(() => this.goBack());
  }

}

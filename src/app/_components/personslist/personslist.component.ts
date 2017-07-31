import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Person} from '../../_class/person';
import {PersonService} from '../../_services/person.service';



@Component({
  selector: 'app-personslist',
  templateUrl: './personslist.component.html',
  styleUrls: ['./personslist.component.css']
})
export class PersonslistComponent implements OnInit {

  selectedPerson: Person;
  persons: Person[];

  constructor(private personservice: PersonService, private router: Router) { }

  ngOnInit() {
    this.getListofPeople();
  }

  getListofPeople(): void{
    this.personservice.getAllPerson().then(persons => this.persons = persons);
  }

  onSelect(person:Person): void{
    this.selectedPerson = person;
  }

  
  gotoDetail(): void{
      this.router.navigate(['/persondetail', this.selectedPerson.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.personservice.create(name)
      .then(person => {
        this.persons.push(person);
        this.selectedPerson = null;
      });
  }

  delete(person: Person): void {
    this.personservice
        .delete(person.id)
        .then(() => {
          this.persons = this.persons.filter(p => p !== person);
          if (this.selectedPerson === person) { this.selectedPerson = null; }
        });
  }




}

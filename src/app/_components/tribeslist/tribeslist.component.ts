import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tribe } from '../../_class/tribe';
import { TribeService } from '../../_services/tribe.service';

@Component({
  selector: 'app-tribeslist',
  templateUrl: './tribeslist.component.html',
  styleUrls: ['./tribeslist.component.css']
})
export class TribeslistComponent implements OnInit {


  selectedTribe: Tribe;
  listOfTribes: Tribe[];

  constructor(private tribeservice: TribeService, private router: Router) { }

  ngOnInit() {
    this.getListofTribes();
  }

  getListofTribes(): void{
    this.tribeservice.getAllTribes().then(tribes => this.listOfTribes = tribes);
  }

  onSelect(tribe:Tribe): void{
    this.selectedTribe = tribe;
  }

  
  gotoDetail(): void{
      this.router.navigate(['/tribedetail', this.selectedTribe.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.tribeservice.create(name)
      .then(person => {
        this.listOfTribes.push(person);
        this.selectedTribe = null;
      });
  }

  delete(tribe: Tribe): void {
    this.tribeservice
        .delete(tribe.id)
        .then(() => {
          this.listOfTribes = this.listOfTribes.filter(p => p !== tribe);
          if (this.selectedTribe === tribe) { this.selectedTribe = null; }
        });
  }


}

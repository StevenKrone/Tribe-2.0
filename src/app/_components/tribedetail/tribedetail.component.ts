import { Component, OnInit, Input } from '@angular/core';

import { Tribe } from '../../_class/tribe';
import { TribeService } from '../../_services/tribe.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-tribedetail',
  templateUrl: './tribedetail.component.html',
  styleUrls: ['./tribedetail.component.css']
})
export class TribedetailComponent implements OnInit {
  @Input() tribe: Tribe;
  private sub: any;

  constructor(
    private tribeService: TribeService,
    private route: ActivatedRoute,  
    private location: Location  
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.tribeService.getTribe(+params.get('id')))
    .subscribe(tribeRetrieved => this.tribe = tribeRetrieved);
  }

  goBack(): void {
    this.location.back();
  }


  save(): void {
    this.tribeService.update(this.tribe)
      .then(() => this.goBack());
  }

}

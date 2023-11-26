import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/models/country';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-unis',
  templateUrl: './unis.component.html',
  styleUrls: ['./unis.component.scss']
})
export class UnisComponent {

  @Input() country:Country;
  @Input() unis:any[];

  constructor(public apiService: ApiService) {};

  ngOnInit(): void {
  
  }

}

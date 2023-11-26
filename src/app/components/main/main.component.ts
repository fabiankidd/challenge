import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private apiService: ApiService){}

  unis: any[];
  countries: Country[] = [{name: 'UK', value: 'UNITED+KINGDOM'}, {name: 'US', value: 'UNITED+STATES'}];
  country: Country = this.countries[0];

  ngOnInit(): void {
    this.getData();
  }

  onChange(e:any): void { 
    this.country = e;
    console.log(this.country.value);
    this.getData();
  }

  getData(): any {
    this.apiService.bLoading = true;
    this.apiService.getData(this.country.value).subscribe(data => {
      this.apiService.bLoading = false;
      this.unis = data.sort(((a,b) => a.name.localeCompare(b.name)));
      
    }, error => {
      console.log(error);
      this.apiService.bLoading = false;
      this.apiService.bError = true;
    })
  }


}

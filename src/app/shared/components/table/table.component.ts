import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges{
  formArray!:any[]
  @Input("signleElementData") signleElementData : any;

  constructor(private apiService:ApiService){}
  ngOnChanges(changes: SimpleChanges): void {
    this.formArray?.push(this.signleElementData)

  }
  ngOnInit(): void {
    this.getAllData()
  }
  getAllData(){
    this.apiService.getData().subscribe((res:any)=>{
      console.log(res);
      this.formArray = res;
    });
    
  }
}

import { Component, OnInit } from '@angular/core';
import { stockprice } from './entity/stockprice';
import { StockService } from './service/stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  constructor(private service : StockService) { }

  code:string|undefined;
  fromdt:string|undefined;
  todt:string|undefined;
  stockinfo : stockprice = new stockprice();
  companies : any;
  selectedcompany : string ="";
  ngOnInit(): void {
    this.service.getAllcompanies().subscribe((data:any)=>{
console.log(data);
this.companies=data;
    });
  }

  onSubmit():void{
    this.service.getStockprice(this.code,this.fromdt,this.todt).subscribe((data:any)=>{
      console.log(data);
      this.stockinfo = data;
    });
  }

}

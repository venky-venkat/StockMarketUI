import { Component, OnInit } from '@angular/core';
import { stockprice } from './entity/stockprice';
import { StockService } from './service/stock.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  constructor(private service : StockService, private toastr:ToastrService) { }

  code:string|undefined;
  fromdt:string|undefined;
  todt:string|undefined;
  stockinfo : stockprice = new stockprice();
  companies : any;
  selectedcompany : string ="";
  msg:string="";
  
  ngOnInit(): void {
    this.service.getAllcompanies().subscribe((data:any)=>{
console.log(data);
this.companies=data;
    });
  }

  onSubmit():void{
    if (this.code == undefined || this.fromdt == undefined || this.todt == undefined){
     this.msg="please fill the details to view stock details";
     this.toastr.error(this.msg,'Error');
     
    }
    else{
      this.service.getStockprice(this.code,this.fromdt,this.todt).subscribe((data:any)=>{
        console.log(data);
        this.stockinfo = data;
      });
    }
   
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }
  getStockprice(code:string|undefined,fromdt:string|undefined,todt:string|undefined){

      let url = `http://localhost:36505/api/v1.0/market/stock/get/${code}/${fromdt}/${todt}`;
      return this.http.get(url);
  }
  getAllcompanies(){
    let url= "http://localhost:36505/api/v1.0/market/company/getall";
    return this.http.get(url);
  }
}

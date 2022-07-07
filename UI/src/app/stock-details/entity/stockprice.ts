export class stockprice{
        CompanyCode: string | undefined;
        CompanyName :string | undefined;
         MaxPrice :number | undefined;
        MinPrice: number|undefined;
        AvgPrice:number | undefined;
        stockMarketPrices : CompanyStockMarketPriceDTO[]=[];
}

 class CompanyStockMarketPriceDTO
    {
         StockPrice :number | undefined;
         StockDate? :string|undefined;
        StockTime? :string|undefined;
    }
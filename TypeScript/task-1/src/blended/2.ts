type Currency = "USD" | "GRN" | "EURO";

interface ObjCurrency {
    amount: number,
    currency: Currency
}

function convertCurrency({ amount, currency }: ObjCurrency): void {
    console.log(`Converting ${amount} to ${currency}`);
  }
  
  convertCurrency({ amount: 200, currency: "USD" });
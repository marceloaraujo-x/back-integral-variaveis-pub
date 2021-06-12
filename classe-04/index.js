const c = 1000, taxa = 12.5, t = 5;
let m = 0, i = taxa/100;
m = c * (Math.pow(1 + i, t));
console.log(`O montante é de R$ ${m.toFixed()}`);
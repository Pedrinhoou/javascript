const carro = {
    marca: "toyota",
    modelo: "colla",
    ano: 2024,
    cor: "prata"
};
for (const chave in carro) {
   console.log(`${chave}: ${carro[chave]}`);
}
function oi() {
  console.log("Eae");
}

oi();

function MostrarNome(nome) {
  console.log(`Eae, meu nome é ${nome}`);
}

MostrarNome("Carol");

function eu(nome2, idade, EstiloMusical) {
  console.log(
    `Eae, meu nome é ${nome2}, tenho ${idade} anos e meu estilo musical preferido é ${EstiloMusical}`
  );
}

function entretenimento(filme, musica) {
  console.log(`${filme}, ${musica} `);
}

entretenimento("Hereditário", "Sonne");

eu("Carol", 22, "rock");

function numbers(num) {
  return num * 3;
}

console.log(numbers(30));

let correto = "bolacha";

if (correto == "biscoito") {
  console.log("Vejo que você é uma pessoa de cultura");
} else {
  console.log("Nem vem, o correto é biscoito");
}

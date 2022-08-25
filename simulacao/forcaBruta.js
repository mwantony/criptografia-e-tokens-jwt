import { createHash } from "crypto";

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.autenticado = false
    this.senhaHash = this.criaHash(senha);
  }

  criaHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
  }
  autentica(nome, senha) {
    if (nome === this.nome && this.senhaHash === this.criaHash(senha)) {
      console.log("Autenticação feita com sucesso");
      this.autenticado = true
      return true
    }
    return false
   // console.log("Usuário ou senha incorretos");
  }
}

const usuario1 = new Usuario("Antony Maziero Warken", "08808068935");

for(let senhaTeste=0;senhaTeste < 100000000000; senhaTeste++) {
  if(usuario1.autentica('Antony Maziero Warken', senhaTeste.toString())) {
    console.log(`A senha do usuário é ${senhaTeste.toString()}`)
    break
  }
}

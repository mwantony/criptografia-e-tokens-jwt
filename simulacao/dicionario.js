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

const usuario1 = new Usuario("Antony Maziero Warken", "senha123");

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

senhasComuns.forEach((senha) => {
  if(usuario1.autentica('Antony Maziero Warken', senha)) {
    console.log(`A senha do usuário Antony Maziero Warken é ${senha}`)
  }
})
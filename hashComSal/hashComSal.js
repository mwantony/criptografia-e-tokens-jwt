import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha) {
  const sal = randomBytes(16).toString("hex");
  const senhaHash = scryptSync(senha, sal, 64).toString('hex')
  return `${sal}:${senhaHash}`;
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    [this.sal, this.senhaHash] = criaHashComSal(senha).split(':')
  }

  autentica(nome, senha) {
    if (nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal)
      const hashReal = Buffer.from(this.hash, 'hex')

      const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)
      if(hashesCorrespondem) {
        console.log('Usuário autenticado com sucesso')
        return 
      }
      console.log('Senha incorreta')
      return
    }
    console.log('Usuário ou senha incorretos')
  }
}

const usuario1 = new Usuario('Antony Maziero Warken', 'centromaisfreedomundo28/03/2007')
usuario1.autentica('Antony Maziero Warken', "centromaisfreedomundo28/03/2007")
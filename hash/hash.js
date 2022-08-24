import {createHash} from 'crypto'

function criaHash(senha) {
  return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash('Uma String Qualquer'))

class Usuario {
  constructor(nome, senha) {
    this.nome = nome
    this.senhaHash = criaHash(senha)
  }

  autentica(nome, senha) {
    if(nome === this.nome && this.senhaHash === criaHash(senha)) {
      console.log('Autenticação feita com sucesso')
      return
    }
    console.log('Usuário ou senha incorretos')

  }
}

const usuario1 = new Usuario('Antony Maziero Warken', "123456789")
usuario1.autentica('Antony Maziero Warken', '123456789')
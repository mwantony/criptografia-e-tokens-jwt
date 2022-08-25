import {generateKeyPairSync, createSign, createVerify} from 'crypto'

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

let dados = 'Essa string vai ser assinada!'

const assinador = createSign('rsa-sha256')
assinador.update(dados)

const assinatura = assinador.sign(String(privateKey), 'hex')

console.log(`Assinatura: ${assinatura}`)

const verificador = createVerify('rsa-sha256')

verificador.update(dados)

const ehVerificado = verificador.verify(publicKey.toString('hex'), assinador.toString('hex'), 'hex')

console.log(ehVerificado)

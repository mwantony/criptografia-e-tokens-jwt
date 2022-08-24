import { generateKeyPairSync } from "crypto";

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

/* console.log(privateKey)
console.log(publicKey) */

import { publicEncrypt, privateDecrypt } from "crypto";

const dadosCriptografados = publicEncrypt(
  publicKey,
  Buffer.from('Mensagem super secreta')
)

console.log(dadosCriptografados.toString('hex'))

const dadosDecifrado = privateDecrypt(
  privateKey, 
  dadosCriptografados
)

console.log(`Dados decifrados: ${dadosDecifrado.toString('utf-8')}`)
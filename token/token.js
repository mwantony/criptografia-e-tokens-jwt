import jwt from "jsonwebtoken";

const chaveSecreta = "Chave super secreta";

const token = jwt.sign(
  { apelido: "jm", curso: "nodejs com tokens" },
  chaveSecreta
);

console.log(token)


const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)

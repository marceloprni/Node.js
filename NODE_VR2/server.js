
const operations = require('./operations')
const funcao = require('./funcao')
const funcao2 = require('./funcao2')

console.log(operations.var1);
console.log(operations.var2);

const resultado = funcao(1);
console.log(resultado.msg, resultado.value);

const add = funcao2.adicao(5,7);
const subt = funcao2.subtracao(7,3);

console.log(add, subt)
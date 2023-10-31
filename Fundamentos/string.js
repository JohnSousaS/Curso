const escola = "Cod3r"

console.log(escola.charAt(4)) //ele vai pegar a letra de numero 4
console.log(escola.charAt(5))//mesmo que não tenha uma letra de numero 5, ele não ira retornar um erro, apenas não ira retornar nada
console.log(escola.charCodeAt(3))//ele vai achar a letra 3 na tabela unicode
console.log(escola.substring(1))//significa que ele vai pegar do indice 1 até o final, excluindo o indice 0
console.log(escola.substring (0, 3))//ele vai pegar do indice 0 até o 3, mas não vai incluir o indice 3

console.log('Escola '.concat(escola).concat("!"))//concatenar textos
console.log(escola.replace(3, 'e'))//vai pegar o indice 3 e substituir pela letra 'e'
console.log('Ana,Maria,Pedro'.split (','))//gera um array com 3 elementos diferentes

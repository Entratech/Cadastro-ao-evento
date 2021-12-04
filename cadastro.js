// data do cadastro
let inserirData = new Date ( );
let data = ('2021-12-04')

if (inserirData > data) {
    console.log('Cadastro inválido pela data')
}else {
    console.log('Continuar cadastro.')
}

 // idade requerida
 let idadeDaPessoa = "20"
 if (idadeDaPessoa >= 18) {
     console.log('Idade permitida, prossiga com o cadastro! ')
 }else { 
     console.log('Idade não permitida para o cadastro')
}

//vagas para o evento
let listaDeParticipantes = ["Joao", "Maria", "Alexandre", "Henrique"]
if (listaDeParticipantes.length <= 99) {
    console.log ('Cadastro realizado, você foi adicionado a lista')
}else {
    console.log('Cadastro não realizado, não há mais vagas')
}
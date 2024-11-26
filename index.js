

/*Visão Geral do Projeto
O projeto é um Sistema de Folha de Pagamento que gerencia informações de funcionários, calcula salários com base em horas trabalhadas e taxas de pagamento, e gera relatórios de pagamento. O objetivo é criar um sistema básico de folha de pagamento que permite adicionar funcionários, registrar horas trabalhadas, calcular salários e exibir um relatório de pagamento.

Estrutura do Mini-Projeto
Cadastro de Funcionários

Nome do funcionário

Cargo

Taxa horária

Registro de Horas Trabalhadas

Registro diário das horas trabalhadas por funcionário

Cálculo de Salário

Cálculo de salário semanal/mensal com base nas horas trabalhadas

Cálculo de horas extras, se aplicável

Relatório de Pagamento

Exibição do pagamento total e detalhes de cada funcionário

*/
const prompt = require("prompt-sync")(); 3, 1

const listaFuncionarios = []
/*Array global */

function adicionarFuncionario(id, nome, cargo, taxaHoraria) {
    let funcionarios = {
        /*Objeto*/
        id: id,
        nome: nome,
        cargo: cargo,
        taxaHoraria: taxaHoraria,
        horasTrabalhadas: []
    }
    listaFuncionarios.push(funcionarios)
    /* funcão que adiciona um novo elemento ao final de um array */
}
function registrarHoras(idFuncionario, numHoras) {
    listaFuncionarios.map((funcionario) => {
        if (funcionario.id == idFuncionario) {
            funcionario.horasTrabalhadas.push(numHoras)

            /*função que adiciona varios elementos dentro de um array */
        }
    })

}

/* funcão que soma horas e aplica o cálculo */
function calcularSalarioMensal(funcionario) {
    let totalHoras = 0
    funcionario.horasTrabalhadas.map(hora => {
        totalHoras += hora
    })
    return totalHoras * funcionario.taxaHoraria
}
/*Função que calcula desconto do inss*/
function calcularInss(funcionario) {
    let salarioBruto = calcularSalarioMensal(funcionario)
    let inss = 0
    if (salarioBruto < 4000.04) {
        inss = salarioBruto * 14 / 100
    }
    else if (salarioBruto > 2666.69) {
        inss = salarioBruto * 12 / 100
    } else if (salarioBruto > 1412.01) {
        inss = salarioBruto * 9 / 100
    } else {
        inss = salarioBruto * 7.5 / 100
    }
    if (inss > 908.85) {
        inss = 908.85
    }
    return inss
}
function exibirFuncionarios() {
    console.log("Lista de funcionarios: \n")

    listaFuncionarios.map((func) => {

        console.log(`Nome: ${func.nome}`)
        console.log(`Cargo: ${func.cargo}`)
        console.log(`Taxa horária: ${func.taxaHoraria}`)
        console.log(`Horas trabalhadas: ${func.horasTrabalhadas}`)
        console.log("---------------- \n")

    })
    }


function gerarRelatorioPagamento() {
    console.log("------- RELATÓRIO DE PAGAMENTOS -------\n");

    listaFuncionarios.map((func) => {
        // começa total de horas como 0
        let totalHoras = 0;

        // Calcula o total de horas trabalhadas 
        func.horasTrabalhadas.map((hora) => {
            totalHoras += hora; // Adiciona cada hora ao total
        });

        // Calcula salário bruto e INSS
        let salarioBruto = calcularSalarioMensal(func);
        let inss = calcularInss(func);

        //Mostra as informações no relatório
        console.log(`Nome: ${func.nome}`);
        console.log(`Cargo: ${func.cargo}`);
        console.log(`Total de horas trabalhadas: ${totalHoras}`);
        console.log(`Valor do INSS: R$ ${inss.toFixed(2)}`);
        console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${(salarioBruto - inss).toFixed(2)}`);
        console.log("---------------------------------------\n");
    });
}
function gerenciarFolhaPagamento() {
    function exibirMenu() {
        console.log("\n--- Sistema de Folha de Pagamento ---");
        console.log("1 - Adicionar Funcionário");
        console.log("2 - Registrar Horas Trabalhadas");
        console.log("3 - Exibir Relatório de Pagamento");
        console.log("4 - Sair");

    }

    let opcao;

    do {
        exibirMenu();
        opcao = prompt("Digite a opção desejada: ");
        switch (opcao) {
            case "1":
                let id = Number(prompt("Digite o id do funcionário: "));
                let nome = prompt("Digite o nome do funcionário: ");
                let cargo = prompt("Digite o cargo do funcionário: ");
                let taxaHoraria = Number(prompt("Digite a taxa horária do funcionário: "));

                adicionarFuncionario(id, nome, cargo, taxaHoraria);

                exibirFuncionarios();
                break;

                

            case "2":
                let idFuncionario = Number(prompt("Digite o id do funcionário: "));
                let numHoras = Number(prompt("Digite o número de horas trabalhadas: "));

                registrarHoras(idFuncionario, numHoras);
                break;

            case "3":
                gerarRelatorioPagamento();
                break;

            case "4":
                console.log("Saindo do sistema...");
                break;

            default:
                console.log("Opção inválida!");
        }
    } while (opcao != "4");
}

gerenciarFolhaPagamento();



// Exemplos de chamadas 
/*adicionarFuncionario(1, "Mônica", "Babá", 12);
registrarHoras(1, 8);
registrarHoras(1, 12);

adicionarFuncionario(2, "Catarina", "Babá", 10);
registrarHoras(2, 8);
registrarHoras(2, 10);

// Gera relatório
gerarRelatorioPagamento();





/*console.log(listaFuncionarios)


let total = calcularSalarioMensal(listaFuncionarios[0])
console.log("Total do salário bruto" + total)
let inss = calcularInss(listaFuncionarios[0])
console.log("Total do Inss" + total)
}
*/


//Crie um dicionário de alunos onde a chave será o id do aluno e o valor será outro objeto contendo o nome e a nota.
//Implemente funções para adicionar um novo aluno, buscar um aluno por id e calcular a média das notas dos alunos.

function dictionary() {
    var alunos = {};
    return {
        adicionarAluno: function (id, nome, nota) {
            alunos[id] = {
                nome: nome,
                nota: nota
            };
        },
        buscarAluno: function (id) {
            return alunos[id];
        },
        calcularMedia: function () {
            var soma = 0;
            for (var id in alunos) {
                soma += alunos[id].nota;
            }
            return soma / Object.keys(alunos).length;
        }
    };
}
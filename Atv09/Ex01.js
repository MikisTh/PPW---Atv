//Crie uma lista de alunos onde cada aluno será representado por um objeto contendo id, nome e nota:
//Implemente funções para adicionar um novo aluno, buscar um aluno por id e calcular a média das notas dos alunos;

function StudentsList() {
    var alunos = [];

    function adicionarAluno(id, nome, nota) {
        alunos.push({
            id: id,
            nome: nome,
            nota: nota
        });
    }

    function buscarAluno(id) {
        var aluno = alunos.filter(function (aluno) {
            return aluno.id == id;
        });
        return aluno[0];
    }

    function calcularMedia() {
        var soma = 0;
        for (var i = 0; i < alunos.length; i++) {
            soma += alunos[i].nota;
        }
        return soma / alunos.length;
    }

    return {
        adicionarAluno: adicionarAluno,
        buscarAluno: buscarAluno,
        calcularMedia: calcularMedia
    }

}






function calcularMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3)/3
}

function determinarSituacao(media){
    if (media >=95){
        return 'Aluno Ouro';
    } else if (media >=85){
        return 'Aluno Prata'
    } else if (media >=75){
        return 'Aluno Bronze'
    } else if (media >=50){
        return 'Aluno Retido'
    } else{
        return 'Aluno Aprovado'
    }
}

function cadastrarAluno(){
    const nome=
    document.getElementById('nome').value;
    const nota1 =
    parseFloat(document.getElementById('nota1').value);
    const nota2 =
    parseFloat(document.getElementById('nota2').value);
    const nota3 =
    parseFloat(document.getElementById('nota3').value);

    const media = calcularMedia(nota1, nota2, nota3);
    const situacao = determinarSituacao(media);

    const tabela = 
    document.getElementById('tabelaAlunos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaNota1 = novaLinha.insertCell(1);
    const celulaNota2 = novaLinha.insertCell(2);
    const celulaNota3 = novaLinha.insertCell(3);
    const celulaMedia = novaLinha.insertCell(4);
    const celulaSituacao = novaLinha.insertCell(5);

    celulaNome.innerHTML = nome;
    celulaNota1.innerHTML = nota1;
    celulaNota2.innerHTML = nota2;
    celulaNota3.innerHTML = nota3;
    celulaMedia.innerHTML = media.toFixed(2);
    celulaSituacao.innerHTML = Situacao;

    document.getElementById('formAluno').requestFullscreen();
}

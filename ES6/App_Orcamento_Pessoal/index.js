class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
        if (this.dia > 31 || this.dia < 1 || isNaN(this.dia)){
            return false;
        }
        if(isNaN(this.valor)){
            return false;
        }
        for(let i in this){
            if(!this[i]){
                return false;
            }
        }
        return true;
    }
}
class Bd{
    constructor(){
        let Idinicial = localStorage.getItem('id');

        if (Idinicial == null){
            localStorage.setItem('id', 0);
        }
    }
    getProximoId(){
        let proxId = localStorage.getItem('id');

        return parseInt(proxId) + 1;
    }

    gravar(d){
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(d));
        localStorage.setItem('id', id);
    }
    getDespesas(){
        let id = localStorage.getItem("id");
        let despesas = Array();

        for(let i = 1; i <= id ;i++){
            let despesa = JSON.parse(localStorage.getItem(i));

            if (despesa === null){
                continue;
            }
            despesa.id = i;
            despesas.push(despesa);
        }
        return despesas;
    }
    
    pesquisarDespesa(despesa){
        let despesasFiltradas = Array();
        despesasFiltradas = this.getDespesas();

        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => despesa.ano == d.ano);
        }
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => despesa.mes == d.mes);
        }
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => despesa.dia == d.dia); 
        }
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => despesa.tipo == d.tipo); 
        }
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => despesa.descricao == d.descricao); 
        }
        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => despesa.valor == d.valor); 
        }

        return despesasFiltradas;

    }
    remover(id){
        localStorage.removeItem(id);
    }
}
const Ano = document.getElementById("ano");
const Mes = document.getElementById("mes");
const Dia = document.getElementById("dia");
const Tipo = document.getElementById("tipo");
const Descricao = document.getElementById("descricao");
const Valor = document.getElementById("valor");

let bd = new Bd();

function cadastrarDados(){

    let despesa = new Despesa(Ano.value, 
                            Mes.value, 
                            Dia.value, 
                            Tipo.value, 
                            Descricao.value, 
                            Valor.value)
    if(despesa.validarDados()){
        bd.gravar(despesa);
        enableCard('sucesso')
        limparForm();
    }else{
        console.error('Dados incorretos');
        enableCard('erro');
    }
}

function enableCard(tipo){
    let cardElement = document.querySelector(".dialog-box");
    let cardTitle = document.querySelector(".dialog-box h2");
    let cardP = document.querySelector(".dialog-box p");
    let cardBtn = document.querySelector(".dialog-box .button");

    cardElement.style.display = 'flex';
    cardBtn.className = "button";

    switch (true){
        case tipo == 'sucesso':
            cardTitle.style.color = '#2bb804';
            cardTitle.textContent = "Registro inserido com sucesso.";
            cardP.textContent = "Despesa foi cadastrada com sucesso."
            cardBtn.textContent = "Voltar.";
            cardBtn.classList.add("btn-success");
            break;
        case tipo == 'erro':
            cardTitle.style.color = '#b80404';
            cardTitle.textContent = "Erro na gravação.";
            cardP.textContent = "Uma ou mais informações não foram preenchidas corretamente."
            cardBtn.textContent = "Voltar e corrigir.";
            cardBtn.classList.add("btn-danger");
            break;
        case tipo == 'removerDespesa':
            cardTitle.style.color = '#0096FF';
            cardTitle.textContent = "Despesa removida";
            cardP.textContent = "A despesa foi removida com sucesso."
            cardBtn.textContent = "Voltar.";
            cardBtn.classList.add("btn-info");
            break;
    }

}
function disableCard(reload = false){
    let cardElement = document.querySelector(".dialog-box");
    cardElement.style.display = 'none';
    if (reload){
        window.location.reload();
    }
}

function carregarDespesas(despesas = Array(), filtro = false){

    if (despesas.length == 0 && filtro == false){
        despesas = bd.getDespesas();
    }
    let tabelaDespesas = document.getElementById("tabelaDespesas");
    tabelaDespesas.innerHTML = ''
    let tipos = ["Alimentação","Educação","Lazer","Saúde","Transporte"];
    
    despesas.forEach(d => {
        let linha = tabelaDespesas.insertRow();
        linha.insertCell(0).textContent = `${d.dia}/${d.mes}/${d.ano}`;
        linha.insertCell(1).textContent = tipos[eval(d.tipo) - 1];
        linha.insertCell(2).textContent = d.descricao
        linha.insertCell(3).textContent = d.valor;

        let btn = document.createElement("button");
        btn.className = 'btn btn-danger';
        btn.innerHTML = '<i class="fas fa-times"></i>';
        btn.id = `IdDespesa_${d.id}`;
        btn.onclick = function (){
            bd.remover(d.id);
            enableCard('removerDespesa');
        }      
        linha.insertCell(4).append(btn);
    });


    if (tabelaDespesas.innerHTML == ''){
        tabelaDespesas.textContent = "Nehuma despesa encontrada."
    }
}

function limparForm(){
    Ano.value = '';
    Mes.value = '';
    Dia.value = '';
    Tipo.value = '';
    Descricao.value = '';
    Valor.value = '';
}

function filtrarDespesa(){
    let despesa = new Despesa(Ano.value, 
                            Mes.value, 
                            Dia.value, 
                            Tipo.value, 
                            Descricao.value, 
                            Valor.value)

    despesasFiltradas = bd.pesquisarDespesa(despesa);

    carregarDespesas(despesasFiltradas, true);
}
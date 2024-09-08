function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById  ("campo-pesquisa").value

    if(campoPesquisa == "") {
        section.innerHTML = "Nenhum personagem encontrado"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descrição = "";

    console.log(campoPesquisa);

    
    
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
               <h2>
               <a href="#" target="_blank">${dado.titulo}</a>
               </h2>
               <p class="descricao-meta">${dado.descrição}</p>
                       <a href="${dado.link}" target="_blank">Mais informações</a>
                       </div>
           `
        }
      
    }
    
    if (!resultados) {
        resultados = "Nenhum personagem encontrado"
    }
    section.innerHTML = resultados
}
//console.log(dados)



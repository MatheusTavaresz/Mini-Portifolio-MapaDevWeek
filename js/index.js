
const abas = document.querySelectorAll(".aba")

abas.forEach(aba => {
  aba.addEventListener("click", function() {

    const abaSelecionada = document.querySelector(
      ".aba.selecionada")
      abaSelecionada.classList.remove('selecionada')

      aba.classList.add('selecionada')
      
      const informacaoSelecionada=document.querySelector(".informacao.selecionado")
      informacaoSelecionada.classList.remove("selecionado")

      const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

      const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
      informacaoASerMostrada.classList.add("selecionado", "projects")

  })
})
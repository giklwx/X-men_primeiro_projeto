const personagens = document.querySelectorAll('.personagem');//representação de todos os personagens

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const personagemSelecionado = document.querySelector('.selecionado'); // precisou do ponto para informar que esta em uma classe
        personagemSelecionado.classList.remove('selecionado'); // nao vai ponto pq o metodo ja sabe que é uma classe

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector ('.personagem-grande'); 

        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');


        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})




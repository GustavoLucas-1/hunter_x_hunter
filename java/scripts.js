const imagem = document.getElementById("classe_1");
const descricao = document.getElementById("description");

document.getElementById("btn_1").addEventListener("click", () => {
    imagem.src = "../images/aprimorador.jpeg";
    descricao.textContent = "É a habilidade de usar aura para fortalecer ou aumentar as habilidades naturais de um objeto ou do próprio corpo.";
});

document.getElementById("btn_2").addEventListener("click", () => {
    imagem.src = "../images/emissao.jpeg";
    descricao.textContent = "O usuário tem mais facilidade para separar sua aura do corpo. [5] Devido às suas propriedades, a Emissão é tipicamente empregada em habilidades com ênfase no alcance e/ou naquelas que têm efeitos duradouros. Aplicações básicas incluem disparar projéteis ou feixes de aura em alta velocidade.";
});

document.getElementById("btn_3").addEventListener("click", () => {
    imagem.src = "../images/transmutacao.jpeg";
    descricao.textContent = "Uma pessoa pode mudar as propriedades de sua aura para imitar outra coisa ou replicar atributos específicos. A aura transmutada pode ser feita para assumir propriedades de elementos naturais, substâncias artificiais e até animais, entre outras coisas.";
});

document.getElementById("btn_4").addEventListener("click", () => {
    imagem.src = "../images/manipulacao.jpeg";
    descricao.textContent = "Permitem ao usuário controlar seres vivos ou não vivos, incluindo construtos de aura. A principal vantagem dessa categoria no combate é a capacidade de manipular o próprio inimigo.";
});

document.getElementById("btn_5").addEventListener("click", () => {
    imagem.src = "../images/conjuracao.jpeg";
    descricao.textContent = "Envolve criar um objeto físico, independente e material a partir da própria aura, no entanto, usuários dessa categoria também podem criar leis e princípios e anexá-los a uma área específica.";
});

document.getElementById("btn_6").addEventListener("click", () => {
    imagem.src = "../images/especialista.jpeg";
    descricao.textContent = "Pode ser amplamente definida como quaisquer habilidades que não pertencem a nenhuma das outras cinco categorias, tornando-se o tipo de Nen mais vago. Também parece ser o mais raro por uma margem muito ampla.";

});

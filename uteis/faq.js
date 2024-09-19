// Array para armazenar as perguntas e respostas
const faq = [{
    pergunta: "O que é a Yes?",
    resposta: "A Yes Personalite é uma loja que oferece cadernos e agendas personalizados para clientes que desejam expressar sua individualidade através de opções exclusivas de design."
}, {
    pergunta: "Como faço para encomendar um caderno ou agenda personalizado?",
    resposta: "Você pode fazer seu pedido entrando em contato conosco pelo WhatsApp. Nossa equipe terá prazer em ajudá-lo a escolher o produto e as opções de personalização desejadas."
}, {
    pergunta: "Posso comprar diretamente pelo site?",
    resposta: "Não, as compras não são feitas diretamente pelo site. Os produtos são demonstrados e as vendas são finalizadas via Whatsapp."
}, {
    pergunta: "Quais são as opções de personalização disponíveis?",
    resposta: "Oferecemos uma variedade de opções de personalização, desde escolha de capas, designs, cores até adição de nomes, mensagens personalizadas e inclusão de fotos ou logotipos. "
}, {
    pergunta: "Qual é o prazo de entrega dos produtos?",
    resposta: "O prazo de entrega pode variar dependendo da complexidade do seu pedido e da sua localização. Assim que recebermos seu pedido pelo WhatsApp, forneceremos um prazo de entrega estimado."
}, {
    pergunta: "Posso ver uma amostra do design antes de fazer o pedido?",
    resposta: "Sim, podemos enviar uma amostra do design antes de finalizar o pedido. Dessa forma, você poderá garantir que esteja totalmente satisfeito com o design antes da produção."
}, {
    pergunta: "Qual é a política de devolução e troca?",
    resposta: "Nós não aceitamos trocas, por isso são realizadas diversas conversas com o cliente, sempre informando como irá ficar o seu pedido, pois são produtos únicos de cada cliente."
}, {
    pergunta: "Vocês oferecem descontos para pedidos em grandes quantidades?",
    resposta: "Sim, oferecemos descontos especiais para pedidos em grandes quantidades. Entre em contato conosco pelo WhatsApp ou Instagram para discutir suas necessidades específicas e teremos o prazer de oferecer um orçamento personalizado com desconto."
},  {
    pergunta: "Como posso entrar em contato com a Yes Personalite?",
    resposta: "Você pode entrar em contato conosco através do Whatsapp pelo número (11)99577-8390 ou pelo email phestalise@gmail.com .Estamos disponíveis para responder às suas perguntas e ajudá-lo com suas compras."
},];

// Função para exibir as perguntas e respostas na página
function exibirFAQ() {
    const faqContainer = document.getElementById("faq_container");

    // Itera sobre o array de perguntas e respostas
    faq.forEach(item=>{
        // Cria elementos HTML para exibir a pergunta e a resposta
        const perguntaElement = document.createElement("h3");
        perguntaElement.textContent = item.pergunta;

        const respostaElement = document.createElement("p");
        respostaElement.textContent = item.resposta;

        // Adiciona os elementos criados ao contêiner na página
        faqContainer.appendChild(perguntaElement);
        faqContainer.appendChild(respostaElement);
    }
    );
}

// Chama a função para exibir o FAQ ao carregar a página
exibirFAQ()

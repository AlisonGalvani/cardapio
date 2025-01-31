const cardapioItens = [
    {
        imagem: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Espaguete à Carbonara',
        peso: '300g',
        serve: '1 pessoa',
        preco: 'R$ 45,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Pizza Margherita',
        peso: '500g',
        serve: '2 pessoas',
        preco: 'R$ 60,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Hambúrguer Artesanal',
        peso: '400g',
        serve: '1 pessoa',
        preco: 'R$ 35,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Sushi Variado',
        peso: '250g',
        serve: '1 pessoa',
        preco: 'R$ 55,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Filé Mignon',
        peso: '400g',
        serve: '1 pessoa',
        preco: 'R$ 70,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Salada Caesar',
        peso: '200g',
        serve: '1 pessoa',
        preco: 'R$ 25,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Cheesecake de Morango',
        peso: '150g',
        serve: '1 pessoa',
        preco: 'R$ 20,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Café Especial',
        peso: '50g',
        serve: '1 pessoa',
        preco: 'R$ 10,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Suco Natural',
        peso: '300ml',
        serve: '1 pessoa',
        preco: 'R$ 12,00'
    },
    {
        imagem: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        nome: 'Sorvete Artesanal',
        peso: '100g',
        serve: '1 pessoa',
        preco: 'R$ 15,00'
    }
];

// Renderiza os itens do cardápio
function renderCardapio() {
    const cardapioContainer = document.getElementById('cardapio-itens');
    cardapioItens.forEach(item => {
        const card = `
            <div class="col-md-4 col-sm-6">
                <div class="card-item">
                    <img src="${item.imagem}" alt="${item.nome}">
                    <h3>${item.nome}</h3>
                    <p><strong>Peso:</strong> ${item.peso}</p>
                    <p><strong>Serve:</strong> ${item.serve}</p>
                    <p class="price">${item.preco}</p>
                </div>
            </div>
        `;
        cardapioContainer.innerHTML += card;
    });
}

// Inicializa o script
$(document).ready(function () {
    renderCardapio();
});
exports.seed = function(knex) {
    return knex('prices').insert([
        { cut: 'Corte na máquina', price: 'R$ 10,00', image: '10.jpg'},
        { cut: 'Sombreado', price: 'R$ 15,00', image: '15.jpg'},
        { cut: 'Corte e barba', price: 'R$ 20,00', image: '20.jpg'},
    ])
}
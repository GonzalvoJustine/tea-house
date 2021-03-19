// Initialization the states

const initialState = {
  isClickOn : false,
  vente: true,
  products: [
    {
      name: 'Brownie fondant aux noix',
      category: 'Desserts',
      price: 5,
      sumPrice: 0,
      quantity: 0,
    },
    {
      name: 'Fondant à la châtaigne',
      category: 'Desserts',
      price: 5,
      sumPrice: 0,
      quantity: 0,
    },
    {
      name: 'Thés vert à la menthe',
      category: 'Thés verts 50cl',
      price: 5.5,
      sumPrice: 0,
      quantity: 0,
    },
    {
      name: 'Thé vert "Monsieur Grey"',
      category: 'Thés verts 50cl',
      price: 6,
      sumPrice: 0,
      quantity: 0,
    },
    {
      name: 'Thés noirs "Mademoiselle"',
      category: 'Thés noirs 50cl',
      price: 5.5,
      sumPrice: 0,
      quantity: 0,
    },
    {
      name: 'Thés noirs "La p\'tite bergamote"',
      category: 'Thés noirs 50cl',
      price: 6,
      sumPrice: 0,
      quantity: 0,
    },
  ]
};

// Comportment this state

export default function(state = initialState, action = {}) {

  // Identifier l'élément que l'on souhaite
  const targetProduct = state.products[action.index];
  const vente = state.vente;

  switch(action.type) {
    case 'ADD':
      targetProduct.quantity = targetProduct.quantity + 1;
      targetProduct.sumPrice = targetProduct.sumPrice + targetProduct.price;
      return {
        ...state,
      };

    case 'SUBSTRACT':
      if (targetProduct.quantity > 0) {
        targetProduct.quantity = targetProduct.quantity - 1;
      } else {
        targetProduct.quantity = 0;
      }
      if (targetProduct.quantity > 0) {
        targetProduct.sumPrice = targetProduct.sumPrice - targetProduct.price;
      } else {
        targetProduct.sumPrice = 0;
      }
      return {
        ...state,
      };

    case 'ADD_LINK':
      if (vente === true) {
        return 'vente';
      }
      return {
        ...state,
      };

    case 'RESET':
      return state;

    default:
      return state;
  }
}
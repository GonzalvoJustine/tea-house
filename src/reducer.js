// Initialiser les states

const initialState = {
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

// Comportement du state

export default  function(state = initialState, /*action = {}*/) {
  return state;
}
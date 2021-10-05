const initialState = [
  {
    id: 1,
    name: "AiFone",
    price: 150.0,
    desc: "Tela Retina HD de 4,7 polegadas",
    discount: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_958906-MLA47681043218_092021-F.webp",
  },
  {
    id: 2,
    name: "Nokia 1100",
    price: 150.0,
    desc: "um celular em extinção",
    discount: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_924076-MLB47654130823_092021-F.webp",
  },
  {
    id: 3,
    name: "samsung galaxy",
    price: 150.0,
    desc: "um celular em extinção",
    discount: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_653850-MLA44218060125_122020-F.webp",
  },
  {
    id: 4,
    name: "1100",
    price: 150.0,
    desc: "um celular em extinção",
    discount: 0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_924076-MLB47654130823_092021-F.webp",
  },
  {
    id: 5,
    name: "samsung galaxy5",
    price: 150.0,
    desc: "um celular em extinção",
    discount: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_653850-MLA44218060125_122020-F.webp",
  },
];
const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;

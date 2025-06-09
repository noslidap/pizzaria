import { Pizza } from '../types/Pizza';

export const menuData: {
  tradicional: Pizza[];
  especial: Pizza[];
  doce: Pizza[];
} = {
  tradicional: [
    {
      id: 1,
      name: "Aliche",
      ingredients: ["Aliche", "mussarela", "rodela de tomate", "parmesão"],
      price: "R$ 40,00"
    },
    {
      id: 2,
      name: "Atum",
      ingredients: ["Atum", "cebola"],
      price: "R$ 40,00"
    },
    {
      id: 3,
      name: "Três Coroas",
      ingredients: ["Lombo", "bacon", "mussarela"],
      price: "R$ 40,00"
    },
    {
      id: 4,
      name: "Moda do Chefe",
      ingredients: ["Presunto", "palmito", "mussarela", "champignon"],
      price: "R$ 40,00"
    },
    {
      id: 5,
      name: "Alho",
      ingredients: ["Molho de tomate", "mussarela", "alho"],
      price: "R$ 40,00"
    },
    {
      id: 6,
      name: "Bacon",
      ingredients: ["Bacon", "mussarela"],
      price: "R$ 40,00"
    },
    {
      id: 7,
      name: "Baiana",
      ingredients: ["Calabresa moída", "cebola", "pimenta"],
      price: "R$ 40,00"
    },
    {
      id: 8,
      name: "Brasileira",
      ingredients: ["Atum", "ovos", "mussarela", "azeitonas"],
      price: "R$ 40,00"
    },
    {
      id: 9,
      name: "Bauru",
      ingredients: ["Mussarela", "presunto", "tomate"],
      price: "R$ 40,00"
    },
    {
      id: 10,
      name: "Brócolis I",
      ingredients: ["Brócolis", "mussarela", "bacon", "alho frito"],
      price: "R$ 40,00"
    },
    {
      id: 11,
      name: "Brócolis II",
      ingredients: ["Brócolis", "catupiry", "bacon", "alho frito", "tomate"],
      price: "R$ 40,00"
    },
    {
      id: 12,
      name: "Calabresa",
      ingredients: ["Calabresa fatiada"],
      price: "R$ 40,00"
    },
    {
      id: 13,
      name: "Calabacon",
      ingredients: ["Calabresa", "cebola", "bacon", "mussarela"],
      price: "R$ 40,00"
    },
    {
      id: 14,
      name: "Catupiry",
      ingredients: ["Frango desfiado com alho", "milho", "mussarela"],
      price: "R$ 40,00"
    },
    {
      id: 15,
      name: "Catupiry",
      ingredients: ["Catupiry", "azeitona"],
      price: "R$ 40,00"
    },
    {
      id: 16,
      name: "Catupiry com Presunto",
      ingredients: ["Catupiry", "azeitona", "presunto"],
      price: "R$ 40,00"
    },
    {
      id: 17,
      name: "Catupiry com Milho",
      ingredients: ["Catupiry", "milho"],
      price: "R$ 40,00"
    },
    {
      id: 33,
      name: "Forneiro",
      ingredients: ["Presunto", "azeitona verde picada", "mussarela"],
      price: "R$ 40,00"
    },
    {
      id: 37,
      name: "Marguerita",
      ingredients: ["Mussarela", "manjericão", "parmesão", "rodela de tomate"],
      price: "R$ 40,00"
    },
    {
      id: 38,
      name: "Milho Verde",
      ingredients: ["Milho com mussarela"],
      price: "R$ 40,00"
    },
    {
      id: 39,
      name: "Mussarela",
      ingredients: ["Molho de tomate", "orégano", "azeitona", "mussarela"],
      price: "R$ 40,00"
    },
    {
      id: 40,
      name: "Napolitana",
      ingredients: ["Parmesão ralado", "mussarela", "rodelas de tomate"],
      price: "R$ 40,00"
    },
    {
      id: 41,
      name: "Palmito",
      ingredients: ["Palmito", "cebola", "mussarela"],
      price: "R$ 40,00"
    },
    {
      id: 44,
      name: "Peperoni",
      ingredients: ["Mussarela", "salame italiano tipo italiano", "parmesão"],
      price: "R$ 40,00"
    }
  ],
  especial: [
    {
      id: 101,
      name: "Frango Catupiry",
      ingredients: ["Frango", "bacon", "catupiry", "cheddar"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 102,
      name: "Frango Especial",
      ingredients: ["Frango", "palmito", "ervilha", "catupiry"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 103,
      name: "Lombo Especial",
      ingredients: ["Presunto", "ervilha", "palmito", "bacon", "mussarela"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 104,
      name: "Carne Seca Especial",
      ingredients: ["Carne seca", "ovo", "catupiry", "bacon", "tomate"],
      price: "R$ 50,00",
      tag: "Premium"
    },
    {
      id: 105,
      name: "Vegetariana Especial",
      ingredients: ["Escarola", "milho", "palmito", "tomate", "mussarela"],
      price: "R$ 45,00",
      tag: "Vegetariana"
    },
    {
      id: 106,
      name: "Três Coroas Especial",
      ingredients: ["Lombo", "bacon", "cebola", "ovo", "cheddar", "mussarela"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 107,
      name: "Toscana Especial",
      ingredients: ["Calabresa", "ovo", "cebola", "mussarela"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 8,
      name: "Pizzaiolo II",
      ingredients: ["Peito de peru", "bacon", "catupiry", "mussarela"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 9,
      name: "Calabresa II",
      ingredients: ["Calabresa", "cebola", "catupiry"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 10,
      name: "Hot Dog",
      ingredients: ["Salsicha", "milho", "batata palha", "mussarela", "catupiry"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 11,
      name: "Americana",
      ingredients: ["Lombo", "palmito", "champignon", "bacon", "cebola", "mussarela", "catupiry"],
      price: "R$ 45,00",
      tag: "Especial"
    },
    {
      id: 12,
      name: "Mista I",
      ingredients: ["Presunto", "calabresa", "milho", "catupiry"],
      price: "R$ 45,00",
      tag: "Especial"
    }
  ],
  doce: [
    {
      id: 201,
      name: "Banana",
      ingredients: ["Mussarela", "banana", "leite condensado", "açúcar", "canela"],
      price: "R$ 45,00"
    },
    {
      id: 202,
      name: "Banana II",
      ingredients: ["Banana", "leite condensado", "chocolate", "uvas passas"],
      price: "R$ 45,00"
    },
    {
      id: 203,
      name: "Banana III",
      ingredients: ["Banana doce de leite", "mussarela"],
      price: "R$ 45,00"
    },
    {
      id: 204,
      name: "Branco-Choco",
      ingredients: ["Chocolate preto", "chocolate branco", "granulado"],
      price: "R$ 45,00"
    },
    {
      id: 205,
      name: "Morango",
      ingredients: ["Chocolate", "morango", "leite condensado"],
      price: "R$ 45,00"
    },
    {
      id: 206,
      name: "Sonho Verde",
      ingredients: ["Chocolate", "menta"],
      price: "R$ 48,00"
    },
    {
      id: 207,
      name: "M&Ms",
      ingredients: ["Chocolate derretido", "confete tipo M&M's"],
      price: "R$ 45,00"
    },
    {
      id: 208,
      name: "Prestígio",
      ingredients: ["Leite moça", "coco ralado", "chocolate"],
      price: "R$ 45,00"
    },
    {
      id: 209,
      name: "Romeu & Julieta",
      ingredients: ["Queijo", "goiabada cremosa", "canela"],
      price: "R$ 45,00"
    },
    {
      id: 210,
      name: "Romeu & Julieta II",
      ingredients: ["Goiabada", "creme de leite", "mussarela"],
      price: "R$ 45,00"
    },
    {
      id: 211,
      name: "Saborosa",
      ingredients: ["Chocolate", "morango", "calda de morango"],
      price: "R$ 45,00"
    }
  ]
};
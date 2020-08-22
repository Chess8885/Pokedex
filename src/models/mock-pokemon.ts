import Pokemon from './pokemon';
   
export const POKEMONS: Pokemon[] = [
 {
  id: 1,
  name: "Bulbizarre",
  hp: 25,
  cp: 5,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  types: ["Plante", "Poison"],
  created: new Date()
 },
 {
  id: 2,
  name: "Salamèche",
  hp: 28,
  cp: 6,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  types: ["Feu"],
  created: new Date()
 },
 {
  id: 3,
  name: "Carapuce",
  hp: 21,
  cp: 4,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  types: ["Eau"],
  created: new Date()
 },
 {
  id: 4,
  name: "Aspicot",
  hp: 16,
  cp: 2,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
  types: ["Insecte", "Poison"],
  created: new Date()
 },
 {
  id: 5,
  name: "Roucool",
  hp: 30,
  cp: 7,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
  types: ["Normal", "Vol"],
  created: new Date()
 },
 {
  id: 6,
  name: "Rattata",
  hp: 18,
  cp: 6,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
  types: ["Normal"],
  created: new Date()
 },
 {
  id: 7,
  name: "Piafabec",
  hp: 14,
  cp: 5,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
  types: ["Normal", "Vol"],
  created: new Date()
 },
 {
  id: 8,
  name: "Abo",
  hp: 16,
  cp: 4,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
  types: ["Poison"],
  created: new Date()
 },
 {
  id: 9,
  name: "Pikachu",
  hp: 21,
  cp: 7,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
  types: ["Electrik"],
  created: new Date()
 },
 {
  id: 10,
  name: "Sabelette",
  hp: 19,
  cp: 3,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
  types: ["Normal"],
  created: new Date()
 },
 {
  id: 11,
  name: "Mélofée",
  hp: 25,
  cp: 5,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
  types: ["Fée"],
  created: new Date()
 },
 {
  id: 12,
  name: "Groupix",
  hp: 17,
  cp: 8,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
  types: ["Feu"],
  created: new Date()
 }
];
  
export default POKEMONS;

const formatType = (type: string): string => {
  let color: string;
 
  switch (type) {
    case 'Feu': 
      color = 'red lighten-1'; 
      break; 
    case 'Eau': 
      color = 'blue lighten-1'; 
      break; 
    case 'Plante': 
      color = 'green lighten-1'; 
      break; 
    case 'Insecte': 
      color = 'brown lighten-1'; 
      break; 
    case 'Normal': 
      color = 'grey lighten-3'; 
      break; 
    case 'Vol': 
      color = 'blue lighten-3'; 
      break; 
    case 'Poison': 
      color = 'deep-purple accent-1'; 
      break; 
    case 'Fée': 
      color = 'pink lighten-4'; 
      break; 
    case 'Psy': 
      color = 'deep-purple darken-2'; 
      break; 
    case 'Electrik': 
      color = 'lime accent-1'; 
      break; 
    case 'Combat': 
      color = 'deep-orange'; 
      break; 
    default: 
      color = 'grey'; 
      break; 
  }
 
  return `chip ${color}`;
}
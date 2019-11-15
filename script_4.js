const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("********Les entrepreneurs qui sont nées dans l'année 70 :")
for(let index in entrepreneurs) {
  if (entrepreneurs[index].year > 1969 && entrepreneurs[index].year < 1980) {
    console.log(entrepreneurs[index].first);

  }
}

console.log("**********Les Noms et Prenoms des Entrepreneurs:")

let name = [];
entrepreneurs.forEach(complet => {
  name.push({firstname: complet.first , lastname: complet.last});
});
console.log(name);


console.log("**********L'age des entrepreneurs en ****:")
let type = [];
let val = " ";
val = prompt ("votre année");
entrepreneurs.forEach(complet => {
  type.push({Nom: (complet.first) , Age_donc: (val) - complet.year});
});
console.log(type);

console.log("************** Par order ALPHA")
let order = [];
entrepreneurs.forEach(complet  => {
  order.push (complet.last);
});
order.sort();
console.log(order);
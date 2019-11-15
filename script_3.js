let mid = prompt ("Votre pyramide");

function Pyramide(n) {

  for (let i = 0; i < n; i++) {
    let str = '';
    
    for (let k = 1; k <= (i+1); k++) {
      str = str + '#';
    }
    console.log(str);
  }
}
Pyramide(mid);
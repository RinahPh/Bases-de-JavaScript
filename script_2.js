let fact = prompt("De quel nombre veux-tu calculer la factorielle ");
function factorielle(isa)
{
	if (isa === 0)
	{
		return 1;
	}
	else {
		return isa * factorielle(isa - 1);
	}
}
console.log(`le resultat est  : ${factorielle(fact)}`);
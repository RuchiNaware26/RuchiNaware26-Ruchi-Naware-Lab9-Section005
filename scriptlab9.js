//Question 1//
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
console.log("Q1: Characters array:");
for(let i=0; i<characters.length; i++)
{
    console.log(characters[i])
}


//Question 2//
let firstName = 'Harry';
let house = 'Gryffindor';
console.log("Q2: Welcome, ${firstName} of ${house}!");


//Question 3//
let characterName = 'Hermione';
console.log("Q3: Lowercase:", characterName.toLowerCase());
console.log("Q3: Uppercase:", characterName.toUpperCase());

//Question 4//
let spell = 'Expelliarmus';
console.log("Q4: Trimmed spell:", spell.trim());

//Question 5//
let quote = 'I solemnly swear that I am up to no good';
console.log("Q5: Extracted word:", quote.slice(13,18));

//Question 6//
let lastName = 'Weasley';
console.log("Q6: Full name:", firstName.concat(" ", lastName));

//Question 7//
let sentence = 'Drace is a good wizard';
console.log("Q7: Modified sentence:", sentence.replace('good', 'bad'));

//Question 8//
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.pop();
console.log("Q8: Final houses array:", houses);

//Question 9//
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log("Q9: Modified spells array:", spells);

//Question 10//
let professors = ['Dumledore', 'McGonagall', 'Snape', 'Hagrid'];
let selectedProfessors = professors.slice(1,3);
console.log("Q10: Selected professors:", selectedProfessors);


//Question 11//
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1,2);
console.log("Q11: Modified students array:", students);

//Question 12//
let phrase = 'Mischief Managed';
console.log("Q12: Final phrase:", phrase.trim().toLowerCase().concat(' -Harry'));

//Question 13//
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log("Q13: Updated wizards array:", wizards);

//Question 14//
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let extractedWord = message.slice(11, 19).concat(' Castle');
console.log("Q14: Modified message:", extractedWord);

/**
 * Arrow Functions y Arrays Methods
*/ 

const tecnologias = ['HTML','CSS', 'JavaScript', 'React', 'NodeJS']
/*
const nuevoArray = tecnologias.map( tech => {
    if( tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
});
*/
const nuevoArray2 = tecnologias.filter( tech => tech !== 'React');

// console.log(nuevoArray);
 console.log(nuevoArray2);


const nuevoArray3 = tecnologias.filter( tech => tech === 'NodeJS');

console.log(nuevoArray3);














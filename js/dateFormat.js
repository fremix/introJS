/**
 * Intl.DateTimeFormat
 * Muestra las fechas en diferentes idiomas. Es util para
 * formatear y traducir fechas en diferentes idiomas
 */

const date = new Date();

const options = {
    timeStyle: 'short',
    dateStyle: 'full'
}

// => sabado, 2 de abril de 2022, 18:55
const MXFormatter = Intl.DateTimeFormat('es-MX', options).format(date);
const PLFormatter = Intl.DateTimeFormat('pl', options).format(date);
// => sabato, 2 kwietnia 2022 18:55
const USFormatter = Intl.DateTimeFormat('en-US', options).format(date);
// => saturday. April 2, 2022 at 6:55 PM

console.log(MXFormatter);
console.log(PLFormatter);
console.log(USFormatter);
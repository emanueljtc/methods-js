// Main Methods - Metodos Principales

//  Method to select by ID - Metodos para seleccionar por ID
const FORID = document.getElementById.bind(document)

// Method to get the first element whose CSS selector matches the parameter
// Metodo para obtener el primer elemento cuyo selector CSS coincida con el parametro

const QUERYSELECTORPRIMARY = document.querySelector.bind(document)

// Method to get the all the elements whose CSS selectors match the parameter
// Metodo para obtener el todos los elementos cuyos selectores CSS coincidan con el parametro
const QUERYSELECTORALL = document.querySelectorAll.bind(document)

// Example of used
const container = FORID('container')
const title = QUERYSELECTORPRIMARY('title')
const h1 = QUERYSELECTORALL('h1')

/*************/
/*
Credits: {
  author: Ing.Emanuel Torres
  Country: Venezuela
  City: Villa de Cura
  Date: 12/03/2020
}
*/
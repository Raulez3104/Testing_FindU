// Funciones para manejar objetos perdidos

// Agregar un objeto al arreglo
export function agregarObjeto(objetos, nuevoObjeto) {
  return [...objetos, nuevoObjeto];
}

// Buscar un objeto por nombre
export function buscarObjeto(objetos, nombre) {
  return objetos.filter(obj => obj.nombre.toLowerCase() === nombre.toLowerCase());
}

// Marcar un objeto como encontrado
export function marcarEncontrado(objetos, id) {
  return objetos.map(obj => obj.id === id ? { ...obj, encontrado: true } : obj);
}

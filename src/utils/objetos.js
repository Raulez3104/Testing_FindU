export function agregarObjeto(objetos, nuevoObjeto) {
  return [...objetos, nuevoObjeto];
}
export function buscarObjeto(objetos, nombre) {
  return objetos.filter(obj => obj.nombre.toLowerCase() === nombre.toLowerCase());
}
export function marcarEncontrado(objetos, id) {
  return objetos.map(obj => obj.id === id ? { ...obj, encontrado: true } : obj);
}

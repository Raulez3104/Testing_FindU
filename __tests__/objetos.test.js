import { agregarObjeto, buscarObjeto, marcarEncontrado } from '../src/utils/objetos';

describe('Pruebas unitarias FindU', () => {

  test('Agregar un nuevo objeto al arreglo', () => {
    const objetos = [{ id: 1, nombre: 'Mochila' }];
    const nuevoObjeto = { id: 2, nombre: 'Libro' };
    const resultado = agregarObjeto(objetos, nuevoObjeto);
    expect(resultado.length).toBe(2);
    expect(resultado).toContainEqual(nuevoObjeto);
  });

  test('Buscar objeto por nombre', () => {
    const objetos = [
      { id: 1, nombre: 'Mochila' },
      { id: 2, nombre: 'Libro' }
    ];
    const resultado = buscarObjeto(objetos, 'libro');
    expect(resultado).toEqual([{ id: 2, nombre: 'Libro' }]);
  });

  test('Marcar objeto como encontrado', () => {
    const objetos = [
      { id: 1, nombre: 'Mochila', encontrado: false },
      { id: 2, nombre: 'Libro', encontrado: false }
    ];
    const resultado = marcarEncontrado(objetos, 2);
    expect(resultado.find(obj => obj.id === 2).encontrado).toBe(true);
    expect(resultado.find(obj => obj.id === 1).encontrado).toBe(false);
  });

});

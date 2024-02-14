import react from 'react'
const AreasDeConocimientoTabla = () => {
  const areasDeConocimiento = [
    { id: 1, nombre: 'Matemáticas', descripcion: 'Ciencia que estudia las propiedades de los números y las operaciones elementales entre ellos.' },
    { id: 2, nombre: 'Ciencias de la Computación', descripcion: 'Estudio de los fundamentos teóricos de la información y la computación, así como de sus aplicaciones prácticas.' }
  ];
  const handleAgregarNuevaFila = () => {
    const nuevoId = areasDeConocimiento.length + 1;
    const nuevaArea = { id: nuevoId, nombre: 'Nueva Área', descripcion: 'Descripción de la nueva área' };
    areasDeConocimiento([...areasDeConocimiento, nuevaArea]);
  };
  return (
    <div>
      <h2>Áreas de Conocimiento</h2>
      <table class="table table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {areasDeConocimiento.map(area => (
            <tr key={area.id}>
              <td>{area.id}</td>
              <td>{area.nombre}</td>
              <td>{area.descripcion}</td>
              <td>
                <button className='btn btn-outline-primary' onClick={() => handleActualizar(area.id)}>Actualizar</button>
                <button className='btn btn-outline-danger' onClick={() => handleEliminar(area.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn btn-outline-success' onClick={handleAgregarNuevaFila}>Nuevo</button>
    </div>
  );
};

export default AreasDeConocimientoTabla;
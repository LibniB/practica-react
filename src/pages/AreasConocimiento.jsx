import React, { useState } from 'react';
import Modal from '../components/Modal';

const AreasDeConocimientoTabla = () => {
  const [areasDeConocimiento, setAreasDeConocimiento] = useState([
    { id: 1, nombre: 'Matemáticas', descripcion: 'Ciencia que estudia las propiedades de los números y las operaciones elementales entre ellos.' },
    { id: 2, nombre: 'Ciencias de la Computación', descripcion: 'Estudio de los fundamentos teóricos de la información y la computación, así como de sus aplicaciones prácticas.' }
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [areaToUpdate, setAreaToUpdate] = useState(null);

  const handleAgregarNuevaFila = () => {
    const nuevoId = areasDeConocimiento.length + 1;
    const nuevaArea = { id: nuevoId, nombre: 'Nueva Área', descripcion: 'Descripción de la nueva área' };
    setAreasDeConocimiento([...areasDeConocimiento, nuevaArea]);
  };

  const handleEliminar = (id) => {
    const nuevasAreas = areasDeConocimiento.filter(area => area.id !== id);
    setAreasDeConocimiento(nuevasAreas);
  };

  const handleActualizar = (id) => {
    const areaToUpdate = areasDeConocimiento.find(area => area.id === id);
    setAreaToUpdate(areaToUpdate);
    setModalOpen(true);
  };

  const handleActualizarConfirmado = (updatedArea) => {
    const updatedAreas = areasDeConocimiento.map(area => {
      if (area.id === updatedArea.id) {
        return updatedArea;
      }
      return area;
    });
    setAreasDeConocimiento(updatedAreas);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2>Áreas de Conocimiento</h2>
      <table className="table table">
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
      <Modal isOpen={modalOpen} handleClose={handleCloseModal} title="Actualizar Área" handleConfirm={handleActualizarConfirmado} areaToUpdate={areaToUpdate}>
        <div className="form-group">
          <label htmlFor="updatedId">ID:</label>
          <input type="text" id="updatedId" className="form-control" value={areaToUpdate ? areaToUpdate.id : ''} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="updatedNombre">Nombre:</label>
          <input type="text" id="updatedNombre" className="form-control" value={areaToUpdate ? areaToUpdate.nombre : ''} onChange={(e) => setAreaToUpdate({ ...areaToUpdate, nombre: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="updatedDescripcion">Descripción:</label>
          <input type="text" id="updatedDescripcion" className="form-control" value={areaToUpdate ? areaToUpdate.descripcion : ''} onChange={(e) => setAreaToUpdate({ ...areaToUpdate, descripcion: e.target.value })} />
        </div>
      </Modal>
    </div>
  );
};

export default AreasDeConocimientoTabla;


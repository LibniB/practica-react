import React from 'react';

const Modal = ({ isOpen, handleClose, title, handleConfirm, areaToUpdate, setUpdatedNombre, setUpdatedDescripcion }) => {
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="updatedId">ID:</label>
              <input type="text" id="updatedId" className="form-control" value={areaToUpdate ? areaToUpdate.id : ''} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="updatedNombre">Nombre:</label>
              <input type="text" id="updatedNombre" className="form-control" value={areaToUpdate ? areaToUpdate.nombre : ''} onChange={(e) => setUpdatedNombre(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="updatedDescripcion">Descripción:</label>
              <input type="text" id="updatedDescripcion" className="form-control" value={areaToUpdate ? areaToUpdate.descripcion : ''} onChange={(e) => setUpdatedDescripcion(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={handleConfirm}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;


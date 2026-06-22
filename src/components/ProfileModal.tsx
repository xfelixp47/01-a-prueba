import React from "react";
import "./ProfileModal.css";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  nombre,
  email,
  telefono,
  direccion,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Mi Perfil</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-content">
          <div className="profile-avatar">
            {nombre.charAt(0).toUpperCase()}
          </div>

          <div className="profile-info">
            <p>
              <strong>Nombre:</strong> {nombre}
            </p>

            <p>
              <strong>Email:</strong> {email}
            </p>

            {telefono && (
              <p>
                <strong>Teléfono:</strong> {telefono}
              </p>
            )}

            {direccion && (
              <p>
                <strong>Dirección:</strong> {direccion}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal; 
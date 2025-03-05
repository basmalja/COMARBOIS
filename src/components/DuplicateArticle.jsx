import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

const DuplicateArticle = ({ article, visible, onClose, onSave }) => {
  const [newArticle, setNewArticle] = useState({ ...article, id: Date.now() });

  const handleChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={visible} onCancel={onClose} footer={null}>
      <h2 className="text-lg font-bold mb-4">Dupliquer l'article</h2>
      <Input name="fournisseur" value={newArticle.fournisseur} onChange={handleChange} className="mb-2" />
      <Input name="categorie" value={newArticle.categorie} onChange={handleChange} className="mb-2" />
      <Input name="qualite" value={newArticle.qualite} onChange={handleChange} className="mb-2" />
      <Input name="Sous-Catégorie" value={newArticle.sousCategorie} onChange={handleChange} className="mb-2" />
       <Button onClick={() => onSave(newArticle)}>Créer</Button>
    </Modal>
  );
};

export default DuplicateArticle;

import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

const EditArticle = ({ article, visible, onClose, onSave }) => {
  const [editedArticle, setEditedArticle] = useState(article);

  const handleChange = (e) => {
    setEditedArticle({ ...editedArticle, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={visible} onCancel={onClose} footer={null}>
      <h2 className="text-lg font-bold mb-4">Modifier l'article</h2>
      <Input name="fournisseur" value={editedArticle.fournisseur} onChange={handleChange} className="mb-2" />
      <Input name="categorie" value={editedArticle.categorie} onChange={handleChange} className="mb-2" />
      <Input name="qualite" value={editedArticle.qualite} onChange={handleChange} className="mb-2" />
      <Input name="sousCategorie" value={editedArticle.sousCategorie} onChange={handleChange} className="mb-2" />
       <Button onClick={() => onSave(editedArticle)}>Enregistrer</Button>
    </Modal>
  );
};

export default EditArticle;

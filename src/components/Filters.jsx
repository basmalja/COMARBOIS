import React, { useState } from "react";
import { Input, Select, Checkbox, Space } from "antd";
const { Option } = Select;

const Filters = ({ onFilterChange , filters}) => {
  


  console.log(fields)

  // Met à jour la valeur d'un champ et notifie le parent si le filtre est activé
  const handleFieldChange = (fieldName, newValue) => {
      onFilterChange(fieldName, newValue);
  };

  const handleCheckboxChange = (fieldName, checked) => {
    onFilterChange(fieldName, checked ? fields[fieldName].value : null);
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      {/* Fournisseur */}
      <Space>
        <Input
          placeholder="Fournisseur"
          disabled={!fields.fournisseur.active}
          value={fields.fournisseur.value}
          onChange={(e) => handleFieldChange("fournisseur", e.target.value)}
          style={{ width: "100px" }}
        />
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.fournisseur.active}
          onChange={(e) =>
            handleCheckboxChange("fournisseur", e.target.checked)
          }
        />
      </Space>

      {/* Catégorie */}
      <Space>
        <Input
          placeholder="Catégorie"
          disabled={!fields.categorie.active}
          value={fields.categorie.value}
          onChange={(e) => handleFieldChange("categorie", e.target.value)}
          style={{ width: "100px" }}
        />
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.categorie.active}
          onChange={(e) => handleCheckboxChange("categorie", e.target.checked)}
        />
      </Space>

      {/* Qualité */}
      <Space>
        <Input
          placeholder="Qualité"
          disabled={!fields.qualite.active}
          value={fields.qualite.value}
          onChange={(e) => handleFieldChange("qualite", e.target.value)}
          style={{ width: "100px" }}
        />
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.qualite.active}
          onChange={(e) => handleCheckboxChange("qualite", e.target.checked)}
        />
      </Space>

      {/* Dépôt */}
      <Space>
        <Input
          placeholder="Dépôt"
          disabled={!fields.depot.active}
          value={fields.depot.value}
          onChange={(e) => handleFieldChange("depot", e.target.value)}
          style={{ width: "100px" }}
        />
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.depot.active}
          onChange={(e) => handleCheckboxChange("depot", e.target.checked)}
        />
      </Space>

      {/* Sous-Catégorie */}
      <Space>
        <Input
          placeholder="Sous-Catégorie"
          disabled={!fields.sousCategorie.active}
          value={fields.sousCategorie.value}
          onChange={(e) => handleFieldChange("sousCategorie", e.target.value)}
          style={{ width: "100px" }}
        />
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.sousCategorie.active}
          onChange={(e) =>
            handleCheckboxChange("sousCategorie", e.target.checked)
          }
        />
      </Space>

      {/* Longueur */}
      <Space>
        <Input
          placeholder="Longueur"
          disabled={!fields.longueur.active}
          value={fields.longueur.value}
          onChange={(e) => handleFieldChange("longueur", e.target.value)}
          style={{ width: "100px" }}
        />
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.longueur.active}
          onChange={(e) => handleCheckboxChange("longueur", e.target.checked)}
        />
      </Space>

      {/* Largeur */}
      <Space>
        <Input
          placeholder="Largeur"
          disabled={!fields.largeur.active}
          value={fields.largeur.value}
          onChange={(e) => handleFieldChange("largeur", e.target.value)}
          style={{ width: "100px" }}
        />
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.largeur.active}
          onChange={(e) => handleCheckboxChange("largeur", e.target.checked)}
        />
      </Space>

      {/* Épaisseur */}
      <Space>
        <Input
          placeholder="Épaisseur"
          disabled={!fields.epaisseur.active}
          value={fields.epaisseur.value}
          onChange={(e) => handleFieldChange("epaisseur", e.target.value)}
          style={{ width: "100px" }}
        />
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.epaisseur.active}
          onChange={(e) => handleCheckboxChange("epaisseur", e.target.checked)}
        />
      </Space>

      {/* Unité */}
      <Space>
        <Select
          placeholder="Unité"
          disabled={!fields.unite.active}
          value={fields.unite.value}
          onChange={(value) => handleFieldChange("unite", value)}
          style={{ width: "100px" }}
        >
          <Option value="M2">M²</Option>
          <Option value="M3">M³</Option>
        </Select>
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.unite.active}
          onChange={(e) => handleCheckboxChange("unite", e.target.checked)}
        />
      </Space>

      {/* Local / Import */}
      <Space>
        <Select
          placeholder="Local / Import"
          disabled={!fields.localImport.active}
          value={fields.localImport.value}
          onChange={(value) => handleFieldChange("localImport", value)}
          style={{ width: "100px" }}
        >
          <Option value="Local">Local</Option>
          <Option value="Import">Import</Option>
        </Select>
        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.localImport.active}
          onChange={(e) =>
            handleCheckboxChange("localImport", e.target.checked)
          }
        />
      </Space>

      {/* Date */}
      <Space>
      
        <Input
          type="date"
          disabled={!fields.date.active}
          value={fields.date.value}
          onChange={(e) => handleFieldChange(e.target.value)}
          style={{ width: "100px" }}
        />

        <Checkbox
          style={{ marginRight: "20px" }}
          checked={fields.date.active}
          onChange={(e) => handleCheckboxChange("date", e.target.checked)}
        />
      </Space>
    </div>
  );
};

export default Filters;

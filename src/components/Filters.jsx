import React, { useState } from "react";
import { Input, Select} from "antd"; // Corrected import for Select

const { Option } = Select;

const Filters = ({ onFilterChange }) => {
  const [selectedValues, setSelectedValues] = useState({
    unite: null,
    localImport: null,
  });
 
  
  

  const handleChange = (key, value) => {
    // Update the selected value in state
    setSelectedValues((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log("Selected Value:", key, value);  // Debugging log
    onFilterChange(key, value); // Call the passed onFilterChange function
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <Input
        placeholder="Fournisseur"
        onChange={(e) => onFilterChange("fournisseur", e.target.value)}
        style={{ width: "100px" }}
      />
      <Input
        placeholder="Catégorie"
        onChange={(e) => onFilterChange("categorie", e.target.value)}
        style={{ width: "100px" }}
      />
      <Input
        placeholder="Qualité"
        onChange={(e) => onFilterChange("qualite", e.target.value)}
        style={{ width: "100px" }}
      />
      <Input
        placeholder="Dépôt"
        onChange={(e) => onFilterChange("depot", e.target.value)}
        style={{ width: "100px" }}
      />
      <Input
        placeholder="Sous-Catégorie"
        onChange={(e) => onFilterChange("sousCategorie", e.target.value)}
        style={{ width: "100px" }}
      />
      <Input
        placeholder="Longueur"
        onChange={(e) => onFilterChange("longueur", e.target.value)}
        style={{ width: "100px" }}
      />
      <Input
        placeholder="Largeur"
        onChange={(e) => onFilterChange("largeur", e.target.value)}
        style={{ width: "100px" }}
      />
      <Input
        placeholder="Épaisseur"
        onChange={(e) => onFilterChange("epaisseur", e.target.value)}
        style={{ width: "100px" }}
      />
      <Select
        placeholder="Unité"
        value={selectedValues.unite}  // Make sure it reflects the selected value
        onChange={(value) => handleChange("unite", value)}
        style={{ width: "120px" }}
      >
        <Option value="M2">M²</Option>
        <Option value="M3">M³</Option>
      </Select>
      <Select
        placeholder="Local / Import"
        value={selectedValues.localImport}  // Make sure it reflects the selected value
        onChange={(value) => handleChange("localImport", value)}
        style={{ width: "120px" }}
      >
        <Option value="Local">Local</Option>
        <Option value="Import">Import</Option>
      </Select>
      <input type='date'></input> 
      
    </div>
  );
};

export default Filters;

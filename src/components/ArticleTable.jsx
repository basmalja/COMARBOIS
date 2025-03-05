import React from "react";
import { Table, Button } from "antd";

const ArticleTable = ({ data, onEdit, onDuplicate }) => {
  const columns = [
    { title: "Fournisseur", dataIndex: "fournisseur", key: "fournisseur" },
    { title: "Catégorie", dataIndex: "categorie", key: "categorie" },
    { title: "Sous-Catégorie", dataIndex: "sousCategorie", key: "sousCategorie" },
    { title: "Qualité", dataIndex: "qualite", key: "qualite" },
    { title: "Section", dataIndex: "section", key: "section" },
    { title: "Produit", dataIndex: "produit", key: "produit" },
    { title: "Unité", dataIndex: "unite", key: "unite" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button className="mr-2" onClick={() => onEdit(record)}>Modifier</Button>
          <Button onClick={() => onDuplicate(record)}>Dupliquer</Button>
        </>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default ArticleTable;

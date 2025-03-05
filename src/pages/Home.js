import React, { useState } from "react";
import ArticleTable from "../components/ArticleTable";
import EditArticle from "../components/EditArticle";
import DuplicateArticle from "../components/DuplicateArticle";
import mockData from "../data/mockData";
import Filters from "../components/Filters";


const Home = () => {
  const [data, setData] = useState(mockData);
  const [filters, setFilters] = useState({});
  const [editingArticle, setEditingArticle] = useState(null);
  const [duplicatingArticle, setDuplicatingArticle] = useState(null);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredData = data.filter((item) =>
    Object.keys(filters).every(
      (key) => !filters[key] || item[key].toString().includes(filters[key])
    )
  );

  const handleEdit = (article) => {
    setEditingArticle(article);
  };

  const handleDuplicate = (article) => {
    setDuplicatingArticle(article);
  };

  const saveEditedArticle = (updatedArticle) => {
    setData(data.map((item) => (item.id === updatedArticle.id ? updatedArticle : item)));
    setEditingArticle(null);
  };

  const saveDuplicatedArticle = (newArticle) => {
    setData([...data, newArticle]);
    setDuplicatingArticle(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Gestion des Articles</h1>
      <Filters onFilterChange={handleFilterChange} />
      <ArticleTable data={filteredData} onEdit={handleEdit} onDuplicate={handleDuplicate} />
      {editingArticle && (
        <EditArticle
          article={editingArticle}
          visible={!!editingArticle}
          onClose={() => setEditingArticle(null)}
          onSave={saveEditedArticle}
        />
      )}
      {duplicatingArticle && (
        <DuplicateArticle
          article={duplicatingArticle}
          visible={!!duplicatingArticle}
          onClose={() => setDuplicatingArticle(null)}
          onSave={saveDuplicatedArticle}
        />
      )}
    </div>
  );
};

export default Home;

import React from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [ImgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [origin, setOrigin] = useState("");

  return (
    <div>
      <form onSubmit={handleSubmit} className="addForm">
        <input
          placeholder="Instrument Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="ImgUrl"
          type="text"
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <input
          placeholder="Description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Price"
          type="text"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Category"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Origin"
          type="text"
          onChange={(e) => setOrigin(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Add;

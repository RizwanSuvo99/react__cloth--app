/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { utils } from "../../utils/utils";
import ProductRow from "../../components/ProductRow";

export const App = () => {
  const [cloths, setCloths] = useState(utils());

  // input field states
  const [clothData, setClothData] = useState({
    pro__name: "",
    pro__id: "",
    pro__price: "",
    pro__quantity: "",
    pro__color: "",
    pro__description: "",
  });

  // form submit event
  const handleChange = (e) => {
    const fieldName = e.target.name;
    setClothData({ ...clothData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCloths([...cloths, clothData]);
    setClothData({
      pro__name: "",
      pro__id: "",
      pro__price: "",
      pro__quantity: "",
      pro__description: "",
    });
  };

  const { pro__name, pro__id, pro__price, pro__quantity, pro__description } =
    clothData;

  // delete book from LS
  const handleDelete = (id) => {
    console.log("i am in delete")
    const filteredCloths = cloths.filter((cloth) => cloth.pro__id !== id);
    setCloths(filteredCloths);
  };

  const handleDeleteAll = () => {
    setCloths([]);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("cloths", JSON.stringify(cloths));
  }, [cloths]);

  return (
    <div className="wrapper">
      <h1>ClothList App</h1>
      <p>Add and view your cloths using local storage</p>
      <div className="main">
        <div className="view-container">
          {cloths.length > 0 ? (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>ID</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Description</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cloths.map((cloth) => (
                      <ProductRow
                        key={cloth.pro__id}
                        cloth={cloth}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={handleDeleteAll}
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </>
          ) : (
            <div>No Cloths are added yet.</div>
          )}
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-group">
            <label>Cloth Name</label>
            <input
              type="text"
              value={pro__name}
              name="pro__name"
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Cloth ID</label>
            <input
              type="number"
              value={pro__id}
              name="pro__id"
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Cloth Price</label>
            <input
              type="number"
              value={pro__price}
              name="pro__price"
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Quantity</label>
            <input
              type="number"
              value={pro__quantity}
              name="pro__quantity"
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Description</label>
            <input
              type="text"
              value={pro__description}
              name="pro__description"
              onChange={handleChange}
              className="form-control"
              required
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

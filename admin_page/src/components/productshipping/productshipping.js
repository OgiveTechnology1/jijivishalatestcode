import React, { useState } from 'react';
import './productshipping.css';
function ShippingForm({ couponData, setCouponData }) {
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [shippingClass, setShippingClass] = useState('No shipping class');

  const [localData, setLocalData] = useState({
    dimensions: {
      length: '',
      width: '',
      height: '',
    },
    weight: '',
    shipping_class: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Weight:', weight);
    console.log('Length:', length);
    console.log('Width:', width);
    console.log('Height:', height);
    console.log('Shipping Class:', shippingClass);


    console.log(localData)
    event.preventDefault();// Call parent's function with clicked section
    setCouponData({ ...couponData, ...localData }); // Update parent's state
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="invent">
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            id="weight"
            onChange={(event) => setLocalData({ weight: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dimensions">Dimensions (cm)</label>
          <div>
            <input
              type="number"
              id="length"
              onChange={(event) => setLocalData((prevState) => ({
                ...prevState,
                dimensions: {
                  ...prevState.dimensions,
                  length: event.target.value,
                },
              }))}
              placeholder="Length"
            />

            <input
              type="number"
              id="width"
              onChange={(event) => setLocalData((prevState) => ({
                ...prevState,
                dimensions: {
                  ...prevState.dimensions,
                  width: event.target.value,
                },
              }))}
              placeholder="Width"
            />
            <input
              type="number"
              id="height"
              onChange={(event) => setLocalData((prevState) => ({
                ...prevState,
                dimensions: {
                  ...prevState.dimensions,
                  height: event.target.value,
                },
              }))}
              placeholder="Height"
            />
          </div>
        </div>
        <div>
          <label htmlFor="shippingClass">Shipping Class</label>
          <select
            id="shippingClass"
            onChange={(event) => setLocalData({ shipping_class: event.target.value })}
          >
            <option value="No shipping class">No shipping class</option>
          </select>
        </div>
      </form>
      <button type="submit" onClick={handleSubmit}>Save this section</button>
    </>
  );
}

export default ShippingForm;
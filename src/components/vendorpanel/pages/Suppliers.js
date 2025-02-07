import React from 'react'

const Suppliers = () => {
  return (
    <>
     <div className="WarehousesNav spaceB">
      <h3>Warehouses</h3>
      <div className="WarehousesNavButtons">
      <button className="btn btn-primary"><i class="fa-solid fa-location-dot fa-lg"></i></button>
      <button className="btn btn-primary"><i class="fa-solid fa-gear fa-lg"></i></button>
      <button className="btn btn-primary">Export</button>
        <button className="btn btn-primary">Import</button>
        <button className="btn btn-primary">New</button>
    </div>
    </div>
    <div className="WarehousesNav">
      <input type="text" placeholder="Search" />
      </div>
    </>
  )
}

export default Suppliers
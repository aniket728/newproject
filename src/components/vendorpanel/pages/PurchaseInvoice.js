import React from 'react'

const PurchaseInvoice = () => {
  return (
    <>
    <div className="WarehousesNav spaceB">
      <h3>Warehouses</h3>
      <div className="WarehousesNavButtons">
      <div className='primarybutton'>Total:$ 0</div>
      <button className="btn btn-primary"><i class="fa-solid fa-gear fa-lg"></i></button>
      <button className="btn btn-primary">Export As</button>
        <button className="btn btn-primary">Create purchase return</button>
    </div>
    </div>
      <div className="WarehousesNav" style={{display: 'flex',flexWrap: 'wrap'}}> 
      <input type="text" placeholder="Search" />
      <input type="date" placeholder="Search" />
      <input type="text" placeholder="Search" />
      <input type="text" placeholder="Search" />
      
      </div>
    </>
  )
}

export default PurchaseInvoice
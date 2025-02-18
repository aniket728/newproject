import React from 'react'

const Visited = () => {
  return (
    <>
    <div className="WarehousesNav spaceB" style={{backgroundColor:'#f5f5f5'}}>
      <h3>Warehouses</h3>
      <div className="WarehousesNavButtons">
      <button className="btn btn-primary"><i class="fa-solid fa-gear fa-lg"></i></button>
    </div>
    </div>
    <div className="WarehousesNav" style={{display:'flex', backgroundColor:'#f5f5f5', justifyContent:'space-between', gap:'5px', flexWrap:'wrap'}}> 
      <input type="date" placeholder="Search" />
      <input type="date" placeholder="Search" />
    <div>
      <select id="user" name="user">
         <option value="volvo">Select User</option>
         <option value="saab"></option>
         </select>
         </div>
         <div>
      <select id="status" name="status">
         <option value="volvo">Select Status</option>
         <option value="saab"></option>
         </select>
         </div>
  
      </div>
    </>
  )
}

export default Visited
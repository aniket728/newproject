import React from 'react'

const Visited = () => {
  return (
    <>
    <div className="WarehousesNav spaceB">
      <h3>Warehouses</h3>
      <div className="WarehousesNavButtons">
      <button className="btn btn-primary"><i class="fa-solid fa-gear fa-lg"></i></button>
    </div>
    </div>
    <div className="WarehousesNav" style={{display:'flex', justifyContent:'space-between', gap:'5px', flexWrap:'wrap'}}> 
      <input type="text" placeholder="Search" />
      <input type="date" placeholder="Search" />
    <div>
      <select id="user" name="user">
         <option value="volvo">Volvo XC90</option>
         <option value="saab">Saab 95</option>
         </select>
         </div>
         <div>
      <select id="status" name="status">
         <option value="volvo">Volvo XC90</option>
         <option value="saab">Saab 95</option>
         </select>
         </div>
  
      </div>
    </>
  )
}

export default Visited
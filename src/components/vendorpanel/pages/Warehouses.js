                import React from 'react'

const Warehouses = () => {
  return (
    <div>
      <div className="WarehousesNav spaceB">
      <h3>Warehouses</h3>
      <div className="WarehousesNavButtons">
        <button className="btn btn-primary">Import</button>
        <button className="btn btn-primary">New</button>
    </div>
    </div>
    <div className="WarehousesNav">
      <input type="text" placeholder="Search" />
      </div>
      <div className="WarehousesTable">
        <div className='table-responsive'>
        <table className="table table-bordered td-border border-2">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Status</th>
              <th>Primary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>E web Digital</td>
              <td>bhimnagar bhavsingpura </td>
              <td><div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                </div></td>
              <td><div className='primarybutton'>	Primary</div></td>
              <td><button><i class="fa-solid fa-file-export fa-lg"></i></button> <button><i class="fa-solid fa-pen-to-square fa-lg"></i></button></td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
    </div>
  )
}

export default Warehouses
import React from 'react'

const PriceLists = () => {
  return (
    <>
    <div className="WarehousesNav spaceB">
      <h3>Price Lists</h3>
      <div className="WarehousesNavButtons">
        <button className="btn btn-primary">New</button>
    </div>
    </div>

      <div className="WarehousesTable">
        <div className='table-responsive'>
        <table className="table table-bordered td-border border-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{backgroundColor: '#fff'}}>
              <td></td>
              <td></td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
    </>
  )
}

export default PriceLists
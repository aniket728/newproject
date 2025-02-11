import React from 'react'

const Reports = () => {
  return (
    <>
      <div className="WarehousesNav spaceB">
           <h4>Reports </h4>
        </div>
    <div className='bgff'>
       <div className='table responsivehai'>
        <table className="table table-bordered td-border border-2">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Sales</th>
              <th>Item</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href='/dashboard/alltransaction'>All Transaction</a></td>
              <td><a href='/dashboard/salesbyparty'>Sales By Party</a></td>
              <td><a href='/dashboard/stocksummary'>Stock Summary</a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href='/dashboard/salesbyuser'>Sales By User</a></td>
              <td><a href='/dashboard/itemdetails'>Item details</a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href='/dashboard/salesbyitem'>Sales By Item</a></td>
              <td><a href='/dashboard/ratelist'>Rate List</a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href='/dashboard/salesbycategory'>Sales By Category</a></td>
              <td><a href='/dashboard/stockadjustment'>Stock Adjustment</a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href='/dashboard/salesbybrand'>Sales By Brand</a></td>
              <td><a href='/dashboard/lowstocksummary'>Low Stock Summary</a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href='/dashboard/vansalesbyitem'>Van Sales By Item</a></td>
              <td><a href='/dashboard/stocksummarybybrand'>Stock Summary By Brand</a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href='/dashboard/vansalesreconcilation'>Van Sales Reconciliation By Item</a></td>
              <td><a href='/dashboard/stocksummarybygroup'>Stock Summary By Category</a></td>
            </tr>
                </tbody>
                </table>
        </div>

        <div className='table responsivehai'>
        <table className="table table-bordered td-border border-2">
          <thead>
            <tr>
              <th>GST</th>
              <th>Party</th>
              <th>Purchase</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href=''>GSTR-1</a></td>
              <td><a href=''>Party Wise Outstanding</a></td>
              <td><a href=''>Purchase By Party</a></td>
            </tr>
            <tr>
              <td><a href=''>GSTR-2</a></td>
              <td><a href=''>Party Statement</a></td>
              <td><a href=''>Purchase By Item</a></td>
            </tr>
            <tr>
              <td><a href=''>E-Invoice</a></td>
              <td><a href=''>Distributor Statement</a></td>
              <td><a href=''>Purchase By Brand</a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href=''>Supplier Statement</a></td>
              <td><a href=''></a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href=''>Party Last Visited</a></td>
              <td><a href=''></a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href=''>Party Visited</a></td>
              <td><a href=''></a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href=''>Party Not Visited</a></td>
              <td><a href=''></a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href=''>Party Added By User</a></td>
              <td><a href=''></a></td>
            </tr>
            <tr>
              <td><a href=''></a></td>
              <td><a href=''>Party Transaction by Item</a></td>
              <td><a href=''></a></td>
            </tr>
                </tbody>
                </table>
        </div>

        <div className='table responsivehai'>
        <table className="table table-bordered td-border border-2">
          <thead>
            <tr>
              <th>Payment</th>
              <th>Production</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href=''>Payment Received</a></td>
              <td><a href=''>Production Detail By Item</a></td>
              <td><a href=''>User Summary</a></td>
            </tr>
            <tr>
              <td><a href=''>Payment Detail</a></td>
              <td><a href=''>Production Raw Materials</a></td>
              <td><a href=''>Attendance</a></td>
            </tr>
            <tr>
              <td><a href=''>Payment Received By User</a></td>
              <td><a href=''></a></td>
              <td><a href=''>Activity Log</a></td>
            </tr>
            <tr>
              <td><a href=''>Payment Received By Party</a></td>
              <td><a href=''></a></td>
              <td><a href=''></a></td>
            </tr>
            <tr>
              <td><a href=''>Payment Made</a></td>
              <td><a href=''></a></td>
              <td><a href=''></a></td>
            </tr>
            <tr>
              <td><a href=''>Expenses</a></td>
              <td><a href=''></a></td>
              <td><a href=''></a></td>
            </tr>
            <tr>
              <td><a href=''>Expense Detail</a></td>
              <td><a href=''></a></td>
              <td><a href=''></a></td>
            </tr>
                </tbody>
                </table>
        </div>

        <div className='table responsivehai'>
        <table className="table table-bordered td-border border-2">
          <thead>
            <tr>
              <th>Primary</th>
              <th></th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href=''>Sales By Item</a></td>
              <td><a href=''></a></td>
              <td><a href=''></a></td>
            </tr>
          
                </tbody>
                </table>
        </div>
    </div>
    </>
  
  )
}

export default Reports
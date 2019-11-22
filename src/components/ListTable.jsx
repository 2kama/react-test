import React from 'react';
import PropTypes from 'prop-types';

export const ListTable = ( props ) => {


  const removeFunc = (index) => {
    props.removeItem(index)
  }

  const selectFunc = (index) => {
    props.selectItem(index)
  }

  const deselectFunc = (index) => {
    props.deselectItem(index)
  }


  const generateList = ({groceryList, selectedItem}) => {
    if(groceryList) {
      return groceryList.map((item, index) => {

        return(
          <tr key={item.id} className={selectedItem === item ? "chosen" : ""}>
            <td> {item.name} </td>
            <td> {item.category} </td>
            <td> {item.deliveryMethod} </td>
            <td><button className="redBtn" onClick={() => removeFunc(index)}> &nbsp; </button></td>
            <td><button className="greenBtn" onClick={() => selectFunc(index)}> &nbsp; </button></td>
            <td><button className="yellowBtn" disabled={selectedItem === item ? false : true} onClick={() => deselectFunc(index)}> &nbsp; </button></td>
          </tr>
        )

      })
    }
  }



  return (
    <div className="listTable">
      <h3>ListTable</h3>
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Category </th>
            <th> Delivery Method </th>
          </tr>
        </thead>
        <tbody>
          {generateList(props)}
        </tbody>
      </table>

      <div>
        <p className="greenTxt">Green Button = Select Item</p>
        <p className="redTxt">Red Button = Remove Item</p>
        <p className="yellowTxt">Yellow Button = Deselect Item</p>
      </div>
    </div>
  )
  
}


ListTable.propTypes = {
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
};

export default ListTable

import React from 'react';


const ListSelection = (props) => {


   const getSelection = ( {isItemSelected, selectedItem} ) => {

     if(isItemSelected) {
        return(
          <div>
             Item Name : {selectedItem.name}<br></br>
             Item Category : {selectedItem.category}<br></br>
             Item DeliveryMethod : {selectedItem.deliveryMethod}
          </div>
        )
     }else {
       return (
         <div>No Item Selected</div>
       )
     }

   }



  return(
    <div className="listSelection">
      <h3>ListSelection</h3><br></br>
      {getSelection(props)}
    </div>
  )

  
}

export default ListSelection;

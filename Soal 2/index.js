import react from 'react';

function AddItem (ProductID, ProductName, Description, Price, Quantity, StoreID) {
    var merged = false;
    var UserID = $("#hiddenUserID").val(); //ex = 1
    var ProductDate = $("#hiddenDateField").val(); //ex = 2014/05/01
    var newItemObj = {
      "ProductID": ProductID,
      "ProductName": ProductName,
      "Description": Description,
      "Price": Price,
      "Quantity": Quantity,
      "StoreID": StoreID,
      "UserID": UserID,
      "ProductDate": ProductDate
    };
    // loop semua items yang dibeli
    for ( var i = 0; i < ShoppingCartItems.length; i++ ) {
  
      // if product ID, user ID, and date are the same
      if ( ShoppingCartItems[i].ProductID   == newItemObj.ProductID &&
           ShoppingCartItems[i].UserID      == newItemObj.UserID &&
           ShoppingCartItems[i].ProductDate == newItemObj.ProductDate ) {
  
        // add the quantity of the new obj to the old one
        ShoppingCartItems[i].Quantity += newItemObj.Quantity;
  
        // if two items are merged, set a flag
        merged = true;
      }
    };
    // if no merge happened, just add the item normally
    if ( !merged ) {
      ShoppingCartItems.push( newItemObj );
    }
  }

{/* <body>
{
    ProductName : "Excelso" ,
    Quantity : "1"
}
{
    ProductName : "Breadlife" ,
    Quantity : "1"
}
{
    ProductName : "Axis" ,
    Quantity : "1"
}
</body> */}
import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 30,
  });
  const [total,setTotal] = useState(63);
    // Create add and remove functions here that changes the
    // state.

const allBooksAdd = e => {
  console.log('kkk');
    setInv({...inv,books:inv.books+1});
    setTotal(total+1)
};

const allBooksSub = e =>{
  setInv({...inv,books:inv.books-1})
  setTotal(total-1)
}
const addNotebooks = e => {
  console.log('kkk');
    setInv({...inv,notebooks:inv.notebooks+1});
    setTotal(total+1)
};

const subNotebooks = e=>{
  setInv({...inv,notebooks:inv.notebooks-1})
  setTotal(total-1)
}

const addPens = e => {
  console.log('kkk');
    setInv({...inv,pens:inv.pens+1});
    setTotal(total+1)
};

const subPens = e =>{
  setInv({...inv,pens:inv.pens-1})
  setTotal(total-1)
}
const inkPensAdd = e =>{
  setInv({...inv,inkpens:inv.inkpens+1})
  setTotal(total+1)
}
const subinkPens = e =>{
  setInv({...inv,inkpens:inv.inkpens-1})
  setTotal(total-1)
}
  return (
   
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>allBooksAdd()}>+</button>
        <button className="circlularButton" onClick={()=>allBooksSub()}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>addNotebooks()}>+</button>
        <button className="circlularButton" onClick={()=>subNotebooks()}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>addPens()}>+</button>
        <button className="circlularButton" onClick={()=>subPens()}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>inkPensAdd()}>+</button>
        <button className="circlularButton" onClick={()=>subinkPens()}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};

import { useState } from "react";

const Form = ({savetransaction}) =>{

  const [text,setText] = useState("")
  const [amount,setAmount] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault();
    savetransaction(text , amount)
    setText("")
    setAmount("")
  }


    return (
        <>
        <div className="card rounded-0 py-3 px-4">
      <h1 className="text-center text-primary">Enter Your Transaction</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" className="form-control my-2 rounded-0" placeholder="Enter Transaction" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="text" className="form-control rounded-0" placeholder="Enter Amount : eg(For Expanse : -2000,for Income : 2000" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className="btn btn-primary w-100 rounded-0 my-2">Save</button>
      </form>
      
      </div>

        </>
    )
}
export default Form
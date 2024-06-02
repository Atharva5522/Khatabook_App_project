import Navbar from "./Componts/Navbar"
import Form from "./Componts/Form"
import Balancesection from "./Componts/Balancesection"
import Listgroup from "./Componts/Listgroup"
import { useState } from "react"

const App = () =>{

  const [transactions,setTransactions] = useState([
    // {
    //   id : 1,
    //   text : "",
    //   amount : "",
    // },

    // {
    //   id : 2,
    //   text : "Rent",
    //   amount : -10000,
    // },

    // {
    //   id : 3,
    //   text : "Food",
    //   amount : -8000,
    // },

    // {
    //   id : 4,
    //   text : "Coffee",
    //   amount : -2000,
    // },

    // {
    //   id : 1,
    //   text : "Freelance",
    //   amount : 50000,
    // },
  ])

  const savetransaction = (text,amount) =>{
    const newlist = {
      id : crypto.randomUUID(),
      text,
      amount : parseInt(amount)

    }

    setTransactions([newlist, ...transactions])

  }

  const deletetransaction = (id) => {
    
    setTransactions(transactions.filter(item => item.id !== id));
    



  }

  




  return (
    <>

    <Navbar/>

    <div className="container px-3 py-5">
    <Balancesection transactions={transactions}/>
    <Form savetransaction={savetransaction}/>
    
    <Listgroup  transactions={transactions} deletetransaction={deletetransaction}/>

    </div>
      

      

     

      
    
      
    </>

  )
}
export default App
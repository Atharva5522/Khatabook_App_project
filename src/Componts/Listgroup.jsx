import Listitem from "./Listitem"

const Listgroup = ({transactions,deletetransaction}) =>{
    return (
        <>
         <div className="my-3">
        <h3>All Transaction</h3>

        <ul className="my-3 list-group">
        {
            transactions.map((transaction) =>(
                <Listitem key={transaction.key} transaction={transaction} deletetransaction={deletetransaction}/>

            ))
            
        }
          
        </ul>


      </div>

        </>
    )
}
export default Listgroup
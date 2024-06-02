const Listitem = ({transaction,deletetransaction}) =>{
    return (
        <>
        <li className={transaction.amount > 0 ? "list-group-item rounded-0 bg-primary text-light" : "list-group-item rounded-0 bg-danger text-light" }>
        <h2 className="text-light">
        {transaction.text} : {transaction.amount}
        </h2>
          
            <span>
              <button className="btn btn-warning float-end mx-1 rounded-0">Edit</button>
              <button className="btn btn-light float-end mx-1 rounded-0" onClick={()=>deletetransaction(transaction.id)}>Delete</button>
            </span>
          </li>

         

        </>
    )
}
export default Listitem 
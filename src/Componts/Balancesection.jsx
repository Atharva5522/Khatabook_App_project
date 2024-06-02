const Balancesection = ({transactions}) =>{

  const balance = transactions.reduce((p,c)=>{
    return p + c.amount
    
  },0)

  const income = transactions.filter (transaction=> transaction.amount > 0 ).reduce((p,c)=>{
    return p + c.amount
    
  },0)

  const expense = transactions.filter (transaction=> transaction.amount < 0 ).reduce((p,c)=>{
    return p + c.amount
    
  },0)


    return (
        <>
        <div className="my-5 row">
        <div className="col-md-4 col-sm-12">
          <div className="card bg-success p-2 rounded-0">
            <h1 className="text-light">Total Income : {income}</h1>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card bg-danger p-2 rounded-0">
            <h1 className="text-light">Total Expense : {expense}</h1>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card bg-warning p-2 rounded-0">
            <h1 className="text-light">Total Balance : {balance}</h1>
          </div>
        </div>
      </div>

        </>
    )
}
export default Balancesection
import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';

const index = () => {
  const address = '0xa002ab80c6547948c37f41E8862ace5C456A9D2c';
  const [transactions, setTransactions] = useState([]);

  const etherJs = async () => {
    const provider = new ethers.providers.EtherscanProvider();
    var balance = await provider.getBalance(address);
    const showBalance = await ethers.utils.formatEther(balance);

    const checkFunction = await provider.getBlock(15019137);
    const number = checkFunction.transactions;
    const contract = await provider.getTransactionCount(address);
    console.log(contract);
    setTransactions(number);
  }

  useEffect(() => {
    etherJs();
  }, [])
  
  return (
    <div>
    <h1>Today I am learning Ether Js</h1>
    {transactions.map((el,i) => (
      <div key = {i + 1}>
        <h6>{el}</h6>
      </div>
    ))}
    </div>
  )
}

export default index
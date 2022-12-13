const transactions = [];

const Transactions = () => {
  return (
    <>
      {transactions.map((transaction) => {
        <h3 key={transaction.id}>transaction.text</h3>;
      })}
    </>
  );
};

export default Transactions;

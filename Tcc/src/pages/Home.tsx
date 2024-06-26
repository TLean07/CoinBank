import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { db } from '../Ts/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import '../Css/Home.css';
import Footer from '../components/footer';

interface Transaction {
  id: string;
  type: string;
  amount: number;
}

const Home: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'transactions'));
      const transList: Transaction[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        transList.push({
          id: doc.id,
          type: data.type,
          amount: data.amount,
        });
      });
      setTransactions(transList);

      const totalBalance = transList.reduce((acc, trans) => acc + trans.amount, 0);
      setBalance(totalBalance);
    };
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="balance">
            <h2>Saldo:</h2>
            <p>R$ {balance.toFixed(2)}</p>
          </div>
          <div className="transactions">
            <h3>Últimas Transações:</h3>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="transaction">
                <div className={`icon ${transaction.type}`}></div>
                <p>{transaction.type}</p>
                <p>R$ {transaction.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;

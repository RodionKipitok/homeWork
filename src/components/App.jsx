// import css from './App.module.css'
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './Profile/user';
import dataStatistics from './Statistics/data';
import dataFriendsList from './FriendList/friends';
import transactions from './TransactionHistory/transactions';



export const App = () => {
  
    
  return (
    <>
  <Profile {...user}/>
  <Statistics data = {dataStatistics}/>
  <FriendsList friends={dataFriendsList}/>
  <TransactionHistory items={transactions} />
  </>);


   
};




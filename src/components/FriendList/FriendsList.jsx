import React from "react";
import css from './FriendsList.module.css'



function FriendsList(friends) {
	
	 const arrayFriends = friends.friends;
   
	

	return (
	<ul className={css.friendList}>
	  {arrayFriends.map(friend => ( 
	  <li className={css.item} key={friend.id}>
     {friend.isOnline === true ? (<span className={css.statusIsOnline}></span>) : (<span className={css.statusIsNotOnline}></span>)}
     <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
     <p className={css.name}>{friend.name}</p>
     </li> 
 ))}
  
 </ul>
 )
	
};

export default FriendsList;

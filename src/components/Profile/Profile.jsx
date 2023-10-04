import React from "react";
import css from './Profile.module.css';
import PropTypes from 'prop-types';



 function Profile(user) {
 
const {username,tag,location,avatar,stats: {followers,likes,views}} = user;


  return (
    <div className={css.profile}>
      <div className={css.description}>
        <div className={css.image}>
        <img
          width={85} height={85}
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        </div>
        <div className= {css.text}>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        </div>
      </div>

      
         <ul className={css.list}>
          <li className={css.listItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
          </li>
          <div className={css.line}></div>
         <li className={css.listItem}>
         <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
         </li>
         <div className={css.line}></div>
         <li className={css.listItem} >
         <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
         </li>
         </ul>
              
    </div>
  );
};


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number,
  }),
};


export default Profile;


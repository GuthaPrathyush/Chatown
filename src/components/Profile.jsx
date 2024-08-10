import React, {useEffect, useState} from 'react';
import '../stylesheets/profile.css';
import ProfilePic from '/profile.png';
import { useParams } from 'react-router-dom';

const Profile = () => {
  function getUser(userId) {
    const user = {
      id: userId,
      name: 'Gutha Prathyush',
      email: 'prathyushgutha@gmail.com',
      about: "Hello there, I am using Chatown!"
    }
    return user;
  }
  const {userId} = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const u = getUser(userId);
    setUser(u);
  }, []);
  return (  
    <div className='Profile'>
      <header>
        <img className='profile-pic' src={ProfilePic} alt="profile" />
        <p>{user.id}</p>
      </header>
    </div>
  );
}

export default Profile

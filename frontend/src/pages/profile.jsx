import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/profile');
        setUser(res.data);
      } catch (err) {
        alert('Failed to load profile');
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      <button onClick={() => navigate('/change-password')}>
        Change Password
      </button>

      <br /><br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;

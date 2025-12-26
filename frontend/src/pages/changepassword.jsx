import { useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await API.put('/change-password', {
        currentPassword,
        newPassword,
      });

      alert('Password changed successfully');
      navigate('/profile');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to change password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Change Password</h2>

      <input
        type="password"
        placeholder="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
      />

      <button type="submit">Update Password</button>
    </form>
  );
};

export default ChangePassword;

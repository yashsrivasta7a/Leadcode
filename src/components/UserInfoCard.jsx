import React, { useState } from 'react';
import './UserInfoCard.css';

const UserInfoCard = ({ user, onEdit, onLogout }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        leetcodeUsername: user?.leetcodeUsername || '',
        githubUsername: user?.githubUsername || ''
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(editData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditData({
            leetcodeUsername: user?.leetcodeUsername || '',
            githubUsername: user?.githubUsername || ''
        });
        setIsEditing(false);
    };

    const formatJoinDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="user-info-card">
            <div className="profile-section">
                <img 
                    src={user?.profilePicture || '/default-avatar.png'} 
                    alt="Profile"
                    className="profile-picture"
                />
                <div className="user-details">
                    <h3 className="username">{user?.displayName || user?.email}</h3>
                    <p className="email">{user?.email}</p>
                    {user?.joinedDate && (
                        <p className="joined-date">
                            Joined on {formatJoinDate(user.joinedDate)}
                        </p>
                    )}
                </div>
            </div>

            <div className="usernames-section">
                {isEditing ? (
                    <div className="edit-form">
                        <div className="input-group">
                            <label>LeetCode Username:</label>
                            <input
                                type="text"
                                value={editData.leetcodeUsername}
                                onChange={(e) => setEditData({...editData, leetcodeUsername: e.target.value})}
                                placeholder="Enter LeetCode username"
                            />
                        </div>
                        <div className="input-group">
                            <label>GitHub Username:</label>
                            <input
                                type="text"
                                value={editData.githubUsername}
                                onChange={(e) => setEditData({...editData, githubUsername: e.target.value})}
                                placeholder="Enter GitHub username"
                            />
                        </div>
                        <div className="edit-buttons">
                            <button onClick={handleSave} className="save-btn">Save</button>
                            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div className="usernames-display">
                        <div className="username-item">
                            <strong>LeetCode:</strong> {user?.leetcodeUsername || 'Not set'}
                        </div>
                        <div className="username-item">
                            <strong>GitHub:</strong> {user?.githubUsername || 'Not set'}
                        </div>
                    </div>
                )}
            </div>

            <div className="action-buttons">
                {!isEditing && (
                    <button onClick={handleEdit} className="edit-btn">
                        Edit Usernames
                    </button>
                )}
                <button onClick={onLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserInfoCard;
import React, { useState, useEffect } from "react";
import UserInfoCard from "../../components/UserInfoCard";
import LeetCodeStats from "../../components/LeetCodeStats";

export default function Profile() {
  const [user, setUser] = useState({
    displayName: "Demo User",
    email: "demo@example.com",
    leetcodeUsername: "", // Default to the username from your API
    githubUsername: "",
    profilePicture: null,
    joinedDate: new Date()
  });

  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLeetCodeStats = async (username) => {
    if (!username) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch LeetCode stats');
      }
      const data = await response.json();
      setLeetcodeStats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.leetcodeUsername) {
      fetchLeetCodeStats(user.leetcodeUsername);
    }
  }, [user.leetcodeUsername]);

  const handleUserEdit = (editData) => {
    setUser(prev => ({
      ...prev,
      ...editData
    }));
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked");
  };

  return (
    <div className="profile-container">
      <UserInfoCard 
        user={user} 
        onEdit={handleUserEdit}
        onLogout={handleLogout}
      />
      <LeetCodeStats 
        stats={leetcodeStats}
        loading={loading}
        error={error}
        username={user.leetcodeUsername}
      />
    </div>
  );
}
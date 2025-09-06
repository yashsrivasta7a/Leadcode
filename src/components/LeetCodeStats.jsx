import React from 'react';
import './LeetCodeStats.css';

const LeetCodeStats = ({ stats, loading, error, username }) => {
  if (loading) {
    return (
      <div className="leetcode-stats-card">
        <h3>LeetCode Statistics</h3>
        <div className="loading">Loading stats...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="leetcode-stats-card">
        <h3>LeetCode Statistics</h3>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="leetcode-stats-card">
        <h3>LeetCode Statistics</h3>
        <div className="no-data">No LeetCode username provided</div>
      </div>
    );
  }

  const { totalSolved, totalQuestions, acceptanceRate, ranking } = stats;

  return (
    <div className="leetcode-stats-card">
      <div className="stats-header">
        <h3>LeetCode Statistics</h3>
        <p className="username">@{username}</p>
      </div>

      <div className="stats-overview">
        <div className="stat-item total">
          <h4>{totalSolved}</h4>
          <p>Total Solved</p>
        </div>
        <div className="stat-item acceptance">
          <h4>{acceptanceRate}%</h4>
          <p>Acceptance Rate</p>
        </div>
        <div className="stat-item ranking">
          <h4>{ranking ? ranking.toLocaleString() : 'N/A'}</h4>
          <p>Global Ranking</p>
        </div>
      </div>

     

      <div className="additional-stats">
        <div className="stat-row">
          <span>Total Problems Available:</span>
          <span>{totalQuestions?.All || 'N/A'}</span>
        </div>
        <div className="stat-row">
          <span>Completion Rate:</span>
          <span>{totalQuestions?.All ? ((totalSolved / totalQuestions.All) * 100).toFixed(1) : 0}%</span>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;

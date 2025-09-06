import React, { useState } from 'react';
import './rooms.css';
import Navbar from '../../components/navbar';

const Rooms = () => {
    const [showModal, setShowModal] = useState(false);
    const [roomName, setRoomName] = useState('');

    const handleAddRoom = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setRoomName('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle room creation logic here
        console.log('Room created:', roomName);
        handleCloseModal();
    };

    return (
        <div className="rooms-container">
            <div className="navbar-placeholder">
                <Navbar />
            </div>
            <div className="rooms-header">
                <h1>Rooms</h1>
                <button className="add-room-btn" onClick={handleAddRoom}>
                    Add Room
                </button>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Add New Room</h2>
                            <button className="close-btn" onClick={handleCloseModal}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="roomName">Room Name:</label>
                                <input
                                    type="text"
                                    id="roomName"
                                    value={roomName}
                                    onChange={(e) => setRoomName(e.target.value)}
                                    placeholder="Enter room name"
                                    required
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="button" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit">Create Room</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Rooms;
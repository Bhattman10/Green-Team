import React, { useState } from 'react';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [issueDescription, setIssueDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
    };

    const formContainerStyle = {
        backgroundColor: '#FFF7F0',
        borderRadius: '12px',
        padding: '30px',
        maxWidth: '600px',
        width: '100%',
        margin: '40px',
    };

    const inputStyle = {
        width: '100%',
        padding: '15px',
        borderRadius: '8px',
        border: '2px solid #FF5722',
        marginBottom: '30px',
        boxSizing: 'border-box',
        fontSize: '18px',
    };

    const textareaStyle = {
        width: '100%',
        padding: '15px',
        borderRadius: '8px',
        border: '2px solid #FF5722',
        marginBottom: '30px',
        boxSizing: 'border-box',
        fontSize: '18px',
    };

    const submitButtonStyle = {
        padding: '15px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#FF5722',
        color: 'white',
        cursor: 'pointer',
        width: '100%',
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ color: '#FF5722', marginBottom: '20px', fontSize: '48px', textShadow: '3px 3px 0px blue' }}>Contact Us</h1>
            <p style={{ color: '#0000FF', fontSize: '24px', marginBottom: '0px' }}>Having a technical difficulty?</p>
            <p style={{ color: '#0000FF', fontSize: '24px', marginBottom: '20px' }}>Fill out the contact us form</p>
            <div style={formContainerStyle}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        style={inputStyle}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        style={inputStyle}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Issue Description"
                        rows="4"
                        style={textareaStyle}
                        value={issueDescription}
                        onChange={(e) => setIssueDescription(e.target.value)}
                    ></textarea>
                    <button type="submit" style={submitButtonStyle}>Submit</button>
                </form>
            </div>
        </div>
    );
}

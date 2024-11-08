import React, { useState } from 'react';
import EventTypeDropdown from '../components/Events/eventTypeDropdown';
import tagsConfig from '../components/Events/tagsConfig';
import eventsData from '../components/Events/eventsData'; // Import the events data

export default function ClubEvents() {
    const [selectedTag, setSelectedTag] = useState('');

    // Function to handle when a new tag is selected from the dropdown
    const handleTagSelect = (tagName) => {
        setSelectedTag(tagName);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        marginLeft: '0px'
    };

    const headerStyle = {
        color: '#FF5722',
        marginBottom: '20px'
    };

    const eventCardStyle = {
        border: '1px solid #FF5722',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#FFF7F0',
        borderRadius: '8px', // Rounded edges for the cards
        color: '#FF5722',
        width: '250px', // Adjusted width for better layout
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const titleStyle = {
        color: '#FF5722', // Event title in orange
        marginBottom: '5px'
    };

    const descriptionStyle = {
        color: '#0000FF', // Description in blue
        flexGrow: 1 // Allows the description to take up any remaining space
    };

    const dateStyle = {
        color: '#FF5722', // Date in orange
        whiteSpace: 'nowrap' // Ensures the date is in one line
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Discover Events 🐊</h1>
            <EventTypeDropdown tags={tagsConfig} onTagSelect={handleTagSelect} />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {eventsData.filter(event => selectedTag ? event.tag === selectedTag : true).map(event => (
                    <div key={event.id} style={eventCardStyle}>
                        <h3 style={titleStyle}>{event.title}</h3>
                        <p style={descriptionStyle}>{event.description}</p>
                        <p style={dateStyle}>{event.date} at {event.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

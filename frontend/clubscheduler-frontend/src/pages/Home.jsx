import React from 'react';
import UFLogo from '../components/Home/uFLogo.png'; // Make sure the path is correct
import GatorMascot from '../components/Home/gatorMascot.jpeg'; // Make sure the path is correct

function Home() {
    const headerBarStyle = {
        backgroundColor: 'black', // Black bar background
        border: '2px solid #FF5700', // Thin orange border
        padding: '10px 0', // Padding for the bar
        display: 'flex', // Use flexbox for layout
        alignItems: 'center', // Center items vertically
        justifyContent: 'start', // Align items to the start of the bar
    };

    const logoStyle = {
        width: '150px', // Set the logo to a larger size
        margin: '0 20px', // Margin on all sides
    };

    const titleContainerStyle = {
        display: 'flex', // Use flexbox for layout
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center-align the children horizontally
        width: '100%', // Take up all available width
    };

    const titleStyle = {
        fontSize: '4em', // Bigger font size for the title
        color: '#FF5700', // Orange color for the title
        fontWeight: 'bold', // Bold font weight for the title
        textAlign: 'center', // Center-align the title
        margin: '0', // Remove margin to align with the logo
        textShadow: '3px 3px 0px blue', // Blue shadow for a 3D effect
    };

    const mascotStyle = {
        maxWidth: '100%', // Ensures the image is responsive and fits the width of its container
        height: 'auto', // Keeps the aspect ratio of the image
        display: 'block', // Ensures the image is a block to take full width
        marginTop: '20px', // Space above the mascot image
        marginLeft: 'auto', // Together with marginRight centers the image
        marginRight: 'auto',
    };

    return (
        <div>
            <div style={headerBarStyle}>
                <img src={UFLogo} alt="University of Florida Logo" style={logoStyle} />
            </div>
            <div style={titleContainerStyle}>
                <h1 style={titleStyle}>Discover Gator Clubs</h1>
                <img src={GatorMascot} alt="Gator Mascot" style={mascotStyle} />
            </div>
        </div>
    );
}

export default Home;

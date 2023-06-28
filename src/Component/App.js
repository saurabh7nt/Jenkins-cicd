import React from 'react';

export default function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVubnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">The Hilarious Hound!</h5>
                    <p className="card-text"> Ladies and gentlemen, meet the dog that's here to brighten your world and leave you in stitches ;)"</p>
                    <a href="#" className="btn btn-primary">Go anywhere</a>
                </div>
            </div>
        </div>
    );
}

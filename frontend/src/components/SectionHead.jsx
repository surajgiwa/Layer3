import React from 'react';

const SectionHead = ({ icon, title }) => {
    return (
        <div className="section-head-container">
            {icon && <span className="section-head-icon">{icon}</span>}
            <div className="section-head-title">{title}</div>
        </div>
    );
}

export default SectionHead;

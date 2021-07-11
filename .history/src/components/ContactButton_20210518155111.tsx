import React from 'react';
import Button from './Button';

const ContactButton: React.FC = () => {
    return (
        <div>
            <p>Have a project in mind</p>
            <h3>Let me help you</h3>
            <Button btnLink='/Contact'/>
        </div>
    )
}

export default ContactButton;
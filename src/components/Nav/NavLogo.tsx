import './index.less';

import { IUser } from 'global';
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLogoProps {
    publisher: IUser;
}

const NavLogo: React.FC<NavLogoProps> = props => {
    return (
        <Link to={`/publisher/${props.publisher._id}`}>
            <div className="logo">
                <img src={props.publisher.avatar} alt="nav-avatar" />
            </div>
        </Link>
    );
};

export default NavLogo;

import React, { ReactNode } from 'react';
import './rewrites.css'


interface CardProps {
    children: ReactNode
}

export const IlluminatedCard: React.FC<CardProps> = ({
    children
}) => {
    return (
        <div className="card" role="button">
            <span className="glow"></span>
            <div className="inner !gap-y-4">
                {children}
            </div>
        </div>
    );
};

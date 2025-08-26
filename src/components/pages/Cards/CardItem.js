import React from "react";

function CardItem({ title }) {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
}

export default CardItem;

import React from "react";

const Stat = ({item}) => {
    return (
        <>
            <li className="Stat-list">
                <span className="Stat">{item.stat.name}</span>
                <span>{item.base_stat}</span>
            </li>
        </>
    )
}

export default Stat;
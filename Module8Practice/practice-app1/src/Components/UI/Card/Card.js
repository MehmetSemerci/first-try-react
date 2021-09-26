import React from "react";

import styles from './Card.module.css';

const Card = props =>{
    return(
        <div onClick={props.onClick} className={`${styles.Card} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card;
import React from 'react';

import styles from "./Coin.module.css";

const Coin = ({name, image, symbol, price, marketCap, priceChange}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
            <span className={styles.priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)}</span>
        </div>
    );
};

export default Coin;
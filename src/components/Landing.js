import React, {useEffect, useState} from 'react';

//API
import {getCoin} from "../services/api";

//components
import Loader from "./Loader";
import Coin from "./Coin";


const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () =>{
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }
        fetchAPI();
    },[]);

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
          <input type="text" placeholder="search" value={search} onChange={searchHandler}/>
            {
                coins.length ?
                    <div>
                        {searchedCoins.map(coin => <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            marketCap={coin.market_cap}
                            priceChange={coin.price_change_percentage_24h}
                        />)
                        }
                    </div> :
                    <Loader/>
            }
        </>
    );
};

export default Landing;
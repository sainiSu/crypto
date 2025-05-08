import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 30000,
      logo: '/logo/bit.jpg',
      change1h: 0.5,
      change24h: -1.2,
      change7d: 3.1,
      marketCap: 580000000000,
      volume24h: 25000000000,
      supply: 19000000,
      maxSupply: 21000000,
      chart: '/logo/chart.jpg',
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2000,
      logo: '/logo/eth.jpg',
      change1h: -0.3,
      change24h: 1.5,
      change7d: 4.7,
      marketCap: 250000000000,
      volume24h: 15000000000,
      supply: 120000000,
      maxSupply: null,
      chart: '/logo/chart.jpg',
    },
    {
        id: 3,
        name: 'Cardano',
        symbol: 'ada',
        price: 2000,
        logo: '/logo/ada.jpg',
        change1h: -0.3,
        change24h: 1.5,
        change7d: 4.7,
        marketCap: 250000000000,
        volume24h: 15000000000,
        supply: 120000000,
        chart: '/logo/chart.jpg',
    },
    {
        id: 4,
        name: 'Ripple',
        symbol: 'XRP',
        price: 0.5,
        logo: '/logo/bnb.jpg',
        change1h: 0.2,
        change24h: -0.5,
        change7d: 2.0,
        marketCap: 25000000000,
        volume24h: 1000000000,
        supply: 50000000000,
        maxSupply: null,
        chart: '/logo/chart.jpg',
    },
    {
      id: 5,
      name: 'Litecoin',
      symbol: 'LTC',
      price: 150,
      logo: '/logo/usdt.jpg',
      change1h: -0.1,
      change24h: 0.8,
      change7d: 1.5,
      marketCap: 10000000000,
      volume24h: 500000000,
      supply: 70000000,
      maxSupply: null,
      chart: '/logo/chart.jpg',
    },
    {
        id: 6,
        name: 'Polkadot',
        symbol: 'DOT',
        price: 10,
        logo: '/logo/usdt.jpg',
        change1h: -0.2,
        change24h: 0.5,
        change7d: 2.5,
        marketCap: 5000000000,
        volume24h: 200000000,
        supply: 1000000000,
        maxSupply: null,
        chart: '/logo/chart.jpg',
    }
    ]  
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePricesRandomly: (state) => {
      state.assets.forEach(asset => {
        const factor = (Math.random() - 0.5) * 2;
        const percent = 1 + factor / 50;
        asset.price = parseFloat((asset.price * percent).toFixed(2));
        asset.change1h = parseFloat(((Math.random() - 0.5) * 2).toFixed(2));
        asset.change24h = parseFloat(((Math.random() - 0.5) * 5).toFixed(2));
        asset.volume24h = parseFloat((asset.volume24h * percent).toFixed(2));
      });
    }
  }
});

export const { updatePricesRandomly } = cryptoSlice.actions;
export default cryptoSlice.reducer;

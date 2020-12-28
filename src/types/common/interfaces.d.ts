// types/common/interfaces.d.ts

interface NomicCrypto {
  id: string;
  currency: string;
  symbol: string;
  name: string;
  logo_url: string;
  rank: string;
  status: 'active' | 'inactive' | 'dead';
  price: string;
  circulating_supply: string;
  rank_delta: string;
  max_supply: string;
  market_cap: string;
  '7d': ChangeOverview;
}

interface ChangeOverview {
  volume: string; // '8784768325389.30';
  price_change: string; //'11620.30409140';
  price_change_pct: string; //'1.9806';
  volume_change: string; // '4756827766481.19';
  volume_change_pct: string; //'1.1810';
  market_cap_change: string; // '218496422236.14';
  market_cap_change_pct: string; // '2.0537';
}

interface NomicCryptoDetail {
  id: string;
  name: string;
  description: string;
  website_url: string;
  logo_url: string;
}

interface CoingeckoMarketDetail {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

type CryptoFullDetail = NomicCryptoDetail & CoingeckoMarketDetail;

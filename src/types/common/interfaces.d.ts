// types/common/interfaces.d.ts

interface NomicCrypto {
  id: string;
  currency: string;
  symbol: string;
  name: string;
  logo_url: string;
  rank: number;
  status: 'active' | 'inactive' | 'dead';
  price: string;
  price_timestamp: string; // '2020-12-20T14:43:00Z';
  circulating_supply: string;
  max_supply: string;
  market_cap: string;
}

import React, { useState, useEffect } from 'react';

interface Props {
  cryptoId: string;
}

const CryptoDetail: React.FC<Props> = ({ cryptoId }) => {
  const [data, setData] = useState<CryptoFullDetail>();

  const loadCrypto = async () => {
    const res = await fetch(`http://localhost:3000/api/cryptos/${cryptoId}`);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    loadCrypto();
  }, [cryptoId]);

  // TODO: make a skeleton
  if (!data) return <p>Loading ... </p>;

  return (
    <>
      <h4 className="text-left text-xl font-medium mb-4">
        What is <span className="font-bold">{data.name}</span>?
        <a
          className="ml-2 font-semibold text-indigo-700 border-b-2 border-transparent hover:border-indigo-700"
          href={data.website_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Official website
        </a>
      </h4>
      <div className="text-left overflow-visible overflow-y-scroll space-y-6 font-normal text-base">
        {data.description ? (
          data.description.split('\n\n').map((text, i) => <p key={i}>{text.trim()}</p>)
        ) : (
          <p>
            Unable to provide a description for this coin. <span className="text-2xl">😔</span>
          </p>
        )}
      </div>
    </>
  );
};

export default CryptoDetail;

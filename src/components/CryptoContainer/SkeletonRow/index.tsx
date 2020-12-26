import React from 'react';

const SkeletonRow = (): JSX.Element => {
  // const onClick = ({ target }: React.MouseEvent<HTMLElement>) => {
  // };

  return (
    <tr className="transform-gpu bg-white">
      <td className="crypto-rank-col">
        <div className="bg-gray-300 mx-auto h-4 animate-pulse rounded"></div>
      </td>
      <td className="crypto-name-col">
        <div className="bg-gray-300 h-12 w-12 sm:h-20 sm:w-20 animate-pulse rounded-full"></div>
        <div className="ml-4 space-y-2">
          <div className="bg-gray-300 h-4 w-16 animate-pulse rounded"></div>
          <div className="bg-gray-300 h-4 w-10 animate-pulse rounded"></div>
        </div>
      </td>
      <td className="crypto-price-col">
        <div className="bg-gray-300 h-4 w-24 ml-auto sm:m-0 animate-pulse rounded"></div>
      </td>
      <td className="crypto-price-change-col space-y-2">
        <div className="bg-gray-300 h-4 w-20 animate-pulse rounded"></div>
        <div className="bg-gray-300 h-4 w-16 animate-pulse rounded"></div>
      </td>
    </tr>
  );
};

export default React.memo(SkeletonRow);

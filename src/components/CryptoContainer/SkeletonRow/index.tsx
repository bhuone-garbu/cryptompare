import React from 'react';

const SkeletonRow = (): JSX.Element => {
  // const onClick = ({ target }: React.MouseEvent<HTMLElement>) => {
  // };

  return (
    <tr className="transform-gpu">
      <td className="px-4 py-3 text-sm hidden sm:table-cell text-gray-500 text-center">
        <div className="bg-gray-300 mx-auto h-4 w-5 animate-pulse rounded"></div>
      </td>
      <td className="px-4 py-3 flex items-center justify-start">
        <div className="bg-gray-300 h-12 w-12 sm:h-20 sm:w-20 animate-pulse rounded-full"></div>
        <div className="ml-4 space-y-2">
          <div className="bg-gray-300 h-4 w-16 animate-pulse rounded"></div>
          <div className="bg-gray-300 h-4 w-10 animate-pulse rounded"></div>
        </div>
      </td>
      <td className="px-4 py-4 text-right sm:text-left text-md text-gray-900">
        <div className="bg-gray-300 h-4 w-24 animate-pulse rounded"></div>
      </td>
      <td className="hidden sm:table-cell px-4 py-4 text-md text-gray-900 space-y-2">
        <div className="bg-gray-300 h-4 w-20 animate-pulse rounded"></div>
        <div className="bg-gray-300 h-4 w-16 animate-pulse rounded"></div>
      </td>
    </tr>
  );
};

export default React.memo(SkeletonRow);
const CryptoHeading = (): JSX.Element => (
  <thead className="bg-gray-50 hidden sm:table-header-group">
    <tr>
      <th
        scope="col"
        className="hidden sm:table-cell px-2 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
      >
        #&nbsp;Rank
      </th>
      <th
        scope="col"
        className="pl-8 pr-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
      >
        Name
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
      >
        Price
      </th>
      <th
        scope="col"
        className="hidden sm:table-cell px-6 py-3 text-left text-xs font-semibold text-gray-500 tracking-wider"
      >
        <span className="uppercase">price change</span>&nbsp;(30d)
      </th>
    </tr>
  </thead>
);

export default CryptoHeading;

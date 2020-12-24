const CryptoHeading = (): JSX.Element => (
  <thead className="bg-gray-50 hidden sm:table-header-group">
    <tr>
      <th
        scope="col"
        className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Rank
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Name
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Price
      </th>
    </tr>
  </thead>
);

export default CryptoHeading;

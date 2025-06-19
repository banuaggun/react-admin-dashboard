import React from 'react'
import CustomerTable from '../customer-ui/customer-table/CustomerTable'
import useFetchData from '../../../functions/hooks/FetchData'

const CustomerLayout = () => {
    const {data: items, loading, error} = useFetchData("/api/info.json");

    if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;
  return (
    <div>
        <CustomerTable items={items.customers} />
    </div>
  )
}

export default CustomerLayout
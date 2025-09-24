import React from "react";

const CustomerClusters = () => {
    const tableColumns = [
        { label: "Segment", key: "segment" },
        { label: "Customer", key: "customer" },
        { label: "Revenue", key: "revenue" },
        { label: "Avg. Order Value", key: "avgOrderValue" },
        { label: "Total Order", key: "totalOrder" },
    ];

    const tableData = [
        {
            segment: "Frequent Buyer",
            customer: "1,500",
            revenue: "৳16,709,000",
            avgOrderValue: "৳709,000",
            totalOrder: "2,000",
        },
        {
            segment: "Bulk Borderers",
            customer: "800",
            revenue: "৳6,345,000",
            avgOrderValue: "৳345,000",
            totalOrder: "700",
        },
        {
            segment: "One-time Shoppers",
            customer: "300",
            revenue: "৳9,597,320",
            avgOrderValue: "৳90,597",
            totalOrder: "300",
        },
        {
            segment: "High Value",
            customer: "400",
            revenue: "৳6,000,597",
            avgOrderValue: "৳900,597",
            totalOrder: "400",
        },
        {
            segment: "Low Value",
            customer: "600",
            revenue: "৳6,000,597",
            avgOrderValue: "৳800,597",
            totalOrder: "600",
        },
        {
            segment: "Loyal Customers",
            customer: "200",
            revenue: "৳6,000,597",
            avgOrderValue: "৳600,597",
            totalOrder: "200",
        },
        {
            segment: "Inactive Customers",
            customer: "200",
            revenue: "৳0",
            avgOrderValue: "৳0",
            totalOrder: "0",
        },
        {
            segment: "New Customers",
            customer: "100",
            revenue: "৳6,000,597",
            avgOrderValue: "৳90,597",
            totalOrder: "10",
        },
        {
            segment: "Potential Churn",
            customer: "300",
            revenue: "৳6,000,597",
            avgOrderValue: "৳30,597",
            totalOrder: "150",
        },
        {
            segment: "Gift Buyers",
            customer: "200",
            revenue: "৳4,500,000",
            avgOrderValue: "৳40,500",
            totalOrder: "200",
        },
    ];

    return (
        <div>
            <h1 className="montserrat-fontsfamily text-[#1D3557] text-[22px] font-[700] mb-2">
                Customer Clusters
            </h1>
            <p className="text-[#757575] text-[14px] font-[500] montserrat-fontsfamily mb-6">
                AI Assistant has grouped your customers into distinct clusters based on
                their behaviors. Use these insights to tailor your marketing,
                personalize customer experiences, and drive growth.
            </p>
            <h1 className="montserrat-fontsfamily text-[#1D3557] text-[14px] font-[600] mb-4">
                Total customers (3,000)
            </h1>
            <div className="montserrat-fontsfamily bg-white shadow-md rounded-[12px] border border-[#E5E8EB] overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white text-left">
                            {tableColumns.map((col) => (
                                <th
                                    key={col.key}
                                    className="px-4 py-3 border-b border-[#E5E8EB] text-[#121417] text-[12px] font-[600]"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                {tableColumns.map((col) => (
                                    <td
                                        key={col.key}
                                        className={`px-4 py-3 border-b border-[#E5E8EB] text-[12px] font-[500] ${col.key === "segment"
                                            ? "text-[#121417]"
                                            : "text-[#757575]"
                                            }`}
                                    >
                                        {row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerClusters;

import edit from '../../../src/assets/edit-2.svg';

// Status filters
export const orderStatuses = [
  "All",
  "New",
  "Active",
  "Loyal",
  "Select Area"
];

// Table columns
export const tableColumns = [
  { label: "ID Number", key: "orderId" },
  { label: "Customer", key: "customer" },
  { label: "Division", key: "division" },
  { label: "Contact Number", key: "contact" },
  { label: "Address", key: "address" },
  { label: "Order Frequency", key: "orderFrequency" },
  { label: "Lifetime Value", key: "lifetimeValue" },
  { label: "Avg. Value", key: "avgValue" },
  { label: "Avg. Satisfaction", key: "avgSatisfaction" },
  { label: "Product Return", key: "productReturn" },
  { label: "Update", key: "update" },
];

// Sample divisions
const divisions = [
  "Dhaka", "Sylhet", "Chattogram", "Barisal",
  "Mymensingh", "Rajshahi", "Rangpur", "Khulna"
];

// Sample customer names
const customerNames = [
  "Abu Fattah Shakib", "Labonno", "Marjia Khondokar", "Tanvir Hasan",
  "Mehedi Rahman", "Shaila Parveen", "Rafiul Islam", "Priya Saha",
  "Imran Hossain", "Mitu Chowdhury", "Fahim Ahmed", "Sharmin Akter",
  "Abdullah Al Noman", "Sadia Yasmin", "Omar Faruk", "Tanjila Khatun",
  "Zahid Hasan", "Farhana Rahman", "Sakib Al Mahmud", "Jannat Ara"
];

// Sample addresses
const addresses = [
  "House 12, Road 5, Dhanmondi, Dhaka",
  "House 45, Green Road, Sylhet",
  "House 22, Chawk Bazaar, Chattogram",
  "House 78, College Road, Barisal",
  "House 33, Mymensingh Sadar",
  "House 90, University Road, Rajshahi",
  "House 15, Rangpur City",
  "House 5, Khulna Town",
];

// Generate table data
export const orderData = Array.from({ length: 250 }).map((_, i) => {
  const lifetime = Math.floor(Math.random() * 800000) + 5000;
  const avg = Math.floor(lifetime / (Math.floor(Math.random() * 50) + 1));
  const satisfaction = (Math.random() * 5).toFixed(1);
  const productReturn = `${Math.floor(Math.random() * 10)}%`;

  return {
    orderId: `#ER${654 + i}`,
    customer: customerNames[i % customerNames.length],
    division: divisions[i % divisions.length],
    contact: `01${Math.floor(100000000 + Math.random() * 900000000)}`,
    address: addresses[i % addresses.length],
    orderFrequency: Math.floor(Math.random() * 50) + 1,
    lifetimeValue: `৳${lifetime.toLocaleString()}`,
    avgValue: `৳${avg.toLocaleString()}`,
    avgSatisfaction: satisfaction,
    productReturn: productReturn,
    update: edit,
    status: orderStatuses[i % orderStatuses.length],
  };
});

import edit from '../../../src/assets/edit-2.svg';

// Status filters
export const orderStatuses = [
  "All",
  "New",
  "Active",
  "Loyal",
  "Select Area" // This will trigger the division dropdown
];

// Table columns
export const tableColumns = [
  { label: "ID No.", key: "orderId" },
  { label: "Customer", key: "customer" },
  { label: "Division", key: "division" },
  { label: "Contact No.", key: "contact" },
  { label: "OF.", key: "orderFrequency" },
  { label: "Lifetime Value", key: "lifetimeValue" },
  { label: "Avg. Value", key: "avgValue" },
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

// Plain table data
export const orderData = Array.from({ length: 50 }).map((_, i) => ({
  orderId: `#ER${654 + i}`,
  customer: customerNames[i % customerNames.length],
  division: divisions[i % divisions.length],
  contact: `0170${Math.floor(10000000 + Math.random() * 90000000)}`, // Random phone
  orderFrequency: Math.floor(Math.random() * 50) + 1, // OF.
  lifetimeValue: `৳${(Math.floor(Math.random() * 500000) + 1000).toLocaleString()}`,
  avgValue: `৳${(Math.floor(Math.random() * 50000) + 1000).toLocaleString()}`,
  update: edit, 
}));

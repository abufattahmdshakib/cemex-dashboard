import note from '../../../src/assets/note.svg';

export const orderStatuses = [
    "All",
    "Pending",
    "Processing",
    "Delivered",
    "Cancel",
    "Select Division"
];

export const tableColumns = [
    { label: "ID No.", key: "orderId" },
    { label: "Customer", key: "customer" },
    { label: "Division", key: "division" },
    { label: "Order Date", key: "orderDate" },
    { label: "Quantity", key: "quantity" },
    { label: "Amount", key: "amount" },
    { label: "Status", key: "status" },
    { label: "Report", key: "report" },
];

const divisions = [
    "Dhaka", "Sylhet", "Chattogram", "Barisal", 
    "Mymensingh", "Rajshahi", "Rangpur", "Khulna"
];

const statuses = ["Pending", "Processing", "Delivered", "Cancel"];

const customerNames = [
    "Abu Fattah Shakib", "Labonno", "Marjia Khondokar", "Tanvir Hasan",
    "Mehedi Rahman", "Shaila Parveen", "Rafiul Islam", "Priya Saha",
    "Imran Hossain", "Mitu Chowdhury", "Fahim Ahmed", "Sharmin Akter",
    "Abdullah Al Noman", "Sadia Yasmin", "Omar Faruk", "Tanjila Khatun",
    "Zahid Hasan", "Farhana Rahman", "Sakib Al Mahmud", "Jannat Ara"
];

// Plain data only — use note icon for report
export const orderData = Array.from({ length: 250 }).map((_, i) => ({
    orderId: `#ER${654 + i}`,
    customer: customerNames[i % customerNames.length], 
    division: divisions[i % divisions.length],
    orderDate: `${(i % 30) + 1} NOV, 24`,
    quantity: Math.floor(Math.random() * 5000) + 1,
    amount: Math.floor(Math.random() * 500000) + 1000,
    status: statuses[i % statuses.length],
    report: note, 
}));

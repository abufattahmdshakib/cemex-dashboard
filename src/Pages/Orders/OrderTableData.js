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
    { label: "Order Time", key: "orderTime" },
    { label: "Quantity", key: "quantity" },
    { label: "Amount", key: "amount" },
    { label: "Status", key: "status" },
    { label: "Delivery Address", key: "deliveryAddress" },
    { label: "Processing Time", key: "processingTime" },
    { label: "Delivery Time", key: "deliveryTime" },
    { label: "Avg. Satisfaction", key: "avgSatisfaction" },
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

const addresses = [
    "House 45, Road 12, Dhaka",
    "House 23, Sylhet",
    "123 Chattogram St.",
    "Barisal House 89",
    "Mymensingh Area 7",
    "Rajshahi Lane 15",
    "Rangpur Zone 9",
    "Khulna Street 3"
];

const randomSatisfaction = () => (Math.random() * (5 - 3) + 3).toFixed(1) + "/5";
const randomProductReturn = () => Math.floor(Math.random() * 5) + "%";
const randomTime = () => `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2,'0')} ${Math.random() > 0.5 ? "AM" : "PM"}`;

export const orderData = Array.from({ length: 250 }).map((_, i) => ({
    orderId: `#ER${654 + i}`,
    customer: customerNames[i % customerNames.length], 
    division: divisions[i % divisions.length],
    orderDate: `${(i % 30) + 1} NOV, 24`,
    orderTime: randomTime(),
    quantity: Math.floor(Math.random() * 5000) + 1,
    amount: Math.floor(Math.random() * 500000) + 1000,
    status: statuses[i % statuses.length],
    deliveryAddress: addresses[i % addresses.length],
    processingTime: `${Math.floor(Math.random() * 48) + 1} hrs`,
    deliveryTime: `${Math.floor(Math.random() * 48) + 1} hrs`,
    avgSatisfaction: randomSatisfaction(),
    productReturn: randomProductReturn(),
    report: note,
}));

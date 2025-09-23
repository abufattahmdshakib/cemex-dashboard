import edit from '../../../src/assets/edit-2.svg';

// Table columns
export const tableColumns = [
    { label: "ID No.", key: "id" },
    { label: "Employee Name", key: "name" },
    { label: "Designation", key: "designation" },
    { label: "Email Address", key: "email" },
    { label: "Admin Role", key: "role" },
    { label: "Active Status", key: "status" },
    { label: "Update", key: "update" },
];

// Sample main designations for each employee
const mainDesignations = [
    "Company",
    "CEO",
    "Developer",
    "Designer",
    "Project Manager",
    "HR",
    "Support",
    "Manager",
    "Team Lead",
    "Coordinator",
    "UI/UX Designer",
    "Backend Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Operations Manager",
    "Customer Support",
    "Intern",
    "Consultant"
];


// Sample names
const sampleNames = [
    "Cemex", "Mr. Rahman", "Talan Dias", "Sara Khan", "Ali Reza", "Nabila Hossain",
    "David Smith", "John Doe", "Linda Taylor", "Michael Brown", "Emma Wilson",
    "Robert Johnson", "Fatima Noor", "Kamal Hossain", "Rashid Ali", "Nadia Rahman"
];

// Roles can vary
const roles = [
    "Super Admin", "Admin", "Manager", "HR", "Team Lead", "Coordinator",
    "Support Admin", "Developer", "UI/UX Designer", "Backend Developer", "Operations Manager"
];

// Statuses can vary
const statuses = [
    "Active 2 years ago",
    "Active",
    "Active 5 minutes ago",
    "Active 15 minutes ago",
    "Active 20 minutes ago",
    "Active 30 minutes ago",
    "Active 1 hour ago",
    "Active 2 hours ago",
    "Active 3 hours ago",
    "Active 1 day ago",
    "Active 2 years ago",
    "Active 3 years ago"
];

// Exporting 250 rows
export const orderData = Array.from({ length: 250 }).map((_, i) => ({
    id: `#ER${1000 + i}`,
    name: sampleNames[i % sampleNames.length],
    designation: mainDesignations[i % mainDesignations.length], // main designation only
    email: `${sampleNames[i % sampleNames.length].toLowerCase().replace(/ /g, "")}@cemex.com`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    update: edit,
}));

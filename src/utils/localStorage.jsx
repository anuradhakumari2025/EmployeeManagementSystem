const employees = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete project report",
        taskDescription: "Prepare the quarterly project status report.",
        taskDate: "2024-12-01",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2024-12-02",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client call",
        taskDescription: "Discuss project requirements with the client.",
        taskDate: "2024-12-03",
        category: "Communication",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 0 },
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update website content",
        taskDescription: "Revise homepage text and images.",
        taskDate: "2024-12-01",
        category: "Web",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Check analytics",
        taskDescription: "Analyze the website traffic and user behavior.",
        taskDate: "2024-12-02",
        category: "Analysis",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Write blog post",
        taskDescription: "Draft a blog post for the company's blog.",
        taskDate: "2024-12-03",
        category: "Content",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 3,
    name: "Anjali Verma",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory check",
        taskDescription: "Check the stock of office supplies.",
        taskDate: "2024-12-01",
        category: "Logistics",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Organize workshop",
        taskDescription: "Set up a workshop for the new employees.",
        taskDate: "2024-12-02",
        category: "HR",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: { active: 1, newTask: 2, completed: 1, failed: 0 },
  },
  {
    id: 4,
    name: "Amit Patel",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Database optimization",
        taskDescription:
          "Optimize the company database for better performance.",
        taskDate: "2024-12-01",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Code review",
        taskDescription: "Review the code submitted by the development team.",
        taskDate: "2024-12-02",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Deploy update",
        taskDescription: "Deploy the latest software update.",
        taskDate: "2024-12-03",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 1 },
  },
  {
    id: 5,
    name: "Sneha Gupta",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Plan marketing campaign",
        taskDescription: "Develop a strategy for the new product launch.",
        taskDate: "2024-12-01",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Social media posts",
        taskDescription: "Create posts for social media channels.",
        taskDate: "2024-12-02",
        category: "Content",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Photo shoot",
        taskDescription: "Organize a product photo shoot.",
        taskDate: "2024-12-03",
        category: "Media",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 1 },
  },
];

const admin = [
  {
    id: 1,
    name:"Anuradha",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employeeData, adminData };
};

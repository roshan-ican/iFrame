export const businessTypeDropdown = [
  {
    label: "Select Business Type",
    value: "",
  },
  {
    label: "Private",
    value: "private",
  },
  {
    label: "Public",
    value: "public",
  },
];

export const referenceTypeDropdown = [
  {
    label: "Select Reference Type",
    value: "",
  },
  {
    label: "Reference 1",
    value: "reference1",
  },
  {
    label: "Reference 2",
    value: "reference2",
  },
];

export const onboardedByDropdown = [
  {
    label: "Select Onboarded By",
    value: "",
  },
  {
    label: "Sales 1",
    value: "sales1",
  },
  {
    label: "Sales 2",
    value: "sales2",
  },
];

export const RoleData = [
  {
    name: "Dashboard",
    value: "dashboard",
    main: true,
    id: 0,
    data: [
      { name: "Transaction Count", value: "transactionCount", id: 0 },
      { name: "Transaction Volume", value: "transactionVolume", id: 0 },
      { name: "Total Settlement", value: "totalSettlement", id: 0 },
      { name: "Approval", value: "approval", id: 0 },
    ],
  },
  {
    name: "API Doc",
    value: "apidoc",
    main: true,
    id: 1,
    data: [{ name: "View", value: "viewDoc", id: 1 }],
  },
  {
    name: "Reseller",
    value: "reseller",
    main: true,
    id: 2,
    data: [
      { name: "Add Reseller", value: "addReseller", id: 2 },
      { name: "View More", value: "viewMore", id: 2 },
    ],
  },
  {
    name: "Clients",
    value: "clients",
    main: true,
    id: 3,
    data: [
      { name: "All", value: "allClients", id: 3 },
      { name: "Pay in", value: "clientPayin", id: 3 },
      { name: "Pay out", value: "clientPayout", id: 3 },
      { name: "View More", value: "clientViewMore", id: 3 },
      { name: "Deactivate Account", value: "clientDeactivateAccount", id: 3 },
      { name: "Add Client", value: "clientAddClient", id: 3 },
    ],
  },
  {
    name: "Transactions",
    value: "transactions",
    main: true,
    id: 4,
    data: [
      { name: "All", value: "allTransactions", id: 4 },
      { name: "Pay in", value: "transactionPayin", id: 4 },
      { name: "Pay out", value: "transactionPayout", id: 4 },
      { name: "Prefund", value: "transactionPrefund", id: 4 },
      { name: "Download Report", value: "transactionDownloadReport", id: 4 },
    ],
  },
  {
    name: "SettleMent",
    value: "settlement",
    main: true,
    id: 5,
    data: [
      { name: "Download Report", value: "settlementDownloadReport", id: 5 },
    ],
  },
  {
    name: "Commission",
    value: "commission",
    main: true,
    id: 6,
    data: [
      { name: "All", value: "allCommissions", id: 6 },
      { name: "Pay in", value: "commissionPayin", id: 6 },
      { name: "Pay out", value: "commissionPayout", id: 6 },
    ],
  },
  {
    name: "Role Management",
    value: "roleManagement",
    main: true,
    id: 7,
    data: [
      { name: "Add Role", value: "addRole", id: 7 },
      { name: "View More", value: "roleViewMore", id: 7 },
      { name: "Edit", value: "roleEdit", id: 7 },
      { name: "Deactivate Account", value: "roleDeactivateAccount", id: 7 },
    ],
  },
 
];

export const Role_Array = ["ADMIN", "ADMIN_USER", "SUPPORT", "FINANCE"];

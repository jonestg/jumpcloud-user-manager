export default {
  id: { name: 'ID', static: true, type: 'number', default: null },
  firstName: { name: 'First Name', type: 'string', default: null},
  lastName: { name: 'Last Name', type: 'string', default: null},
  email: { name: 'Email Address', type: 'string', default: null},
  role: { name: 'Role', type: 'enum', default: 'None', values: ['None', 'User', 'Admin']},
  group: { name: 'User Group', type: 'enum', default: 'None', values: ['None', 'IT', 'Accounting']},
}
// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
updateEmployeeWithKeyAndValue(employee, "key1", "value1");


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "key1", "value1");


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee};
    delete newEmployee[key];
    return newEmployee;
}
deleteFromEmployeeByKey(employee, key);

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, key);
// Write your solution in this file!
const employee = {
  name: "Kim",
  streetAddress: "240 M St SW",
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
  const newObj = { ...employeeObj };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  employeeObj[key] = value;
  return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, key){
    const newObj = {...employeeObj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key){
    delete employeeObj[key];
    return employeeObj;
}
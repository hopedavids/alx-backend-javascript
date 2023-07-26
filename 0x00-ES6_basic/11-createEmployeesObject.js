#!/usr/bin/node

"use strict";

function createEmployeesObject(departmentName, employees) {
  const employeesObject = {};
  employeesObject[departmentName] = employees;
  return employeesObject;
}

export default createEmployeesObject;

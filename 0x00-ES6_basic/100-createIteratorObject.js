#!/usr/bin/node

"use strict";

export default function createIteratorObject(report) {
  let departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[currentDepartmentIndex];
      const employees = report.allEmployees[department];

      if (currentEmployeeIndex >= employees.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const employee = employees[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: employee, done: false };
    },
  };

  return iterator;
}


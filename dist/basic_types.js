"use strict";
// numbers
let name_var = 321;
name_var = 123;
name_var = 1.2;
name_var = 0xFA;
console.log(name_var);
// booleano
let active = true;
// string
let firstName = 'Daniel';
let lastName = 'Rodrigues';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
// Enums
var ROLES;
(function (ROLES) {
    ROLES["MANAGER"] = "manager";
    ROLES["ADMIN"] = "Admin";
    ROLES["CEO"] = "CEO";
    ROLES["CTO"] = "CTO";
})(ROLES || (ROLES = {}));
;
function setRole(role) {
}
setRole(ROLES.CEO);
console.log(ROLES.CEO);
// arrays
let names = ['Carlos', 'Eti', 'EspecializaTi', true, 1];
let names1 = ['Carlos', 'Eti'];
let names2 = ['Carlos', 'Eti'];
let names3 = ['Carlos', 'Eti', true, 0xFA];
// tuples
let tuple = ['Carlos', 10, true];
tuple[0] = 'EspecializaTi';
tuple[1] = 20;
tuple[2] = false;

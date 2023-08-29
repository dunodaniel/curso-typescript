// numbers
let name_var: number = 321;
name_var = 123;
name_var = 1.2;
name_var = 0xFA;
console.log(name_var);

// booleano
let active: boolean = true

// string
let firstName = 'Daniel'
let lastName = 'Rodrigues'
let fullName: string = `${firstName} ${lastName}`
console.log(fullName);

// Enums
enum ROLES {
  MANAGER = 'manager',
  ADMIN = 'Admin',
  CEO = 'CEO',
  CTO = 'CTO'
};
function setRole(role: ROLES): void {

}
setRole(ROLES.CEO);
console.log(ROLES.CEO);

// arrays
let names = ['Carlos', 'Eti', 'EspecializaTi', true, 1];
let names1: string[] = ['Carlos', 'Eti'];
let names2: Array<string> = ['Carlos', 'Eti'];
let names3: Array<any> = ['Carlos', 'Eti', true, 0xFA];

// tuples
let tuple: [string, number, boolean] = ['Carlos', 10, true];
tuple[0] = 'EspecializaTi';
tuple[1] = 20;
tuple[2] = false;
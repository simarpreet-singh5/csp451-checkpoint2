// db: in-memory stub for Week 2
export const users = [{id:1, name:"A", role:"admin"}, {id:2, name:"B", role:"staff"}];
export function listRoles(){ return Array.from(new Set(users.map(u=>u.role))); }
// TODO: replace with SQLite/ORM in Week 3

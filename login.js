// auth: basic helper
export function isStrongPassword(p){
  return typeof p === 'string' && p.length >= 8;
}
// TODO: add client-side validation (length, symbols, number)

// api: minimal endpoints
export function getHealth(){ return {status:"ok", ts:Date.now()}; }
export function getUsers(){ return []; } // TODO: connect to db in Week 3

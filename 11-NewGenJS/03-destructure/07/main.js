let guest = 'Jane';
let admin = 'Pete';

let manes = [guest, admin];
[manes[0], manes[1]] = [manes[1], manes[0]]
console.log(manes);

// this is long and repetitve
// Refactor the logic to remove the repeated setTimeout statements.
// We should instead be left with much less code (about 8 to 10 lines of code).

process.stdout.write('hello from spinner1.js... \rheyyy\n');
// Output: heyyy from spinner1.js...

const spin = ['|', '/', '-', '\\']; // a full rotation
let delay = 100; // starts at 1 sec

for (let i = 0; i < 2; i++) {
  for (const char of spin) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `); // not sure
    }, delay);
    delay += 200; // every 2 sec change
  }
}


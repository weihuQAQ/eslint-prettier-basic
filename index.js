import Koa from 'koa';

import { getData, setDate } from './src/a';
import { parseXXX, rules } from './src/b';
import Func from './src/c';

const app = new Koa();

// never used
const a = 1;

// Globals
const s = new AbortController();

if (a == 42) {
  setDate();
  getData();
  parseXXX();
  Func();
  console.log(rules);
}

alert('here!');

confirm('Are you sure?');

prompt("What's your name?", 'John Doe');

if (a == 1) {
  //asda
}

const ss = {
  a: 1,
  c: 2,
  b: 3,
  f: 5,
  e: 's'
};

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);

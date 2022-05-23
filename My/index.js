import {MyData}  from "./func.js";
import { Age } from "./func.js";

const age = Age(MyData.thisDate, MyData.birthday);

console.log(`${MyData.name} ${age}`);
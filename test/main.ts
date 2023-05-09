import { Introspect } from "src/operation";

const op = Introspect.get("black");

console.log(op.call([10, 10]));

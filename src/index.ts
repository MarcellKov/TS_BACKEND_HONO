import { Hono } from "hono";
import {Ember,Connect,REPO} from "./db" 

const port = 3000;

const app = new Hono();

app.get("/",async(c)=>{return c.json(await new REPO().readall())});
console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch
};

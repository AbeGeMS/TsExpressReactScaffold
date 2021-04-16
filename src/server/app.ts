import { Application, Router } from "express";
import { Server } from "http";
import express from "express";
import * as path from "path";
import sampleRouter from "./router/sampleRouter";

export class Demo {
    public static start() {
      let app: Application = express();
      app.use(express.static(path.join(__dirname, "public")));
      app.use("/", sampleRouter);

      let server: Server = app.listen(3000, () => {
            console.log("[" + new Date().toUTCString() + "] Demo is listening port:%s",server.address()); 
        });
    }
}

Demo.start();
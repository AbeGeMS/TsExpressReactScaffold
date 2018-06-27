import * as express from "express";
import * as path from "path";
import * as sampleRouter from "./router/sampleRouter";
import * as testRouter from "./router/testRouter";

module Abe.Server{
    export class Demo{
        public static start() {
            let app = express();
            app.use(express.static(path.join(__dirname, "public")));
            app.use(express.static(path.join(__dirname, "test")));// This is used for Client UT
            app.use("/", sampleRouter);
            app.use("/ut", testRouter);

            let server = app.listen(3000, () => {
                console.log("[" + new Date().toUTCString() + "] Demo is listening port:%s", server.address().port);
            });
        }
    }
}

Abe.Server.Demo.start();
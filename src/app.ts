/// <reference path="../node_modules/@types/express/index.d.ts"/>
/// <reference path="../node_modules/@types/bluebird/index.d.ts"/>
/// <reference path="./router/sampleRouter.ts"/>

import * as b from "Bluebird";
import * as express from "express";
import * as path from "path";
import * as sampleRouter from "./router/sampleRouter";

module Abe.Server{
    export class Demo{
        public static start(){
            let app = express();
            app.use(express.static(path.join(__dirname, "public")));
            app.use("/",sampleRouter);

            let server = app.listen(3000,()=>{
                console.log("[" + new Date().toUTCString() + "] Demo is listening port:%s", server.address().port)
            });
        }
    }
}

Abe.Server.Demo.start();
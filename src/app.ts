/// <reference path="../node_modules/@types/express/index.d.ts"/>
/// <reference path="../node_modules/@types/bluebird/index.d.ts"/>

import * as b from "Bluebird";
import * as express from "Express";
import * as path from "path";

module Abe.Server{
    export class Demo{
        public static start(){
            let app = express();
            app.use(express.static(path.join(__dirname,"public")));
            app.get('/hi',(req,res)=>{ res.send('hello') });
            let server = app.listen(3000,()=>{
                console.log("Demo is listening port:%s",server.address().port)
            });
        }
    }
}
Abe.Server.Demo.start();
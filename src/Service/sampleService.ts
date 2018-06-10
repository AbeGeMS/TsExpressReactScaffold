/// <reference path="../../node_modules/@types/bluebird/index.d.ts"/>

import * as b from "Bluebird";

export module Abe.Service {
    export class SampleService {
        public SayHi(name: string): string {
            return `Hello, my name is ${name}`;
        }
    }
}
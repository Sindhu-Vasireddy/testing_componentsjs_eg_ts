"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const componentsjs_1 = require("componentsjs");
const account = () => __awaiter(void 0, void 0, void 0, function* () {
    const manager = yield componentsjs_1.ComponentsManager.build({
        mainModulePath: __dirname, // Path to your npm package's root
    });
    yield manager.configRegistry.register('myconfig.jsonld');
    const myInstance = yield manager.instantiate('urn:testingts:myInstance');
});
account();

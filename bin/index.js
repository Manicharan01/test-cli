#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const age_1 = require("./commands/age");
const program = new commander_1.Command();
program
    .name("test-cli")
    .description("Trying to understand Commander.js")
    .version("0.1.0");
program
    .command("greet <name>")
    .option("-a, --age <age>", "Age of the person")
    .action(age_1.age);
program.parse(process.argv);

#!/usr/bin/env node

import { Command } from "commander";
import { age } from "./commands/age";

const program = new Command();

program
  .name("test-cli")
  .description("Trying to understand Commander.js")
  .version("0.1.0");

program
  .command("greet <name>")
  .option("-a, --age <age>", "Age of the person")
  .action(age);

program.parse(process.argv);

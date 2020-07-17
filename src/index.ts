import "reflect-metadata";
import { container } from 'tsyringe';
import { ExampleClient } from "./http/ExampleClient";

container.register('Client', ExampleClient);

export * from './example/component';
export * from './example/child-component';
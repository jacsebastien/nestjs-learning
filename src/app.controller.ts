import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hello")
  getHello() {
    return "Hello world !";
  }

  @Get("/bye")
  getBye() {
    return "Bye world !";
  }
}

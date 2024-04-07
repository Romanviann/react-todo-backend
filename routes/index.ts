import {Request, Response, NextFunction, Router} from "express";

export class IndexRouter {

  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.home);
  }

  private home(req: Request, res: Response, next: NextFunction) {
    res.send('Welcome to the homepage!');
  }

  public getRouter() {
    return this.router;
  }

}

export default new IndexRouter().getRouter();

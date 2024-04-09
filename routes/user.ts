import {Request, Response, NextFunction, Router} from "express";
import {UsersController} from "../controllers/usersController";

export class UserRouter {

    private readonly router: Router;
    private readonly usersController: UsersController;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
        this.usersController = new UsersController();
    }

    private initializeRoutes() {
        this.router.get('/:id/todo-list', this.getUserTodoList.bind(this));
    }

    private getUserTodoList(req: Request, res: Response, next: NextFunction) {
        res.send(this.usersController.add());
    }

    public getRouter() {
        return this.router;
    }

}

export default new UserRouter().getRouter();

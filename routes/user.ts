import {Request, Response, NextFunction, Router} from "express";
import {ItemsController} from "../controllers/itemsController";

export class UserRouter {

    private readonly router: Router;
    private readonly itemsController: ItemsController;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
        this.itemsController = new ItemsController();
    }

    private initializeRoutes() {
        this.router.get('/:id/todo-list', this.getUserTodoList.bind(this));
    }

    private getUserTodoList(req: Request, res: Response, next: NextFunction) {
        res.send(this.itemsController.get());
    }

    private addListItem(request: Request, res: Response, next: NextFunction) {
        res.send(this.itemsController.add());
    }

    private markItemAsComplete(request: Request, res: Response, next: NextFunction) {
        res.send(this.itemsController.update());
    }

    private deleteListItem(request: Request, res: Response, next: NextFunction) {
        res.send(this.itemsController.delete());
    }

    public getRouter() {
        return this.router;
    }

}

export default new UserRouter().getRouter();

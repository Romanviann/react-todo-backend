import {Request, Response, NextFunction, Router} from "express";
import {ListItemsController} from "../controllers/listItemsController";

export class ListItemsRouter {

    private readonly router: Router;
    private readonly itemsController: ListItemsController;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
        this.itemsController = new ListItemsController();
    }

    private initializeRoutes() {
        this.router.get('/todo-list', this.getUserTodoList.bind(this));
        this.router.post('/todo-list', this.addListItem.bind(this));
        this.router.patch('/todo-list/:id', this.markItemAsComplete.bind(this));
        this.router.delete('todo-list/:id', this.deleteListItem.bind(this));
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

export default new ListItemsRouter().getRouter();

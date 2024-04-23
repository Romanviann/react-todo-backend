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

    private getUserTodoList(request: Request, response: Response, next: NextFunction) {
        return this.itemsController.get(request, response);
    }

    private addListItem(request: Request, response: Response, next: NextFunction) {
        return this.itemsController.add(request, response);
    }

    private markItemAsComplete(request: Request, response: Response, next: NextFunction) {
        return this.itemsController.update(request, response);
    }

    private deleteListItem(request: Request, response: Response, next: NextFunction) {
        return this.itemsController.delete(request, response);
    }

    public getRouter() {
        return this.router;
    }

}

export default new ListItemsRouter().getRouter();

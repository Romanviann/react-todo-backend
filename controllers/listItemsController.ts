import {BaseController} from "./BaseController";
import {Request, Response} from "express";

export class ListItemsController extends BaseController {

    constructor() {
        super();
    }

    public get(request: Request, response: Response): object {
        return response.send([]);
    }

    public add(request: Request, response: Response): object {
        return {};
    }

    public delete(request: Request, response: Response): boolean {
        return false;
    }

    public update(request: Request, response: Response): object {
        return {};
    }

}
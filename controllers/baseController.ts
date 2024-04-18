import {Request, Response} from "express";

export abstract class BaseController {

    protected constructor() {
    }

    public abstract get(request: Request, response: Response): object;

    public abstract add(request: Request, response: Response): object;

    public abstract delete(request: Request, response: Response): boolean;

    public abstract update(request: Request, response: Response): object;
}
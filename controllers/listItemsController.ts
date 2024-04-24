import {BaseController} from "./BaseController";
import {Request, Response} from "express";
import ListItemModel from "../models/listItem.model";

export class ListItemsController extends BaseController {

    constructor() {
        super();
    }

    public async get(request: Request, response: Response) {
        try {
            const listItems = await ListItemModel.find().sort({ createdAt: -1 });
            return response.json(listItems);

        } catch (error: unknown) {
            if (error instanceof Error) {
                response.status(400).send({error: error.message});
            }
        }
    }

    public async add(request: Request, response: Response) {
        try {
            const payload = {
                title: request.body.title,
                description: request.body.description
            };
            return response.json(await ListItemModel.create(payload))
        } catch (error: unknown) {
            if (error instanceof Error) {
                response.status(400).send({error: error.message});
            }
        }
    }

    public async delete(request: Request, response: Response) {
        try {
            return response.json(await ListItemModel.deleteOne({_id: request.params.id}));
        } catch (error: unknown) {
            if (error instanceof Error) {
                response.status(400).send({error: error.message});
            }
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const payload = {
                title: request.body.title,
                description: request.body.description,
                isCompleted: request.body.isCompleted
            };
            return response.json(await ListItemModel.findOneAndUpdate({_id: request.params.id}, payload, {new: true}));
        } catch (error: unknown) {
            if (error instanceof Error) {
                response.status(400).send({error: error.message});
            }
        }
    }

}
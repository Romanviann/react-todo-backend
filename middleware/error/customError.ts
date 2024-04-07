export class CustomError extends Error {
    constructor(message: string, public statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}

import { RequestHandler } from "express";

/**
 * Check type (required keys) middleware. Checks the request body keys (json),
 * must be used after express.json() middleware.
 * @param template The tempalte object, see: {@link checkType}.
 */
export function ctmw(template: any): RequestHandler {
    return (req, res, next) => {
        if (checkType(template, req.body)) {
            next();
        } else {
            res.sendStatus(400);
        }
    };
}

/**
 * Checks if an object matches against the template object.
 * Can check the following types: number, string, boolean, any other template object;
 * Use any value that matches the desired type in the template object.
 * Use undefined in the template object to allow any type.
 * Ommit the key to make it optional (the object can contain any value for keys not
 * specified in the template object).
 * @param template The template object.
 * @param object The object to check.
 * @returns true: matches, false: does not contain all properties or not the correct types;
 */
export function checkType(template: any, object: any): boolean {
    for (let key in template) {
        if (!(key in object)) {
            return false;
        }

        let tmplType = typeof template[key];

        if (tmplType !== typeof object[key] && tmplType !== "undefined") {
            return false;
        }

        if (tmplType === "object" && !checkType(template[key], object[key])) {
            return false;
        }
    }

    return true;
}

import express from "express";
import { ctmw } from "../middleware/checkTypeMiddleware";

// create router and setup json parsing middleware
const router = express.Router();
router.use(express.json());

// data (database)
let users: any[] = [];

// register routes
router.get("/user", (req, res) => {
    res.json(users);
});

router.post(
    "/user",
    ctmw({
        name: "",
        age: 0,
    }),
    (req, res) => {
        users.push(req.body);
        res.json(req.body);
    }
);

// export router
export default router;

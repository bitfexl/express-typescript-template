import express from "express";

// create router
const router = express.Router();

// register routes
router.get("/", (req, res) => {
    res.send("Hello, World!");
});

// export router
export default router;

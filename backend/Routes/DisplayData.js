import express from 'express';

const router = express.Router();

router.get('/getFoodProducts', async (req, res) => {
    if (global.food_products) {
        res.status(200).send(global.food_products);
    } else {
        res.status(400).json({ error: "True" });
    }
});

export default router;

import express from 'express';

const router: express.Router = express.Router();

router.get('/', function (req, res) {
  res.status(200).json({ hello: 'World', dones: 'viadones' });
});

export default router;

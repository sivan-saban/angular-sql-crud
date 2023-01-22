import express from 'express'; 
import  {NextFunction, Request, Response} from 'express';
import customerLogic from '../Logic/customerLogic';

const router = express.Router();

router.get("/:account", async (request: Request, response: Response, next: NextFunction) => {
    const account = +request.params.account;
    response.status(200).json(await customerLogic.getActionsByAccount(account));
})

// gets information from DB
router.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await customerLogic.getAllTypes());
  })

// sends information to DB
router.post("/", async (request: Request, response: Response, next: NextFunction) => {
  const body = request.body;
  console.log(body);
  response.status(201).json( await customerLogic.addAction(body));
})

export default router;
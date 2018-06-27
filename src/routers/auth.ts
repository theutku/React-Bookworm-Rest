import * as express from 'express';
import BaseRouter from '../lib/routerBase';

class AuthRouter implements BaseRouter {

    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }


    authorize(): Promise<any> {
        return new Promise((resolve, reject) => {
            var resp = { errors: { global: 'Invalid credentials' } };
            resolve(resp);
        });
    }

    authRoute(req: express.Request, res: express.Response, next: express.NextFunction) {
        this.authorize().then((result) => {
            res.status(400).json(result);
        });
        // res.send('hi');
    }


    initRoutes() {
        this.router.post('/', this.authRoute.bind(this));
    }

}

const apiAuthRouter = new AuthRouter();

export default apiAuthRouter.router;
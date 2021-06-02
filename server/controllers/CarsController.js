import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController"
import { logger } from "../utils/Logger";

export class CarsController extends BaseController{
    constructor(){
        super("api/cars")
        this.router
        .get("", this.getCars)
        // .post("", this.createCar)
        // .put("/:id", this.updateCar)
        // .delete("/:id", this.deleteCar)
    }

    async getCars(req, res, next){
        try {
            let cars = await carsService.getCars()
            return res.send(cars)
        } catch (error) {
            next(error)
        }
    }
}
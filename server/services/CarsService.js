import { dbContext } from "../db/DbContext";

class CarsService{
    async getCars(){
        let cars = await dbContext.Cars.find()
        return cars
    }
}


export const carsService = new CarsService()
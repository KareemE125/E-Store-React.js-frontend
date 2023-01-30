import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/v1'

export default class ApiHelper 
{

    static async getAllUsers() {
        let response;
        await axios.get(`${BASE_URL}/users`)
            .then((value) => response = value)
            .catch((error) => {
                console.log("ERROR: " + error)
                response = {message:'Connection Failed'}
            });

        return response.data.users;
    }

    static async getAllProducts() {
        let response;
        await axios.get(`${BASE_URL}/products`)
            .then((value) => response = value)
            .catch((error) => {
                console.log("ERROR: " + error)
                response = {message:'Connection Failed'}
            });

        return response.data.products;
    }

}
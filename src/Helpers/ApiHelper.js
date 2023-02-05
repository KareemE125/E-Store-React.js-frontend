import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/v1'

export default class ApiHelper 
{

    static async getAllUsers() {

        return await axios.get(`${BASE_URL}/users`)
            .then((value) => {
                return value.data.users;
            })
            .catch((error) => {
                console.log("ERROR: " + error)
                return {message:'Connection Failed'};
            });

    }

    static async getAllProducts() {

        return await axios.get(`${BASE_URL}/products`)
        .then((value) => {
            return value.data.products;
        })
        .catch((error) => {
            console.log("ERROR: " + error)
            return {message:'Connection Failed'};
        });
        
    }

    static async getProductsOfOwner(id) {
        
        return await axios.get(`${BASE_URL}/products/owner/${id}`)
        .then((value) => {
            return value.data.products;
        })
        .catch((error) => {
            console.log("ERROR: " + error)
            return {message:'Connection Failed'};
        });

    }

}
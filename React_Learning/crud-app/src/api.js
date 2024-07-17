import axios from 'axios';

const API_URL = 'http://localhost:4200';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const createUSer = async() =>{
    try {
        const response = await axios.post(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.log("Error creating user:", error);
        throw error;
    }
}
export const updateUser = async(id, updatedUser) =>{
    try {
        const response = await axios.put(`${API_URL}/users/${id}`, updatedUser);
        return response.data;
    } catch (error) {
        console.log("Error creating user:", error);
        throw error;
    }
}
export const deleteUser = async(id) =>{
    try {
        const response = await axios.delete(`${API_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error creating user:", error);
        throw error;
    }
}
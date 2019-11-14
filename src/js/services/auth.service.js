import { Http } from './../core/http';
import { ENV } from './../config/config';


export class AuthService {
    saveTodo() {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${apiUrl}/todolist`)
            .then(response => resolve.response)
        })
    }

}
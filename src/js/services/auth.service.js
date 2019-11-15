import { Http } from './../core/http';
import { ENV } from './../config/config';

export class AuthService {
    saveTodo(data) {
        const http = new Http();
        return new Promise((resolve, reject) => {
			http.post(`${ENV.apiUrl}/data`, {data})
			.then(response => {
               resolve(response)
			})
            .catch(err => reject(err));
        });
	}
	// saveTodo() {
    //     const http = new Http();

    //     return new Promise((resolve, reject) => {
	// 		http.get(`${this.api}/posts`)
	// 		.then(response => {
    //            console.log(response);
	// 		})
    //         .catch(err => reject(err));
    //     });
    // }

}
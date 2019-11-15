import { Http } from './../core/http';

export class AuthService {
    saveTodo(data) {
        console.log(data)
        const http = new Http();
        return new Promise((resolve, reject) => {
			http.post(`https://api.emailjs.com/api/v1.0/email/send`, data)
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
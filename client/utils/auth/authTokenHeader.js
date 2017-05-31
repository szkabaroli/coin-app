import Vue from 'vue'

export default function setAuthToken(token) {
    if(token) {
        Vue.http.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete Vue.http.headers.common['Authorization'];
    }  
}
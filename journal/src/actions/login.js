import {API_BASE_URL} from '../../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_LOGIN = 'FETCH_LOGIN';

export function fetchLogin(userName, password) {
    console.log(userName, password);
//     return function(dispatch) {
//         fetch('http://jsonplaceholder.typicode.com/posts', {})
//         .then(res => res.json())
//         .then(user => dispatch({
//             type: FETCH_LOGIN,
//             user
//         })))
//     }
} 

//LOGIN
//SAVE JWT LOCALSTORAGE
//LOAD USER_PAGE WITH /proflie/:userName/entry:id
//REDRIECT IF LOCALSTORAGE IS NOT VALID or /profile/:userName not match


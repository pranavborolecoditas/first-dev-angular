import { environment } from 'src/environments/environment';

export class ApiEndpoints { 
    static CLOTHES = {
        LIST: environment.API_URL + 'clothes',
        EDIT: environment.API_URL + 'clothes/%d',
    };
}
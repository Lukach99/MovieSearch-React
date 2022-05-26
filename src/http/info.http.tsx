import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/api.constants";
import HttpClient from "./generic.http";


class InfoData extends HttpClient{
    
    constructor(){
        super(API_KEY, BASE_URL)
    }

    public async getMovies(query: string): Promise<object[]>{
        const {data} = await axios.get(query);

        const fetchedInfo: object[]= data.results.map((item: object) => item )
        return fetchedInfo
    }
}

/* const contacts: Contact[] = data.map(
    (contact: TContact) => new Contact(contact)
  ); */


export default InfoData
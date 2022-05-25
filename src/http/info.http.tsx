import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/api.constants";
import HttpClient from "./generic.http";


class InfoData extends HttpClient{
    static getMovies() {
        throw new Error("Method not implemented.");
    }
    constructor(){
        super(API_KEY, BASE_URL)
    }

    public async getMovies(query: string): Promise<any>{
        const {data} = await axios.get(query);

        const fetchedInfo: any[] = data.results.map((item: any) => item )
        return fetchedInfo
    }
}

/* const contacts: Contact[] = data.map(
    (contact: TContact) => new Contact(contact)
  ); */


export default InfoData
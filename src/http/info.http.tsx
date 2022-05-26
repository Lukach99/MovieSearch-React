import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/api.constants";
import HttpClient from "./generic.http";


class InfoData extends HttpClient{
    
    constructor(){
        super(BASE_URL, API_KEY )
    }

    public async getMovies(query: string): Promise<object[]>{
        const {data} = await axios.get(query);

        const fetchedInfo: object[]= data.results.map((item: object) => item )
        return fetchedInfo
    }

    public async getMovieInfo(id: string | undefined): Promise<object>{
        const data:any = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this._apiKey}&language=en-US`)
        return data.data
    }
}

/* const contacts: Contact[] = data.map(
    (contact: TContact) => new Contact(contact)
  ); */


export default InfoData
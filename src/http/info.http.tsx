import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/api.constants";
import HttpClient from "./generic.http";


class InfoDataHttp extends HttpClient{
    
    constructor(){
        super(BASE_URL, API_KEY )
    }

    public async getMedia(mediaType: string, listType: string): Promise<object[]>{
        const {data} = await axios.get(`${BASE_URL}/${mediaType}/${listType}?api_key=${API_KEY}&language=en-US&page=1`);

        const fetchedResults: object[]= data.results
        return fetchedResults
    }

    public async getMediaInfo(mediaType: string | undefined, id: string | undefined): Promise<object>{
        console.log({idNum:id, media:mediaType})
        const data:any = await axios.get(`${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`)
        console.log(data)
        return data.data
    }
}

/* const contacts: Contact[] = data.map(
    (contact: TContact) => new Contact(contact)
  ); */


export default InfoDataHttp
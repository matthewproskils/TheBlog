import axios from "axios";
import { google } from "googleapis";

async function auth(googleUser: string) {
    const ticket = await axios.post('https://oauth2.googleapis.com/tokeninfo?id_token=' + googleUser)
    return ticket.data;
}

export default auth
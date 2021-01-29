import axios from "axios";

async function auth(googleUser: string) {
    const ticket = await axios.post('https://oauth2.googleapis.com/tokeninfo?id_token=' + googleUser)
    return ticket.data;
}

export default auth
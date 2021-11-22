import axios from 'axios'


export default function WomanSweatApi() {
    return ( axios.create({
        baseURL: "http://localhost:3600"
    })

    )
}

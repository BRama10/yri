import axios from 'axios'
import { Pathways } from './pathways'

export const maxDuration = 45;
export const dynamic = 'force-dynamic';

export default async function PathwaysPage() {
    const destinationUrl = 'https://myapp-6thbpbsd7q-uk.a.run.app/batch_api_keys?transaction_key=CrWfuVZUtVrCxFML8kOVEa9Sfww6qsDM'
    // const destinationUrl = 'http://localhost:8000/batch_api_keys?transaction_key=CrWfuVZUtVrCxFML8kOVEa9Sfww6qsDM'
    const response = await axios.post(destinationUrl);
    const keys = response.data.batched_keys;
    console.log(keys);

    return <Pathways keys={keys} />
}
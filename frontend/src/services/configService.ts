import axios from '../axios';
import { environment } from '../globals';

export interface BackendConfigState {
    contactByMailLink: string;
    contactByChatLink: string;
}

const getConfigRequest = async () => {
    const { data } = await axios.get<BackendConfigState>(environment.api.config);
    return data;
};

export { getConfigRequest };

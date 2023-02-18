import { myAxios } from "./helper"

export const getProjectIdeas = async () => {
    return myAxios.get(`/projectIdeas`).then(response => response.data)
}
export const getProjectIdea = async(topic) =>{
    return myAxios.get(`/projectIdea?topic=${topic}`);
}

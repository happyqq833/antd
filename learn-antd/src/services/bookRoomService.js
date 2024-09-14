import { post } from "../utls/request"

export const bookRoom = async (options) => {
    const result = await post ("book-room", options);
    return result;
}
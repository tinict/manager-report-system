import {fetchApi} from "@/utils/fetch-api.js";

export const registerCustomer = async (user) => {

    let response = await fetchApi({
        method: "POST",
        url: `/v1/customers/register`,
        body: user
    });

    console.log("res api register");
    console.log(response.data);
    return response;
}
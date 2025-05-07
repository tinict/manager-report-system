import {fetchApi} from "@/utils/fetch-api.js";

export const createExaminationRecord = async (examinationRecord) => {
    try {
        let response = await fetchApi({
            method: "POST",
            url: `/v1/examination-records`,
            body: examinationRecord
        });
        console.log("Tạo mới examination record thành công:");
        console.log(response);
        return response.data;
    }catch(e) {
        console.error("Lỗi khi tạo examination record:", e);
    }
}
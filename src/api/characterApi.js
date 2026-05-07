import axiosInstance from "./axiosConfig";


export const getAll = async () => {

    try {
        const response = await axiosInstance.get("/characters");

        return response.data;
    }

    catch (error) {

        throw new Error
            ("Dödsätarna har haft ihjäl alla, tyvärr finns ingen kvar",
                { cause: error }
            );
    }
};
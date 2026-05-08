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




export const getById = async (id) => {

    try {
        const response = await axiosInstance.get("/characters");

        return response.data.find( (character) => 
        character.index.toString() === id
    );
    }

    catch (error) {

        throw new Error
            ("Avada kadavra! Karaktären finns tyvärr inte längre",
                { cause: error }
            );
    }
};




export const updateCharacter =
  async (id, data) => {

  return {

    ...data, id
  };
};




export const createCharacter = async (data) => {

const newCharacter = { ...data, id: Date.now() };

return newCharacter };




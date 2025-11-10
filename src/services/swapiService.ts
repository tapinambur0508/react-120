import axios from "axios";

import type { Character } from "./../types/character";

export const fetchPerson = async (id: number): Promise<Character> => {
  const response = await axios.get<Character>(
    `https://swapi.info/api/people/${id}`,
  );
  return response.data;
};

import { AdvicesTypes } from "@/types/AdvicesTypes";


export const getAdvice = async (): Promise<AdvicesTypes> => {
    const resp = await fetch('https://api.adviceslip.com/advice');

    const data = await resp.json();

    return data.slip
}


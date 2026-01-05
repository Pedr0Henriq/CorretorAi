import { GoogleGenAI } from '@google/genai';
import { Buffer } from "buffer";
import { File } from 'expo-file-system';
import { API_KEY } from '../constants';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const prompt = `Act as an expert transcriber specialized in handwritten documents.

Your task is to transcribe the text from the provided image exactly as it appears. The image contains a handwritten essay ('redação') in Portuguese.

Strict Guidelines:

    1. Fidelity: Transcribe the text word-for-word. Do not correct any spelling, grammar, or punctuation errors found in the original text.

    2. Formatting: Strictly preserve the original structure. Maintain exactly the paragraph breaks, indentation, and line spacing used by the author. Furthermore, the final formatting should be justified. 

    3. Accents & Punctuation: Pay extreme attention to Portuguese diacritics (accents like á, é, ã, ô, ç) and punctuation marks. Transcribe them exactly as seen.

    4. Output: Return ONLY the transcribed text. Do not add any conversational filler or introductory sentences.` ;

export async function transcribe(img_path) {
    try {
        const file = new File(img_path);
        const imageBytes = await file.bytes();
        const base64Data = Buffer.from(imageBytes).toString('base64');

        const contents = [
            {
                inlineData: {
                    mimeType: "image/jpeg",
                    data: base64Data,
                },
            },
            { text: prompt },
        ];

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: contents,
        });

        console.log(response.text);
        return response.text;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

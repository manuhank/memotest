import { useEffect, useState } from "react";
import { SavedGame } from "../types/states.types";

export function useSavedGame(memotestId){
    const [savedGame, setSavedGame] = useState<SavedGame>();
    const key = `storedGame${memotestId}`;
    const saveGame = (data)=>{
        localStorage.setItem(key, JSON.stringify(data));
    }
    
    const clearSavedGame = ()=> localStorage.removeItem(key);

    useEffect(()=>{
        const data = localStorage.getItem(key);
        if(data) setSavedGame(JSON.parse(data));
    }, []);


    return {savedGame, saveGame, clearSavedGame}
}
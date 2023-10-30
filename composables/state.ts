import { fetchCardType } from "~/components/unload/types";

const useUnloadPageState = () => {
    const currentCard = useState(`currentCard`, () => new Map<string, fetchCardType>());
    const cards: Ref<fetchCardType[]> = useState(`cards`, () => []);
    const panelPosition = useState(`panelPosition`, () =>`слева`);
    const windowWidth = useState(`windowWidth`, () => 0);

    const setSelectedCard = (id: string, cardData: fetchCardType) => {
        if(currentCard.value.has(id) || currentCard.value.size > 0) return null;
        else currentCard.value.set(id, cardData);
    };

    const deleteCard = (id: string) => currentCard.value.delete(id);

    return {
        currentCard,
        setSelectedCard,
        deleteCard,
        cards,
        panelPosition,
        windowWidth
    };
};

export { useUnloadPageState };

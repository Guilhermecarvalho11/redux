import produce from "immer";

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVE":
      return produce(state, (draft) => {
        const tripIndex = draft.findIndex((trip) => trip.id === action.trip.id); //procurando se tem alguma reserva já feita com o mesmo ID
        if (tripIndex >= 0) {
          draft[tripIndex].amount += 1; // se tiver o mesmo ID add, soma +1 ao inves de duplicar a reserva
        } else {
          draft.push({
            ...action.trip,
            amount: 1,
          });
        }
      });

      case 'REMOVE_RESERVE':
        return produce(state, draft =>{
            const tripIndex = draft.findIndex((trip) => trip.id === action.id);

            if(tripIndex >= 0){
                draft.splice(tripIndex, 1)
            }
            
        });

        case 'UPDATE_RESERVE': {
            if(action.amount <= 0){
                return state;
            }
            return produce(state, draft => {
                const tripIndex = draft.findIndex((trip) => trip.id === action.id);

                if(tripIndex >= 0){
                    draft[tripIndex].amount = Number(action.amount)
                }
            })
        }
    default:
      return state;
  }
}

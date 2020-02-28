const tipCollection = [
    {

        tipDetail: "It is critical that the tank is filled with the proper amount of water. Check the level regularly, and add water as needed."
    },

    {

        tipDetail: "The tank must be cleaned on a regular basis. Your fish create waste that can be toxic. It may cause health problems and in extreme circustances death."
    },

    {

        tipDetail: "Make sure you remember to check the salinity of water in the tanks."
    }


]

export const useTip = () => {
    return tipCollection.slice()
}
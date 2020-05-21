import React from 'react'
import { View, Text } from 'react-native'



const sunActivity = [{
    Drinks : { 
       Darwin: 'Lorsque les jours se rallongent, quel bonheur de pouvoir sortir dans un endroit atypique! Chaque mercredi, Darwin organise « les heures heureuses » : dj set, bières et snacks', 
       MamaShelter: 'Un verre à la main, un rooftop, une déco made in Starck, What else ?! ', 
       LaGuinguetteChezAlriq: `Sympathique ginguette sur les bords de la Garenne, en plein air, où l'on vient autant pour danser que partager un verre entre amis, où satisfaire une petite faim estivale.` 
    },
    Places : {
        BordeauxLac: `On part rapidement au lac où de nombreuses activités nautiques vous attendent : voile, canoë Kayak, stand-up paddle, …` ,
        Lesquais: `Une balade en long de garonne où vous pouvez profiter d'une large pelouse pour faire un pique-nique et/ou une longue sieste sous les arbres.`,
        LaCitéduVin: `Un endroit spécialement dédié à la fierté bordelaise : LE VIN. Musée, dégustation, restauration, ... tout y est pour passer un beau moment gustatif et culturel`
    }
}]

export default class Activity extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            tasks: sunActivity[0].Drinks,
            city: this.props.route.params.city
        }

    }

render () {
    console.log('tasks',this.state.tasks)
    return(
        <View style={{flex: 1}}>
             <Text>
                 {this.state.city}
            </Text>
            <Text>
                {/* {sunActivity[0].Drinks} */}
                {JSON.stringify([sunActivity[0].Drinks])}
            </Text>
        </View>
    )
}
}

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcomem  from '../pages/Welcomem'
import Signin  from '../pages/Signim'
const Stack = createNativeStackNavigator()


export default function Routes (){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='welcome'
            component={Welcomem}
            options={{headerShown: false}}
            />
              <Stack.Screen
            name='Signin'
            component={Signin}
            options={{headerShown: false}}
            
            
            />
        </Stack.Navigator>
    )
}
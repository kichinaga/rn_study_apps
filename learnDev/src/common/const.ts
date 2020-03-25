import RootNavigator from '../navigator/RootNavigator';
import HomeScreen from '../ui/nav_sample/HomeScreen';
import PropsComponent from '../ui/props/PropsComponent';
import StateComponent from '../ui/state/StateComponent';
import TextInputComponent from '../ui/text_input/TextInputComponent';

export const Routings = [
  { title: 'root', component: RootNavigator },
  { title: 'home', component: HomeScreen },
  { title: 'props', component: PropsComponent },
  { title: 'state', component: StateComponent },
  { title: 'textInput', component: TextInputComponent },
]
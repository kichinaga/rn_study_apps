declare type RootStackParamList = {
  Home: undefined;
  MovingScreen: MovingScreenStackParamList;
  BottomTab: BottomTabParamList;
  MovingInTabs: MovingInTabsParamList;
  Detail: undefined;
};

declare type MovingScreenStackParamList = {
  First: undefined;
  Second: undefined;
  Third: undefined;
};

declare type BottomTabParamList = {
  Home: undefined;
  Sub: undefined;
  Settings: undefined;
};

declare type MovingInTabsParamList = {
  In: InTabParamList;
  Out: undefined;
};

declare type InTabStackParamList = {
  Main: undefined;
  Sub: undefined;
};

declare type DetailStackParamList = {
  MOT: undefined;
};

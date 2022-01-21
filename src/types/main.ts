import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { PersonTypes, AppointmentTypes } from './appointment';

export interface ReducerTypes {
  auth: AuthReducer;
  pref: PrefReducer;
  people: PeopleReducer;
  appointment: AppointmentReducer;
}

interface AuthReducer {
  user: FirebaseAuthTypes.User | null;
}

interface PrefReducer {
  firstRun: boolean;
}

interface PeopleReducer {
  people: PersonTypes[];
}

interface AppointmentReducer {
  appointments: AppointmentTypes[];
}


export interface Feedback {
  firstName: string;
  lastName: string;
  dateOfBirth: Date; // TODO: add a pipe and call it here with | 'dd-mm-yyyy'
  technology: string;
  version: string;
  email: string; //TODO: add validator that imitates an async call - use setTimeout...
  hobby: string;
}

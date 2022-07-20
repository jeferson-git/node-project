import { User } from 'src/modules/users/register/entities/user.entity';

interface IContractInterface {
  contractDate: string;
  officeHour: string;
  jobFunction: string;
  payment: string;
  user: User;
}

export { IContractInterface };

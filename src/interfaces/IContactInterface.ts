import { User } from 'src/modules/users/register/entities/user.entity';

interface IContactInterface {
  cel: string;
  alternativeContact?: string;
  user: User;
}

export { IContactInterface };

import { User } from 'src/modules/users/register/entities/user.entity';

interface IAddressinterface {
  street: string;
  cep: string;
  district: string;
  number: string;
  user: User;
}

export { IAddressinterface };

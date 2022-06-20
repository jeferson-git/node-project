import { Sale } from 'src/modules/sales/entities/sale.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CurrencyType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @OneToMany(() => Sale, (sale) => sale.currencyType)
  sale: Sale[];
}

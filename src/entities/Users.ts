import { Entity, PrimaryGeneratedColumn, Column , BaseEntity} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column({default : true})
  isActive: boolean;
}

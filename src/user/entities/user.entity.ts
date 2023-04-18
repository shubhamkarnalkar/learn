import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    description: string;
  
    @Column()
    credits: number;

    @Column()
    country: string;

    @Column()
    mobile: number;

    @Column()
    email: string;


}

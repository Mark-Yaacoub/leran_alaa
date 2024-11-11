import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn({ 'type': 'int', name: 'id' })
    id: number


    @Column({ type: 'varchar', name: 'first_name', nullable: true,  })
    first_name: string

    @Column({ type: 'varchar', name: 'last_name', nullable: true,  })
    last_name: string

    @Column({ type: 'varchar', name: 'email', nullable: true,  })
    email: string

    @Column({ type: 'int', name: 'status', nullable: false, default: 1 })
    status: number

    @Column({ type: 'varchar', name: 'password', nullable: true,  })
    password: string

}
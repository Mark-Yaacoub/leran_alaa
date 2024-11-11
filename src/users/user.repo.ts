import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { DataSource, Repository } from "typeorm";


@Injectable()

export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource ) {
        super(User, dataSource.createEntityManager());
    }


    // POST FUN 

    async createUser(dto: Partial <User>): Promise<User> {
        const user = this.create(dto);
        return await this.save(user);
    }

    async getAllUsers(): Promise<User[]> {
        return await this.find({
           take : 10,
           skip : 0,
           order : {id : 'DESC'},
        });
    }

    async getUserById(id: number): Promise<User> {
        return await this.findOne({
            where : {id : id}
        });
    }

  
    async updateUserById(id: number, dto: Partial<User>): Promise<User> {
       const update = await this.update(id, dto); // تحديث المستخدم بدون إرجاع
            console.log(update , ' update');

            if (update.affected === 1) {
                console.log('ssssss');
                
            }
            
        return await this.findOne({ where: { id } }); // استرجاع المستخدم بعد التحديث
    }
}

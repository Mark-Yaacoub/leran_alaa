import { TypeOrmModuleOptions } from "@nestjs/typeorm";


 
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '154.56.63.71',
    port: 5432,
    username: 'marco_prod',
    password: 'Pr0dP@ssw0rd2024!',
    database: 'theoffice_prod',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    synchronize: true,
    migrationsRun: false,
    // logging: true,
    ssl: {
      rejectUnauthorized: false,
    },
    extra: {
      max: 15,
      decimalNumbers: true, // تمكين التعامل مع الأرقام العشرية كـ number
    },
  };


 
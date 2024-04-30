import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from 'src/application/use_cases/user/user.service';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
    exports: [ UserModule ]
})
export class UserModule {}

import { Global, Module } from "@nestjs/common";
import { EnvService } from "../env/env.service";
import * as postgres from "postgres";
import { EnvModule } from "../env/env.module";

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION'

@Global()
@Module({
    providers: [{
        provide: DATABASE_CONNECTION,
        inject: [EnvService],
        useFactory: async (envService: EnvService) => postgres(
            envService.get("DATABASE_URL")
        )
    }],
    imports: [EnvModule],
    exports: [DATABASE_CONNECTION]
})
export class DatabaseModule {}
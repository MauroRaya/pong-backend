import { ConfigService } from "@nestjs/config";
import { EnvironmentVariables } from "./env.validation";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EnvService {
    constructor(private readonly configService: ConfigService<EnvironmentVariables, true>) {}

    get<T extends keyof EnvironmentVariables>(key: T) {
        return this.configService.get<T>(key, { infer: true })
    }
}
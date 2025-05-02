import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsString, Length } from "class-validator";
import * as sanitizeHtml from "sanitize-html"

export class PlayerRequestDTO {
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    @Transform((params: TransformFnParams) => sanitizeHtml(params.value))
    name: string;
}
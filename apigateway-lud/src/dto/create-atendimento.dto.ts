import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateAtendimentoDto{
    @IsNumber()
    AtendimentoID: number

    @IsDateString()
    DataAtendimento: Date

    @IsString()
    DescricaoProblema: string

    @IsString()
    Status: string


}
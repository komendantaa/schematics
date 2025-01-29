import { Injectable } from '@nestjs/common';
import { Validation } from '@utils';
import { ValidationError } from 'class-validator';
import { FeatureValidation, ObjectId } from '@interfaces';
import { <%=Names%>Repository } from '../repository/<%=names%>.repository';
import { ClassConstructor } from 'class-transformer/types/interfaces';
import { <%=Name%>Dto, <%=Name%>DtoClear } from '../../interfaces/<%=name%>.dto';
import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>.const';

type Data = <%=Name%>DtoClear & { _id?: ObjectId & any };

@Injectable()
export class <%=Names%>ValidationService extends FeatureValidation<<%=Name%>FeatureInterfaces> {
  constructor(private repo: <%=Names%>Repository) {
    super({ repo });
  }

  async validate(dto: Data, Dto: ClassConstructor<<%=Name%>Dto> = <%=Name%>Dto): Promise<ValidationError[]> {
    const { _id } = dto;

    const errors: ValidationError[] = await Validation.validateDto(dto, Dto);

    await this.checkTitle(dto, errors);

    return errors;
  }
}

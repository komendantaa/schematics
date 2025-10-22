import { Injectable } from '@nestjs/common';
import { FeatureValidation } from '@interfaces';
import { <%=Names%>Repository } from '../repository/<%=names%>.repository';
import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>-feat.const';

@Injectable()
export class <%=Names%>ValidationService extends FeatureValidation<<%=Name%>FeatureInterfaces> {
  constructor(private repo: <%=Names%>Repository) {
    super({ repo });
  }
}

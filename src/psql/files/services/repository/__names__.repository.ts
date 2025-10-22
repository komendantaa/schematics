import { Injectable } from '@nestjs/common';
import { QueryService } from '@modules/query';
import { InjectModel } from '@nestjs/sequelize';
import { FeatureRepository } from '@interfaces';

import { <%=Names%>Inclusion } from './<%=names%>.inclusion';
import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>-feat.const';
import { <%=Name%> } from '../../interfaces/<%=name%>.entity';

@Injectable()
export class <%=Names%>Repository extends FeatureRepository<<%=Name%>FeatureInterfaces> {
  constructor(
    @InjectModel(<%=Name%>)
    private model: typeof <%=Name%>,
    private querySrv: QueryService,
    private inclusion: <%=Names%>Inclusion,
  ) {
    super({ featureName: '<%=Name%>', model, querySrv, inclusion });
  }
}

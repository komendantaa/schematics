import { Injectable } from '@nestjs/common';
import { FeaturePagination } from '@interfaces';
import { QueryService } from '@modules/query';

import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>-feat.const';
import { <%=Names%>Repository } from '../repository/<%=names%>.repository';
import { <%=Names%>Inclusion } from '../repository/<%=names%>.inclusion';
import { <%=Names%>Mapper } from '../<%=names%>.mapper';

@Injectable()
export class <%=Names%>PaginationService extends FeaturePagination<<%=Name%>FeatureInterfaces> {
  constructor(
    private repo: <%=Names%>Repository,
    private inclusion: <%=Names%>Inclusion,
    private mapper: <%=Names%>Mapper,
    private querySrv: QueryService,
  ) {
    super({ repo, inclusion, mapper, querySrv });
  }
}

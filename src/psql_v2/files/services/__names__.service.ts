import { Injectable } from '@nestjs/common';
import { FeatureService } from '@interfaces';

import { <%=Names%>Repository } from './repository/<%=names%>.repository';
import { <%=Names%>Mapper } from './<%=names%>.mapper';
import { <%=Name%>FeatureInterfaces } from '../const/<%=name%>-feat.const';

@Injectable()
export class <%=Names%>Service extends FeatureService<<%=Name%>FeatureInterfaces> {
  constructor(
    private repo: <%=Names%>Repository,
    private mapper: <%=Names%>Mapper,
  ) {
    super({ repo, mapper });
  }
}

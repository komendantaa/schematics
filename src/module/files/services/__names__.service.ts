import { Injectable } from '@nestjs/common';
import { <%=Names%>Repository } from './repository/<%=names%>.repository';
import { <%=Names%>Mapper } from './<%=names%>.mapper';
import { FeatureService } from '@interfaces';
import { <%=Name%>FeatureInterfaces } from '../const/<%=name%>.const';

@Injectable()
export class <%=Names%>Service extends FeatureService<<%=Name%>FeatureInterfaces> {
  constructor(private repo: <%=Names%>Repository, private mapper: <%=Names%>Mapper) {
    super({ repo, mapper });
  }
}

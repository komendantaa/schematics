import { Injectable } from '@nestjs/common';
import { FeatureMapper } from '@interfaces';

import { <%=Name%>FeatureInterfaces } from '../const/<%=name%>-feat.const';
import { <%=Name%> } from '../interfaces/<%=name%>.entity';

@Injectable()
export class <%=Names%>Mapper extends FeatureMapper<<%=Name%>FeatureInterfaces> {
  constructor() {
    super({ model: <%=Name%> });
  }
}

import { Injectable } from '@nestjs/common';
import { FeatureMapper } from '@interfaces';
import { <%=Name%>, <%=Name%>Detailed } from '../interfaces/<%=name%>.entity';
import { <%=Name%>FeatureInterfaces } from '../const/<%=name%>.const';

const ids: (keyof <%=Name%>Detailed)[] = [];

@Injectable()
export class <%=Names%>Mapper extends FeatureMapper<<%=Name%>FeatureInterfaces> {
  constructor() {
    super({ ids });
  }
}

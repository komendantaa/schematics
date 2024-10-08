import { <%=Name%>, <%=Name%>Detailed } from '../interfaces/<%=name%>.entity';
import { Injectable } from '@nestjs/common';
import { FeatureMapper } from '@interfaces';

const idProps: (keyof <%=Name%>Detailed)[] = [];

type DocType = <%=Name%>Detailed | <%=Name%>;

@Injectable()
export class <%=Names%>Mapper extends FeatureMapper<DocType, <%=Name%>Detailed> {
  constructor() {
    super(idProps);
  }
}

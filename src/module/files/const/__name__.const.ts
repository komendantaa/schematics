import { FeatInterfaces } from '@interfaces';

import { <%=Name%>Model } from '../interfaces/<%=name%>.schema';
import { <%=Name%>Input } from '../interfaces/<%=name%>.dto';
import { <%=Name%>, <%=Name%>Detailed, <%=Names%>Paginated } from '../interfaces/<%=name%>.entity';

export interface <%=Name%>FeatureInterfaces extends FeatInterfaces {
  Model: <%=Name%>Model;
  Input: <%=Name%>Input;
  Entity: <%=Name%>;
  Detailed: <%=Name%>Detailed;
  Paginated: <%=Names%>Paginated;
}

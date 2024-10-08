import { <%=Name%>Model } from '../interfaces/<%=name%>.schema';
import { <%=Name%>Input } from '../interfaces/<%=name%>.dto';
import { <%=Name%>, <%=Name%>Detailed, <%=Names%>Paginated } from '../interfaces/<%=name%>.entity';
import { FeatInterfaces, FeatureAction } from '@interfaces';

export type <%=Name%>Action = FeatureAction;
export const <%=Name%>Action = { ...FeatureAction };

export interface <%=Name%>FeatureInterfaces extends FeatInterfaces {
  Model: <%=Name%>Model;
  Input: <%=Name%>Input;
  Entity: <%=Name%>;
  Detailed: <%=Name%>Detailed;
  Paginated: <%=Names%>Paginated;
}

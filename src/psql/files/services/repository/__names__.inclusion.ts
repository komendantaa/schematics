import { FeatureInclusion } from '@interfaces';
import { ExcludeMethods } from '@utils';

import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>-feat.const';
import { <%=Name%> } from '../../interfaces/<%=name%>.entity';

export class <%=Names%>Inclusion extends FeatureInclusion<<%=Name%>FeatureInterfaces> {
  static attributes: (keyof ExcludeMethods<<%=Name%>>)[] = ['id', 'title'];
  static entity = { model: <%=Name%>, attributes: <%=Names%>Inclusion.attributes };
}

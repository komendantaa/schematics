import { Injectable } from '@nestjs/common';
import { <%=Names%>Repository } from '../repository/<%=names%>.repository';
import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>-feat.const';
import { FeaturePermissions } from '@interfaces';

@Injectable()
export class <%=Names%>PermissionsService extends FeaturePermissions<<%=Name%>FeatureInterfaces> {
  constructor(private repo: <%=Names%>Repository) {
    super({ repo });
  }
}

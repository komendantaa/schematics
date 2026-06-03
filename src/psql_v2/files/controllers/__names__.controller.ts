import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeatureController, FeaturesController } from '@interfaces';

import { <%=Names%>Service } from '../services/<%=names%>.service';
import { <%=Names%>ValidationService } from '../services/verification/<%=names%>-validation.service';
import { <%=Names%>PermissionsService } from '../services/verification/<%=names%>-permissions.service';
import { <%=Name%>FeatureInstances, <%=Name%>FeatureInterfaces } from '../const/<%=name%>-feat.const';

const API_TAG = '<%=Names%>';

@ApiTags(API_TAG)
@Controller('<%=name%>')
export class <%=Name%>Controller extends FeatureController.Typed<<%=Name%>FeatureInterfaces>({
  instances: <%=Name%>FeatureInstances,
  auth: { get: null },
}) {
  constructor(
    private mainSrv: <%=Names%>Service,
    private validSrv: <%=Names%>ValidationService,
    private permsSrv: <%=Names%>PermissionsService,
  ) {
    super({ mainSrv, validSrv, permsSrv, instances: <%=Name%>FeatureInstances });
  }
}

@ApiTags(API_TAG)
@Controller('<%=names%>')
export class <%=Names%>Controller extends FeaturesController.Typed<<%=Name%>FeatureInterfaces>({
  instances: <%=Name%>FeatureInstances,
  auth: { getStructured: null, getPaginated: null },
}) {
  constructor(
    private mainSrv: <%=Names%>Service,
    private validSrv: <%=Names%>ValidationService,
    private permsSrv: <%=Names%>PermissionsService,
  ) {
    super({ mainSrv, validSrv, permsSrv, instances: <%=Name%>FeatureInstances });
  }
}

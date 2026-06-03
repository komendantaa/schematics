import { FeatInterfaces, FeatInstances } from '@interfaces';

import {
  <%=Name%>Dto,
  <%=Name%>DtoClear,
  <%=Name%>Input,
  <%=Name%>OffsetPaginatedDto,
  <%=Name%>UpdateDto,
  <%=Name%>UpdateDtoClear,
} from '../interfaces/<%=name%>.dto';
import { <%=Name%>, <%=Name%>Detailed, <%=Names%>OffsetPaginated } from '../interfaces/<%=name%>.entity';

export interface <%=Name%>FeatureInterfaces extends FeatInterfaces {
  Model: <%=Name%>;
  Input: <%=Name%>Input;
  Entity: <%=Name%>;
  Detailed: <%=Name%>Detailed;
  Paginated: <%=Names%>OffsetPaginated;
}

export const <%=Name%>FeatureInstances: FeatInstances<<%=Name%>FeatureInterfaces> = {
  Model: <%=Name%>,
  Input: <%=Name%>Input,
  Entity: <%=Name%>,
  Detailed: <%=Name%>Detailed,
  Paginated: <%=Names%>OffsetPaginated,
  DtoClear: <%=Name%>DtoClear,
  Dto: <%=Name%>Dto,
  UpdateDtoClear: <%=Name%>UpdateDtoClear,
  UpdateDto: <%=Name%>UpdateDto,
  PaginatedDto: <%=Name%>OffsetPaginatedDto,
};

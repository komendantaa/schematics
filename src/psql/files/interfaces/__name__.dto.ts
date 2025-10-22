import { PartialType, PickType } from '@nestjs/swagger';
import { AllowProp, IsTitle } from '@decorators';
import { IsQueryFilters, OffsetPaginatedDto, CursorPaginatedDto, QueryFilters } from '@modules/query';

import { I<%=Name%>Dto } from './<%=name%>.interface';
import { <%=Name%> } from './<%=name%>.entity';

export class <%=Name%>DtoClear implements I<%=Name%>Dto {
  @AllowProp() title: string;
}

export class <%=Name%>Dto implements I<%=Name%>Dto {
  @IsTitle()
  title: string;
}

export class <%=Name%>UpdateDtoClear extends PartialType(<%=Name%>DtoClear) {}
export class <%=Name%>UpdateDto extends PartialType(<%=Name%>Dto) {}

export class <%=Name%>Input extends <%=Name%>DtoClear {}

// PAGINATION
//--------------------------------
export class <%=Name%>OffsetPaginatedDto extends OffsetPaginatedDto {
  @IsQueryFilters<<%=Name%>>([{ key: 'title', rules: ['equal'] }])
  filters: QueryFilters;
}

export class <%=Name%>CursorPaginatedDto extends PickType(CursorPaginatedDto, ['limit', 'token']) {}

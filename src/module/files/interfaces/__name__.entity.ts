import { PaginatedData } from '@services/query';
import { ApiProperty } from '@nestjs/swagger';
import { CommonEntity } from '@interfaces';
import { I<%=Name%> } from './<%=name%>.interface';

export class <%=Name%> extends CommonEntity implements I<%=Name%> {
  title: string;
}

export class <%=Name%>Detailed extends <%=Name%> {}

export class <%=Names%>Paginated extends PaginatedData<<%=Name%>> {
  @ApiProperty({ type: [<%=Name%>] })
  data: <%=Name%>[];
}

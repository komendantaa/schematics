import { PartialType } from '@nestjs/swagger';
import { I<%=Name%> } from './<%=name%>.interface';
import { IsTitle } from '@decorators';

export class <%=Name%>DtoClear implements I<%=Name%> {
  title: string;
}

export class <%=Name%>Dto implements I<%=Name%> {
  @IsTitle()
  title: string;
}

export class <%=Name%>UpdateDto extends PartialType(<%=Name%>Dto) {}

export class <%=Name%>Input extends <%=Name%>DtoClear {}

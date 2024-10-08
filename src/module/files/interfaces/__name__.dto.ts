import { PartialType } from '@nestjs/swagger';
import { I<%=Name%>Model } from './<%=name%>.interface';
import { IsTitle } from '@decorators';

export class <%=Name%>DtoClear implements I<%=Name%>Model {
  title: string;
}

export class <%=Name%>Dto implements I<%=Name%>Model {
  @IsTitle()
  title: string;
}

export class <%=Name%>UpdateDto extends PartialType(<%=Name%>Dto) {}

export class <%=Name%>Input extends <%=Name%>DtoClear {}

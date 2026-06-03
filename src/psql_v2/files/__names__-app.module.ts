import { Module } from '@nestjs/common';

import { <%=Names%>Module } from './<%=names%>.module';
import { <%=Name%>Controller, <%=Names%>Controller } from './controllers/<%=names%>.controller';

@Module({
  imports: [<%=Names%>Module],
  controllers: [<%=Name%>Controller, <%=Names%>Controller],
  providers: [],
  exports: [],
})
export class <%=Names%>AppModule {}

import { Module } from '@nestjs/common';
import { QueryModule } from '@modules/query';

import { <%=Names%>Module } from './<%=names%>.module';
import { <%=Name%>Controller, <%=Names%>Controller } from './controllers/<%=names%>.controller';
import { <%=Names%>PaginationService } from './services/pagination/<%=names%>-pagination.service';
import { <%=Names%>ExportService } from './services/export/<%=names%>-export.service';

@Module({
  imports: [<%=Names%>Module, QueryModule],
  controllers: [<%=Name%>Controller, <%=Names%>Controller],
  providers: [<%=Names%>PaginationService, <%=Names%>ExportService],
  exports: [],
})
export class <%=Names%>AppModule {}

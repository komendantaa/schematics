import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { QueryModule } from '@modules/query';

import { <%=Names%>Service } from './services/<%=names%>.service';
import { <%=Name%> } from './interfaces/<%=name%>.entity';
import { <%=Names%>Repository } from './services/repository/<%=names%>.repository';
import { <%=Names%>Inclusion } from './services/repository/<%=names%>.inclusion';
import { <%=Names%>Mapper } from './services/<%=names%>.mapper';
import { <%=Names%>ValidationService } from './services/verification/<%=names%>-validation.service';
import { <%=Names%>PermissionsService } from './services/verification/<%=names%>-permissions.service';

@Module({
  imports: [SequelizeModule.forFeature([<%=Name%>]), QueryModule],
  controllers: [],
  providers: [
    <%=Names%>Service,
    <%=Names%>Repository,
    <%=Names%>Inclusion,
    <%=Names%>Mapper,
    <%=Names%>ValidationService,
    <%=Names%>PermissionsService,
  ],
  exports: [<%=Names%>Service, <%=Names%>Mapper, <%=Names%>ValidationService, <%=Names%>PermissionsService],
})
export class <%=Names%>Module {}

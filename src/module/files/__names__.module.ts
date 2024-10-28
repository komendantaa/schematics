import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { <%=Names%>Service } from './services/<%=names%>.service';
import { <%=Name%>Schema } from './interfaces/<%=name%>.schema';
import { <%=Names%>Repository } from './services/repository/<%=names%>.repository';
import { <%=Names%>Population } from './services/repository/<%=names%>.population';
import { <%=Name%>Controller, <%=Names%>Controller } from './controller/<%=names%>.controller';
import { <%=Names%>Mapper } from './services/<%=names%>.mapper';
import { <%=Names%>ValidationService } from './services/verification/<%=names%>-validation.service';
import { <%=Names%>PermissionsService } from './services/verification/<%=names%>-permissions.service';
import { CollectionName } from '@const';
import { QueryModule } from '@services/query';

@Module({
  imports: [MongooseModule.forFeature([{ name: CollectionName.<%=NAMES%>, schema: <%=Name%>Schema }]), QueryModule],
  controllers: [<%=Name%>Controller, <%=Names%>Controller],
  providers: [
    <%=Names%>Service,
    <%=Names%>Repository,
    <%=Names%>Population,
    <%=Names%>Mapper,
    <%=Names%>ValidationService,
    <%=Names%>PermissionsService,
  ],
  exports: [<%=Names%>Service, <%=Names%>Mapper, <%=Names%>ValidationService, <%=Names%>PermissionsService],
})
export class <%=Names%>Module {}

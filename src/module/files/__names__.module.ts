import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { <%=Names%>Service } from './service/<%=names%>.service';
import { <%=Name%>Schema } from './interfaces/<%=name%>.schema';
import { <%=Names%>Repository } from './service/repository/<%=names%>.repository';
import { <%=Names%>Population } from './service/repository/<%=names%>.population';
import { <%=Name%>Controller, <%=Names%>Controller } from './controller/<%=names%>.controller';
import { <%=Names%>Mapper } from './service/<%=names%>.mapper';
import { <%=Names%>ValidationService } from './service/verification/<%=names%>-validation.service';
import { <%=Names%>PermissionsService } from './service/verification/<%=names%>-permissions.service';
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
  exports: [<%=Names%>Service, <%=Names%>Mapper, <%=Names%>ValidationService],
})
export class <%=Names%>Module {}

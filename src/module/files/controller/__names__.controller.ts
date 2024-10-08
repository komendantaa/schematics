import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth, UserParam, UserPayload } from '@auth';
import { <%=Names%>Service } from '../services/<%=names%>.service';
import { ParamIdDto, ParamIdsDto } from '@interfaces';
import { QueryParamsDto } from '@services/query';
import { <%=Name%>DtoClear, <%=Name%>Input } from '../interfaces/<%=name%>.dto';
import { Exception, toObject, Validation } from '@utils';
import { <%=Name%> } from '../interfaces/<%=name%>.entity';
import { <%=Names%>ValidationService } from '../service/verification/<%=names%>-validation.service';
import { <%=Name%>Action } from '../const/<%=name%>.const';
import { <%=Names%>PermissionsService } from '../service/verification/<%=names%>-permissions.service';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';

const API_TAG = '<%=Names%>';

@ApiTags(API_TAG)
@Controller('<%=name%>')
export class <%=Name%>Controller {
  constructor(
    private mainSrv: <%=Names%>Service,
    private validSrv: <%=Names%>ValidationService,
    private permsSrv: <%=Names%>PermissionsService,
  ) {}

  @Post()
  @Auth()
  async create(@Body() data: <%=Name%>DtoClear, @UserParam() user: UserPayload) {
    await this.permsSrv.checkPermissions(null, user, <%=Name%>Action.CREATE);

    const errors = await this.validSrv.validate(data);
    if (errors.length) throw Validation.makeException(errors);

    const createData: <%=Name%>Input = { ...data };
    const created = await this.mainSrv.create(createData);
    if (!created) throw Exception.internal('creating <%=Name%>');

    return this.get({ id: created._id }, user);
  }

  @Get(':id')
  @Auth()
  async get(@Param() param: ParamIdDto, @UserParam() user: UserPayload): Promise<<%=Name%>> {
    await this.permsSrv.checkPermissions(param.id, user, <%=Name%>Action.READ);
    return this.mainSrv.getOne(param.id);
  }

  @Patch(':id')
  @Auth()
  async patch(@Param() param: ParamIdDto, @Body() data: <%=Name%>DtoClear, @UserParam() user: UserPayload) {
    const found = await this.permsSrv.checkPermissions(param.id, user, <%=Name%>Action.UPDATE);

    const errors = await this.validSrv.validate({ _id: param.id, ...data });
    if (errors.length) throw Validation.makeException(errors);

    const updateData: <%=Name%>Input = { ...toObject(found), ...data };
    const updated = await this.mainSrv.update(param.id, updateData);
    if (!updated) throw Exception.internal('updating <%=Name%>');

    return this.get(param, user);
  }

  @Delete(':id')
  @Auth()
  async delete(@Param() param: ParamIdDto, @UserParam() user: UserPayload): Promise<<%=Name%>> {
    await this.permsSrv.checkPermissions(param.id, user, <%=Name%>Action.DELETE);

    const deleted = await this.mainSrv.delete(param.id);
    if (!deleted) throw Exception.internal('deleting <%=Name%>');

    return deleted;
  }
}

@ApiTags(API_TAG)
@Controller('<%=names%>')
export class <%=Names%>Controller {
  constructor(private mainSrv: <%=Names%>Service, private permsSrv: <%=Names%>PermissionsService) {}

  @Get('paginated')
  @Auth()
  async getAllPaginated(@Query() queryParams: QueryParamsDto, @UserParam() user: UserPayload) {
    return this.mainSrv.getAllPaginated(queryParams, user);
  }

  // @Get('structured')
  @Auth()
  async getAllStructured(): Promise<<%=Name%>[]> {
    return this.mainSrv.getAllPublic();
  }

  // @Post('delete-many')
  @Auth({ admin: true })
  @HttpCode(HttpStatus.OK)
  async deleteMany(@Body() data: ParamIdsDto, @UserParam() admin: UserPayload) {
    await this.permsSrv.checkPermissions(data.ids, admin, <%=Name%>Action.DELETE_MANY);
    const result = await this.mainSrv.deleteManyByIds(data.ids);
    return { message: `Removed ${result?.deletedCount} successfully` };
  }
}

import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth, UserParam, UserPayload } from '@auth';
import { <%=Names%>Service } from '../services/<%=names%>.service';
import { ParamIdDto, ParamIdsDto } from '@interfaces';
import { QueryParamsDto } from '@services/query';
import { <%=Name%>DtoClear, <%=Name%>Input } from '../interfaces/<%=name%>.dto';
import { Exception, toObject, Validation } from '@utils';
import { <%=Name%> } from '../interfaces/<%=name%>.entity';
import { <%=Names%>ValidationService } from '../services/verification/<%=names%>-validation.service';
import { <%=Name%>Action } from '../const/<%=name%>.const';
import { <%=Names%>PermissionsService } from '../services/verification/<%=names%>-permissions.service';
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
  async create(@Body() dto: <%=Name%>DtoClear, @UserParam() user: UserPayload) {
    await this.permsSrv.check(null, user, <%=Name%>Action.CREATE);

    const errors = await this.validSrv.validate(dto);
    if (errors.length) throw Validation.makeException(errors);

    const createData: <%=Name%>Input = { ...dto };
    const created = await this.mainSrv.create(createData);
    if (!created) throw Exception.internal('creating <%=Name%>');

    return this.get({ id: created._id }, user);
  }

  @Get(':id')
  @Auth()
  async get(@Param() param: ParamIdDto, @UserParam() user: UserPayload) {
    await this.permsSrv.check(param.id, user, <%=Name%>Action.READ);
    return this.mainSrv.getOneDetailed(param.id);
  }

  @Patch(':id')
  @Auth()
  async patch(@Param() param: ParamIdDto, @Body() dto: <%=Name%>DtoClear, @UserParam() user: UserPayload) {
    const found = await this.permsSrv.check(param.id, user, <%=Name%>Action.UPDATE);

    const errors = await this.validSrv.validate({ _id: param.id, ...dto });
    if (errors.length) throw Validation.makeException(errors);

    const updateData: <%=Name%>Input = { ...toObject(found), ...dto };
    const updated = await this.mainSrv.update(param.id, updateData);
    if (!updated) throw Exception.internal('updating <%=Name%>');

    return this.get(param, user);
  }

  @Delete(':id')
  @Auth()
  async delete(@Param() param: ParamIdDto, @UserParam() user: UserPayload) {
    await this.permsSrv.check(param.id, user, <%=Name%>Action.DELETE);

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
  async deleteMany(@Body() dto: ParamIdsDto, @UserParam() admin: UserPayload) {
    await this.permsSrv.checkMany(dto.ids, admin, <%=Name%>Action.DELETE);
    const result = await this.mainSrv.deleteManyByIds(dto.ids);
    return { message: `Removed ${result?.deletedCount} successfully` };
  }
}

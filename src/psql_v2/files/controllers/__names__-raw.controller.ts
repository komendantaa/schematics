import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth, UserParam, UserPayload } from '@auth';
import { <%=Names%>Service } from '../services/<%=names%>.service';
import { ParamIdDto, ParamIdsDto } from '@interfaces';
import { QueryParamsDto } from '@modules/query';
import { <%=Name%>DtoClear, <%=Name%>Input } from '../interfaces/<%=name%>.dto';
import { Exception, toObject, Validation } from '@utils';
import { <%=Names%>ValidationService } from '../services/verification/<%=names%>-validation.service';
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
    await this.permsSrv.create(user);

    const errors = await this.validSrv.validate(dto);
    if (errors.length) throw Validation.makeException(errors);

    const createData: <%=Name%>Input = { ...dto };
    const created = await this.mainSrv.create(createData);
    if (!created) throw Exception.internal('creating <%=Name%>');

    return created;
  }

  @Get(':id')
  @Auth()
  async get(@Param() param: ParamIdDto, @UserParam() user: UserPayload) {
    await this.permsSrv.read(param.id, user);
    return this.mainSrv.getOneDetailed(param.id);
  }

  @Patch(':id')
  @Auth()
  async patch(@Param() param: ParamIdDto, @Body() dto: <%=Name%>DtoClear, @UserParam() user: UserPayload) {
    const found = await this.permsSrv.update(param.id, user);

    const errors = await this.validSrv.validate({ _id: param.id, ...dto });
    if (errors.length) throw Validation.makeException(errors);

    const updateData: <%=Name%>Input = { ...toObject(found), ...dto };
    const updated = await this.mainSrv.update(param.id, updateData);
    if (!updated) throw Exception.internal('updating <%=Name%>');

    return updated;
  }

  @Delete(':id')
  @Auth()
  async delete(@Param() param: ParamIdDto, @UserParam() user: UserPayload) {
    const found = await this.permsSrv.delete(param.id, user);

    const count = await this.mainSrv.delete(param.id);
    if (!count) throw Exception.internal('deleting <%=Name%>');

    return found;
  }
}

@ApiTags(API_TAG)
@Controller('<%=names%>')
export class <%=Names%>Controller {
  constructor(
    private mainSrv: <%=Names%>Service,
    private permsSrv: <%=Names%>PermissionsService
  ) {}

  @Get('paginated')
  @Auth()
  async getAllPaginated(@Query() queryParams: QueryParamsDto, @UserParam() user: UserPayload) {
    return this.mainSrv.getAllPaginated(queryParams, user);
  }

  // @Get('structured')
  @Auth()
  async getAllStructured() {
    return this.mainSrv.getAllPublic();
  }

  // @Post('delete-many')
  @Auth({ admin: true })
  @HttpCode(HttpStatus.OK)
  async deleteMany(@Body() dto: ParamIdsDto, @UserParam() admin: UserPayload) {
    await this.permsSrv.deleteMany(dto.ids, admin);
    const count = await this.mainSrv.deleteManyByIds(dto.ids);
    return { message: `Removed ${count} successfully` };
  }
}

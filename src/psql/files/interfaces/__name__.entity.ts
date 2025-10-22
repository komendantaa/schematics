import { OffsetPaginatedData, CursorPaginatedData } from '@modules/query';
import { Column, Table } from 'sequelize-typescript';
import { TableName } from '@const';
import { CommonModel, CommonTableOptions } from '@interfaces';

import { I<%=Name%> } from './<%=name%>.interface';

@Table({ ...CommonTableOptions, tableName: TableName.<%=NAMES%> })
export class <%=Name%> extends CommonModel implements I<%=Name%> {
  @Column
  title: string;
}

export class <%=Name%>Detailed extends <%=Name%> {}

export class <%=Names%>OffsetPaginated extends OffsetPaginatedData.Typed(<%=Name%>) {}
export class <%=Names%>CursorPaginated extends CursorPaginatedData.Typed(<%=Name%>) {}

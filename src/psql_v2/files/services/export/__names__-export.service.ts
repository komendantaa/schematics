import { Injectable } from '@nestjs/common';
import { CsvService } from '@modules/csv';
import { FeatureExportDto, FeatureExport } from '@interfaces';

import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>-feat.const';
import { <%=Names%>Repository } from '../repository/<%=names%>.repository';

@Injectable()
export class <%=Names%>ExportService extends FeatureExport<<%=Name%>FeatureInterfaces> {
  constructor(
    private repo: <%=Names%>Repository,
    private csvSrv: CsvService,
  ) {
    super({ csvSrv });
  }

  async exportMany(dto: FeatureExportDto): Promise<string> {
    const rows = await this.repo.findAll({ where: {}, order: [['id', 'ASC']] });

    return this.csvSrv.generateCsv(rows, [
      ['id', (item) => item.id],
      ['created at', (item) => this.csvSrv.formatDate(item.createdAt, dto)],
      ['title', (item) => this.csvSrv.formatString(item.title, dto)],
    ]);
  }
}

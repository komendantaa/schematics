import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryService } from '@services/query';
import { CollectionName } from '@const';
import { <%=Name%>Model } from '../../interfaces/<%=name%>.schema';
import { <%=Names%>Population } from './<%=names%>.population';
import { FeatureRepository } from '@interfaces';
import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>.const';

@Injectable()
export class <%=Names%>Repository extends FeatureRepository<<%=Name%>FeatureInterfaces> {
  constructor(
    @InjectModel(CollectionName.<%=NAMES%>)
    private model: Model<<%=Name%>Model>,
    private querySrv: QueryService,
    private populate: <%=Names%>Population,
  ) {
    super({ featureName: '<%=Name%>', model, querySrv, populate });
  }
}

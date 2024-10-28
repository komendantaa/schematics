import { Injectable } from '@nestjs/common';
import { FeaturePopulation } from '@interfaces';
import { <%=Name%>FeatureInterfaces } from '../../const/<%=name%>.const';

@Injectable()
export class <%=Names%>Population extends FeaturePopulation<<%=Name%>FeatureInterfaces> {}
